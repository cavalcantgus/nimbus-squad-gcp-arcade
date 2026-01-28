<script>
export default {
  data: () => ({
    showCopyAlert: false,
    collapsed: false,
  }),

  methods: {
    copyFacilitatorCode() {
      const code = 'GCAFBR-26-3500'

      navigator.clipboard.writeText(code).then(() => {
        this.showCopyAlert = true

        setTimeout(() => {
          this.showCopyAlert = false
        }, 2500)
      })
    },

    toggle() {
      this.collapsed = !this.collapsed

      if (!this.collapsed) {
        this.$nextTick(() => {
          this.$refs.expandedSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        })
      }
    },

    goToGoogleTutorial() {
      this.$nextTick(() => {
        this.$refs.tutorialGoogle.$el.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      })
    },
  },
}
</script>

<template>
  <v-container class="d-flex flex-column justify-center py-16" id="home">
    <v-row class="d-flex justify-center py-16">
      <v-col cols="12" class="d-flex justify-center align-center flex-row">
        <v-badge dot class="blink-badge" bordered inline></v-badge>

        <span class="text-uppercase text-meta-sm text-semibold" style="color: #6b7280"
          >Temporada 2026 aberta</span
        >
      </v-col>
      <v-col cols="12" class="d-flex align-center flex-column">
        <span class="text-body-title" style="color: #111827">Aprenda a Nuvem com o</span>
        <span class="text-body-title google-gradient-text pb-2"> Google Cloud Arcade </span>
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <span class="hero-text">
          Uma jornada de aprendizado gamificada para transformar sua carreira.<br />
          Conquiste badges, acumule pontos e junte-se à vanguarda da <br />tecnologia.
        </span>
      </v-col>
      <v-col cols="auto" class="d-flex justify-center">
        <v-btn
          width="194px"
          height="50px"
          size="large"
          class="text-white d-flex align-center rounded-lg pa-6 elevation-0 btn-filled btn-filled-dark"
          style="background-color: #1c1c1c; line-height: 1"
          href="https://discord.gg/nFxTWgSwTx"
          target="_blank"
        >
          <span class="text-btn">Entrar no squad</span>
        </v-btn>
      </v-col>
      <v-col cols="auto" class="d-flex justify-center">
        <v-btn
          width="194px"
          append-icon="mdi-arrow-top-right-thin"
          size="large"
          class="elevation-0 d-flex align-center rounded-lg pa-6 bg-transparent"
          style="border: 1px solid #d1d5db"
          href="https://rsvp.withgoogle.com/events/arcade-facilitador"
          target="_blank"
        >
          <span style="color: #111827" class="text-btn">Ver Site Oficial</span>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="pt-16 mt-16 px-4 d-flex">
      <v-col cols="12" class="d-flex flex-column align-center ga-5 mb-10">
        <span class="text-section-title" style="color: #111827">Experiência Imersiva</span>
        <span style="color: #6b7280; font-size: 16px"
          >O que esperar da sua jornada no Arcade 2026
        </span>
      </v-col>
      <v-col cols="3">
        <div class="pa-8 rounded-xl cards d-flex flex-column ga-6">
          <div class="icon-box">
            <Icon width="32px" icon="twemoji:video-game"></Icon>
          </div>
          <div class="d-flex flex-column ga-2">
            <span class="text-card-title">Experiência Gamificada</span>
            <span class="card-description"
              >Cursos, labs e desafios que rendem badges e pontos.</span
            >
          </div>
        </div>
      </v-col>
      <v-col cols="3">
        <div class="pa-8 rounded-xl cards d-flex flex-column ga-6">
          <div class="icon-box">
            <Icon width="32px" icon="twemoji:handshake"></Icon>
          </div>
          <div class="d-flex flex-column ga-2">
            <span class="text-card-title">Parceria SoulCode</span>
            <span class="card-description"
              >Um esforço conjunto para capacitar talentos em Cloud.</span
            >
          </div>
        </div>
      </v-col>
      <v-col cols="3">
        <div class="pa-8 rounded-xl cards d-flex flex-column ga-6">
          <div class="icon-box">
            <Icon color="#00b1ff" width="32px" icon="tabler:diamond-filled"></Icon>
          </div>
          <div class="d-flex flex-column ga-2">
            <span class="text-card-title">Créditos Gratuitos</span>
            <span class="card-description">Ganhe acesso ao Google Skills sem custo.</span>
          </div>
        </div>
      </v-col>
      <v-col cols="3">
        <div class="pa-8 rounded-xl cards d-flex flex-column ga-6">
          <div class="icon-box">
            <Icon width="32px" icon="fluent-emoji-flat:rocket"></Icon>
          </div>
          <div class="d-flex flex-column ga-2">
            <span class="text-card-title">Seu Próprio Ritmo</span>
            <span class="card-description"
              >Estude quando quiser, sem prazos de curso tradicional.</span
            >
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
  <v-container class="" fluid style="background-color: #f6f8fa" id="about">
    <v-row class="pt-16 d-flex justify-center">
      <v-col cols="12" class="d-flex flex-column align-center ga-5 mb-10">
        <span class="text-section-title" style="color: #111827">Ecossistema de Elite</span>
        <span class="text-center" style="color: #6b7280; font-size: 16px; line-height: 1.5"
          >A união entre a infraestrutura do Google e a excelência educacional da <br />SoulCode.
        </span>
      </v-col>
      <v-col cols="6">
        <div class="rounded-xl bg-white pa-8 skills-card">
          <v-row class="d-flex align-center">
            <v-col cols="auto">
              <span
                class="text-meta-sm font-weight-bold px-3 py-1 rounded-xl text-uppercase"
                style="color: #2563eb; border: 1px solid #dbeafe; background-color: #eff6ff"
                >Plataforma Oficial</span
              >
            </v-col>
            <v-col cols="auto">
              <span class="text-meta-sm font-weight-medium text-uppercase" style="color: #9ca3af"
                >infraestrutura</span
              >
            </v-col>
            <v-col cols="12">
              <span class="text-card-title-lg">Google Skill Boost</span>
            </v-col>
            <v-col cols="12">
              <span class="card-description-base" style="text-align: justify">
                Antigo Qwiklabs, o Skills Boost é o portal definitivo de treinamento prático.<br />Aqui
                você não apenas lê, você <strong>executa</strong> em ambientes reais do Google
                Cloud<br />
                Console, ganhando experiência com ferramentas como Kubernetes,<br />BigQuery e AI
                Generativa.
              </span>
            </v-col>
            <v-col cols="4">
              <div class="metric-card pa-4 py-5 ga-1">
                <span class="metric-card-title">Hands-on Labs</span>
                <span class="metric-card-value">700+</span>
                <span class="text-meta-sm" style="color: #6b7280">Cenários reais</span>
              </div>
            </v-col>
            <v-col cols="4">
              <div class="metric-card pa-4 py-5 ga-1">
                <span class="metric-card-title">Skill Badges</span>
                <span class="metric-card-value">Quest-based</span>
                <span class="text-meta-sm" style="color: #6b7280">Prova de Habilidade</span>
              </div>
            </v-col>
            <v-col cols="4">
              <div class="metric-card pa-4 py-5 ga-1">
                <span class="metric-card-title">Cloud Console</span>
                <span class="metric-card-value">Sanbox</span>
                <span class="text-meta-sm" style="color: #6b7280">Ambiente Seguro</span>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-btn
                height="35px"
                size="small"
                class="elevation-0 rounded-xl btn-filled text-white"
                style="background-color: #4285f4"
                href="https://www.skills.google/?locale=pt_BR"
                target="_blank"
              >
                <span class="text-white" style="text-transform: none">Acessar Plataforma</span>
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>

      <v-col cols="3" class="">
        <div class="partner-card px-8 py-8 d-flex flex-column justify-space-between">
          <v-row>
            <v-col cols="auto">
              <img class="logo" src="@/assets/image.png" alt="" />
            </v-col>
            <v-col cols="auto" class="d-flex align-center text-uppercase ga-2">
              <span style="color: #0000ff" class="text-meta font-weight-bold text-white"
                >Parceiro</span
              >
              <v-divider style="width: 30px !important" opacity="0.5" color="#ffffff"></v-divider>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="12">
              <span class="text-card-title text-white">SoulCode Academy</span>
            </v-col>
            <v-col cols="12">
              <span class="text-meta" style="color: #bcc2ce"
                >A SoulCode é o motor de aceleração deste<br />Squad. Através de uma metodologia
                focada<br />em empregabilidade e "human tech", eles<br />garantem que o conhecimento
                de Cloud se<br />traduza em oportunidades reais no mercado brasileiro.</span
              >
            </v-col>
          </v-row>
          <v-spacer></v-spacer>
          <v-row class="d-flex align-end">
            <v-col cols="12">
              <div
                style="
                  background: rgba(0, 0, 0, 0.12);
                  color: #bcc2ce;
                  border: 1px solid rgba(0, 0, 255, 3.22);
                "
                class="pa-3 rounded-lg d-flex justify-center align-center"
              >
                <span class="text-meta"
                  >"Educamos com propósito para transformar vidas através da tecnologia."</span
                >
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="pa-8 rounded-xl cards-info d-flex flex-column ga-2">
          <div class="d-flex align-center ga-4 flex-row">
            <div style="background-color: #fffbeb; border-radius: 24px; padding: 4px">
              <Icon color="#FACC15" width="25px" icon="duo-icons:lamp"></Icon>
            </div>
            <span class="font-weight-bold" style="color: #111827">Metodologia Prática</span>
          </div>
          <div>
            <span class="card-description-sm"
              >Diferente de cursos tradicionais, aqui você aprende no fogo cruzado. Cada lab
              completado é um passo real em direção à sua primeira certificação Google Cloud.</span
            >
          </div>
        </div>
      </v-col>
      <v-col cols="5">
        <div class="pa-8 rounded-xl cards-info d-flex align-center justify-space-between pb-12">
          <!-- CONTAINER: ÍCONE + TÍTULO + DESCRIÇÃO -->
          <div class="d-flex flex-column ga-1" style="max-width: 70%">
            <!-- Ícone + Título -->
            <div class="d-flex align-center ga-4">
              <div style="background-color: #ecfdf5; border-radius: 24px; padding: 6px">
                <Icon color="#FACC15" width="25px" icon="fxemoji:chartupwardstrend" />
              </div>

              <span class="font-weight-bold" style="color: #111827"> Foco em Carreira </span>
            </div>

            <!-- Descrição -->
            <span class="card-description-sm">
              Junto à SoulCode, mapeamos as competências mais exigidas pelo mercado de Cloud para
              2026, focando em Data Engineering e AI.
            </span>
          </div>

          <!-- CONTAINER: CARD SECUNDÁRIO -->
          <div class="metric-card pa-2 py-3 ga-1 d-flex flex-column align-center">
            <span class="metric-card-title-md">Salário Médio Cloud</span>
            <span class="metric-card-value-md">R$ 12k+</span>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
  <v-container id="squad">
    <v-row class="pt-16 d-flex justify-center">
      <v-col cols="12" class="d-flex flex-column align-center ga-5 mb-10">
        <span class="text-section-title" style="color: #111827">Nimbus Vanguards</span>
        <span class="text-center" style="color: #6b7280; font-size: 16px; line-height: 1.5"
          >O squad oficial dos participantes determinados
        </span>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center">
      <v-col cols="8">
        <div class="rounded-xl pa-8 guild-card">
          <v-row class="d-flex">
            <v-col cols="9" class="d-flex flex-column ga-5">
              <span class="text-card-title-lg text-white">Aprendizado Real, No Seu Ritmo.</span>
              <span class="card-description-base" style="text-align: justify; color: #9ca3af">
                O Nimbus Vanguards é um squad criado para quem quer evoluir no Google Cloud Arcade
                sem pressão e sem formato engessado. Aqui não tem aula, prova ou cobrança, tem
                troca, prática, curiosidade e gente se ajudando de verdade.
              </span>
            </v-col>
            <v-col cols="auto">
              <v-icon color="#FFFFFF1A" size="140">mdi-account-multiple-outline</v-icon>
            </v-col>
          </v-row>
          <v-row style="color: #e5e7eb">
            <v-col cols="6" class="d-flex align-center ga-1">
              <v-icon color="#3B82F6">mdi-check-circle</v-icon>
              <span>Aprendizado em conjunto</span>
            </v-col>
            <v-col cols="6" class="d-flex align-center ga-1">
              <v-icon color="#3B82F6">mdi-check-circle</v-icon>
              <span>Dicas de Labs</span>
            </v-col>
            <v-col cols="6" class="d-flex align-center ga-1">
              <v-icon color="#3B82F6">mdi-check-circle</v-icon>
              <span>Facilitação leve</span>
            </v-col>
            <v-col cols="6" class="d-flex align-center ga-1">
              <v-icon color="#3B82F6">mdi-check-circle</v-icon>

              <span>Comunidade ativa</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-btn
                height="35px"
                size="small"
                class="elevation-0 rounded-xl btn-filled text-white"
                style="background-color: #4285f4"
                href="https://discord.gg/nFxTWgSwTx"
                target="_blank"
              >
                <span class="text-white" style="text-transform: none"
                  >Garantir Minha Vaga no Squad</span
                >
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
  <v-container fluid style="background-color: #f6f8fa" id="facilitator">
    <v-row class="pt-16 d-flex justify-center">
      <v-col cols="12" class="d-flex flex-column align-center ga-5 mb-10">
        <span class="text-section-title" style="color: #111827">Quem te Acompanha</span>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="5" class="d-flex justify-center">
        <div class="facilitator-card">
          <div class="facilitator-avatar-wrapper">
            <img
              class="facilitator-avatar"
              src="@/assets/Design sem nome (2).png"
              alt="Marcelo Cavalcanti"
            />
          </div>
          <div class="facilitator-content">
            <span class="facilitator-name">Marcelo Cavalcanti</span>
            <span class="facilitator-role">Facilitador do Arcade 2026</span>
            <span class="facilitator-bio"
              >Sou graduado em Ciência da Computação e desenvolvedor autônomo. Trabalho com
  Sistemas Distribuídos e arquitetura de aplicações, e estudo Cloud Computing
  de forma contínua para evoluir minhas soluções e compartilhar esse caminho.</span
            >
            <div class="facilitator-badges">
              <span class="badge-skill">Cloud Computing</span>
              <span class="badge-skill">DevOps</span>
              <span class="badge-skill">Web Dev</span>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="6" sm="4" md="2" class="badge-col">
        <img src="@/assets/badge-1.png" alt="Google Cloud Badge" class="badge" />
      </v-col>

      <v-col cols="6" sm="4" md="2" class="badge-col">
        <img src="@/assets/badge-2.png" alt="Google Cloud Badge" class="badge" />
      </v-col>

      <v-col cols="6" sm="4" md="2" class="badge-col">
        <img src="@/assets/certificate.png" alt="Google Cloud Certificate" class="certificate" />
      </v-col>

      <v-col cols="6" sm="4" md="2" class="badge-col">
        <img src="@/assets/badge-3.png" alt="Google Cloud Badge" class="badge" />
      </v-col>

      <v-col cols="6" sm="4" md="2" class="badge-col">
        <img src="@/assets/badge-4.png" alt="Google Cloud Badge" class="badge" />
      </v-col>
    </v-row>
  </v-container>
  <v-container fluid id="tutorial">
    <v-row class="pt-16 d-flex justify-center">
      <v-col cols="12" class="d-flex flex-column align-center ga-5 mb-10">
        <span class="text-section-title" style="color: #111827">Guia de Inscrição</span>
        <span class="text-center" style="color: #6b7280; font-size: 16px; line-height: 1.5"
          >Siga esses 3 passos para participar do programa
        </span>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center align-start">
      <v-col cols="4" class="">
        <v-col cols="12" class="">
          <div class="rounded-xl px-8 py-5 tuto-card">
            <v-row dense class="d-flex ga-2 align-center">
              <v-col cols="12" class="d-flex ga-3 align-center">
                <span class="text-card-title text-number1">1</span>
                <span class="text-card-title">Acesse o Portal</span>
              </v-col>
              <v-col cols="12">
                <span class="card-description-sm" style="text-align: justify">
                  Inicie o seu cadastro oficial no link abaixo para entrar no programa
                  <strong>Google Cloud Arcade 2026</strong>. Clique no botão e se inscreva.
                </span>
              </v-col>
            </v-row>
            <v-row class="">
              <v-col cols="8">
                <v-btn
                  height="35px"
                  size="small"
                  class="elevation-0 rounded-xl btn-filled text-white"
                  style="background-color: #4285f4"
                  href="https://rsvp.withgoogle.com/events/arcade-facilitador"
                  target="_blank"
                >
                  <span class="text-white" style="text-transform: none">Acessar Site Oficial</span>
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-col>

        <v-col cols="12" class="">
          <div class="rounded-xl px-8 py-5 tuto-card">
            <v-row dense class="d-flex ga-2 align-center">
              <v-col cols="12" class="d-flex ga-3 align-center">
                <span class="text-card-title text-number2">2</span>
                <span class="text-card-title">Por que criar uma conta nova?</span>
              </v-col>
              <v-col cols="12">
                <span class="card-description-sm" style="text-align: justify">
                  Ao preencher o formulário de inscrição, você será questionado se já possui uma conta no <strong>Google Skills</strong>.
