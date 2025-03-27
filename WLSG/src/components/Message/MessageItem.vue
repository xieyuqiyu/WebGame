<template>
  <transition name="message-fade">
    <div :class="['message', `message-${type}`]" v-show="visible">
      <div class="message-content">
        <i :class="['message-icon', `icon-${type}`]"></i>
        <span class="message-text">{{ message }}</span>
      </div>
      <i class="message-close" v-if="showClose" @click="close">×</i>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  message: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'info'
  },
  duration: {
    type: Number,
    default: 3000
  },
  showClose: {
    type: Boolean,
    default: true
  },
  onClose: {
    type: Function,
    default: () => {}
  }
});

const visible = ref(false);

const close = () => {
  visible.value = false;
  setTimeout(() => {
    props.onClose();
  }, 300);
};

onMounted(() => {
  visible.value = true;
  if (props.duration > 0) {
    setTimeout(() => {
      close();
    }, props.duration);
  }
});
</script>

<style scoped>
.message {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 300px;
  padding: 10px 15px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 9999;
}

.message-content {
  display: flex;
  align-items: center;
}

.message-icon {
  margin-right: 10px;
  font-size: 16px;
}

.icon-success:before {
  content: "✓";
  color: #67c23a;
}

.icon-warning:before {
  content: "!";
  color: #e6a23c;
}

.icon-error:before {
  content: "✕";
  color: #f56c6c;
}

.icon-info:before {
  content: "i";
  color: #909399;
}

.message-success {
  border-left: 4px solid #67c23a;
}

.message-warning {
  border-left: 4px solid #e6a23c;
}

.message-error {
  border-left: 4px solid #f56c6c;
}

.message-info {
  border-left: 4px solid #909399;
}

.message-close {
  cursor: pointer;
  color: #c0c4cc;
  font-size: 16px;
  margin-left: 10px;
}

.message-close:hover {
  color: #909399;
}

.message-fade-enter-active,
.message-fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.message-fade-enter-from,
.message-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -20px);
}
</style>