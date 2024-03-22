<template>
  <div>
    <HeroSection />
    <ServicesOverview :services="services" />
    <AboutUs />
    <ContactForm />
    <Footer />
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue'
import ServicesOverview from '../components/ServicesOverview.vue'
import AboutUs from '../components/AboutUs.vue'
import ContactForm from '../components/ContactForm.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    HeroSection,
    ServicesOverview,
    AboutUs,
    ContactForm,
    Footer,
  },
  data() {
    return {
      services: [
        { name: 'SEO', description: 'Optimize your website to rank better in search engines.' },
        { name: 'Website Design', description: 'Create a stunning website that captures your brand.' },
        { name: 'Website Development', description: 'Develop a fast, secure, and scalable website.' },
        { name: 'Website Management', description: 'Keep your website updated and running smoothly.' },
        { name: 'Social Media Management', description: 'Engage with your audience and grow your social presence.' },
      ],
    };
  },
}
</script>