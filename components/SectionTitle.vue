<template>
    <h1 class="section-title">{{ props.sectiontitle }}</h1>
</template>

<script setup>
const props = defineProps(['sectiontitle'])

</script>

<style lang="scss" scoped>
.section-title {
    font-size: 1.2rem;
    margin-bottom: 15px;
}
</style>