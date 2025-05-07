<template>
  <div class="container mx-auto p-4">
    <div v-if="loading" class="flex justify-center items-center h-64">
      <p class="text-xl text-gray-400">加载中...</p>
    </div>
    <div v-else-if="error" class="flex justify-center items-center h-64">
      <p class="text-xl text-red-500">{{ error }}</p>
    </div>
    <div v-else class="flex flex-col">
      <h1 class="text-2xl font-bold text-white mb-2">{{ video.title }}</h1>
      <p v-if="video.description" class="text-gray-400 mb-4">{{ video.description }}</p>
      <div class="w-full flex justify-center">
        <video :src="video.url" controls class="w-full max-w-screen-lg max-h-[70vh] shadow-lg object-contain"></video>
      </div>
      
    </div>
    <div class="mt-4 flex justify-end">
      <button @click="fetchRandomVideo" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300">
        换一个视频
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from '../config/axios'

const video = ref({})
const loading = ref(true)
const error = ref(null)

const fetchRandomVideo = async () => {
  loading.value = true
  error.value = null
  
  try {
    const response = await axios.get('/api/random')
    video.value = response.data
  } catch (err) {
    console.error('获取随机视频失败:', err)
    error.value = '获取视频失败，请稍后再试'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchRandomVideo()
})
</script>