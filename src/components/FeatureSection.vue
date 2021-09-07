<template>
    <section class="flex flex-col mb-24 xl:items-center xl:flex-row">
    <Card title="Supervisor" class="border-cyan">
        <p>Monitors activity to identify project roadblocks</p>
        <img src="../assets/icon-supervisor.svg" class="icon">
    </Card>
    <div class="flex flex-col">
      <Card title="Team Builder" class="border-red">
        <p>Scans our talent network to create the optimal team for your project</p>
        <img src="../assets/icon-team-builder.svg" class="icon">
    </Card>
    <Card title="Karma" class="border-orange">
        <p>Regularly evaluates our talent to ensure quality</p>
        <img src="../assets/icon-karma.svg" class="icon">
    </Card>
    </div>
    <Card title="Calculator" class="border-blue">
        <p>Uses data from past projects to provide better delivery estimates</p>
        <img src="../assets/icon-calculator.svg" class="icon">
    </Card>
  </section>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  name: 'FeatureSection',
  components: {
    Card
  }
}
</script>


