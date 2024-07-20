<template>
  <section>
    <p class="alert">Esta página es sola una demo. Dale al boton abajo para volver al inicio</p>
    <NuxtLink to="/"><Icon name="material-symbols:arrow-left-alt" /> Regresar</NuxtLink>
  </section>
</template>

<style scoped>
section {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.alert {
  margin: 1rem 0;
  color: var(--clr-text-dark);
}

a {
  align-items: center;
  display: flex;
  position: relative;
  color: var(--clr-text-medium);
}

a:hover {
  color: var(--clr-text-dark);
}
</style>