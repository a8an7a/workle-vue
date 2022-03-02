<template>
    <div class="gallery">
        <CardItem
            v-for="card in unsplash"
            :key="card.id"
            v-bind:card="card"
            v-bind:accessKey="accessKey"
        >
        </CardItem>
    </div>
</template>

<script>
    import CardItem from '@/components/CardItem'
    export default {
        props: ['unsplash', 'accessKey'],
        components: {
            CardItem,
        },
    }
</script>