<template>
  <ul class="c-choices">
    <li v-for="(item, index) in items" :key="index" class="c-choices__item">
      <c-button
        :active="index === activeIndex"
        :disabled="disabledIndex.includes(index)"
        @click="$emit('click', index)"
      >
        {{ `${alphabet[index]}. ${item}` }}
      </c-button>
    </li>
  </ul>
</template>

<script lang="js" src="@/components/CChoices/CChoices.js"></script>
<style lang="scss" src="@/components/CChoices/CChoices.scss" scoped></style>
