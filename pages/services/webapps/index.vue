<template>
  <section>
    <div class="align-center ui segment basic">
      <div class="grid">
        <div class="col-6">
          <h2>Concetion de site web</h2>
          <br>
          <br>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla deserunt dignissimos libero incidunt odit iste, atque impedit praesentium quas nisi quasi corrupti alias mollitia iure asperiores veniam omnis rem laborum?</p>
          <br>
          <div @click="$router.push('/portfolio')" class="ui button teal">Voir notre porte folio</div>
        </div>

        <div class="col-6">
          <h2>Développement d'application mobile</h2>
          <br>
          <br>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla deserunt dignissimos libero incidunt odit iste, atque impedit praesentium quas nisi quasi corrupti alias mollitia iure asperiores veniam omnis rem laborum?</p>
          <br>
          <div @click="$router.push('/portfolio')" class="ui button teal">Voir notre porte folio</div>
        </div>

        <br>
      </div>
    </div>
    <div class="align-center">
      <div class="ui button">
        <i class="ui icon edit"></i>
        Demander un devis
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.col-6 {
  padding: 1%;
  background: #f7f8fc;
}
</style>
