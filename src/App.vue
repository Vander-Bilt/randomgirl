<script setup>
// App.vue 是应用的根组件
</script>

<template>
  <div class="app-container">
    <div class="app-backdrop"></div>
    <div class="app-overlay"></div>
    
    <main class="app-content">
      <router-view />
    </main>
  </div>
</template>

<style>
:root {
  --primary-color: #8b008b; /* 深紫色 */
  --accent-color: #ff1493; /* 玫红色 */
  --dark-bg: #1a0a1a; /* 深暗紫色背景 */
  --text-color: rgba(255, 255, 255, 0.9);
  --border-glow: 0 0 15px rgba(255, 20, 147, 0.5);
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--dark-bg);
  color: var(--text-color);
  font-family: 'Arial', sans-serif;
  min-height: 100vh;
  overflow-x: hidden;
}

.app-container {
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.app-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #2d0a2d 0%, #1a0a1a 100%);
  z-index: -2;
}

.app-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
  z-index: -1;
}

.app-content {
  flex: 1;

  margin: 20px;
  border-radius: 0;
  background: rgba(26, 10, 26, 0.7);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 2px rgba(255, 20, 147, 0.3);
  border: 1px solid rgba(255, 20, 147, 0.2);
  z-index: 1;
  animation: glow 3s infinite alternate;
}

@keyframes glow {
  from {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 2px rgba(255, 20, 147, 0.3);
  }
  to {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 2px rgba(255, 20, 147, 0.3), var(--border-glow);
  }
}

a {
  color: var(--accent-color);
  text-decoration: none;
  transition: all 0.3s ease;
}

a:hover {
  color: #ff69b4;
  text-shadow: 0 0 8px rgba(255, 20, 147, 0.7);
}

button {
  background: linear-gradient(45deg, var(--primary-color), var(--accent-color));
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(139, 0, 139, 0.3);
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 20, 147, 0.5);
}
</style>
