<template>
  <transition name="fade">
    <div v-show="show" class="c-cutin__outer">
      <div class="c-cutin__bg" />
      <div class="c-cutin">
        <transition name="slide">
          <img v-show="show" class="c-cutin__image" src="/images/tame.jpg" alt="みの溜め" />
        </transition>
      </div>
    </div>
  </transition>
</template>

<script lang="js" src="@/components/CCutin/CCutin.js"></script>
<style lang="scss" src="@/components/CCutin/CCutin.scss" scoped></style>
