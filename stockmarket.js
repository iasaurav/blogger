  
  
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
var locsvf= ['NSE:NIFTY50-INDEX','NSE:NIFTYBANK-INDEX','NSE:FINNIFTY-INDEX','BSE:SENSEX-INDEX','BSE:BANKEX-INDEX','NSE:MIDCPNIFTY-INDEX',];
for (let i = 0; i < locsvf.length; i++) {
window.open('https://trade.fyers.in/popout/index.html?symbol='+locsvf[i]+'&resolution=5&theme=light')}
			};

function yourlinkup() {
var locsvup= ['NSE_INDEX%7CNifty%2050?isPopup=true','NSE_INDEX%7CNifty%20Bank?isPopup=true','NSE_INDEX%7CNifty%20Fin%20Service?isPopup=true','BSE_INDEX%7CSENSEX?isPopup=true','BSE_INDEX%7CBANKEX?isPopup=true'];
for (let i = 0; i < locsvup.length; i++) {
window.open('https://tv.upstox.com/charts/'+locsvup[i]+'')}
			};
