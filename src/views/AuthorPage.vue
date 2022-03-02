<template>
    <div class="container">
        <PreLoader v-if="loading" />
        <div
            v-else 
            class="profile">
            <div class="profile__profile-image">
                <img :src="user.profile_image.large" alt="some image...">
            </div>
            <div class="profile__description">
                <p class="profile__username">{{ user.name }}</p>
                <p class="profile__biography">{{ user.bio }}</p>
                <router-link to="/" class="brand-link">Go back</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import PreLoader from '@/components/PreLoader'

    export default {
        name: 'AuthorPage',
        data() {
            return {
                user: null,
                loading: true,
                accessKey: 'k-ZNZFSnuC8-q4xomhcdbNvbsk-8y274UIBPjcl--8M'
            }
        },
        components: {
            PreLoader
        },
        async mounted() {
            const username = this.$route.params.username.replace(/@/gm, '')
            axios.get(`https://api.unsplash.com/users/${username}/?client_id=${this.accessKey}`)
                .then(response => (this.user = response.data))
                .finally(() => {
                    setTimeout(() => {
                        this.loading = false
                    }, 500)
                })
        }
    }
</script>