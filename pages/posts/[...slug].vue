<template>
    <v-container class="sectiond">
        <PostTitle :title="post.title"/>
        <article>
            <ContentRenderer :value="post" />
        </article>
    </v-container>
</template>

<script setup>
const route = useRoute()
const { data: post, error } = await useAsyncData(() => queryContent(route.params.slug).findOne())
</script>
