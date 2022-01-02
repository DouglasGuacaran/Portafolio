<template>
  <div>
    <div id="app" class="main">
      <div id="nav">
        <b-navbar class="p-2" type="dark" variant="dark">
          <b-navbar-nav>
            <b-navbar-brand to="/">Inicio</b-navbar-brand>
            <b-navbar-brand to="/sobremi">Sobre mí</b-navbar-brand>
            <b-navbar-brand to="/portafolio"
              >Portafolio</b-navbar-brand
            >
            <b-navbar-brand to="/contactame"
              >Contáctame</b-navbar-brand
            >
          </b-navbar-nav>
        </b-navbar>
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
};
</script>

<style>
.main {
  background-image: url("./assets/descarga.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
}
</style>
