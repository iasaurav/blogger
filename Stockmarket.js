  
  
  function openNewWindo() {
    // Get the selected value from the input field
    var selectedValu = document.getElementById("grow").value;
    // Open a new window with the selected value as the URL
   
    
    window.open("https://groww.in/charts/options/"+selectedValu+"", "_blank");
     
    
    
    
  }
  
  
  function openNewWindocrude() {
    // Get the selected value from the input field
    var crud = document.getElementById("crude").value;
    // Open a new window with the selected value as the URL
   
    
    window.open("https://trade.fyers.in/popout/index.html?symbol="+crud+"&resolution=5&theme=light", "_blank");
     
    
    
    
  }

function openNewWindowsensi() {
    // Get the selected value from the input field
    var sensib = document.getElementById("sensibull").value;
    // Open a new window with the selected value as the URL
   
    
    window.open("https://web.sensibull.com/chart?tradingSymbol="+sensib.slice(4,100)+"", "_blank");
     
    
    
  }




function openNewWindotv() {
    // Get the selected value from the input field
    var tradingviews = document.getElementById("tradingview").value;
    // Open a new window with the selected value as the URL
   
    
    window.open("https://in.tradingview.com/chart/?symbol="+tradingviews+"", "_blank");
     
    
    
    
  }







function yourlinkcsv() {
var locsvc= ["IDXI13:NIFTY 50","IDXI25:NIFTY BANK","IDXI27:FINNIFTY","IDXI51:SENSEX","IDXI69:BANKEX"];
for (let i = 0; i < locsvc.length; i++) {
window.open('https://tv.dhan.co/?symbol='+locsvc[i]+'&ispopup=true')}
			};
  
  
  
  
  
  function yourlinkfyers() {
var locsvf= ['NSE:NIFTY50','NSE:NIFTYBANK','NSE:FINNIFTY','BSE:SENSEX','BSE:BANKEX','NSE:MIDCPNIFTY',];
for (let i = 0; i < locsvf.length; i++) {
window.open('https://trade.fyers.in/popout/index.html?symbol='+locsvf[i]+'-INDEX&resolution=5&theme=light')}
