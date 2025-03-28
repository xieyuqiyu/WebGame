<script setup>
import { ref } from 'vue';
import { message } from '@/utils';
import NavBar from '@/components/NavBar';
const test = (e) => {

  if (e === 'error') {
    message.error('Error');
  } else if (e === 'success') {
    message.success('Success');
  } else if (e === 'warning') {
    message.warning('Warning');
  } else {
    message.info('Info');
  }

}
</script>

<template>

  <div class="content-container">
    <NavBar />
    Hi
    <button @click="test('error')">
      Test
    </button>
    <button @click="test('success')">
      Test
    </button>
    <button @click="test('warning')">
      Test
    </button>
    <button @click="test('')">
      Test
    </button>
  </div>
</template>

<style scoped>
.content-container {
  margin-top: 80px;
  padding: 0 2rem;
}
</style>
