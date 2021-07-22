<template>
  <transition name="fade">
    <div class="modal-wrapper" v-if="self">
      <div class="header">
        <p
          class="back"
          @click="back"
          :disabled="$store.state.modalHistory.length == 1"
        >
          &#60; geri
        </p>
        <i class="fas fa-times" @click="close(true)"></i>
      </div>
      <h1 class="title">{{ type }}</h1>

      <hr />

      <!-- 
        // TODO Suspense Yapısı Oluştur
        Aşağıya Suspense Yapısı ekle böylece yanlış bir type emit edildiğinde
        fallback durumunda modal kapansın yada error mesajı döndürülsün
      -->
      <component :is="getComponent" :referance="referance" :type="getType" />
    </div>
  </transition>
</template>


<script>
import { sleep } from "@utils/functions";

import ModalDoubleColumn from "./Modal/DoubleColumn.vue";
import ModalTripleColumn from "./Modal/TripleColumn.vue";

export default {
  components: {
    ModalDoubleColumn,
    ModalTripleColumn,
  },
  data() {
    return {
      self: false,
      type: null,
      referance: null,
    };
  },
  created() {
    this.$bus.on("open", async (...args) => {
      if (this.self == true) {
        await this.close();
        this.open(...args);
      } else {
        this.open(...args);
      }
    });
  },
  computed: {
    getComponent() {
      switch (this.type) {
        case "Type":
          return "ModalDoubleColumn";
        case "Role":
          return "ModalDoubleColumn";

        case "Request":
          return "ModalTripleColumn";
        case "Response":
          return "ModalTripleColumn";
        case "Model":
          return "ModalTripleColumn";
      }
    },

    getType() {
      return this.type.toLowerCase() + "s";
    },
  },
  methods: {
    async close(clear = false) {
      this.self = false;
      this.type = null;
      this.referance = null;

      clear ? (this.$store.state.modalHistory = []) : void 0;

      await sleep(500);
      await this.$nextTick();
    },
    open({ type, referance, log = true }) {
      this.self = true;
      this.referance = referance;
      this.type = type;
      if (log) this.$store.state.modalHistory.push({ type, referance });
    },
    async back() {
      this.$store.state.modalHistory.pop();
      const last = {
        ...this.$store.state.modalHistory[
          this.$store.state.modalHistory.length - 1
        ],
        log: false,
      };

      await this.close();
      this.open(...[last]);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-wrapper {
  background-color: orange;
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  max-width: 75vw;
  padding: 0px 20px;

  .title {
    word-break: break-word;
    margin: 10px;
  }

  .header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    .back {
      cursor: pointer;
      font-size: 1.2rem;
      margin-bottom: 0px;
      font-weight: bold;
      padding-right: 20px;
    }

    .back[disabled="true"] {
      cursor: default !important;
      opacity: 0.5;
      pointer-events: none;
    }

    .fa-times {
      cursor: pointer;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  right: -75vw;
}
</style>