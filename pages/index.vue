<template>
  <div class="flex h-max 2xl:h-screen py-[80px]">
    <div class="2xl:flex 2xl:h-[600px] w-[500px] m-auto 2xl:w-[800px] bg-white rounded-[10px] whaaaat block">
      <div class="flex items-center h-[400px] w-[500px] 2xl:w-[400px] bg-white 2xl:h-full overflow-hidden">
        <img class="w-full " src="images/image-product-desktop.jpg"/>
      </div>
      <div class="w-[500px] 2xl:w-[400px] p-11 2xl:py-10 2xl:px-11 ">
        <p class="font-montserrat font-light text-dark-grafish-blue tracking-[6px] font-medium">PERFUME</p>
        <div class="mt-4">
          <p class="font-fraunces font-bold text-very-dark-blue text-[40px] leading-10">Gabrielle Essence Eau De
            Parfum</p>
          <p class=" mt-9 font-montserrat  leading-8 text-dark-grafish-blue font-medium" :class="hover === true ?'text-[17px]': 'text-[19px]'">A floral, solar and
            voluptuous interpretation
            composed by Oliver Polge, Perfumer-Creator for the House of CHANEL</p>
          <div class="flex items-center mt-14 2xl:mt-9">
            <p class="text-dark-cyan font-bold font-fraunces text-[40px] mr-8">$149.99</p>
            <p class="text-dark-grafish-blue font-montserrat text-[18px] font-semibold line-through">$169.99</p>
          </div>
          <div class="mt-4 w-full flex justify-center py-5 rounded-[10px]" @mouseover="hover = true" @mouseleave="hover = false" :class="hover === true ? 'bg-[#346352]':'bg-dark-cyan'">
            <img class="h-[20px] w-fit mr-4" src="icons/icon-cart.svg">
<span class="text-white font-montserrat font-bold text-[18px]">Add to Cart</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  layout: 'primaryLayer',
  data() {
    return{
      hover: false
    }
  }
})
</script>
