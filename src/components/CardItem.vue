<template>
    <div class="card">
        <div class="card__header">
            <div class="card__profile-image">
                <img :src="image.user.profile_image.small" alt="some profile image...">
            </div>
            <div class="card__titile">
                <p class="card__author">
                    <router-link 
                        target="_blank"
                        class="brand-link"
                        :to="getUserProfileLink">
                        {{ image.user.name }}
                    </router-link>
                </p>
                <p class="card__username">{{ getUsername }}</p>
            </div>
        </div>
        <div class="card__image">
            <img :src="image.urls.small" alt="some image...">
        </div>
        <div class="card__footer">
            <span class="card__view-count">{{ getViews }}</span>
            <span class="card__view-icon">
                <img :src="eyeIcon" alt="some icon...">
            </span>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import EyeIcon from '@/assets/eye.svg'

    export default {
        data() {
            return {
                eyeIcon: EyeIcon,
                key: this.accessKey,
                image: this.card,
                views: ''
            }
        },
        props: ['card', 'accessKey'],
        computed: {
            getUsername() {
                return '@' + this.image.user.username
            },
            getViews() {
                return this.views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
            },
            getUserProfileLink() {
                return `/users/${this.getUsername}`
            }
        },
        async mounted() {
                axios.get(`https://api.unsplash.com/photos/${this.image.id}/statistics/?client_id=${this.key}`)
                    .then(response => (this.views = response.data.views.total))
        }
    }
</script>