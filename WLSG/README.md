# WLSG 网络游戏平台

## 项目介绍

这是一个基于Vue 3和Vite构建的网络游戏平台前端项目，提供用户登录、游戏列表、游戏详情、游戏排行榜等功能。

## 技术栈

- **前端框架**: Vue 3
- **构建工具**: Vite
- **HTTP客户端**: Axios
- **UI组件**: 自定义组件

## 安装与启动

### 安装依赖

```bash
yarn install
# 或者
npm install
```

### 开发模式启动

```bash
yarn dev
# 或者
npm run dev
```

### 构建生产版本

```bash
yarn build
# 或者
npm run build
```

### 预览构建版本

```bash
yarn preview
# 或者
npm run preview
```

## 项目结构

```
src/
  ├── api/        # API接口
  ├── assets/     # 静态资源
  ├── components/ # 组件
  │   └── Message # 消息提示组件
  ├── utils/      # 工具函数
  │   └── request.js # 请求封装
  ├── App.vue     # 根组件
  ├── main.js     # 入口文件
  └── style.css   # 全局样式
```

## 组件使用说明

### Message 消息组件

`Message` 是一个轻量级的消息提示组件，提供成功、警告、错误和信息四种类型的消息提示。

#### 引入方式

```javascript
import { message } from '@/utils';
// 或者直接从组件引入
// import message from '@/components/Message';
```

#### 基本使用

```javascript
// 成功提示
message.success('操作成功');

// 警告提示
message.warning('警告信息');

// 错误提示
message.error('错误信息');

// 普通信息提示
message.info('提示信息');
```

#### 高级配置

每个方法都接受第二个可选参数，用于配置消息的展示方式：

```javascript
message.success('保存成功', {
  duration: 5000,         // 显示时长，单位毫秒，设为 0 则不会自动关闭
  showClose: true,        // 是否显示关闭按钮
  onClose: () => {        // 关闭时的回调函数
    console.log('消息已关闭');
  }
});
```

#### 参数说明

| 参数       | 说明               | 类型      | 默认值  |
|------------|-------------------|-----------|--------|
| message    | 消息文本内容       | String    | -      |
| type       | 消息类型：success/warning/error/info | String | 'info' |
| duration   | 显示时间，单位毫秒  | Number    | 3000   |
| showClose  | 是否显示关闭按钮   | Boolean   | true   |
| onClose    | 关闭时的回调函数   | Function  | -      |

### 样式说明

`Message`组件提供了四种不同类型的样式：

- `success`: 绿色边框，成功图标
- `warning`: 黄色边框，警告图标
- `error`: 红色边框，错误图标
- `info`: 灰色边框，信息图标

消息会自动在指定时间后消失，也可以通过点击关闭按钮手动关闭。

## HTTP请求

项目使用封装了Axios的`request.js`来处理HTTP请求，提供了`get`、`post`、`put`、`delete`等方法。

```javascript
import { request } from '@/utils';

// GET请求
request.get('/api/data', { params: { id: 1 } });

// POST请求
request.post('/api/data', { name: 'value' });
```

## API接口

项目将API接口按功能模块划分，统一在`api`目录下管理：

- `userApi`: 用户相关接口
- `gameApi`: 游戏相关接口
- `statsApi`: 数据统计相关接口

```javascript
import api from '@/api';

// 调用用户登录接口
api.user.login({ username: 'user', password: '123456' });

// 获取游戏列表
api.game.getGameList({ page: 1, size: 10 });
```
