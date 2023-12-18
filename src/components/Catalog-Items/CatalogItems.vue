<template>
  <div class="products__block">
    <div class="products__item">
      <div class="discount-display">
        <div v-if="product.price.old_price" class="discount">
          <span>Скидка</span>
        </div>
      </div>
      <div class="image">
        <img :src="`./src/assets/images/${product.image.url}.jpg`" alt="product">
      </div>
      <div class="description">
        <div class="code">
          <span>{{ product.code }}</span>
        </div>
        <div class="product__title"><span>{{ product.name }}</span></div>
        <div class="bottom">
          <div class="prices">
            <div v-if="product.price.old_price" class="old-price">
              <del>{{ Math.round(product.price.old_price) }}₽</del>
            </div>
            <div class="current-price">
              <span>{{ Math.round(product.price.current_price) }}₽ </span>
            </div>
          </div>
          <div class="icons">
            <div @click="addBasket" class="left-icon">
              <img :src="`./src/assets/images/${basked}.jpg`" alt="basket"></div>
            <div @click="addLike" class="right-icon"><img :src="`./src/assets/images/${liked}.jpg`" alt="like">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps, ref} from "vue";

interface Props {
  product: {
    type: object,
    code: string
    price: {
      type: object
      old_price: number
      current_price: number
    },
    image: {
      type: object
      url: string
    },
    name: string
  },
}

const {product} = defineProps<Props>()

const basked = ref('basket')
const liked = ref('like')

const addBasket = () => {
  if (basked.value === 'done') {
    return basked.value = 'basket'
  } else {
    return basked.value = 'done'
  }
}

const addLike = () => {
  if (liked.value === 'liked') {
    return liked.value = 'like'
  } else {
    return liked.value = 'liked'
  }
}


</script>

<style src="./style.less">

</style>