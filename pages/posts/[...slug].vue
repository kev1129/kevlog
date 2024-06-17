<template>
    <v-container>
        <div>
            <PostTitle :title="post.title"/>
            <article>
                <ContentRenderer :value="post" />
            </article>
        </div>
    </v-container>
</template>

<script setup>
const route = useRoute()
const { data: post, error } = await useAsyncData(() => queryContent(route.params.slug).findOne())
</script>
