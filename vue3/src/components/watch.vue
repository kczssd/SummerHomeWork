<template>
    <div></div>
</template>

<script>
    import { watch, ref } from '@vue/composition-api';
    export default {
        setup() {
            const refcount = ref(0);
            watch(refcount, (count, old) => {
                console.log(count, old);
            });
            setTimeout(() => {
                refcount.value++;
            }, 1500);
        }
    };
</script>