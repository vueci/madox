<template>
  <div>
    <div v-if="$route.path!=='/'" id="header" class="ui segment basic">
      <div class="ui segment basic grid">
        <div class="col-6">
          <span>
            <img src="/png/logo_.png" alt>
          </span>
        </div>
        <div class="align-right col-6">
          Nous suivre &nbsp;
          <i class="ui icon facebook big"></i>
          <i class="ui icon twitter big"></i>
          <i class="ui icon youtube big"></i>
        </div>
      </div>

      <div id="bar" class="ui segment basic">
        <div class="grid">
          <div style="opacity:.8;font-weight:bold;" class="col-2">
            <i class="ui icon gitter"></i> Web Agency
          </div>
          <div class="align-right col-10">
            <div class="bar">
              <ul>
                <nuxt-link tag="li" to="/" exact>
                  <i class="ui icon home"></i> Accueil
                </nuxt-link>
                <nuxt-link tag="li" to="/services">
                  <i class="ui icon th"></i>Services
                </nuxt-link>
                <nuxt-link tag="li" to="/portfolio">Portfolio</nuxt-link>
                <nuxt-link tag="li" to="/blog">
                  <i class="ui icon world"></i> Blog
                </nuxt-link>
                <nuxt-link tag="li" to="/devis">
                  <i class="ui icon edit"></i>Devis
                </nuxt-link>
                <nuxt-link tag="li" to="/contact">
                  <i class="ui icon phone"></i>
                  Contact
                </nuxt-link>
                <nuxt-link tag="li" to="/about">
                  <i class="ui icon info circle"></i> A propos
                </nuxt-link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nuxt/>
  </div>
</template>

<style lang="scss" scoped>
span img {
  width: 27%;
  min-width: 120px;
  max-width: 170px;
}
#header {
  background: black;
  color: white;
}

.bar ul li {
  display: inline;

  list-style: none;
}

.bar li:hover {
  opacity: 1;
  cursor: pointer;
}
.bar li {
  opacity: 0.8;
  background: #101010;
  padding: 1.3%;
}
.bar .nuxt-link-active {
  transition: 0.5s;
  opacity: 1;
  border-bottom: 5px solid #2e829d;

  border-radius: 1%;
}
</style>
