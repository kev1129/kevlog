<template>
    <v-container class="section">
        <SectionTitle sectiontitle="post list" />
        <span v-for="value in props.postlist" :key="value._path" class="index-container">
            <IndexMetainfo :indexvalue="value"/>
            <NuxtLink :to="value._path" class="index-link">
                <span class="index-title">{{ value.title }}</span>
            </NuxtLink>
        </span>
    </v-container>
</template>


<script setup>
const props = defineProps(['postlist'])
</script>


<style lang="scss" scoped>
.index-container {
    display: block;
    margin-bottom: 13.7px;

    .index-link {
        display: block;
        font-size: 1rem;
        letter-spacing: 0.039rem;


        .index-title {
            display: inline-block;
            padding: 0;
            font-size: 1rem;
        }
    }
}
</style>