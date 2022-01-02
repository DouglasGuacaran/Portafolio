<template>
  <div class="container-fluid">
    <b-row>
      <b-col class="mb-3 text-end">
        <b-icon
          variant="light"
          icon="star-fill"
          animation="fade"
          font-scale="2"
        ></b-icon>
      </b-col>
      <b-col cols="4" class="mb-3 text-center">
        <h1 class="display-4" style="color: white">Contáctame</h1>
      </b-col>
      <b-col class="mb-3 text-start">
        <b-icon
          variant="light"
          icon="star-fill"
          animation="fade"
          font-scale="2"
        ></b-icon>
      </b-col>
    </b-row>

    <b-row class="d-flex justify-content-center m-0">
      <b-col cols="6">
        <h4
          class="display-6"
          style="text-align: justify; font-size: 19px; color: white"
        >
          Naguará... Si llegaste hasta aquí y deseas conocer un poco más de mi,
          puedes escribirme a mi
          <a href="mailto:douglasguacaran@gmail.com">correo electrónico</a> y me
          pondré en contacto contigo lo más pronto posible. Por lo que sea
          gracias por llegar hasta aquí!, por acá te dejo mis redes sociales
        </h4>
      </b-col>
    </b-row>
    <b-row class="d-flex justify-content-center m-0">
      <b-col cols="5" class="text-center">
        <a href="https://www.facebook.com/douglasguacaran/"
          ><font-awesome-icon
            style="color: white; margin: 10px; font-size: 20px"
            :icon="{ prefix: 'fab', iconName: 'facebook-square' }"
          />
        </a>
        <a href="https://twitter.com/douglasguacaran/"
          ><font-awesome-icon
            style="color: white; margin: 10px; font-size: 20px"
            :icon="{ prefix: 'fab', iconName: 'twitter' }"
          />
        </a>
        <a href="https://www.linkedin.com/in/douglas-guacaran/"
          ><font-awesome-icon
            style="color: white; margin: 10px; font-size: 20px"
            :icon="{ prefix: 'fab', iconName: 'linkedin' }"
          />
        </a>
        <a href="https://www.instagram.com/douglasguacaran/?hl=es-la"
          ><font-awesome-icon
            style="color: white; margin: 10px; font-size: 20px"
            :icon="{ prefix: 'fab', iconName: 'instagram' }"
          />
        </a>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="5" class="mx-auto d-flex justify-content-center">
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Contactame",
  components: {},
  data() {
    return {
      items: [
        { text: "Inicio", href: "/portafolio" },
        { text: "Sobre mi", href: "/portafolio/sobremi" },
        { text: "Portafolio", href: "/portafolio/portafolio" },
        { text: "Contáctame", active: true },
      ],
    };
  },
};
</script>

<style>
.container-fluid {
  height: 100vh;
}
</style>
