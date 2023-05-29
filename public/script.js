const gonderbtn = document.getElementById('gonderbtn');
function gonder() {
  var marka = document.getElementById('marka').value;
  var km = document.getElementById('km').value;
  var email = document.getElementById('email').value;
  var telefon = document.getElementById('tel').value;
  var hasarg = document.getElementById('hasarg').value;
  var hasart = document.getElementById('hasart').value;
  var deger = document.getElementById('deger').value;
  var bilgi = document.getElementById('bilgi');
  if (marka === '' || km === '' || email === '' || telefon === '' || hasarg === '' || hasart === '' || deger === '') {
    bilgi.innerHTML = 'Lütfen tüm alanları doldurunuz.';
    return false;
  }else{
  var div1 = document.getElementById("kayit1");
  var div2 = document.getElementById("kayit2");
  var div3 = document.getElementById("kayit3");
  var div4 = document.getElementById("kayit4");
  var div5 = document.getElementById("kayit5");
  var div6 = document.getElementById("kayit6");
  var div7 = document.getElementById("kayit7");
  var div8 = document.getElementById("kayit8");
  var div9 = document.getElementById("kayit9");
  var div10 = document.getElementById("kayit10");
  var div11 = document.getElementById("kayit11");
  var div12 = document.getElementById("kayit12");
  var div13 = document.getElementById("kayit13");
  var degis1 = document.getElementById("icerik1");
  var degis2 = document.getElementById("icerik2");
  var degis3 = document.getElementById("icerik3");
  var degis4 = document.getElementById("icerik4");
  var degis5 = document.getElementById("icerik5");
  var degis6 = document.getElementById("icerik6");
  var degis7 = document.getElementById("icerik7");
  var degis8 = document.getElementById("icerik8");
  var degis9 = document.getElementById("icerik9");
  var degis10 = document.getElementById("icerik10");
  var degis11 = document.getElementById("icerik11");
  var degis12 = document.getElementById("icerik12");
  var degis13 = document.getElementById("icerik13");


  // <div> içeriğini alın
 degis1.value = div1.innerHTML;
 degis2.value = div2.innerHTML;
 degis3.value = div3.innerHTML;
 degis4.value = div4.innerHTML;
 degis5.value = div5.innerHTML;
 degis6.value = div6.innerHTML;
 degis7.value = div7.innerHTML;
 degis8.value = div8.innerHTML;
 degis9.value = div9.innerHTML;
 degis10.value = div10.innerHTML;
 degis11.value = div11.innerHTML;
 degis12.value = div12.innerHTML;
 degis13.value = div13.innerHTML;
  }


}

function kaydet1() {
    var radios = document.getElementsByName("flexRadioDefault");
    var kayit1 = document.getElementById("kayit1");
    gonderbtn.style.display = "block";
    gonderbtn.style.textAlign = "center";
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
            kayit1.textContent = "Arabanın Ön tamponu "+radios[i].nextElementSibling.textContent;
            break;
      }
    }
  }
  function kaydet2() {
    var radios = document.getElementsByName("flexRadioDefault");
    var kayit2 = document.getElementById("kayit2");
    gonderbtn.style.display = "block";
    gonderbtn.style.textAlign = "center";
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
            kayit2.textContent = "Arabanın Ön Kaputu "+radios[i].nextElementSibling.textContent;
            break;
      }
    }
  }
  function kaydet3() {
    var radios = document.getElementsByName("flexRadioDefault");
    var kayit3 = document.getElementById("kayit3");
    gonderbtn.style.display = "block";
    gonderbtn.style.textAlign = "center";
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
            kayit3.textContent = "Arabanın tavanı "+radios[i].nextElementSibling.textContent;
            break;
      }
    }
  }
  function kaydet4() {
    var radios = document.getElementsByName("flexRadioDefault");
    var kayit4 = document.getElementById("kayit4");
    gonderbtn.style.display = "block";
    gonderbtn.style.textAlign = "center";
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
            kayit4.textContent = "Arabanın sağ ön çamurluğu "+radios[i].nextElementSibling.textContent;
            break;
      }
    }
  }
  function kaydet5() {
    var radios = document.getElementsByName("flexRadioDefault");
    var kayit5 = document.getElementById("kayit5");
    gonderbtn.style.display = "block";
    gonderbtn.style.textAlign = "center";
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
            kayit5.textContent = "Arabanın sağ ön kapısı "+radios[i].nextElementSibling.textContent;
            break;
      }
    }
  }
  function kaydet6() {
    var radios = document.getElementsByName("flexRadioDefault");
    var kayit6 = document.getElementById("kayit6");
    gonderbtn.style.display = "block";
    gonderbtn.style.textAlign = "center";
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
            kayit6.textContent = "Arabanın sağ arka kapısı "+radios[i].nextElementSibling.textContent;
            break;
      }
    }
  }
  function kaydet7() {
    var radios = document.getElementsByName("flexRadioDefault");
    var kayit7 = document.getElementById("kayit7");
    gonderbtn.style.display = "block";
    gonderbtn.style.textAlign = "center";
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
            kayit7.textContent = "Arabanın sağ arka çamurluğu "+radios[i].nextElementSibling.textContent;
            break;
      }
    }
  }
  function kaydet8() {
    var radios = document.getElementsByName("flexRadioDefault");
    var kayit8 = document.getElementById("kayit8");
    gonderbtn.style.display = "block";
    gonderbtn.style.textAlign = "center";
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
            kayit8.textContent = "Arabanın sol ön çamurluğu "+radios[i].nextElementSibling.textContent;
            break;
      }
    }
  }
  function kaydet9() {
    var radios = document.getElementsByName("flexRadioDefault");
    var kayit9 = document.getElementById("kayit9");
    gonderbtn.style.display = "block";
    gonderbtn.style.textAlign = "center";
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
            kayit9.textContent = "Arabanın sol ön kapısı "+radios[i].nextElementSibling.textContent;
            break;
      }
    }
  }
  function kaydet10() {
    var radios = document.getElementsByName("flexRadioDefault");
    var kayit10 = document.getElementById("kayit10");
    gonderbtn.style.display = "block";
    gonderbtn.style.textAlign = "center";
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
            kayit10.textContent = "Arabanın sol arka kapısı "+radios[i].nextElementSibling.textContent;
            break;
      }
    }
  }
  function kaydet11() {
    var radios = document.getElementsByName("flexRadioDefault");
    var kayit11 = document.getElementById("kayit11");
    gonderbtn.style.display = "block";
    gonderbtn.style.textAlign = "center";
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
            kayit11.textContent = "Arabanın sol arka çamurluğu "+radios[i].nextElementSibling.textContent;
            break;
      }
    }
  }
  function kaydet12() {
    var radios = document.getElementsByName("flexRadioDefault");
    var kayit12 = document.getElementById("kayit12");
    gonderbtn.style.display = "block";
    gonderbtn.style.textAlign = "center";
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
            kayit12.textContent = "Arabanın bagajı "+radios[i].nextElementSibling.textContent;
            break;
      }
    }
  }
  function kaydet13() {
    var radios = document.getElementsByName("flexRadioDefault");
    var kayit13 = document.getElementById("kayit13");
    gonderbtn.style.display = "block";
    gonderbtn.style.textAlign = "center";
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
            kayit13.textContent = "Arabanın arka tamponu "+radios[i].nextElementSibling.textContent;
            break;
      }
    }
  }
  