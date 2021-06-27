<template>
  <transition name="fade">
    <dialog v-show="dialog" class="c-dialog">
      <div class="c-dialog__inner">
        <slot />
      </div>
    </dialog>
  </transition>
</template>

<script lang="js" src="@/components/CDialog/CDialog.js"></script>
<style lang="scss" src="@/components/CDialog/CDialog.scss" scoped></style>
