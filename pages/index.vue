<template>
  <section>
    <vue-particles
      style="z-index:-1"
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="70"
      shapeType="polygon"
      :particleSize="3"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
    <div>
      <div id="point">
        <br>
        <full-page ref="fullpage" :options="options">
          <div class="section">
            <h1>
              <p>MADOX.CI</p>
            </h1>
            <br>
            <h2 style="opacity:.7">Agence Web Digitale & Communication & Développement</h2>
            <div class="ui segment basic">
              <div class="align-center">
                <div class>
                  <div @click="search=true" id="btn" class="btn ui button circular">
                    <i class="ui icon search"></i>Que recherchez vous ?
                  </div>

                  <div
                    @click="$refs.fullpage.api.moveSectionDown()"
                    class="ui button circular basic inverted"
                  >NOS SERVICES</div>
                </div>
                <div class="ui segment basic inverted">
                  <p>
                    Siège : Cote d'ivoire Abidjan ,
                    Rivera Palmeraie ,Rosier Programme 2 , Barrière 2
                  </p>
                  <p style="padding:2%">
                    <i class="ui icon mail"></i>&nbsp;info@madox.ci |
                    <i class="ui icon phone"></i>&nbsp;22-49-89-34 / 76-44-15-49
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="section">
            <div class="ui segment basic">
              <br>
              <div class="ui three column grid">
                <div class="column ui segment inverted">
                  <span class="service">Marketing Digital</span>
                  <p>&nbsp;</p>
                  <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, nemo harum modi et quod non unde veniam ut reprehenderit rem aspernatur voluptatem doloribus voluptates eligendi fugiat eos amet sint sunt?</p>
                  </div>
                  <br>
                </div>
                <div class="column">
                  <span class="service">Web / Apps</span>
                  <p>&nbsp;</p>
                  <div>
                    <p>
                      Développent Application mobile
                      Multi plateforme.
                      <br>Développemnt Front & Backend
                      <br>Développement d'API
                      <br>Integration base de données
                    </p>
                    <br>
                  </div>
                </div>
                <div class="column ui segment inverted">
                  <span class="service">Studio Design</span>
                  <p>&nbsp;</p>
                  <div>
                    <p>
                      Direction de création
                      <br>Video Motion
                      <br>Stutio graphique & photo
                    </p>
                  </div>
                  <br>
                </div>
              </div>
              <br>
              <div @click="$router.push('/services')" class="ui circular red button">
                <i class="ui icon th"></i>
                En savoir plus sur nos services
              </div>
              <div @click="$refs.fullpage.api.moveSectionDown()" class="ui circular grey button">
                <i class="ui icon file"></i>
                Voir notre portfolio de projets
              </div>
            </div>
          </div>
          <div id="portfolio" class="section ui segment inverted">
            <div class="ui segment inverted basic">
              <h1>Projets de notre agence</h1>
            </div>
            <el-carousel :interval="4000" type="card" height="200px" loop autoplay>
              <el-carousel-item>
                <img src="/png/fab.png" alt>
              </el-carousel-item>
              <el-carousel-item>
                <img src="/png/sia.jpg" alt>
              </el-carousel-item>
              <el-carousel-item>
                <img src="/png/business-madox.jpg" alt>
              </el-carousel-item>
              <el-carousel-item>
                <img src="/png/jnm.jpg" alt>
              </el-carousel-item>
              <el-carousel-item>
                <img src="/png/orrick.jpg" alt>
              </el-carousel-item>
            </el-carousel>

            <div class="ui button basic inverted">
              <i class="ui icon linkify"></i>
              Voir toute nos créations
            </div>

            <div class="ui"></div>
          </div>
        </full-page>
      </div>
      <div id="social">
        <ul>
          <li>
            <i class="ui icon youtube red big"></i>
          </li>
          <li>
            <i class="ui icon facebook big"></i>
          </li>
          <li>
            <i class="ui icon twitter big"></i>
          </li>

          <li>
            <i class="ui icon instagram big"></i>
          </li>
        </ul>
      </div>
      <div id="remonter">
        <div @click="$refs.fullpage.api.moveSectionUp()" class="ui button black">
          <i class="ui icon arrow up"></i>
          Remonter
        </div>
      </div>
      <div id="menu">
        <i class="ui icon bars big"></i>
      </div>
      <div id="allright" class="allright">
        <p>Designed by Madox. Copyright © 2019 - Madox WebAgency. Tous droits réservés</p>
      </div>
    </div>

    <div v-if="search" id="search">
      <div class="ui segment basic">
        <div class="align-left grid">
          <div class="col-6">
            <p>
              <img src="/png/logo_.png" alt>
            </p>
          </div>
          <div class="align-right col-6">
            <div @click="search=false" class="ui button teal">
              <i class="ui icon close"></i>
              Réduire
            </div>
          </div>
        </div>

        <div class="ui segment basic align-center">
          <h2 style="opacity:.8">
            <i class="ui icon search"></i>
            Que recherchez vous ?
          </h2>
          <br>
          <div class="ui segment basic">
            <div class="ui three column grid">
              <div class="column">
                <h2>Marketing/ Management</h2>
                <br>
                <ul>
                  <nuxt-link tag="li" to="/">Demander un dévis</nuxt-link>
                  <nuxt-link tag="li" to="/">Booster votre activité</nuxt-link>
                  <nuxt-link tag="li" to="/">lorem lorem lorem</nuxt-link>
                </ul>
              </div>
              <div class="column">
                <h2>Développement / Tech</h2>
                <br>
                <ul>
                  <nuxt-link tag="li" to="/">Hébergement de site web</nuxt-link>
                  <nuxt-link tag="li" to="/">Avoir son prope site Web</nuxt-link>
                  <nuxt-link tag="li" to="/">Besoin d'une application mobile</nuxt-link>
                  <nuxt-link tag="li" to="/">Back office pour la gestion de votre activité</nuxt-link>
                </ul>
              </div>
              <div class="column">
                <h2>Animation et Design</h2>
                <br>
                <ul>
                  <nuxt-link tag="li" to="/">Besoin d'animation 2D</nuxt-link>
                  <nuxt-link tag="li" to="/">Conception de maquette</nuxt-link>
                  <nuxt-link tag="li" to="/">Animatique</nuxt-link>
                  <nuxt-link tag="li" to="/">Lorem lorme</nuxt-link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      search: false,
      options: {
        menu: "#menu",
        anchors: ["", "ourService", "ourPortfolio"],
        sectionsColor: ["", "", ""]
      }
    };
  }
};
</script>
<style lang="scss" scoped>
#point {
  font-size: 20px;
  position: fixed;
  top: 20%;
  margin: auto;
  left: 50%;
  overflow: hidden;
  height: 111vh;
  color: white;
  text-align: center;

  width: 110%;
  padding: 20%;

  transform: translate(-50%, -50%);
}

#portfolio {
  color: white;
}
#remonter {
  position: fixed;
  bottom: 0;
  right: 0;
}
.service {
  font-size: calc(0.5em + 1vw);
  width: 3%;
}

#menu {
  padding: 1.8%;
  position: fixed;
  color: #2e829d;
  top: 0;
  right: 0;
}
.service:hover {
  cursor: pointer;
  border-bottom: 1px solid white;
}
.column {
  width: 100%;
}
#social {
  position: fixed;
  top: 2%;
  left: 1%;

  height: 100%;
  top: 0;
}
#social ul li {
  list-style: none;
  padding: 10%;
}

#social li {
  margin: 34%;
}
p img {
  width: 30%;
}

section {
  overflow: hidden;
  background: #151515;
  color: white;
  height: 100vh;
}

#allright {
  position: fixed;
  bottom: 2%;
  width: 100%;
  text-align: center;
}

#search {
  top: 0;
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: black;
  color: white;
  ul li {
    list-style: none;
  }
}
</style>
