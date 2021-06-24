<template>
  <button class="c-button" @click="$emit('click')">
    <span class="c-button__inner"><slot /></span>
  </button>
</template>

<script lang="js" src="@/components/CButton/CButton.js"></script>
<style lang="scss" src="@/components/CButton/CButton.scss" scoped></style>
