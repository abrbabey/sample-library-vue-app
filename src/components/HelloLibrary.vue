<script setup>
defineProps({
    msg: String,
});
</script>

<template>
    <div>
        <h2>{{ msg }}</h2>
        <p>I am a minimal component in LibraryApp.</p>
    </div>
</template>
