const photos = [
    "home/1.jpg",
    "home/2.jpg",
    "home/3.jpg",
    "home/4.jpg",
    "home/5.jpg"
    
  ];
const names= [
    "Margherita Pizza",
    "Lasagna",
    "Caprese Salad",
    "Carbonara",
    "Saltimbocca-alla-Romana"

];
  let k = 0;
  let slideshowInterval;

  const photoElement = document.getElementById("photo");
  const nameElement = document.getElementById("name");

  function showPhoto() {
    photoElement.src = photos[k];
    nameElement.innerHTML= names[k];
  }
  function next() {
    k++;
    if (k >= photos.length) {
      k = 0;
    }
    showPhoto();
  }

  function slideShow() {
    slideshowInterval = setInterval(() => {
      next();
    }, 2000);
  }
  function green(){
    const btn=document.getElementById("btnMenu"); 
    const link=document.getElementById("btn");
    btn.style.backgroundColor="green";
    link.style.color="white";
  }
  function white(){
    const btn=document.getElementById("btnMenu"); 
    const link=document.getElementById("btn");
    btn.style.backgroundColor="white";
    link.style.color="green";
  
  }
  function greenA(){
    const btn=document.getElementById("btnAbout"); 
    const link=document.getElementById("button");
    btn.style.backgroundColor="green";
    link.style.color="white";
  }
  function whiteA(){
    const btn=document.getElementById("btnAbout"); 
    const link=document.getElementById("button");
    btn.style.backgroundColor="white";
    link.style.color="green";
  
  }

  showPhoto();
  slideShow()