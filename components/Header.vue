<template>
  <header>
    <NuxtLink to="/">
      <div id="logo">
        <img src="/breezy.svg" alt="logo" height="32" width="auto" />
      </div>
    </NuxtLink >
    <button @click="toggleMenu">
      <Icon name="carbon:overflow-menu-horizontal" />
    </button>
  </header>

  <h1>Alquiler entre particulares</h1>

  <aside ref="aside">
    <div>
      <button @click="toggleMenu"><Icon name="material-symbols:close" /></button>   
    </div>    
    <nav>
      <ul role="list">
        <li><NuxtLink to="/" @click="toggleMenu">Inicio</NuxtLink></li>
        <li><NuxtLink to="/#anuncios" @click="toggleMenu">Anuncios</NuxtLink></li>
        <li><NuxtLink to="/#demandas" @click="toggleMenu">Demandas recientes</NuxtLink></li>
        <li><NuxtLink to="/info" @click="toggleMenu">Info</NuxtLink></li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { useNuxtApp } from '#app'

let aside = ref(null)
let menu = ref(false)

function toggleMenu() {
  menu.value = !menu.value  
  const body = document.querySelector("body")
  if (menu.value) {
    body.style.overflowY = "hidden"
    aside.value.style.display = "block"
    scroll()
  }
  else {
    body.style.overflowY = "auto"
    aside.value.style.display = "none"
  }
}

function scroll() {
  window.scrollTo(0, 0)
}
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem 0 1rem;
}

header>a {
  z-index: 3;
}

header ul {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

header svg,
aside svg {
  height: 2rem;
  width: 2rem;
  cursor: pointer;
}

h1 {
  color: var(--clr-primary-400);
  font-size: 1rem;
  padding: 0.5rem 1rem 1rem 1rem;
}

aside {
  display: none;
  z-index: 2;
  background-color: var(--clr-white);
  height: 100%;
  height: 100vh;
  left: 0;
  padding: 2rem 1rem;
  position: absolute;
  top: 0;
  width: 100%;
  margin: auto;
  max-width: var(--max-width);
}

aside>div {
  text-align: right;
}

aside ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2rem;
}
</style>