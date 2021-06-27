<template>
  <button :class="['c-button', { 'is-disabled': disabled }]" @click="$emit('click')">
    <div :class="['c-button__inner', { 'is-active': active }]">
      <span class="c-button__text"><slot /></span>
    </div>
  </button>
</template>

<script lang="js" src="@/components/CButton/CButton.js"></script>
<style lang="scss" src="@/components/CButton/CButton.scss" scoped></style>
