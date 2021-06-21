<template>
  <button class="c-button" @click="$emit('click')">
    <slot />
  </button>
</template>

<script lang="js" src="@/components/CButton/CButton.js"></script>
<style lang="scss" src="@/components/CButton/CButton.scss" scoped></style>
