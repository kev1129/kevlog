<template>
    <PostList :postlist="postList"/>
</template>

<script setup>
const route = useRoute()
const { data: postList, error } = await useAsyncData(() => queryContent('posts').where({ 'categories': { $contains: [route.params.category] } }).find())
</script>