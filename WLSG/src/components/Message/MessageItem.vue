<template>
  <transition name="message-fade">
    <div :class="['message', `message-${type}`]" v-show="visible">
      <div class="message-content">
        <span :class="['message-icon', `icon-${type}`]">
          <!-- 使用SVG图标替代伪元素content -->
          <svg v-if="type === 'success'" class="icon-svg" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">
            <defs>
              <clipPath id="clipPath0551731758">
                <path transform="matrix(1 0 0 1 -0 -0)" d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" />
              </clipPath>
            </defs>
            <g clip-path="url(#clipPath0551731758)">
              <path transform="matrix(1 0 0 1 1.875 1.875)"
                d="M8.125 0C3.64492 0 0 3.64492 0 8.125C0 12.6051 3.64492 16.25 8.125 16.25C12.6051 16.25 16.25 12.6051 16.25 8.125C16.25 3.64492 12.6051 0 8.125 0ZM12.3535 5.40195L7.10352 11.652C7.04525 11.7213 6.97521 11.7755 6.89339 11.8144C6.81157 11.8534 6.72536 11.8736 6.63477 11.875L6.62422 11.875C6.53564 11.875 6.45089 11.8569 6.36999 11.8209C6.28908 11.7848 6.219 11.7338 6.15977 11.668L3.90977 9.16797C3.78942 9.04033 3.73284 8.88886 3.74004 8.71358C3.74723 8.5383 3.81603 8.39199 3.94643 8.27464C4.07683 8.15729 4.22957 8.10424 4.40463 8.1155C4.5797 8.12676 4.72438 8.19894 4.83867 8.33203L6.60781 10.2977L11.3965 4.59805C11.5082 4.46884 11.6493 4.39745 11.8195 4.38388C11.9898 4.37031 12.1404 4.41847 12.2712 4.52834C12.402 4.63822 12.4754 4.7782 12.4914 4.94827C12.5075 5.11835 12.4615 5.26958 12.3535 5.40195Z"
                fill-rule="nonzero" fill="rgb(21, 128, 61)" />
            </g>
          </svg>
          <svg v-if="type === 'warning'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            width="20" height="20" viewBox="0 0 20 20">
            <defs>
              <clipPath id="clipPath0386812658">
                <path transform="matrix(1 0 0 1 -0 -0)" d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" />
              </clipPath>
            </defs>
            <g clip-path="url(#clipPath0386812658)">
              <path transform="matrix(1 0 0 1 1.86466 2.56836)"
                d="M15.6771 13.0207L9.01971 0.657422C8.54784 -0.219141 7.29081 -0.219141 6.81854 0.657422L0.161508 13.0207C-0.0624957 13.4368 -0.0534878 13.8477 0.188531 14.2535C0.430551 14.6594 0.787819 14.8626 1.26034 14.8633L14.5764 14.8633C15.0493 14.8633 15.407 14.6604 15.6496 14.2544C15.8922 13.8483 15.9013 13.4371 15.6771 13.0207ZM7.91932 12.9492C7.70358 12.9492 7.51944 12.8729 7.36689 12.7204C7.21434 12.5678 7.13807 12.3837 7.13807 12.168C7.13807 11.9522 7.21434 11.7681 7.36689 11.6155C7.51944 11.463 7.70358 11.3867 7.91932 11.3867C8.13506 11.3867 8.3192 11.463 8.47175 11.6155C8.6243 11.7681 8.70057 11.9522 8.70057 12.168C8.70057 12.3837 8.6243 12.5678 8.47175 12.7204C8.3192 12.8729 8.13506 12.9492 7.91932 12.9492ZM8.76776 5.0918L8.54354 9.85742C8.54354 10.03 8.48252 10.1773 8.36048 10.2994C8.23844 10.4214 8.09113 10.4824 7.91854 10.4824C7.74595 10.4824 7.59864 10.4214 7.4766 10.2994C7.35456 10.1773 7.29354 10.03 7.29354 9.85742L7.06932 5.09375C7.0587 4.85383 7.13598 4.6467 7.30117 4.47237C7.46635 4.29805 7.66902 4.20973 7.90916 4.20742L7.91737 4.20742C8.15932 4.2073 8.36395 4.29462 8.53126 4.4694C8.69857 4.64418 8.77688 4.85243 8.7662 5.09414L8.76776 5.0918Z"
                fill-rule="nonzero" fill="rgb(161, 98, 7)" />
            </g>
          </svg>
          <svg v-if="type === 'error'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            width="20" height="20" viewBox="0 0 20 20">
            <defs>
              <clipPath id="clipPath1670760414">
                <path transform="matrix(1 0 0 1 -0 -0)" d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" />
              </clipPath>
            </defs>
            <g clip-path="url(#clipPath1670760414)">
              <path transform="matrix(1 0 0 1 4.68587 4.68587)"
                d="M6.63991 5.31413L10.3508 1.60319C10.5339 1.42009 10.6255 1.19907 10.6256 0.940132C10.6258 0.681196 10.5343 0.460099 10.3514 0.276842C10.1685 0.0935839 9.94754 0.00178158 9.6886 0.00143468C9.42967 0.00108739 9.20849 0.092297 9.02506 0.275064L5.31413 3.986L1.60319 0.275064C1.41981 0.0916878 1.19846 0 0.939126 0C0.679793 0 0.458439 0.0916879 0.275064 0.275064C0.0916879 0.458439 0 0.679793 0 0.939126C0 1.19846 0.0916878 1.41981 0.275064 1.60319L3.986 5.31413L0.275064 9.02506C0.0916878 9.20844 0 9.42979 0 9.68913C0 9.94846 0.0916879 10.1698 0.275064 10.3532C0.458439 10.5366 0.679793 10.6283 0.939126 10.6283C1.19846 10.6283 1.41981 10.5366 1.60319 10.3532L5.31413 6.64225L9.02506 10.3532C9.20844 10.5366 9.42979 10.6283 9.68913 10.6283C9.94846 10.6283 10.1698 10.5366 10.3532 10.3532C10.5366 10.1698 10.6283 9.94846 10.6283 9.68913C10.6283 9.42979 10.5366 9.20844 10.3532 9.02506L6.63991 5.31413Z"
                fill-rule="nonzero" fill="rgb(185, 28, 28)" />
            </g>
          </svg>
          <svg v-if="type === 'info'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            width="20" height="20" viewBox="0 0 20 20">
            <defs>
              <clipPath id="clipPath6093589696">
                <path transform="matrix(1 0 0 1 -0 -0)" d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" />
              </clipPath>
            </defs>
            <g clip-path="url(#clipPath6093589696)">
              <path transform="matrix(1 0 0 1 2.1875 2.1875)"
                d="M7.8125 0C3.50469 0 0 3.50469 0 7.8125C0 12.1203 3.50469 15.625 7.8125 15.625C12.1203 15.625 15.625 12.1203 15.625 7.8125C15.625 3.50469 12.1203 0 7.8125 0ZM7.8125 3.20312C8.09296 3.20312 8.33234 3.30228 8.53065 3.50059C8.72897 3.69891 8.82812 3.93829 8.82812 4.21875C8.82812 4.49921 8.72897 4.73859 8.53065 4.9369C8.33234 5.13522 8.09296 5.23437 7.8125 5.23438C7.53204 5.23437 7.29266 5.13522 7.09434 4.9369C6.89603 4.73859 6.79687 4.49921 6.79688 4.21875C6.79688 3.93829 6.89603 3.69891 7.09434 3.50059C7.29266 3.30228 7.53204 3.20312 7.8125 3.20312ZM9.6875 12.0312L6.25 12.0312C6.07741 12.0312 5.9301 11.9702 5.80806 11.8482C5.68602 11.7262 5.625 11.5788 5.625 11.4062C5.625 11.2337 5.68602 11.0863 5.80806 10.9643C5.9301 10.8423 6.07741 10.7812 6.25 10.7812L7.34375 10.7812L7.34375 7.34375L6.71875 7.34375C6.54616 7.34375 6.39885 7.28273 6.27681 7.16069C6.15477 7.03865 6.09375 6.89134 6.09375 6.71875C6.09375 6.54616 6.15477 6.39885 6.27681 6.27681C6.39885 6.15477 6.54616 6.09375 6.71875 6.09375L7.96875 6.09375C8.14134 6.09375 8.28865 6.15477 8.41069 6.27681C8.53273 6.39885 8.59375 6.54616 8.59375 6.71875L8.59375 10.7812L9.6875 10.7812C9.86009 10.7812 10.0074 10.8423 10.1294 10.9643C10.2515 11.0863 10.3125 11.2337 10.3125 11.4062C10.3125 11.5788 10.2515 11.7262 10.1294 11.8482C10.0074 11.9702 9.86009 12.0312 9.6875 12.0312Z"
                fill-rule="nonzero" fill="rgb(29, 78, 216)" />
            </g>
          </svg>
        </span>
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
    default: () => { }
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

  margin-right: 10px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-svg {
  width: 20px;
  height: 20px;
}


