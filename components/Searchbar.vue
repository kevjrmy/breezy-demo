<template>
  <div class="searchbar">
    <button>
      <Icon name="material-symbols:search-rounded" />
      <div class="text">
        <span>¿Qué servicios buscas?</span>
        <span>Jardinería • Hogar • Piscina • Construcción • Otros</span>  
      </div>  
    </button>
  </div>
</template>

<style scoped>
.searchbar {
  padding: 1rem;
}

button {
  width: 100%;
  border-radius: 256px;
  box-shadow: 0 3px 10px rgba(0 0 0 / 0.1);
  border: 0.5px solid rgba(0 0 0 / 0.08);
  padding: 0.8rem 1rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}

svg {
  color: var(--clr-text-dark);
  min-width: fit-content;
  height: 24px;
  width: 24px;
}

.text {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  text-align: left;
}

.text>:first-child {
  color: var(--clr-text-dark);
  font-weight: 500;
  font-size: 0.9rem;
}

.text>:last-child {
  font-size: 0.8rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>