A orientação oficial é que seja criada uma conta <strong>NOVA</strong>, exclusivamente para o programa, garantindo a correta vinculação da participação e o recebimento dos 3 meses de créditos gratuitos para a realização dos Labs (e-mail enviado a partir de 02/fev).
<br /><br />
                </span>
              </v-col>
            </v-row>

            <v-row dense class="">
              <v-col cols="auto">
                <v-btn class="elevation-0 bg-transparent pa-0" @click="goToGoogleTutorial">
                  <div class="d-flex align-center">
                    <span
                      class="text-meta-sm font-weight-bold"
                      style="text-transform: none; color: #16a34a"
                    >
                      Tutorial Google Skills
                    </span>

                    <v-icon size="18">mdi-arrow-right-thin</v-icon>
                  </div>
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-col>

        <v-col cols="12" class="">
          <div class="rounded-xl px-8 py-5 tuto-card" style="background-color: #0d1117">
            <v-row dense class="d-flex ga-2 align-center">
              <v-col cols="12" class="d-flex align-center ga-3">
                <span class="text-card-title text-white text-number3">3</span>
                <span class="text-card-title text-white">Utilize meu código</span>
              </v-col>
              <v-col cols="12">
                <span class="card-description-sm" style="text-align: justify">
                  No formulário de inscrição, procure pelo campo "Facilitator Code". É obrigatório
                  inserir o código abaixo para que eu possa acompanhar o seu progresso:
                </span>
              </v-col>
            </v-row>

            <v-row class="d-flex justify-center">
              <v-col cols="12">
                <div class="facilitator-code ga-2">
                  <div class="d-flex flex-row justify-space-between w-100">
                    <span class="text-meta-sm text-uppercase font-weight-bold"
                      >Facilitator Code</span
                    >
                    <v-spacer></v-spacer>
                    <span
                      style="color: #facc15"
                      class="text-meta-sm text-uppercase font-weight-bold"
                      >Obrigatório</span
                    >
                  </div>
                  <div class="box-code ga-5">
                    <span class="text-white">GCAFBR-26-3500</span>
                    <v-btn size="small" block @click="copyFacilitatorCode">
                      <span class="text-btn">Copiar Código</span>
                    </v-btn>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-col>
      <v-col cols="6" class="">
        <v-col cols="12">
          <img src="@/assets/tuto-1.png" alt="" class="img-tuto-1" />
        </v-col>
        <v-col cols="8" class="">
          <img src="@/assets/tuto-2.png" class="img-tuto-2" alt="" />

          <!-- <div class="tuto-card">
                <div class="d-flex ga-3">
                 <span class="text-card-title">3</span>
                <span class="text-card-title">Utilize meu código</span>
               </div>
                <span class="card-description-sm" style="text-align: justify">
                  No formulário de inscrição, procure pelo campo "Facilitator Code". É obrigatório inserir o código abaixo para que eu possa acompanhar o seu progresso:  
                </span>
               </div> -->
        </v-col>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center align-center"> </v-row>
  </v-container>
  <v-container fluid style="background-color: #f6f8fa" class="pb-16">
    <v-row class="pt-16 d-flex justify-center" ref="tutorialGoogle">
      <v-col cols="12" class="d-flex flex-column align-center ga-5 mb-10">
        <div class="d-flex align-center">
          <span class="text-section-title" style="color: #111827">Configurar Perfil Público</span>
          <v-btn @click="toggle" class="ml-4 pa-0 bg-transparent elevation-0" icon>
            <v-icon size="50" :class="{ 'rotate-180': !collapsed }" class="transition-transform"
              >mdi-chevron-down</v-icon
            >
          </v-btn>
        </div>
        <span class="text-center" style="color: #6b7280; font-size: 16px; line-height: 1.5"
          >Siga esses 3 passos para configurar sua conta do Google Skills
        </span>
      </v-col>
    </v-row>
    <v-expand-transition>
      <div v-show="!collapsed" class="overflow-hidden" ref="expandedSection">
        <v-row class="d-flex justify-center align-start" v-show="!collapsed">
          <v-col cols="4" class="">
            <v-col cols="12" class="">
              <div class="rounded-xl px-8 py-5 tuto-card-2">
                <v-row dense class="d-flex ga-2 align-center">
                  <v-col cols="12" class="d-flex ga-3 align-center">
                    <span class="text-card-title text-number1">1</span>
                    <span class="text-card-title">Acesse o Portal</span>
                  </v-col>
                  <v-col cols="12">
                    <span class="card-description-sm" style="text-align: justify">
                      Acesse o portal oficial do
                      <span
                        style="color: #2563eb"
                        class="text-decoration-underline font-weight-bold"
                        >Google Skills
                      </span>
                      e logue com sua conta nova. Se você ainda não tiver uma conta, clique no botão
                      abaixo e crie uma. Esse será seu ambiente principal de estudos
                    </span>
                  </v-col>
                </v-row>
                <v-row class="">
                  <v-col cols="8">
                    <v-btn
                      height="35px"
                      size="small"
                      class="elevation-0 rounded-xl btn-filled text-white"
                      style="background-color: #4285f4"
                      href="https://www.skills.google/?locale=pt_BR"
                      target="_blank"
                    >
                      <span class="text-white" style="text-transform: none"
                        >Acessar Site Oficial</span
                      >
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-col>

            <v-col cols="12" class="">
              <div class="rounded-xl px-8 py-5 tuto-card-2">
                <v-row dense class="d-flex ga-2 align-center">
                  <v-col cols="12" class="d-flex ga-3 align-center">
                    <span class="text-card-title text-number2">2</span>
                    <span class="text-card-title">Clique no seu Perfil</span>
                  </v-col>
                  <v-col cols="12">
                    <span class="card-description-sm" style="text-align: justify">
                      No canto superior direito, clique na sua imagem de perfil. No menu que abrir,
                      clique em <strong>configurações</strong>. Você será redirecionado para as
                      configurações da sua conta.
                    </span>
                  </v-col>
                </v-row>
              </div>
            </v-col>

            <v-col cols="12" class="">
              <div class="rounded-xl px-8 py-5 tuto-card-2">
                <v-row dense class="d-flex ga-2 align-center">
                  <v-col cols="12" class="d-flex ga-3 align-center">
                    <span class="text-card-title text-number3">3</span>
                    <span class="text-card-title">Configurar Perfil Público</span>
                  </v-col>
                  <v-col cols="12">
                    <span class="card-description-sm" style="text-align: justify">
                      Você estará na aba <strong>Conta</strong>. Caso não esteja, clique nela. Role
                      até o fim e encontre as seções <strong>Credly</strong> e
                      <strong>Visibilidade Pública</strong>. Marque ambas as checkbox de ambas as
                      seções. Um link do seu perfil público será gerado, copie esse link e guarde,
                      pois precisaremos futuramente.
                    </span>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-col>
          <v-col cols="6" class="align-center pa-0">
            <div class="d-flex align-center">
              <v-col cols="7" class="">
                <img src="@/assets/tuto-4.png" alt="" class="img-tuto-1" />
              </v-col>
              <v-col cols="5">
                <img src="@/assets/tuto-3.png" class="img-tuto-2" alt="" />
              </v-col>
            </div>
            <div>
              <v-col cols="12">
                <img src="@/assets/tuto-5.png" class="img-tuto-2" alt="" />
              </v-col>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-expand-transition>

    <v-row class="d-flex justify-center align-center"> </v-row>
  </v-container>

  <!-- FOOTER -->
  <v-container fluid class="footer-container">
    <v-row class="footer-content">
      <!-- Coluna 1: Branding -->
      <v-col cols="3" class="footer-column">
        <div class="footer-brand">
          <div class="google-logo-anim d-flex align-center">
            <svg viewBox="0 0 120 40" width="120" height="40">
              <g class="dots">
                <circle cx="18" cy="20" r="4" class="dot blue" />
                <circle cx="34" cy="20" r="4" class="dot red" />
                <circle cx="50" cy="20" r="4" class="dot yellow" />
                <circle cx="66" cy="20" r="4" class="dot green" />
              </g>
            </svg>
          </div>
          <span class="footer-title">Google Cloud Arcade 2026</span>
          <span class="footer-description">
            Capacitando a próxima geração de especialistas em nuvem através de uma jornada
            gamificada e apoio comunitário.
          </span>
          <div class="social-links">
            <v-btn icon size="small" class="social-btn" href="https://www.linkedin.com/in/cavalcantgus/"
            target="_blank">
              <v-icon size="20" color="#6b7280">mdi-linkedin</v-icon>
            </v-btn>
            <v-btn icon size="small" class="social-btn" href="https://github.com/cavalcantgus"
            target="_blank">
              <v-icon size="20" color="#6b7280">mdi-github</v-icon>
            </v-btn>
          </div>
        </div>
      </v-col>

      <v-divider vertical class="footer-divider" :thickness="1" :opacity="1"></v-divider>

      <!-- Coluna 2: Navegação -->
      <v-col cols="2" class="footer-column">
        <div class="footer-section">
          <span class="footer-subtitle">Navegação</span>
          <nav class="footer-nav">
            <v-btn variant="text" class="footer-nav-btn" to="#home">
              <v-icon size="16" class="nav-icon">mdi-home-outline</v-icon>
              <span>Início</span>
            </v-btn>
            <v-btn variant="text" class="footer-nav-btn" to="#about">
              <v-icon size="16" class="nav-icon">mdi-information-outline</v-icon>
              <span>Sobre</span>
            </v-btn>
            <v-btn variant="text" class="footer-nav-btn" to="#squad">
              <v-icon size="16" class="nav-icon">mdi-account-multiple-outline</v-icon>
              <span>Squad</span>
            </v-btn>
            <v-btn variant="text" class="footer-nav-btn" to="#facilitator">
              <v-icon size="16" class="nav-icon">mdi-account-outline</v-icon>
              <span>Facilitador</span>
            </v-btn>
            <v-btn variant="text" class="footer-nav-btn" to="#tutorial">
              <v-icon size="16" class="nav-icon">mdi-school-outline</v-icon>
              <span>Tutorial</span>
            </v-btn>
          </nav>
        </div>
      </v-col>

      <!-- Coluna 3: Plataformas -->
      <v-col cols="2" class="footer-column">
        <div class="footer-section ">
          <span class="footer-subtitle">Plataformas</span>
          <nav class="footer-nav">
            <v-btn variant="text" class="footer-nav-btn" href="https://www.skills.google/?locale=pt_BR"
                target="_blank">
              <v-icon size="16" class="nav-icon">mdi-google</v-icon>
              <span>Google Skills</span>
            </v-btn>
            <v-btn variant="text" class="footer-nav-btn" href="https://rsvp.withgoogle.com/events/arcade-facilitador"
          target="_blank">
              <v-icon size="16" class="nav-icon">mdi-cloud</v-icon>
              <span>Arcade 2026</span>
            </v-btn>
            <v-btn variant="text" class="footer-nav-btn" href="https://soulcode.com/"
                target="_blank">
              <v-icon size="16" class="nav-icon">mdi-heart-outline</v-icon>
              <span>SoulCode</span>
            </v-btn>
          </nav>
        </div>
      </v-col>

      <v-divider vertical class="footer-divider" :thickness="1" :opacity="1"></v-divider>

      <!-- Coluna 4: Contato -->
      <v-col cols="4" class="footer-column footer-contact">
        <div class="footer-section">
          <div class="contact-header">
            <v-icon color="#4285f4" >mdi-help-circle-outline</v-icon>
            <span class="footer-subtitle">Tem dúvidas?</span>
          </div>
          <span class="footer-description">
            Dúvidas sobre o cadastro ou o código do facilitador?
          </span>
          <v-btn class="contact-btn d-flex align-center" href="https://wa.me/5598947008229" target="_blank">
            <v-icon class="px-3" size="18">mdi-email-outline</v-icon>
            <span class="">Contactar</span>
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- Footer Bottom -->
    <v-divider class="footer-bottom-divider" :thickness="1" :opacity="1"></v-divider>
    <v-row class="footer-bottom">
      <v-col cols="12" class="d-flex justify-space-between align-center">
        <span class="footer-copyright text-uppercase"
          >© 2026 Nimbus Vanguards • Community Driven</span
        >
        <v-spacer></v-spacer>
        <div class="footer-bottom-links">
          <span>
            Disclaimer: Este site é uma iniciativa educacional independente conduzida por um facilitador e não possui vínculo oficial, societário ou de representação direta com o Google LLC ou suas subsidiárias.
          </span>
        </div>
      </v-col>
    </v-row>
  </v-container>
  <!-- Alerta elegante para confirmação de cópia -->
  <v-snackbar
    v-model="showCopyAlert"
    location="bottom right"
    color="#1bb623"
    variant="elevated"
    rounded="lg"
    :elevation="8"
    transition="slide-y-reverse-transition"
  >
    <div class="d-flex align-center ga-3">
      <v-icon icon="mdi-check-circle" color="white" size="24"></v-icon>
      <span class="text-white font-weight-medium">Código copiado com sucesso!</span>
    </div>
  </v-snackbar>
