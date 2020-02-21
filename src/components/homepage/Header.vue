<template>
  <div class="header" >
    <b-navbar toggleable="sm" type="light"  variant="light" >
      <b-navbar-brand href="/home-page">
        <img style="width: 80px" src="src/assets/images/logo/favicon.png" alt="">
      </b-navbar-brand>
      <b-navbar-nav class="m-auto" >

        <b-nav-item href="/home-page" class="home-page">ANASAYFA</b-nav-item>

        <b-nav-item-dropdown text="KURUMSAL"  class="products" right >
          <b-dropdown-item  href="/about-us">HAKKIMIZDA</b-dropdown-item>
          <b-dropdown-item  href="#">VİZYON & MİSYON</b-dropdown-item>
        </b-nav-item-dropdown>
        <!--
            <b-nav-item-dropdown text="HİZMETLER" class="products" right >
                <b-dropdown-item href="#">OBG AHG Gel</b-dropdown-item>
                <b-dropdown-item href="#">OBGA Subgroup</b-dropdown-item>
                <b-dropdown-item href="#">OBG Comp Test</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>
        -->
        <b-nav-item-dropdown text="ÜRÜNLER" class="products" center >
          <b-dropdown-item href="/odakBloodGrouping">Odak Blood Grouping Gel Systems</b-dropdown-item>
          <b-dropdown-item href="/odak-blood-grouping-systems-diluent-ve-solusyonlar">ODAK Blood Grouping <br> Systems Dilüent Vw Solüsyonları</b-dropdown-item>
          <b-dropdown-item href="/odak-blood-reagent-slayt-tup-testler">ODAK Blood Grouping Reagent<br> Slayt  Ve Tüp Testler İçin</b-dropdown-item>
          <b-dropdown-item href="/odak-blood-grouping-red-blood-cells">ODAK Blood Grouping Red Blood Cells <br>(Reverse gruplama için)</b-dropdown-item>
          <b-dropdown-item href="/odak-blood-grouping-red-blood-cells-antikor">ODAK Blood Grouping Red Blood Cells<br>
            (Antikor tarama , tanımlama ve kontrol için)</b-dropdown-item>
          <b-dropdown-item href="/manuel-sistem">Manuel Sistem</b-dropdown-item>

        </b-nav-item-dropdown>
        <!--
          <b-nav-item-dropdown text="ONLİNE KATALOG" class="products" right >

          </b-nav-item-dropdown>
          -->
        <b-nav-item href="" class="home-page">ONLİNE KATALOG</b-nav-item>
        <b-nav-item href="/reference" class="home-page">REFERANSLAR</b-nav-item>
        <b-nav-item href="/contact" class="home-page">İLETİŞİM</b-nav-item>

      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        isHiding:false
      }
    }
  }
</script>

<style scoped>
  .home-page{
    list-style-type: none;

  }
  .products{
    list-style-type: none
  }
  .header{
    position:fixed;
    display:block;
    z-index:99;
    width:100%;
    min-width:100%;
    max-width:100%;
    height:auto;
    margin:0 auto;
    padding:0;
    top:0;
    left:0;
    border:none;
    outline:none;
    background-color:#FFF;
    text-align:center;

  }
  .isHiding{
    display: none;
  }
</style>
