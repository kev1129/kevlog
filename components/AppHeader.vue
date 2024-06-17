<template>
    <div class="header">
        <span class="header-title">kev.log</span>
        <NuxtLink to="/" class="header-home">Home</NuxtLink>
    </div>
</template>

<style lang="scss" scoped>
.header {
    font-size: 0.8rem;
    opacity: 0.8;

    .header-title {
        position: fixed; 
        top: 10px;    
        left: 15px;
    }
    .header-home {
        position: fixed; 
        top: 10px;    
        right: 15px;
    }
}
</style>