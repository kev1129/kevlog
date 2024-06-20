<template>
    <CategoryList :categories="categories" />
    <PostList :postlist="postList"/>
</template>

<script setup>
import importCategories from '~/categories.json'
const categories =  importCategories

const route = useRoute()
const { data: postList, error } = await useAsyncData(() => queryContent('posts').where({ 'categories': { $contains: [route.params.category] } }).find())

</script>