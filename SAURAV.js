const urlspt=['about.me/ia_aurav','facebook.com/iasaurav','instagram.com/ia_aurav','twitter.com/ia_aurav','linkedin.com/in/iasaurav','youtube.com/@Iasaurav','t.me/ia_aurav','pinterest.com/iasaurav','medium.com/@ia_aurav','codepen.io/ia_aurav','github.com/iasaurav','bit.ly/google-payme','bit.ly/paytm-saurav'];
  
  
  const ui=['About Me','Facebook','Instagram','Twitter','Linkedin','YouTube','Telegram','Pinterest','Medium','Codepen','Github','GooglePay','Paytm'];

$.each(urlspt, function(k, data) {
var ul_datpt = ['<a href="https://'+urlspt[k]+'"target="_blank">&nbsp;&nbsp;'+urlspt[k]+'</a></br>'];
            $("#ioplsnz").append(ul_datpt);
  
     });
  
  
  const upi=['0302jan@paytm','9504952797@kotak','saurav.2797@waaxis'];
  
  const ank=['State Bank','Kotak','Whatsapp'];;
  
  
  
  
  
  $.each(upi, function(ks, data) {
var ul_datpti = ['<option value="'+upi[ks]+'">'+ank[ks]+'</option>'];
            $("#mySelect").append(ul_datpti);
  
     });
  
  


function myFunction() {
  var x = document.getElementById("mySelect").value;
 

  
  
let encoded = "https://quickchart.io/qr?text="+encodeURIComponent("upi://pay?pa="+x+"&pn=Saurav%20Kumar&am=");
  document.getElementById("demo").innerHTML = x+"</br><img src='" +encoded+"'>";
}
