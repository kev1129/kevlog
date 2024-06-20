<template>
    <span class="indexmeta-container">
        <span class="index-date">{{ props.indexvalue.date }}</span>
        <span class="index-partition">|</span>
        <span v-for="item in props.indexvalue.categories" :key="item.index" class="index-category"> {{ item }} . </span>
    </span>
</template>

<script setup>
const props = defineProps(['indexvalue'])
</script>

<style lang="scss" scoped>
.indexmeta-container {
    display: block;
    font-size: 0.7rem;
    opacity: 0.63;
    margin-bottom: -4.7px;

    .index-date {
        display: inline;
    }

    .index-partition {
        display: inline;
        margin-right: 13px;
        margin-left: 13px;
    }

    .index-category {
        display: inline;
        margin-right: 5.1px;
    }
}


</style>