document.write("<div id='whatsappbanking'><\/div>");
// Sample array of objects containing name, mobile number, and message
var data = [
  { name: "State Bank Of India", mobileNumber: "9022690226", message: "Balance" },
  { name: "Kotak Bank", mobileNumber: "02266006022", message: "Balance" },
  
  { name: "Union Bank", mobileNumber: "9666606060", message: "Balance" },
  
    { name: "Axis Bank", mobileNumber: "7036165000", message: "Balance" },
    { name: "Bank Of Baroda", mobileNumber: "8433888777", message: "hi" },
    { name: "Fi-Bank", mobileNumber: "8047485490", message: "hi" },
    { name: "HDFC Bank", mobileNumber: "7070022222", message: "hi" },
    { name: "IDBI Bank", mobileNumber: "8860045678", message: "hi" },
    { name: "Indusind Bank", mobileNumber: "2244066666", message: "hi" },
    
    { name: "Punjab National Bank", mobileNumber: "9264092640", message: "hi" },
    
    
];


// Function to generate the table
function generateTable(data) {
    var table = '<table id="paylater">';
    table += '<tr><th>Name</th><th>Mobile Number</th><th>Message</th></tr>';
    for (var i = 0; i < data.length; i++) {
        table += '<tr>';
        table += '<td>' + data[i].name+'</td>';
      table += '<td><a href="//wa.me/91'+data[i].mobileNumber+"?text="+data[i].message+'">'+data[i].mobileNumber+'<a></td>';
        table += '<td><a href="//wa.me/91'+data[i].mobileNumber+'?text='+data[i].message+'">Account-Balance<a></td>';
        table += '</tr>';
    }
    table += '</table>';
    return table;
}

// Display the table in the HTML document
document.getElementById('whatsappbanking').innerHTML = generateTable(data);
