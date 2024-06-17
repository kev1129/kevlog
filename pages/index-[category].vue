<template>

    <div>
        <h1>posts list</h1>
        <div v-for="value in postList" :key="value._path">
            <p>{{ value.date }} {{ value.categories }}</p>
            <NuxtLink v-bind:to="value._path">{{ value.title }}</NuxtLink>
        </div>
    </div>
    <div>
            <NuxtLink to="/">Home</NuxtLink>
    </div>


</template>

<script setup>

const route = useRoute()

const { data: postList, error } = await useAsyncData(() => queryContent('posts').where({ 'categories': { $contains: [route.params.category] } }).find())


</script>