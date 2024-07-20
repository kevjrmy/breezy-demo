<template>
  <main>
    <section id="anuncios">
      <h2>Anuncios en ofertas</h2>
      <div class="container">
        <ContentQuery path="/oferta" :limit=3 :sort="{ date: -1 }" v-slot="{ data }">
          <article v-for="oferta of data" :key="oferta._path">
            <NuxtLink :to="oferta._path">
              <img class="image" :src=oferta.image.src :alt=oferta.image.alt loading="lazy" />
            </NuxtLink>
            <div @click="$router.push(oferta._path)">
              <h3 class="title">{{ oferta.title }}</h3>
              <span class="stars"><Icon name="ic:sharp-star-purple500" /> {{ oferta.stars }}</span>
              <p class="user"><img :src=oferta.profile.src :alt=oferta.profile.alt loading="lazy" />{{ oferta.author }}</p>
              <p class="geolocation"><Icon name="material-symbols:location-on" /> {{ oferta.geolocation }}</p>
              <p class="price"><Icon name="ion:md-pricetags" /> {{ oferta.product.price }} {{ oferta.product.currency }} / {{ oferta.product.for }}</p>
            </div>
            <button><Icon name="material-symbols:chat-bubble" /></button>
          </article>
        </ContentQuery>
      </div>
    </section>

    <section id="categorias">
      <h2>Categorías</h2>
      <ContentQuery path="/categorias" v-slot="{ data }">
        <ul v-for="list of data" :key="list._path" role="list">
          <li v-for="categoria in list.categorias" @click="$router.push(list._path)"><Icon :name=categoria.icon />{{ categoria.cat }}</li>
        </ul>
      </ContentQuery>
    </section>

    <section id="demandas">
      <h2>Demandas recientes</h2>
      <div class="container">
        <ContentQuery path="/demanda" :limit=3 :sort="{ date: -1 }" v-slot="{ data }">
          <article v-for="demanda of data" :key="demanda._path">
            <NuxtLink :to="demanda._path">
              <h4>{{ demanda.title }}</h4>
              <time>{{ formattedDate(demanda.date) }}</time>
              <p>Ver publicación</p>
            </NuxtLink>
          </article>
        </ContentQuery>
      </div>
    </section>

  </main>
</template>

<script setup>
/* Formats the ISO date to a text date */
function formattedDate(dateString) {
  const date = new Date(dateString)
  const options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }
  const formatter = new Intl.DateTimeFormat('es-ES', options)
  const englishDate = formatter.format(date)
  return englishDate
}
</script>

<style scoped>
/* Common */
main {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

h2 {
  margin-bottom: 1rem;  
}

/* Anuncios */
#anuncios .container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

#anuncios article {
  position: relative;
}

#anuncios .image {
  border-radius: 20px;
  height: 300px;
  width: 100%;
  object-fit: cover;
  margin-bottom: 0.5rem;
}

#anuncios button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
}

#anuncios article div {
  font-size: 0.9rem;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: repeat(3, min-content);
  gap: 0.25rem;
  grid-template-areas:
    "title stars"
    "user user"
    "geolocation geolocation"
    "price price";
}

#anuncios article div img {
  border-radius: 12px;
  width: 24px;
  height: 24px;
}

#anuncios article div .user {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

#anuncios .title {
  grid-area: title;
}

#anuncios .stars {
  grid-area: stars;
}

#anuncios .user {
  grid-area: user;
}

#anuncions .geolocation {
  grid-area: geolocation;
}

#anuncios .price {
  grid-area: price;
}

#anuncios button svg {
  display: block;
  color: rgba(0, 0, 0, 0.5);
  height: 24px;
  width: 24px;
  stroke: var(--clr-white);
  stroke-width: 1;
  overflow: visible;
}

/* Categorias */
#categorias ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

#categorias li {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  border: 0.5px solid rgba(0, 0, 0, 0.08);
  flex-direction: column;
}

/* Demandas */
#demandas .container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

#demandas p {
  font-size: small;
}
</style>