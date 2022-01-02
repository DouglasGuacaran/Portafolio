<template>
  <div>
    <b-row class="d-flex justify-content-center m-0">
      <b-col cols="5" class="text-center text-light">
        <h1>Tecnologías conocidas:</h1>
        <i
          style="height: 50px; color: orange; font-size: 95px; margin: 10px"
          class="fab fa-html5"
        ></i>
        <i
          style="height: 50px; color: blue; font-size: 95px; margin: 10px"
          class="fab fa-css3-alt"
        ></i>
        <i
          style="height: 50px; color: yellow; font-size: 95px; margin: 10px"
          class="fab fa-js"
        ></i>
        <i
          style="height: 50px; color: green; font-size: 95px; margin: 10px"
          class="fab fa-vuejs"
        ></i>
        <i
          style="height: 50px; color: white; font-size: 95px; margin: 10px"
          class="fab fa-github-square"
        ></i>
        <i
          style="height: 50px; color: white; font-size: 95px; margin: 10px"
          class="fab fa-java"
        ></i>
      </b-col>
    </b-row>
    <b-row class="d-flex justify-content-center m-0">
      <b-col class="text-center text-light">
        <h1>Algunos de mis Proyectos implementados:</h1>
      </b-col>
    </b-row>
    <b-row class="m-3 b-flex mx-auto justify-content-center">
      <b-col cols="8">
        <Card :array="data" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "Portafolio",
  components: {
    Card,
  },
  data() {
    return {
      data: [
        {
          title: "Tienda Big Mobile",
          img: "https://picsum.photos/900/250/?image=3",
          hreference: "https://douglasguacaran.github.io/vue-big-mobile/",
        },
        {
          title: "Pokedex",
          img: "https://www.gamerfocus.co/wp-content/uploads/2012/09/dex.jpg",
          hreference: "https://douglasguacaran.github.io/vue-pages-pokedex/",
        },
      ],
    };
  },
};
</script>

<style>
/**/</style>
