import axios from 'axios';

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/api' : '/api', // API 基础路径
  timeout: 15000, // 请求超时时间
  withCredentials: true // 跨域请求时是否需要使用凭证
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在请求发送之前做些处理
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // 请求错误处理
    console.error('请求错误:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    
    // 根据自定义状态码判断请求是否成功
    if (res.code !== 200) {
      // 处理错误状态码
      if (res.code === 401) {
        // 身份验证错误，如令牌过期
        // 可以在这里实现登出或刷新令牌的逻辑
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
      return Promise.reject(new Error(res.message || '请求失败'));
    } else {
      return res;
    }
  },
  error => {
    console.error('响应错误:', error.response || error.message);
    
    // 处理网络错误
    let message = '网络连接异常，请稍后重试';
    if (error.response) {
      switch (error.response.status) {
        case 400:
          message = '请求参数错误';
          break;
        case 401:
          message = '未授权，请重新登录';
          // 可以在这里实现登出逻辑
          localStorage.removeItem('token');
          window.location.href = '/login';
          break;
        case 403:
          message = '拒绝访问';
          break;
        case 404:
          message = '请求的资源不存在';
          break;
        case 500:
          message = '服务器内部错误';
          break;
        default:
          message = `请求错误: ${error.response.status}`;
      }
    } else if (error.message.includes('timeout')) {
      message = '请求超时，请稍后重试';
    }

    // 可以调用全局错误提示组件展示错误信息
    // 如果有全局消息组件，可以在这里调用
    // Message.error(message);
    
    return Promise.reject(error);
  }
);

// 封装GET请求
export function get(url, params = {}) {
  return service({
    url,
    method: 'get',
    params
  });
}

// 封装POST请求
export function post(url, data = {}) {
  return service({
    url,
    method: 'post',
    data
  });
}

// 封装PUT请求
export function put(url, data = {}) {
  return service({
    url,
    method: 'put',
    data
  });
}

// 封装DELETE请求
export function del(url, params = {}) {
  return service({
    url,
    method: 'delete',
    params
  });
}

// 导出封装的请求方法和原始 axios 实例
export default {
  get,
  post,
  put,
  delete: del,
  service
};