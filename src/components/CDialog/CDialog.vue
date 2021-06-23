<template>
  <transition name="fade">
    <div v-show="dialog" class="c-dialog__outer">
      <div class="c-dialog__bg" />
      <dialog class="c-dialog">
        <slot />
      </dialog>
    </div>
  </transition>
</template>

<script lang="js" src="@/components/CDialog/CDialog.js"></script>
<style lang="scss" src="@/components/CDialog/CDialog.scss" scoped></style>
