<template>
  <footer>
    <nav>
      <!-- Example navigation links; adjust or remove as needed -->
      <router-link to="/">Home</router-link> | 
      <router-link to="/about">About Us</router-link>
    </nav>
    <p>Contact us: info@shivamsdigitalservices.com</p>
    <div class="social-links">
      <!-- Icons or text links to social media profiles -->
      <a href="https://www.facebook.com/shivamsdigitalservices" target="_blank">Facebook</a> |
      <a href="https://twitter.com/shivamsdigital" target="_blank">Twitter</a> |
      <a href="https://instagram.com/shivamsdigital" target="_blank">Instagram</a>
    </div>
    <p>&copy; 2023 Shivam's Digital Services. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  mounted() {
    console.log("Footer component mounted successfully.");
  }
}
</script>

<style scoped>
footer {
  text-align: center;
  padding: 1rem;
}

nav a {
  margin: 0 10px;
}

.social-links a {
  margin: 0 5px;
}
</style>