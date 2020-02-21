<template>
  <div>
    <!--Contact Section-->
    <section id="contact">
      <div class="container">
        <div class="row ">
          <div class="col-md-6">
            <h2 class="py-3">İletişim Bilgileri</h2>
            <p>Bize aşağıdaki bilgilerden ulaşabilirsiniz.</p>
            <div class="address">
              <i id="fa-user" class="fa fa-user"><span class="user-text">UygarMed Medikal Bilişim Ve Danışmanlık Hizmetleri</span></i>
              <i id="fa-envelope" class="fa fa-envelope"><span class="envelope-text">uygarmedikal@gmail.com </span></i><br>
              <i id="fa-phone" class="fa fa-phone"><span class="phone-text">0507 732 2504</span></i>
              <i id="fa-home" class="fa fa-home"><span class="address-text">Soğanlık Yeni Mah. Baltacı Mehmet Paşa Sk.<br>  Helenium Twins sit.  B blok  Daire No:1/2 Kartal İstanbul </span></i> <br>
            </div>
          </div>

          <div class="col-md-6">
            <h2 class="py-3">İletişim Formu</h2>
            <p>Bizimle aşağıdaki form üzerinden iletişime geçebilirsiniz.</p>
            <form>
              <div class="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <div class="input-group input-group-md">
                  <span class="input-group-text"><i class="fa fa-user fa-1x"></i></span>
                  <input class="form-control" type="text" placeholder="Enter Name">

                </div>
              </div>

              <div class="form-group ">
                <label for="exampleFormControlInput1">Email</label>
                <div class="input-group input-group-md">
                  <span class=" input-group-text"><i class="fa fa-envelope"></i></span>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
              </div>

              <div class="form-group">
                <label for="exampleFormControlTextarea1">Mesaj</label>
                <div class="input-group input-group-md">
                  <span class="input-group-text"><i class="fa fa-pencil"></i></span>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Mesajınızı Giriniz"></textarea>
                </div>
              </div>
              <div class="btn btn-primary mb-4">Mesaj Gönder</div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section>

      <div class="map">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>Harita Üzerinde Yerimiz</h2>
              <p>Yerimizi aşağıdaki harita üzerinden kolayca bulabilirsiniz.</p>
              <!--Google map-->
              <div id="map-container-google-1" class="z-depth-1-half map-container" >
                <iframe id="iframe" src="https://maps.google.com/maps?q=Göztepe Mahallesi, Fahrettin Kerim Gökay Cd. 246/3 D:B Blok D&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Contact"
  }
</script>

<style scoped>

</style>