</template>

<style scoped>
.blink-badge:deep(.v-badge__badge) {
  animation: pulse-active 1.8s ease-in-out infinite;
}
::v-deep(.v-badge__badge) {
  width: 7px;
  height: 7px;
  min-width: 7px;
  border-radius: 50%;
  background-color: #2e7d32;

  top: 45% !important;
  right: auto !important;
  left: 0;
  transform: translateY(-25%);

  box-shadow: 0 0 0 1px #2e7d32;
}

@keyframes pulse-active {
  0% {
    background-color: #1bb623;
    box-shadow: 0 0 0 1px #1bb623;
  }

  50% {
    background-color: #08ce12;
    box-shadow: 0 0 0 3px rgba(67, 160, 71, 0.6);
  }

  100% {
    background-color: #1bb623;
    box-shadow: 0 0 0 1px #1bb623;
  }
}

.google-gradient-text {
  background: linear-gradient(
    90deg,
    #4285f4 0%,
    /* Azul */ #ea4335 25%,
    /* Vermelho */ #fbbc05 50%,
    /* Amarelo */ #34a853 75% /* Verde */
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.hero-text {
  font-size: 1.25rem;
  color: #6b7280;
  display: inline-block; /* essencial */ /* ajusta aqui */
  text-align: center; /* opcional */
  line-height: 1.75rem; /* ajusta aqui */
}

::v-deep(.v-btn .v-icon) {
  --v-icon-size-multiplier: '1.2';
  color: #111827;
}

.cards {
  border: 1px solid #f3f4f6;
  background-color: #ffffff;
  height: 239.5px;
  transition:
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.3s ease;
}

.cards:hover {
  border-color: #4285f4;
  transform: translateY(-6px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);
}

.icon-box {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background-color: #f9fafb;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cards:hover .icon-box {
  background-color: #eff6ff;
}

.cards-info {
  border: 1px solid #e5e7eb;
  background-color: #ffffff;
  transition:
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0 1px 2px rgba(0, 0, 0, 0.05),
    border-color 0.3s ease;
}

.metric-card {
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;
  border: 1px solid #f3f4f6;
  border-radius: 12px;
}

.skills-card {
  border: 1px solid #e5e7eb;

  position: relative;
  overflow: hidden; /* ESSENCIAL */
}

.skills-card::after {
  content: '';
  position: absolute;

  width: 331.5px;
  height: 331.5px;
  border-radius: 50%;

  right: -10%;
  bottom: -10%;

  background: radial-gradient(
    circle at 30% 30%,
    #e0ecff 0%,
    #c7ddff 40%,
    #a5c7ff 65%,
    #7aa7ff 85%,
    #4f7cff 100%
  );

  opacity: 0.45;
  z-index: 0;
}

.skills-card > * {
  position: relative;
  z-index: 1;
}

.partner-card {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  background-color: #0000ff;

  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.28);

  box-shadow:
    0 18px 45px rgba(0, 0, 0, 0.48),
    inset 0 0 0 1px rgba(255, 255, 255, 0.05);

  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;
}

/* Camada que puxa pro preto (menos agressiva) */
.partner-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    145deg,
    rgba(0, 0, 0, 0.45),
    rgba(0, 0, 0, 0.12) 60%,
    rgba(0, 0, 0, 0.5)
  );
  pointer-events: none;
  z-index: 0;
}

