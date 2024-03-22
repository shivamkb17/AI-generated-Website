<template>
  <section class="about-us">
    <div class="content">
      <h2>About Us</h2>
      <p>We are a team of digital enthusiasts dedicated to helping your brand succeed in the digital world. Our mission is to deliver top-notch digital marketing services that drive results.</p>
      <p>Since our inception in 2010, we have been at the forefront of digital innovation, helping businesses of all sizes to increase their online presence and achieve their digital marketing goals.</p>
      
      <div class="values">
        <h3>Our Values</h3>
        <ul>
          <li><strong>Integrity:</strong> We conduct our business with honesty and integrity.</li>
          <li><strong>Excellence:</strong> We strive for excellence in everything we do.</li>
          <li><strong>Innovation:</strong> We embrace innovation to deliver cutting-edge solutions.</li>
          <li><strong>Collaboration:</strong> We believe in the power of collaboration to achieve common goals.</li>
        </ul>
      </div>
      
      <img src="/assets/our-mission.jpg" alt="Our Mission">
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUs',
  mounted() {
    console.log("AboutUs component mounted successfully.");
  }
}
</script>

<style scoped>
.about-us {
  padding: 4rem 1rem;
  background-color: #f5f5f5;
  text-align: center;
}

.content p {
  margin: 1rem auto;
  max-width: 800px;
}

.values ul {
  list-style: none;
  padding: 0;
}

.values li {
  margin: 0.5rem 0;
}

img {
  margin-top: 2rem;
  max-width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .values li {
    font-size: 0.9rem;
  }
}
</style>