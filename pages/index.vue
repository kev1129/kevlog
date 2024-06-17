<template>
    <v-main>
    
        <v-container>
            <h1>categories</h1>
            <div v-for="category in categories" v-bind:key="category.name">
                <NuxtLink :to="'index-' + category.slug">{{ category.name }}</NuxtLink>
            </div>
        </v-container>

        <v-container>
            <h1>posts list</h1>
            <div v-for="value in postList" :key="value._path">
                <NuxtLink v-bind:to="value._path" class="index-link">
                    <span class="index-date">{{ value.date }}</span>
                    {{ value.title }}
                </NuxtLink>
            </div>
        </v-container>
    
    </v-main>
</template>

<script setup>

import importCategories from '~/categories.json'
const categories =  importCategories

const { data: postList, error } = await useAsyncData("post", () => queryContent('posts').sort({ date: -1 }).find())


</script>