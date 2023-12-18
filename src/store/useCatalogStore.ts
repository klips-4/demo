import {defineStore} from "pinia";
import {Catalog} from "../types/Props";
import {catalog} from "../service/api"


export const useCatalogStore = defineStore('products', {
    state: () => ({
        products: [] as Catalog[],
        materials: [] as Catalog[]
    }),

    actions: {
        fetchCatalogData() {
            return catalog.fetchCatalogData().then(({data}) => {
                this.products = data

            })
        },
        fetchMaterialData() {
           return catalog.fetchMaterialData().then(({data}) => {
                this.materials = data
            })
        },
    }
})