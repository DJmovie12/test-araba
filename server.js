const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.get('/onay', (req, res) => {
  res.sendFile('onay.html', { root: 'public' });
});
// Kullanıcı yorumunu almak ve e-posta gönderme işlemini tetiklemek için bir POST isteği işleyen bir rotaya sahip olun
app.post('/send', (req, res) => {
    const eposta = req.body.eposta;
    const phone = req.body.telefon;
    const adsoy = req.body.adsoy;
    const marka= req.body.marka;
    const km = req.body.km;
    const hasarg = req.body.hasarg;
    const hasart = req.body.hasart;
    const deger = req.body.deger;
    const tk = req.body.tk;
    const parca1 = req.body.icerik1;
    const parca2 = req.body.icerik2;
    const parca3 = req.body.icerik3;
    const parca4 = req.body.icerik4;
    const parca5 = req.body.icerik5;
    const parca6 = req.body.icerik6;
    const parca7 = req.body.icerik7;
    const parca8 = req.body.icerik8;
    const parca9 = req.body.icerik9;
    const parca10 = req.body.icerik10;
    const parca11 = req.body.icerik11;
    const parca12 = req.body.icerik12;
    const parca13 = req.body.icerik13;
    sendEmailToAdmin(eposta,phone,adsoy,marka,deger,km,hasarg,hasart,tk,parca1, parca2, parca3, parca4, parca5, parca6, parca7, parca8, parca9, parca10, parca11, parca12, parca13);
    res.redirect('/onay');
  });

// E-posta gönderme işlemini gerçekleştiren fonksiyon
async function sendEmailToAdmin(eposta, phone, adsoy, marka, deger, km, hasarg, hasart, tk, parca1, parca2, parca3, parca4, parca5, parca6, parca7, parca8, parca9, parca10, parca11, parca12, parca13) {
  try {
    const transporter = nodemailer.createTransport({
      // E-posta servisi ve kimlik doğrulama bilgilerini buraya girin
      service: 'Gmail',
      auth: {
        user: 'testimysr@gmail.com',//göndericek eposta
        pass: 'xpczilmmojotufpu'//göndrilecek epostanın criptolu şifresi
      }
    });

    const mailOptions = {
      from: 'testimysr@gmail.com',//göndericek eposta
      to: 'djmoviehesap@gmail.com',//kontrol eldiecek eposta
      subject: `Siteden kullanıcının Adı Soyadı: ${adsoy} epostası: ${eposta} telefonu: ${phone}`,
      html:`
      <h2>Aracın Sınıfı: ${marka}</h2><br>
      <h2>Aracın Piyasa Değeri: ${deger}</h2><br>
      <h2>Aracın Kilometresi: ${km}</h2><br>
      <h2>Aracın Hasar Tutarı: ${hasart}</h2><br>
      <h2>Arac: ${tk}</h2><br>
      <h2>Aracın Hasar Geçmişi: ${hasarg}<h2><br>
      <h2>Aracının kusurları:</h2><br>
      <h4>${parca1}<br>
      ${parca2}<br>
      ${parca3}<br>
      ${parca4}<br>
      ${parca5}<br>
      ${parca6}<br>
      ${parca7}<br>
      ${parca8}<br>
      ${parca9}<br>
      ${parca10}<br>
      ${parca11}<br>
      ${parca12}<br>
      ${parca13}</h4>`
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("E-posta gönderildi:", info);
  } catch (error) {
    console.log("E-posta gönderme hatası:", error);
  }
}
app.listen(process.env.PORT || 3000, () => {
    console.log('Sunucu çalışıyor...');
  });