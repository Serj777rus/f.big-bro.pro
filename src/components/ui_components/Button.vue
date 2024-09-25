<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <button><slot></slot></button>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    button {
        padding: 8px 36px;
        border: none;
        border-radius: 4px;
        background: #DFB700;
        font-size: 18px;
        color: #fff;
        align-self: center;
        justify-self: center;
        line-height: 100%;
        cursor: pointer;
    }
    @media all and (max-width: 440px) {
        button {
            font-size: 16px;
        }
    }
</style>