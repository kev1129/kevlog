<template>
    <div>
        <div>
            <h1>{{ post.title }}</h1>
            <article>
                <ContentRenderer v-bind:value="post" />
            </article>
        </div>
        <div>
            <NuxtLink to="/">Home</NuxtLink>
        </div>

        <!--
        <ContentDoc v-slot="{ doc }">
            <article>
                <h1>{{ doc.title }}</h1>
                <ContentRenderer :value="doc" />
            </article>
        </ContentDoc>
        -->
    </div>

</template>

<script setup>

const route = useRoute()
const { data: post, error } = await useAsyncData(() => queryContent(route.params.slug).findOne())

</script>
