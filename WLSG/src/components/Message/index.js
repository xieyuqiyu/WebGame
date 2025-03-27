import { render, h, createVNode } from 'vue';
import MessageItem from './MessageItem.vue';

// 已创建的消息实例列表
const instances = [];
// 消息垂直偏移量
let offset = 20;
// 消息 zIndex
let zIndex = 9999;

// 创建消息实例
const createMessage = (options) => {
  const id = `message_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  
  // 创建容器
  const container = document.createElement('div');
  container.className = 'message-container';
  
  // 计算垂直偏移
  const verticalOffset = offset;
  offset += 80;

  // 消息关闭回调
  const userOnClose = options.onClose;
  const onClose = () => {
    closeMessage(id, userOnClose);
  };

  // 创建 VNode
  const vnode = createVNode(MessageItem, {
    ...options,
    zIndex: zIndex++,
    onClose,
    style: {
      top: `${verticalOffset}px`
    }
  });
  
  // 渲染到容器
  render(vnode, container);
  document.body.appendChild(container);
  
  // 保存实例
  const instance = {
    id,
    vnode,
    container,
    verticalOffset
  };
  instances.push(instance);
  
  return instance;
};

// 关闭消息
const closeMessage = (id, userOnClose) => {
  const index = instances.findIndex(instance => instance.id === id);
  
  if (index === -1) return;
  
  const instance = instances[index];
  if (userOnClose) userOnClose();
  
  // 清理 DOM
  document.body.removeChild(instance.container);
  render(null, instance.container);
  
  // 更新列表和偏移
  instances.splice(index, 1);
  offset -= 80;
  
  // 更新剩余实例的位置
  instances.forEach((inst) => {
    if (inst.verticalOffset > instance.verticalOffset) {
      inst.vnode.component.props.style = {
        top: `${inst.verticalOffset - 80}px`
      };
      inst.verticalOffset -= 80;
    }
  });
};

// 创建不同类型的消息
const message = {
  success(message, options = {}) {
    return createMessage({ message, type: 'success', ...options });
  },
  warning(message, options = {}) {
    return createMessage({ message, type: 'warning', ...options });
  },
  error(message, options = {}) {
    return createMessage({ message, type: 'error', ...options });
  },
  info(message, options = {}) {
    return createMessage({ message, type: 'info', ...options });
  }
};

export default message;