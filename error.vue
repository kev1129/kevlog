<template>
    <NuxtLayout>
        <h1 class="error-code">{{ error.statusCode }}</h1>
        <div>
            <p class="error-message">url: {{ error.url }}</p>
            <p class="error-message">statusMessage: {{ error.statusMessage }}</p>
        </div>
    </NuxtLayout>
</template>

<script setup>
const error = useError();
</script>

<style lang="scss" scoped>
.error-code {
    font-size: 2rem;
    font-weight: bold;
    font-style: italic;
}

.error-message {
    font-size: 1rem;
    font-style: italic;
}

</style>