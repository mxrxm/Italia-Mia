const pics = [
    "home/11.jpg",
    "home/22.jpg",
    "home/33.jpg"
  ];

  let i = 0;
  let picShow;

  const photo = document.getElementById("pic");

  function show() {
    photo.src = pics[i];
  }

  function back() {
    i--;
    if (i < 0) {
      i = pics.length - 1;
    }
    show();
  }

  function proceed() {
    i++;
    if (i >= pics.length) {
      i = 0;
    }
    show();
  }

  show();