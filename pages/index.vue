<template>
  <div class="home">
    <h1 class="title">Formula 1 World Championship</h1>
    <section class="home__content">
      <div class="md:grid md:grid-cols-3 gap-12 md:grid-rows-4 flex flex-col flex-start">
        <Card class="w-full h-8 flex items-center justify-center">
          <h1 class="flex flex-row gap-4 items-center justify-center p-6">
            <span class="text-red-500 text-9xl font-bold">
              {{ championsDrivers }}
            </span>
            <span class="text-shade-500 text-5xl font-bold">
              Champions
            </span>
          </h1>  
        </Card>
        <Card class="w-full h-8 flex items-center justify-center">
          <h1 class="flex flex-row gap-4 items-center justify-center p-6">
            <span class="text-red-500 text-9xl font-bold">
              {{ inActivityDrivers }}
            </span>
            <span class="text-shade-500 text-5xl font-bold">
              Drivers in Activity
            </span>
          </h1>  
        </Card>
        <Card class="col-span-2">
          <div class="w-full flex justify-between">
            <h3 class="tile text-violet-500">Drivers Ranking</h3>
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
            <h3 class="tile text-violet-500">Drivers by country</h3>
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
import { useDriversStore } from '~/stores/drivers'

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

const driversData = useDriversStore()

const championsDrivers = computed(() => {
  return driversData.getChampions.length;
})

const inActivityDrivers = computed(() => {
  return driversData.getInActivity.length;
})


onMounted(async () => {
  await driversData.setChampions()
  await driversData.setInActivity()
  await driversData.setRaceWins()
});
</script>

