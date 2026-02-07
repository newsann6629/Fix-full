<template>
    <div>
        {{ uid }}
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
const uid = route.params.id

</script>

<style lang="scss" scoped>

</style>