<template>
  <b-row class="containerGlobal">
    <b-col>
      <b-row>
        <b-col>
          <img
            class="rounded radlogo"
            src="../assets/radioprotection.jpg"
            alt="UPEL"
          />
        </b-col>
        <b-col cols="10" class="text-center title1">
          <h3>Estudios Universitarios Realizados</h3>
        </b-col>
        <b-col class="text-end">
          <img
            class="rounded radlogo"
            src="../assets/radioprotection.jpg"
            alt="UPEL"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center container">
          <b-link
            href="https://www.upel.edu.ve/index.php/instituto-pedagogico-luis-beltran-prieto-figueroa-de-barquisimeto/"
          >
            <img class="rounded logo" src="../assets/logoUpel.jpg" alt="UPEL" />
          </b-link>
          <h1 class="title2">Universidad Pedagógica Experimental Libertador</h1>
          <h1 class="title2">Profesor de Física Distinción Cum Laude (2005)</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center title1">
          <h3>Experiencia Profesional</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center container">
          <b-link href="https://www.ivic.gob.ve">
            <img class="rounded logo" src="../assets/IVIC.jpg" alt="IVIC" />
          </b-link>
          <h1 class="title2">
            LSCD Unidad de Tecnología Nuclear del IVIC (2005-2017)
          </h1>
          <h1 class="title2">Profesional Asosciado a la Investigación</h1>
        </b-col>

        <b-col class="text-center container">
          <b-link href="https://www.ingerad.cl">
            <img
              class="rounded logoing"
              src="../assets/ingeradlogo.jpg"
              alt="INGERAD"
            />
          </b-link>
          <h1 class="title2">INGERAD (2017-2020)</h1>
          <h1 class="title2">Asesor en Seguridad y Protección Radiológica</h1>
        </b-col>

        <b-col class="text-center container">
          <b-link href="https://hospitalclinicomagallanes.cl/">
            <img class="logohcm" src="../assets/hcmlogo.png" alt="HCM" />
          </b-link>
          <h1 class="title2">Hospital Clínico de Magallanes (2020)</h1>
          <h1 class="title2">Oficial de Protección Radiológica</h1>
        </b-col>
      </b-row>
      <b-row class="justify-content-center m-0">
        <b-col class="text-center">
          <div class="title1">Mis Hobbies</div>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center container" cols="4" md="4" sm="12">
          <img class="rounded" src="../assets/chess1.png" alt="chess" />
          <div class="title">Jugar Ajedrez</div>
        </b-col>
        <b-col class="text-center container" cols="4" md="4" sm="12">
          <img class="rounded" src="../assets/cinema1.jpg" alt="cinema" />
          <div class="title">Ir al cine</div>
        </b-col>
        <b-col class="text-center container" cols="4" md="4" sm="12">
          <img class="rounded" src="../assets/pabellon.jpg" alt="pabellon" />
          <div class="title">Disfrutar una buena comida</div>
        </b-col>
      </b-row>
      <b-row class="m-3">
        <b-col class="text-center container" cols="4">
          <img class="rounded" src="../assets/metallica.jpg" alt="imagen" />
          <div class="title">Escuchar Rock</div>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Sobremi",
  data() {
    return {
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container:hover {
  cursor: pointer;
}

.container img {
  filter: grayscale();
  width: 190px;
  border-radius: 5%;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
  transition: filter 0.4s ease-in-out;
}

.container:hover img {
  filter: none;
}

.title {
  font-family: "Dancing Script", cursive;
  font-size: 1.5rem;
  color: whitesmoke;
  position: relative;
}

.container:hover .title::after {
  width: 100%;
  left: 0;
}

.container:hover h1 {
  color: deepskyblue;
}

.title::after {
  position: absolute;
  content: "";
  width: 0%;
  height: 2px;
  background-color: palevioletred;
  left: 50%;
  bottom: -5px;
  transition: all 0.4s ease-in-out;
}

.radlogo {
  height: 50px;
  width: 70px !important;
}

.logo {
  height: 75px;
  width: 75px !important;
  margin: 0;
}
.logohcm {
  height: 75px;
  width: 125px !important;
  background-color: white;
  border: 0px;
  padding: 10px;
}
.logoing {
  height: 75px;
  width: 120px !important;
  background-color: white;
  border: 0px;
  padding: 10px;
}
.title1 {
  font-family: "Montserrat", cursive;
  font-size: 2rem;
  color: aquamarine;
  position: relative;
  padding: 50px;
}

.title2 {
  font-family: "Montserrat", cursive;
  font-size: 15px;
  color: whitesmoke;
  position: relative;
}
</style>
