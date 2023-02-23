<template>
  <b-row>
    <b-col class="m-3" cols="12" v-for="(item, index) in array" :key="index">
      <b-card
        bg-variant="dark"
        img-alt="Card Image"
        text-variant="white"
        :title="`${item.title}`"
        :sub-title="`${item.year}`"
      >
        <b-link :href="`${item.hreference}`">
          <b-card-img class="image" :src="`${item.img}`"> </b-card-img>
        </b-link>
        <b-card-text>
          {{item.text}}
        </b-card-text>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "viewCard",
  props: {
    array: Array,
  },
};
</script>

<style>
.image {
  width: 40vw;
}
</style>
