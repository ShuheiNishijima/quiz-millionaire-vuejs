<template>
  <div class="l-main">
    <header v-if="playing" class="views-header">
      <div class="views-header__item">
        <c-score-panel :price="price[count + 1]" />
      </div>
      <div class="views-header__item">
        <c-lifeline-group
          :fiftyfifty="lifeline.fiftyfifty"
          :audience="lifeline.audience"
          :telephone="lifeline.telephone"
          @fiftyfifty="fiftyfifty_dialog = true"
          @audience="audience_dialog = true"
        />
      </div>
    </header>
    <c-logo />
    <c-cutin :show="cutin" />
    <c-start-button v-if="!playing" @click="startGame" />
    <c-question v-if="playing" :text="items[count].question" />
    <c-choices
      v-if="playing"
      :items="items[count].choices"
      :active-index="selected"
      :disabled-index="disabled_choices"
      @click="selectChoice"
    />
    <c-dialog :dialog="check_dialog">
      <p class="views-text">ファイナルアンサー？</p>
      <ul class="views-button-list">
        <li class="views-button-list__item">
          <c-button @click="checkAnswer">ファイナルアンサー</c-button>
        </li>
        <li class="views-button-list__item"><c-button @click="rejectChoice">考え直す</c-button></li>
      </ul>
    </c-dialog>
    <c-dialog :dialog="correct_dialog">
      <img class="views-image" src="/images/seikai.jpg" alt="せいかーい！！！" />
      <p class="views-text">正解ッッッ！！！</p>
      <ul class="views-button-list">
        <li class="views-button-list__item">
          <c-button @click="nextQuestion">次の問題</c-button>
        </li>
        <li class="views-button-list__item"><c-button @click="result">ドロップアウト</c-button></li>
      </ul>
    </c-dialog>
    <c-dialog :dialog="miss_dialog">
      <img class="views-image" src="/images/zannen.jpg" alt="ざんねーん！！！" />
      <p class="views-text">残念ッッッ！！！</p>
      <ul class="views-button-list">
        <li class="views-button-list__item"><c-button @click="reset">トップへ戻る</c-button></li>
        <li class="views-button-list__item"><c-button @click="result">結果を見る</c-button></li>
      </ul>
    </c-dialog>
    <c-dialog :dialog="finish_dialog">
      <img class="views-image" src="/images/seikai.jpg" alt="せいかーい！！！" />
      <p class="views-text">
        正解ッッッ！！！<br />
        <br />
        おめでとう！ミリオネア達成！！！
      </p>
      <ul class="views-button-list">
        <li class="views-button-list__item"><c-button @click="reset">トップへ戻る</c-button></li>
        <li class="views-button-list__item"><c-button @click="result">結果を見る</c-button></li>
      </ul>
    </c-dialog>
    <c-dialog :dialog="result_dialog">
      <p class="views-text">獲得賞金は￥{{ formatPrice(price[correct_count]) }}です。</p>
      <ul class="views-button-list">
        <li class="views-button-list__item"><c-button @click="reset">トップへ戻る</c-button></li>
      </ul>
    </c-dialog>
    <c-dialog :dialog="fiftyfifty_dialog">
      <p class="views-text">フィフティフィフティを使いますか？</p>
      <ul class="views-button-list">
        <li class="views-button-list__item"><c-button @click="fiftyfifty">使う</c-button></li>
        <li class="views-button-list__item">
          <c-button @click="fiftyfifty_dialog = false">使わない</c-button>
        </li>
      </ul>
    </c-dialog>
    <c-dialog :dialog="audience_dialog">
      <p class="views-text">オーディエンスは準備中です。</p>
      <ul class="views-button-list">
        <li class="views-button-list__item">
          <c-button @click="audience_dialog = false">閉じる</c-button>
        </li>
      </ul>
    </c-dialog>
  </div>
</template>

<script lang="js" src="@/views/index.js"></script>
<style lang="scss" src="@/views/index.scss" scoped></style>