.message-text {
  font-size: 14px;

}

.message-success {
  /* border-left: 0px solid #67c23a; */
  color: #15803D;
  font-family: "Inter";
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  /* 1.5 */
  background: linear-gradient(171.78079deg, #63FC9C 15%, #87E4A9 85%);
  box-shadow: 0rem 0.25rem 0.38rem -0.25rem rgba(0, 0, 0, 0.10), 0rem 0.62rem 0.94rem -0.19rem rgba(0, 0, 0, 0.10), 0rem 0rem 0rem 0rem rgba(0, 0, 0, 0.00), 0rem 0rem 0rem 0rem rgba(0, 0, 0, 0.00);
  border: 0.06rem solid rgba(34, 197, 94, 0.20);
  border-radius: 0.75rem;





}

.message-warning {
  color: #A16207;
  font-family: "Inter";
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  /* 1.5 */
  background: linear-gradient(171.78079deg, #F7D05A 15%, #EACA65 85%);
  box-shadow: 0rem 0.25rem 0.38rem -0.25rem rgba(0, 0, 0, 0.10), 0rem 0.62rem 0.94rem -0.19rem rgba(0, 0, 0, 0.10), 0rem 0rem 0rem 0rem rgba(0, 0, 0, 0.00), 0rem 0rem 0rem 0rem rgba(0, 0, 0, 0.00);
  border: 0.06rem solid rgba(234, 179, 8, 0.20);
  border-radius: 0.75rem;

}

.message-error {
  color: #B91C1C;
  font-family: "Inter";
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  /* 1.5 */
  background: linear-gradient(171.78079deg, #EFC4C4 15%, #F6CDCD 85%);
  box-shadow: 0rem 0.25rem 0.38rem -0.25rem rgba(0, 0, 0, 0.10), 0rem 0.62rem 0.94rem -0.19rem rgba(0, 0, 0, 0.10), 0rem 0rem 0rem 0rem rgba(0, 0, 0, 0.00), 0rem 0rem 0rem 0rem rgba(0, 0, 0, 0.00);
  border: 0.06rem solid rgba(239, 68, 68, 0.20);
  border-radius: 0.75rem;

}

.message-info {
  color: #374151;
  font-family: "Inter";
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  /* 1.5 */
  background: linear-gradient(171.78079deg, #C2D5F4 15%, #ACCAFA 85%);
  box-shadow: 0rem 0.25rem 0.38rem -0.25rem rgba(0, 0, 0, 0.10), 0rem 0.62rem 0.94rem -0.19rem rgba(0, 0, 0, 0.10), 0rem 0rem 0rem 0rem rgba(0, 0, 0, 0.00), 0rem 0rem 0rem 0rem rgba(0, 0, 0, 0.00);
  border: 0.06rem solid rgba(59, 130, 246, 0.20);
  border-radius: 0.75rem;


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