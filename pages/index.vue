<template>
  <div class="home">
    <h1 class="title">Bem vindo ao BI Plataform</h1>
    <section class="home__content">
      <div class="md:grid md:grid-cols-3 gap-12 md:grid-rows-4  flex flex-col flex-start">
        <Filter class="h-8 row-star-1 row-span-4"/>

        <Card class="col-span-2">
          <div class="w-full flex justify-between">
            <h3 class="tile text-violet-500">Filmes mais vistos</h3>
            <NuxtLink class="button" to="detalhes">Ver detalhes</NuxtLink>
          </div>
          <div class="w-full h-full pt-6">
            <Bar
              :options="chartOptions"
              :data="chartData"
            />
          </div>
        </Card>

        <Card class="w-full">
          <div class="w-full flex justify-between">
            <h3 class="tile text-violet-500">Filmes por genero</h3>
            <NuxtLink class="button" to="/">Ver detalhes</NuxtLink>
          </div>
          <div class="w-full h-full pt-6">
            <Pie
              :options="chartOptions"
              :data="chartData"
            />
          </div>
        </Card>
        <Card  class="w-full">
          <div class="w-full flex justify-between">
            <h3 class="tile text-violet-500">Filmes por pais</h3>
            <NuxtLink class="button" to="/">Ver detalhes</NuxtLink>
          </div>
          <div class="w-full h-full pt-6">
            <PolarArea
              :options="chartOptions"
              :data="chartData"
            />
          </div>
        </Card>

        <Card class="col-span-2">
          <div class="w-full flex justify-between">
            <h3 class="tile text-violet-500">Filmes por ano</h3>
            <NuxtLink class="button" to="detalhes">Ver detalhes</NuxtLink>
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
            <h3 class="tile text-violet-500">Filmes mais duracao</h3>
            <NuxtLink class="button" to="/">Ver detalhes</NuxtLink>
          </div>
          <div class="w-full h-full pt-6">
            <PolarArea
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
            <PolarArea
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
import { Pie, Line, Bar, PolarArea } from 'vue-chartjs'
const chartData = ref({
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Scarry',
      backgroundColor: '#6613D0',
      data: [40, 50, 12, 50, 5],
    },
    {
      label: 'Action',
      backgroundColor: '#F08A27',
      data: [10, 20, 30, 25, 22],
    },
  ],
})
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
})
</script>