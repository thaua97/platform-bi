<template>
  <Card class="my-20">
      <table class="w-full text-sm text-left text-violet-500 table-auto">
        <thead
          class="text-xs text-violet-700 uppercase"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Product name</th>
            <th scope="col" class="px-6 py-3">Color</th>
            <th scope="col" class="px-6 py-3">Category</th>
            <th scope="col" class="px-6 py-3">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-violet-900 whitespace-nowrap"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Silver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">$2999</td>
          </tr>
          <tr class="border-b">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-violet-900 whitespace-nowrap"
            >
              Microsoft Surface Pro
            </th>
            <td class="px-6 py-4">White</td>
            <td class="px-6 py-4">Laptop PC</td>
            <td class="px-6 py-4">$1999</td>
          </tr>
          <tr class="dark:bg-gray-800">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-violet-900 whitespace-nowrap"
            >
              Magic Mouse 2
            </th>
            <td class="px-6 py-4">Black</td>
            <td class="px-6 py-4">Accessories</td>
            <td class="px-6 py-4">$99</td>
          </tr>
        </tbody>
      </table>
  </Card>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>