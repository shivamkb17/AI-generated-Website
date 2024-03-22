<template>
  <div class="services-overview">
    <h2>Our Services</h2>
    <div class="services-list">
      <div class="service" v-for="service in services" :key="service.name">
        <h3>{{ service.name }}</h3>
        <p>{{ service.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesOverview',
  props: {
    services: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.services-overview h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.services-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.service {
  width: 30%;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin: 1rem;
  padding: 1rem;
  text-align: center;
}

@media (max-width: 768px) {
  .service {
    width: 100%;
  }
}
</style>