/* Glow azul levemente mais presente */
.partner-card::after {
  content: '';
  position: absolute;
  top: -45%;
  left: -30%;
  width: 160%;
  height: 90%;
  background: radial-gradient(circle, rgba(0, 0, 255, 0.42), transparent 70%);
  opacity: 0.4;
  pointer-events: none;
  z-index: 1;
}

/* Hover sutil */
.partner-card:hover {
  transform: translateY(-3px);
  box-shadow:
    0 28px 65px rgba(0, 0, 0, 0.58),
    inset 0 0 0 1px rgba(0, 0, 255, 0.28);
}

.partner-card > * {
  position: relative;
  z-index: 2;
}

.logo {
  background-color: #f9fafb;
  border: 1px solid rgba(0, 0, 255, 3.22);
  padding: 14px;
  margin: auto;
  max-width: 40%;
  border-radius: 12px;
}

.guild-card {
  border: 1px solid #e5e7eb;
  background-color: #1a1a1a;
  position: relative;
  overflow: hidden; /* ESSENCIAL */
}

.avatar {
  max-width: 400px; /* controla o tamanho máximo */
  width: 100%;
  height: auto;
  display: block;
  border-radius: 100%;
}

.adjectives {
  background-color: #f3f4f6;
  padding: 5.5px 10.5px;
  border-radius: 12px;
  color: #4b5563;
  line-height: 0.9 !important;
}

