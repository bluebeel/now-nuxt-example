<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        About
      </h1>
      <h2 class="subtitle">
        Hi from {{ name }}
      </h2>
      <div class="links">
        <nuxt-link to="/about" class="button--green">
          Home Page
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  asyncData() {
    return {
      name: process.static ? 'static' : (process.server ? 'server' : 'client')
    }
  },
  head: {
    title: 'About page'
  }
}
</script>