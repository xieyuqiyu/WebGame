<script setup>
import { ref } from 'vue';
import { message } from '@/utils';
const test = () => {
 

  message.error('操作成功');
}
</script>

<template>
  <div>
    Hi
    <button @click="test">
      Test
    </button>
  </div>
</template>

<style scoped>

</style>