/* Facilitator Card Styling */
.facilitator-card {
  border-top: 6px solid #2563eb !important;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  background: linear-gradient(135deg, #ffffff 0%, #f9fbfc 100%);
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  padding: 32px 28px;
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.04),
    0 2px 4px rgba(0, 0, 0, 0.02);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  max-width: 360px;
  width: 100%;
}

.facilitator-card:hover {
  border-color: #d1d5db;
  box-shadow:
    0 16px 32px rgba(0, 0, 0, 0.08),
    0 4px 8px rgba(0, 0, 0, 0.04);
  transform: translateY(-4px);
}

.facilitator-avatar-wrapper {
  position: relative;
  flex-shrink: 0;
}

.facilitator-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #ffffff;
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.12),
    inset 0 0 0 1px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.facilitator-card:hover .facilitator-avatar {
  transform: scale(1.05);
}

.facilitator-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: center;
  width: 100%;
}

.facilitator-name {
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  letter-spacing: -0.3px;
}

.facilitator-role {
  font-size: 14px;
  font-weight: 600;
  color: #2563eb;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.facilitator-bio {
  font-size: 14px;
  line-height: 1.6;
  color: #6b7280;
  margin: 4px 10px;
  text-align: justify;
}

.facilitator-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 8px;
}

.badge-skill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 7px 14px;
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  border: 1px solid #d1d5db;
  border-radius: 14px;
  font-size: 10px;
  font-weight: 600;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  transition: all 0.25s ease;
  cursor: default; 
}

