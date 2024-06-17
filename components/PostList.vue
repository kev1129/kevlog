<template>
    <v-container class="justify-center">
        <h1>posts list</h1>
        <div v-for="value in postlist" :key="value._path" class="index">
            <NuxtLink :to="value._path" class="index-link">
                <span class="index-date">{{ value.date }}</span>
                {{ value.title }}
            </NuxtLink>
        </div>
    </v-container>
</template>


<script setup>
const props = defineProps(['postlist'])
</script>


<style lang="scss" scoped>
.index {
    .index-date {  
    font-size: 0.8rem;
    opacity: 0.8;
    }
    .index-link {
        font-size: 1rem;
    }
}
</style>