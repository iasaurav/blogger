const links = [
  { name: "Facebook", url: "https://facebook.com/", username:"iasaurav"},
  { name: "Instagram", url: "https://instagram.com/",username:"ia_aurav" },
  { name: "Twitter", url: "https://twitter.com/",username:"ia_aurav" },
  { name: "Telegram", url: "https://t.me/",username:"ia_aurav" },
  { name: "YouTube", url: "https://youtube.com/",username:"@Iasaurav" },
  { name: "Pinterest", url: "https://pinterest.com/",username:"iasaurav" },
  { name: "Medium", url: "https://medium.com/",username:"@ia_aurav" },
  { name: "GitHub", url: "https://github.com/",username:"iasaurav" },
  
];

// Function to open all URLs on click
function openAllURLs() {
  links.forEach(link => window.open(link.url+link.username, "_blank"));
}
