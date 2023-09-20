<template>
  <div class="home">
    <h1 class="title">Bem vindo ao BI Plataform</h1>
    <section class="home__content">
      <div class="md:grid md:grid-cols-4 gap-12 md:grid-rows-2 md:grid-flow-col flex flex-col flex-start">
        <Filter class="row-span-2"/>
        <Card class="col-span-3">
          <div class="w-full flex justify-between">
            <h3 class="tile text-violet-500">Filmes mais vistos</h3>
            <NuxtLink class="button" to="/">Ver detalhes</NuxtLink>
          </div>
          <div class="w-full h-full pt-6">
            <Bar
              :options="chartOptions"
              :data="chartData"
            />
          </div>
        </Card>
        <Card>
          <div class="w-full flex justify-between">
            <h3 class="tile text-violet-500">Filmes mais vistos</h3>
            <NuxtLink class="button" to="/">Ver detalhes</NuxtLink>
          </div>
          <div class="w-full h-full pt-6">
            <Pie
              :options="chartOptions"
              :data="chartData"
            />
          </div>
        </Card>
        <Card>
          <div class="w-full flex justify-between">
            <h3 class="tile text-violet-500">Filmes mais vistos</h3>
            <NuxtLink class="button" to="/">Ver detalhes</NuxtLink>
          </div>
          <div class="w-full h-full pt-6">
            <Line
              :options="chartOptions"
              :data="chartData"
            />
          </div>
        </Card>
        <Card>
          <div class="w-full flex justify-between">
            <h3 class="tile text-violet-500">Filmes mais vistos</h3>
            <NuxtLink class="button" to="/">Ver detalhes</NuxtLink>
          </div>
          <div class="w-full h-full pt-6">
            <Pie
              :options="chartOptions"
              :data="chartData"
            />
          </div>
        </Card>
      </div>
    </section>
    
  </div>
</template>

<script setup lang="ts">
import { Pie, Line, Bar } from 'vue-chartjs'
const chartData = ref({
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [40, 20, 12, 50, 10],
    },
  ],
})
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
})
</script>