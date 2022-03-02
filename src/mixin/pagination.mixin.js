import axios from 'axios'

export default {
    data() {
        return {
            page: 1,
            pageSize: 30,
            pageCount: 59,
            unsplash: null,
        }
    },
    methods: {
        pageChangeHandler(page) {
            this.loading = true
            this.setupPagination(page)
        },
        setupPagination(currentPage) {
            axios
                .get(
                    `https://api.unsplash.com/photos/?page=${currentPage}&per_page=10&client_id=${this.accessKey}`
                )
                .then(response => (this.unsplash = response.data))
                .finally(() => {
                    setTimeout(() => {
                        this.loading = false
                    }, 1000)
                })
        },
    },
}
