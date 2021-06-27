<template>
  <ul class="c-lifeline-group">
    <li class="c-lifeline-group__item">
      <button
        :class="['c-lifeline-group__button', { 'is-disabled': !fiftyfifty }]"
        @click="$emit('fiftyfifty')"
      >
        <span class="c-lifeline-group__text">50:50</span>
      </button>
    </li>
    <li class="c-lifeline-group__item">
      <button
        :class="['c-lifeline-group__button', { 'is-disabled': !audience }]"
        @click="$emit('audience')"
      >
        <span class="c-lifeline-group__text"><c-icon class-name="fas fa-users" /></span>
      </button>
    </li>
    <li class="c-lifeline-group__item">
      <button
        :class="['c-lifeline-group__button', { 'is-disabled': !telephone }]"
        @click="$emit('telephone')"
      >
        <span class="c-lifeline-group__text"><c-icon class-name="fas fa-phone" /></span>
      </button>
    </li>
  </ul>
</template>

<script lang="js" src="@/components/CLifelineGroup/CLifelineGroup.js"></script>
<style lang="scss" src="@/components/CLifelineGroup/CLifelineGroup.scss" scoped></style>
