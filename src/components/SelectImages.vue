<template>
    <div class="select-images">
        <h1>Image Annotation</h1>
        <p>Add a list of image urls that you want to annotate</p>
        <textarea v-model="imageUrls"></textarea>
        <div><button @click="onClick">Next</button></div>
    </div>
</template>
<script>
import constants from '../constants';

export default {
    data() {
        return {
            imageUrls: ''
        }
    },
    methods: {
        onClick() {
            const urls = this.imageUrls.split(/\r\n|\n|\r/);
            this.$store.dispatch(constants.SAVE_IMAGE_URLS, { urls });
        }
    }
}
</script>