.badge-skill:hover {
  background: linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%);
  border-color: #9ca3af;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.img-tuto-1 {
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
  border-radius: 12px;
}

.img-tuto-2 {
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
  border-radius: 12px;
}

.tuto-card {
  border: 1px solid #e5e7eb;
  background-color: #f9fafb;
  position: relative;
  overflow: hidden; /* ESSENCIAL */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.tuto-card-2 {
  border: 1px solid #e5e7eb;
  background-color: #fff;

  position: relative;
  overflow: hidden; /* ESSENCIAL */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.facilitator-code {
  color: #6b7280;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: #161b22;
  border-radius: 12px;
  padding: 21px;
  padding-top: 16px;
}

.box-code {
  font-size: 21px;
  width: 100%;
  background-color: #00000033;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 17.5px;
  border-radius: 12px;
}

.text-number1,
.text-number2,
.text-number3 {
  background-color: #2563eb;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.text-number2 {
  background-color: #16a34a;
}

.text-number3 {
  background-color: #f59e0b;
}

.rotate-180 {
  transform: rotate(180deg);
}
.transition-transform {
  transition: transform 0.3s ease;
}

/* Filled buttons: subtle hover + elevation animation */
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
.btn-filled:focus-visible {
  outline: none;
  box-shadow: 0 0 0 6px rgba(66, 133, 244, 0.08);
}

/* For very dark filled buttons, slightly lighten on hover for better contrast */
.btn-filled-dark:hover {
  filter: brightness(1.06);
}

.badge-col {
  display: flex;
  justify-content: center;
  align-items: center;
}

.badge {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.badge,
.certificate {
  width: 100%;
  max-width: 90%;
  height: auto;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  filter: grayscale(0%) brightness(1);
  opacity: 1;
  cursor: pointer;
  animation: float 4s ease-in-out infinite;
}

.badge:hover,
.certificate:hover {
  transform: scale(1.12) translateY(-8px) !important;
  filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.15));
}

.badge:active,
.certificate:active {
  transform: scale(1.05) translateY(-4px) !important;
}

/* ===== FOOTER STYLES ===== */

.footer-container {
  background: linear-gradient(135deg, #0f172a 0%, #111827 50%, #0d1117 100%);
  position: relative;
  overflow: hidden;
  padding: 64px 32px 24px;
}

.footer-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(66, 133, 244, 0.3), transparent);
}

