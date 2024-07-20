<template> 
  <footer>
    <NuxtLink to="/">
      <img src="/breezy.svg" alt="logo" height="24" width="auto" />
    </NuxtLink>
    <ul role="list">
      <li><a href="#" rel="noopener noreferrer" aria-label="Linkedin" title="linkedin" target="_blank"><Icon name="ri:linkedin-fill" /></a></li>
      <li><a href="#" rel="noopener noreferrer" aria-label="Twitter" title="X (twitter)" target="_blank"><Icon name="ri:twitter-x-fill" /></a></li>
      <li><a href="#" rel="noopener noreferrer" aria-label="Github" title="github" target="_blank"><Icon name="ri:github-fill" /></a></li>
    </ul>
    <div>
      <p class="copyright">breezy.es © {{ year }} - Todos derechos reservados</p>
      <ul role="list">
        <li><NuxtLink to="#">Condiciones de uso</NuxtLink></li>
        <li><NuxtLink to="#">Privacidad</NuxtLink></li>
      </ul>  
    </div>
  </footer>
</template>

<script setup>
  const year = new Date().getFullYear()
</script>

<style scoped>
footer {
  border-top: 1px solid var(--clr-gray-20);
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

footer div {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  flex-direction: column-reverse;
  gap: 1rem;
  align-items: center;
}

footer ul {
  display: flex;
  gap: 1rem;
}
</style>