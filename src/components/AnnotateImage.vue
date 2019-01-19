<template>
    <div class="annotate-image">
        <div>
            <button @click="$emit('prev')">Prev Image</button>
            <button @click="$emit('next')">Next Image</button>
        </div>
        <Annotator :drawing="true" @draw-end="drawfinish">
            <img :src="imageUrl" />
            <rect class="stroke" slot="drawing" />
        </Annotator>
    </div>
</template>
<script>
import Annotator from 'vue-annotator';
import constants from '../constants';

export default {
    props: ['imageUrl', 'imageIndex'],
    components: { Annotator },
    computed: {
        annotations() {
            return this.$store.state.annotations.filter(annotation => {
                return annotation[0] === imageIndex;
            }).map(annotation => annotation[1]);
        }
    },
    methods: {
        drawfinish (element) {
            const { x, y, width, height } = element.node.getBBox();
            const data = {
                imageIndex: this.imageIndex,
                annotation: { x, y, width, height }
            };
            this.$store.dispatch(constants.ADD_ANNOTATION, { data });
        },
    }
}
</script>
