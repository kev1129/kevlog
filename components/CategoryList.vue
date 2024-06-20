<template>    
    <v-container class="section category-container">
            <!-- <SectionTitle sectiontitle="categories" /> -->
            <div>
                <h1 class="category-title">categories</h1>
            </div>
            <span v-for="category in props.categories" :key="category.name">
                <NuxtLink :to="'index-' + category.slug" class="category-link">{{ category.name }}</NuxtLink>
            </span>
    </v-container>
</template>


<script setup>
const props = defineProps(['categories'])
</script>


<style lang="scss" scoped>
.category-container {

    display: block;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    opacity: 0.57;


    .category-title {
        display: inline-block;
        font-size: 1rem;
        padding-bottom: 6px;
        margin-bottom: 4.5px;
        border-bottom: 0.8px solid rgb(200,200,200);
    }

    .category-link {
        display: inline-block;
        margin-right: 25.7px;
        font-size: 0.7rem;

    }


}



</style>