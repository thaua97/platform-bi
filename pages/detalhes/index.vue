<template>
  <h1 class="text-violet-600 font-bold text-3xl">Detalhes</h1>
  <p class="text-slate-600 font-bold text-xl pt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, minima suscipit rerum atque deserunt voluptatum blanditiis dolores. Culpa accusantium ipsum, dignissimos blanditiis beatae voluptatem velit nihil mollitia, laboriosam obcaecati neque!</p>
  <section class="gap-12 pt-10">
    <Card class="h-300">
      <Bar
        class="w-full"
        :options="chartOptions"
        :data="chartData"
      />
    </Card>
    <Table />
  </section>
  
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Bar } from 'vue-chartjs';

const chartData = ref({
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: ['#6613D0', '#F08A27'],
      data: [40, 20, 12, 50, 10],
    },
  ],
})
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
})
</script>