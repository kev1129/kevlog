<template>
    <h1>{{ props.title }}</h1>
</template>

<script setup>

const props = defineProps(['title'])

</script>

<style lang="scss" scoped>

h1 {
    font-size: 1.34rem;
}

</style>