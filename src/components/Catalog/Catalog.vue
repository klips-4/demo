<template>
  <div class="catalog__wrapper">
    <div class="header">
      <div class="container">
        <div class="group">
          <p>Главная / Системы хранения / <span class="active">Комплекты стеллажных систем</span></p>
        </div>
        <div class="title">
          <span>Комплекты стеллажных систем</span>
        </div>
        <div class="select-group">
          <div class="left-select">
            <span>Сортировать по: </span>
            <select v-model="cost" @change="setIndexCost">
              <option value="1">Цена по возрастанию</option>
              <option value="2">Цена по убыванию</option>
            </select>
          </div>
          <div class="right-select">
            <span>Материал </span>
            <select v-model="selected" @change="setIndexMaterial">
              <option v-for="material in materials"
                      :key=index
                      :value='material.id'
              > {{ material.name }}

              </option>
            </select>
          </div>
        </div>
        <div class="components__wrapper">
          <catalog-items
              v-for="(item,index) in productList"
              :key="index"
              :product="item"/>
        </div>
      </div>
    </div>

  </div>

</template>

<script setup lang="ts">
import {useCatalogStore} from "/src/store/useCatalogStore";
import {storeToRefs} from "pinia"
import CatalogItems from "../Catalog-Items/CatalogItems.vue";
import {computed, ref} from "vue";

const catalogStore = useCatalogStore();
catalogStore.fetchCatalogData()
catalogStore.fetchMaterialData()


const {products, materials} = storeToRefs(catalogStore)

const indexOfMaterial = ref(0)
const indexOfCost = ref(0)

const setIndexMaterial = (index) => {
  indexOfMaterial.value = index.target.selectedIndex + 1
}

const setIndexCost = (index) => {
  indexOfCost.value = index.target.selectedIndex + 1
}

const sortedProducts = ref({})

const productList = computed(() => {

  if (indexOfMaterial.value === 0 || indexOfCost === 0) return products.value

  if (indexOfMaterial.value) {
    sortedProducts.value = products.value.filter((product) => product.material === indexOfMaterial.value)
    if (indexOfCost.value === 1) {
      sortedProducts.value = sortedProducts.value.sort((a, b) => Number(a.price.current_price) - Number(b.price.current_price))
    }
    if (indexOfCost.value === 2) {
      sortedProducts.value = sortedProducts.value.sort((a, b) => -Number(a.price.current_price) + Number(b.price.current_price))
    }
    return sortedProducts.value
  }

})


</script>

<style src="./style.less">

</style>