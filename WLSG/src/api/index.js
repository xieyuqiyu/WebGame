import { request } from '@/utils';

// 用户相关接口
export const userApi = {
  // 用户登录
  login: (data) => request.post('/user/login', data),
  // 获取用户信息
  getUserInfo: () => request.get('/user/info'),
  // 用户注册
  register: (data) => request.post('/user/register', data),
  // 修改用户信息
  updateUserInfo: (data) => request.put('/user/info', data),
  // 退出登录
  logout: () => request.post('/user/logout')
};

// 游戏相关接口
export const gameApi = {
  // 获取游戏列表
  getGameList: (params) => request.get('/game/list', params),
  // 获取游戏详情
  getGameDetail: (id) => request.get(`/game/detail/${id}`),
  // 获取游戏排行榜
  getRankingList: (params) => request.get('/game/ranking', params),
  // 提交游戏成绩
  submitScore: (data) => request.post('/game/score', data)
};

// 数据统计相关接口
export const statsApi = {
  // 获取用户游戏数据统计
  getUserStats: (userId) => request.get(`/stats/user/${userId}`),
  // 获取全局游戏数据统计
  getGlobalStats: () => request.get('/stats/global')
};

export default {
  user: userApi,
  game: gameApi,
  stats: statsApi
};