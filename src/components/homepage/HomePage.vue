<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="300"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption=""
        text=""
        style="height: 650px"
        img-src="src/assets/images/web-anasayfa-banner.jpg">

      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide
        style="height: 650px"
        img-src="src/assets/images/web-anasayfa-banner-2.jpg">
        <h1></h1>
      </b-carousel-slide>

    </b-carousel>

    <!--
    <p class="mt-4">
        Slide #: {{ slide }}<br>
        Sliding: {{ sliding }}
    </p>
    -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>



<style scoped>

</style>
