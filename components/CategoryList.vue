<template>    
    <v-container>
            <h1>categories</h1>
            <div v-for="category in categories" :key="category.name" class="d-flex flex-row">
                <NuxtLink :to="'index-' + category.slug">{{ category.name }}</NuxtLink>
            </div>
    </v-container>
</template>


<script setup>
const props = defineProps(['categories'])
</script>


<style lang="scss" scoped>

</style>