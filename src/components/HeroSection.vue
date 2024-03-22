<template>
  <section class="hero-section">
    <h1>Welcome to Shivam's Digital Services</h1>
    <p>Your one-stop solution for SEO, Web Design, and more.</p>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  mounted() {
    console.log("HeroSection component mounted successfully.");
  }
}
</script>

<style scoped>
.hero-section {
  background-color: #f8f9fa;
  padding: 4rem 0;
  text-align: center;
}

h1 {
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  color: #555;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  
  p {
    font-size: 1rem;
  }
}
</style>