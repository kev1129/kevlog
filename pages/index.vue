<template>
    <CategoryList :categories="categories" />
    <PostList :postlist="postList" /> 
</template>

<script setup>
import importCategories from '~/categories.json'
const categories =  importCategories
const { data: postList, error } = await useAsyncData("post", () => queryContent('posts').sort({ date: -1 }).find())
</script>