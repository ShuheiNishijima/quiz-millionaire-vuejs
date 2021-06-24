<template>
  <div class="l-main">
    <c-logo />
    <c-cutin :show="cutin" />
    <div class="views-start-button">
      <c-start-button v-if="!playing" @click="startHandler" />
    </div>
    <div class="views-main">
      <c-question v-if="playing" :text="items[count].question" />
      <c-choices v-if="playing" :items="items[count].choices" @click="selectChoice" />
    </div>
    <c-dialog :dialog="check_dialog">
      <p class="views-text">ファイナルアンサー？</p>
      <ul class="views-button-list">
        <li class="views-button-list__item"><c-button @click="checkAnswer">はい</c-button></li>
        <li class="views-button-list__item"><c-button @click="rejectChoice">いいえ</c-button></li>
      </ul>
    </c-dialog>
    <c-dialog :dialog="correct_dialog">
      <img class="views-image" src="/images/seikai.jpg" alt="せいかーい！！！" />
      <p class="views-text">
        正解ッッッ！！！<br />
        次の問題に進みますか？
      </p>
      <ul class="views-button-list">
        <li class="views-button-list__item">
          <c-button @click="nextQuestion">次の問題へ</c-button>
        </li>
        <li class="views-button-list__item"><c-button>ドロップアウト</c-button></li>
      </ul>
    </c-dialog>
    <c-dialog :dialog="miss_dialog">
      <img class="views-image" src="/images/zannen.jpg" alt="ざんねーん！！！" />
      <p class="views-text">残念ッッッ！！！</p>
      <ul class="views-button-list">
        <li class="views-button-list__item"><c-button @click="restartHandler">再挑戦</c-button></li>
        <li class="views-button-list__item"><c-button>結果</c-button></li>
      </ul>
    </c-dialog>
  </div>
</template>

<script lang="js" src="@/views/index.js"></script>
<style lang="scss" src="@/views/index.scss" scoped></style>
