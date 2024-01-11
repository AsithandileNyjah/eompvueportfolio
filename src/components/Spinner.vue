<template lang="">
    <div id="spin" v-if="spinner">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            spinner: true,
        };
    },
    mounted() {
        setTimeout(() => {
            this.spinner = false;
        }, 1500);
    },
}
</script>
<style>
#spin {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: black;
    min-height: 100vh;
    width: 100%;
    z-index: 9999;
}
.spinner-border{
    position: fixed;
    left: 50%;
    top: 50%;
}
</style>