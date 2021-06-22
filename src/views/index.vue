<template>
  <div class="l-main">
    <c-logo />
    <div class="challenge-main__inner">
      <c-question v-if="items.length" :text="items[count].question" />
      <c-choices v-if="items.length" :items="items[count].choices" />
    </div>
  </div>
</template>

<script lang="js" src="@/views/index.js"></script>
<style lang="scss" src="@/views/index.scss" scoped></style>
