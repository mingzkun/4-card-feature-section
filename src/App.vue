<template>
  <section id="feature">
    <Header/>
    <Cards/>
  </section>
  <footer>
    <p>Challenge by <a href="https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK" target="_blank">Frontend Mentor</a></p> 
    <p>Coded by <a href="https://www.instagram.com/sightsaming/" target="_blank">KUNLAKARN</a></p>
  </footer>
</template>

<script>
import Cards from './components/FeatureSection.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Cards,
    Header
  }
}
</script>