.footer-container::after {
  content: '';
  position: absolute;
  top: -40%;
  right: -20%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(66, 133, 244, 0.08), transparent);
  border-radius: 50%;
  pointer-events: none;
}

.footer-content {
  position: relative;
  z-index: 1;
  align-items: flex-start;
  justify-content: center;
  gap: 0;
}

.footer-column {
  padding: 0 32px !important;
  display: flex;
  flex-direction: column;
}

.footer-divider {
    opacity: 0.3;

  margin: 0 16px;
}

.footer-bottom-divider {
  opacity: 0.3;
  margin: 40px 0 24px 0;
}

/* Brand Section */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.brand-icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(66, 133, 244, 0.15), rgba(66, 133, 244, 0.05));
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(66, 133, 244, 0.2);
}

.footer-title {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.4px;
}

.footer-description {
  font-size: 14px;
  line-height: 1.6;
  color: #9ca3af;
  margin-top: 4px;
}

.social-links {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}

.social-btn {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: rgba(107, 114, 128, 0.1);
  border-radius: 10px;

  &:hover {
    background: linear-gradient(135deg, rgba(66, 133, 244, 0.2), rgba(66, 133, 244, 0.1));
    transform: translateY(-3px);

    :deep(.v-icon) {
      color: #4285f4 !important;
    }
  }
}

