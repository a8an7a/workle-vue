<template>
    <div class="root">
        <div class="container">
            <PreLoader v-if="loading" />
            <CardList 
                v-else
                v-bind:accessKey="accessKey"
                v-bind:unsplash="unsplash">
            </CardList>
        </div>
        <div class="pagination">
            <CardPaginate
                :page-count="pageCount"
                :click-handler="pageChangeHandler"
                :container-class="'pagination__list'"
                :page-class="'pagination__page'"
                :active-class="'pagination__page_active'"
                :prev-class="'pagination__page_prev'"
                :next-class="'pagination__page_next'">
            </CardPaginate>
        </div>
    </div>
</template>

<script>
    import CardList from '@/components/CardList'
    import CardPaginate from 'vuejs-paginate'
    import PreLoader from '@/components/PreLoader'
    import paginationMixin from '@/mixin/pagination.mixin'

    export default {
        name: 'HomePage',
        mixins: [paginationMixin],
        data() {
            return {
                accessKey: 'k-ZNZFSnuC8-q4xomhcdbNvbsk-8y274UIBPjcl--8M',
                loading: true
            }
        },
        components: {
            CardList,
            CardPaginate,
            PreLoader
        },
        mounted() {
            this.setupPagination(this.page)
        }
    }
</script>
