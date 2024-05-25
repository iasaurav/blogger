const store=[];
const male=[];
const female=[];
const train=[];
const link=[];
$.each(datp,function(j, data) {
var ul_dat = ['<option value="'+store[j]+'">'+'<option value="'+male[j]+'">'+'<option value="'+female[j]+'">'+'<option value="'+train[j]+'">'+'<option value="'+link[j]+'">'];
            $("#anrede").append(ul_dat);
   
   });
            
