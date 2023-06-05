  var Isim = document.getElementById("txtIsim");
  var eklemeButonu =  document.getElementById("btnEkle");
  var temizlemeButonu = document.getElementById("btnTemizle");
  var liste = document.getElementById("liste");

  //addString
  eklemeButonu.addEventListener('click',function Ekle() {
    var altaEkle = Isim.value + " <br/> ";
    liste.innerHTML += altaEkle;
    Isim.value = "";
    Isim.focus();
    
  });
  //deleteString
  temizlemeButonu.addEventListener('click',function Temizle(){
    liste.innerHTML = "";
    Isim.value = "";
    Isim.focus();
  });


