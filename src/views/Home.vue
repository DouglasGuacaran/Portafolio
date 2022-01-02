<template>
  <div class="container-fluid">
    <b-row>
      <b-col>
        <p class="text-white display-1">Software and Web Developer</p>
      </b-col>
    </b-row>

    <b-row class="justify-content-start">
      <b-col class="text-center container" cols="3">
        <img class="rounded" src="../assets/image1.png" alt="chess" />
        <div class="title m-3">
          Bienvenidos a mi página, soy Douglas Guacarán
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
"";

export default {
  name: "Home",
  components: {},

  data() {
    return {
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container-fluid {
  height: 100vh;
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
  width: 250px;
  border-radius: 5%;
  box-shadow: 10px 2px 10px 2px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
  transition: filter 0.4s ease-in-out;
}

.container:hover img {
  filter: none;
}

.title {
  font-family: "Dancing Script", cursive;
  font-size: 1.5rem;
  color: orchid;
  position: relative;
}

.title::after {
  position: absolute;
  content: "";
  width: 0%;
  height: 2px;
  background-color: whitesmoke;
  left: 50%;
  bottom: -10px;
  transition: all 0.4s ease-in-out;
}

.container:hover .title::after {
  width: 100%;
  left: 0;
}
</style>
