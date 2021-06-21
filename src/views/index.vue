<template>
  <div>
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
