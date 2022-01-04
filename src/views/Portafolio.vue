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
          year:"2021",
          img: "https://picsum.photos/900/250/?image=3",
          hreference: "https://douglasguacaran.github.io/vue-big-mobile/",
          text:"Este proyecto incluye una web para venta de dispositivos móviles",
        },
        {
          title: "Pokedex",
          year:"2021",
          img: "https://www.gamerfocus.co/wp-content/uploads/2012/09/dex.jpg",
          hreference: "https://douglasguacaran.github.io/vue-pages-pokedex/",
          text:"Este proyecto incluye una web para consulta de Pokémons",
        },
        {
          title: "Marveldex",
          year:"2021",
          img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2021/09/marvel-2460339.jpg?itok=cBnC1CBi",
          hreference: "https://douglasguacaran.github.io/vue-marveldex/",
          text:"Este proyecto incluye una web para consulta de Personajes de Marvel",
        },
        {
          title: "Calcula números primos",
          year:"2021",
          img: "https://okdiario.com/img/2017/07/03/numeros-primos.jpg",
          hreference: "https://douglasguacaran.github.io/vue-numeros-primos/",
          text:"Este proyecto incluye una página para calcular los números primos en un rango de números",
        },
      ],
    };
  },
};
</script>

<style>
/**/</style>