/* Footer Section */
.footer-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer-subtitle {
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  position: relative;
  padding-bottom: 8px;
}

.footer-subtitle::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 24px;
  height: 2px;
  background: linear-gradient(90deg, #4285f4, #34a853);
  border-radius: 1px;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-nav-btn {
  color: #9ca3af !important;
  font-size: 12px;
  justify-content: flex-start;
  padding: 8px 0 !important;
  transition: all 0.25s ease;
  min-width: unset;
  height: auto;

  .nav-icon {
    margin-right: 8px;
    opacity: 0.6;
    transition: all 0.25s ease;
  }

  &:hover {
    color: #4285f4 !important;
    padding-left: 4px;

    .nav-icon {
      opacity: 1;
      color: #4285f4 !important;
    }
  }
}

/* Contact Section */
.footer-contact {
  display: flex;
  align-items: flex-end;
  
}

.contact-header {
  display: flex;
  gap: 12px;
  align-items: start;
  margin-bottom: 8px;
}

.contact-btn {
  background: linear-gradient(135deg, #4285f4, #2563eb) !important;
  color: white !important;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: none;
  font-size: 14px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(66, 133, 244, 0.3);
  }

  &:active {
    transform: translateY(-1px);
  }
}

/* Footer Bottom */
.footer-bottom {
  position: relative;
  z-index: 1;
  padding: 0px 10px;
  align-items: center;
}

.footer-copyright {
  font-size: 13px;
  color: #6b7280;
  font-weight: 500;
}

.footer-bottom-links {
  width: 30%;
  display: flex;
  justify-items: end;
  align-items: center;
  color:#6b7280 ;
  font-size: 10px;
  line-height: 1.5;
  text-align: end;
}

.footer-bottom-btn {
  color: #9ca3af !important;
  font-size: 13px;
  padding: 0 !important;
  transition: all 0.25s ease;

  &:hover {
    color: #4285f4 !important;
  }
}

.divider-dot {
  color: #4b5563;
  font-weight: bold;
}

/* Responsive Footer */
@media (max-width: 1200px) {
  .footer-container {
    padding: 48px 24px 20px;
  }

  .footer-column {
    padding: 0 20px !important;
  }

  .footer-divider {
    margin: 0 12px;
  }
}

@media (max-width: 960px) {
  .footer-content {
    flex-direction: column;
    gap: 32px;
  }

  .footer-column {
    padding: 0 !important;
  }

  .footer-divider {
    display: none;
  }

  .footer-bottom-divider {
    margin: 32px 0 20px 0;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }

  .footer-bottom-links {
    justify-content: center;
  }
}

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

::v-deep(.v-btn--active > .v-btn__overlay) {
  background-color: transparent !important;
}
</style>
