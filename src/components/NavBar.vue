<template>
  <v-app-bar app class="elevation-1 border">
    <v-row class="w-100 d-flex align-center ga-1 justify-space-between" :class="isMobile ? 'px-2' : 'px-5'">
      <v-col cols="6" md="auto" lg="auto" class="d-flex flex-row align-center">
        <div class="google-logo-anim d-flex align-center">
          <svg viewBox="0 0 120 40" :width="isMobile ? 100 : 120" height="40">
            <g class="dots">
              <circle cx="18" cy="20" r="4" class="dot blue" />
              <circle cx="34" cy="20" r="4" class="dot red" />
              <circle cx="50" cy="20" r="4" class="dot yellow" />
              <circle cx="66" cy="20" r="4" class="dot green" />
            </g>
          </svg>
        </div>

        <span v-if="!isMobile"  style="color: #111827; font-weight: 600; font-size: 18px;"
          >Google Cloud Arcade 2026</span
        >
        <span v-if="isMobile" style="color: #111827; font-weight: 600; font-size: 12px;"
          >Google Cloud <br>Arcade 2026</span
        >
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto"  v-if="!isMobile">
        <v-btn to="#home" class="header-link">
          <span class="text-btn">Início</span>
        </v-btn>
      </v-col>
      <v-col cols="auto" v-if="!isMobile">
        <v-btn to="#about" class="header-link">
          <span class="text-btn">Sobre</span>
        </v-btn>
      </v-col>
      <v-col cols="auto" v-if="!isMobile">
        <v-btn to="#squad" class="header-link">
          <span class="text-btn">Squad</span>
        </v-btn>
      </v-col>
      <v-col cols="auto" v-if="!isMobile">
        <v-btn to="#facilitator" class="header-link">
          <span class="text-btn">Facilitador</span>
        </v-btn>
      </v-col>
      <v-col cols="auto" v-if="!isMobile">
        <v-btn to="#tutorial" class="header-link">
          <span class="text-btn">Tutorial</span>
        </v-btn>
      </v-col>
      <v-col cols="5" md="auto" lg="auto" class="">
        <v-btn
          size="small"
          class="text-white d-flex align-center rounded-lg btn-filled btn-filled-dark pa-4"
          href="https://discord.gg/nFxTWgSwTx"
          target="_blank"
          style="background-color: #1c1c1c; line-height: 1"
        >
          <span class="text-btn">Entrar no squad</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import { useDisplay } from "vuetify";

export default {
  data: () => ({
smAndDown: false,
  }),
  computed: {
    isMobile() {
      console.log("SMANDOWN: ", this.smAndDown);
      return this.smAndDown;
    },
  },
  mounted() {
    const display = useDisplay();
    this.smAndDown = display.smAndDown;
  },
}
</script>

<style scoped>
.google-logo-anim svg {
  overflow: hidden;
}

/* base */
.dot {
  transform-box: fill-box;
  transform-origin: center;
}

/* cores */
.blue {
  fill: #4285f4;
}
.red {
  fill: #ea4335;
}
.yellow {
  fill: #fbbc05;
}
.green {
  fill: #34a853;
}

/* onda vertical contínua */
.dot {
  animation: wave 1.4s ease-in-out infinite;
}

.red {
  animation-delay: 0.12s;
}
.yellow {
  animation-delay: 0.24s;
}
.green {
  animation-delay: 0.36s;
}

/* grupo: entrada + saída */
.dots {
  animation: dotsTimeline 16s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

/* entrada em onda */
@keyframes dotsTimeline {
  /* entrada - fora total */
  0% {
    transform: translateX(-120px);
    opacity: 0;
  }

  4% {
    transform: translateX(0);
    opacity: 1;
  }

  /* ==== FLUTUANDO ==== */
  92% {
    transform: translateX(0);
    opacity: 1;
  }

  /* saída suave */
  98% {
    transform: translateX(120px);
    opacity: 0;
  }

  100% {
    transform: translateX(120px);
    opacity: 0;
  }
}

/* onda vertical */
@keyframes wave {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

.header-link:hover {
  cursor: pointer;
  color: #111827;
  font-weight: 600;
}

/* Local filled button hover styles (kept scoped to NavBar) */
.btn-filled {
  transition:
    transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.18s,
    filter 0.18s,
    background-color 0.18s;
  will-change: transform, box-shadow, filter;
}
.btn-filled:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(2, 6, 23, 0.12);
  filter: brightness(0.97);
}
.btn-filled:active {
  transform: translateY(-1px) scale(0.995);
  box-shadow: 0 6px 12px rgba(2, 6, 23, 0.1);
  filter: brightness(0.92);
}
.btn-filled-dark:hover {
  filter: brightness(1.06);
}

::v-deep(.v-btn--active > .v-btn__overlay) {
  background-color: transparent !important;
}
</style>
