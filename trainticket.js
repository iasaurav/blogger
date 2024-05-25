const urls=['Vindhyachal','Delhi','Varanasi','indore',];
var patna="Patna";
var duck="https://duckduckgo.com/?q=makemytriptrainticket%3A+";
var bing="https://www.bing.com/search?q=ixigotrainticket%3A";
var duck3="&kp=1&t=h_&ia=web";
var duck2="+to+";
var tab='"target="_blank';
$.each(urls, function(j, data) {
var ul_dat = ['<tr><td><a href="'+duck+patna+duck2+urls[j]+duck3+tab+'">'+urls[j]+'</a></td><td><a href="'+duck+urls[j]+duck2+patna+duck3+tab+'">'+urls[j]+'</a></td>'+'<td><a href="'+bing+patna+duck2+urls[j]+tab+'">'+urls[j]+'</a></td><td><a href="'+bing+urls[j]+duck2+patna+tab+'">'+urls[j]+'</a></td></tr>'];
$("#ban").append(ul_dat);
});


const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const dd = String(today.getDate()).padStart(2, '0');

const formattedDate = `${yyyy}-${mm}-${dd}?sort=2&ac=1`;






var amazon="https://www.amazon.in/train-tickets/search/";
var patna2="PNBE_Patna%20Jn_0/";
const urls2=['BDL_Vindhyachal_0/','NDLS_New%20Delhi_0/','BSB_Varanasi%20Jn_0/','VGLJ_Virangana%20Lakshmibai%20Jhs_0/'];
$.each(urls2,function(k, data) {
var ul_da = ['<tr><td><a href="'+amazon+patna2+urls2[k]+formattedDate+tab+'">'+urls[k]+'</a></td>'+'<td><a href="'+amazon+urls2[k]+patna2+formattedDate+tab+'">'+urls[k]+'</a></td></tr>'];
$("#ba").append(ul_da);
   
   });
