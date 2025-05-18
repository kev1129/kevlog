<template>
    <div>
        <CategoryList v-if="categories != 0" :categories="categories" />
        <ErrorMessage  v-if="categories == 0" :errorMessage="errorCategories" />
    </div>
    <div>
        <PostList v-if="postList != 0" :postlist="postList" /> 
        <ErrorMessage v-if="postList == 0" :errorMessage="errorPostList" />
    </div>
</template>

<script setup>
// category list
import importCategories from '~/categories.json'
const categories =  importCategories

// fetch post data from content/posts
const { data: postList, error } = await useAsyncData("post", () => queryContent('posts').sort({ date: -1 }).find())

// error messsage
const errorCategories = "categories : no content here..."
const errorPostList = "post list : no content here..."

</script>