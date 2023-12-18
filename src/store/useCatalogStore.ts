import {defineStore} from "pinia";
import {Catalog} from "../types/Props";



export const useCatalogStore = defineStore('products', {
    state: () => ({
        products: [] as Catalog[],
        materials: [] as Catalog[]
    }),

    actions: {

        fetchCatalogData() {
            fetch("../src/database/items.json").then((response) => response.json()).then((data)=>{
                this.products = data
            })
        },

        fetchMaterialData() {
            fetch("../src/database/materials.json").then((response) => response.json()).then((data)=>{
                this.materials = data
            })
        },
    }
})