<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <c-button>Button</c-button>
  </div>
</template>

<script>
// @ is an alias to /src
import CButton from "@/components/CButton/CButton.vue";

export default {
  name: "Index",
  components: {
    CButton,
  },
};
</script>
