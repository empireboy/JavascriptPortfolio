const outline_color = "gray";

document.getElementById("img-slide-1-1").style.outline = "thick solid " + outline_color;
document.getElementById("img-slide-2-1").style.outline = "thick solid " + outline_color;
document.getElementById("img-slide-3-1").style.outline = "thick solid " + outline_color;

// IMAGE SECTION 1:
document.getElementById("img-slide-1-1").addEventListener('click', function () {
  document.getElementById("image1").style.backgroundImage = "url('images/slide_1.png')";
  RemoveBorder();
  document.getElementById("img-slide-1-1").style.outline = "thick solid " + outline_color;
});

document.getElementById("img-slide-1-2").addEventListener('click', function () {
  document.getElementById("image1").style.backgroundImage = "url('images/slide_1_1.png')";
  RemoveBorder();
  document.getElementById("img-slide-1-2").style.outline = "thick solid " + outline_color;
});

document.getElementById("img-slide-1-3").addEventListener('click', function () {
  document.getElementById("image1").style.backgroundImage = "url('images/slide_1_2.png')";
  RemoveBorder();
  document.getElementById("img-slide-1-3").style.outline = "thick solid " + outline_color;
});

document.getElementById("img-slide-1-4").addEventListener('click', function () {
  document.getElementById("image1").style.backgroundImage = "url('images/slide_1_3.png')";
  RemoveBorder();
  document.getElementById("img-slide-1-4").style.outline = "thick solid " + outline_color;
});

// IMAGE SECTION 2:
document.getElementById("img-slide-2-1").addEventListener('click', function () {
  document.getElementById("image2").style.backgroundImage = "url('images/slide_2.png')";
  RemoveBorder();
  document.getElementById("img-slide-2-1").style.outline = "thick solid " + outline_color;
});

document.getElementById("img-slide-2-2").addEventListener('click', function () {
  document.getElementById("image2").style.backgroundImage = "url('images/slide_2_1.png')";
  RemoveBorder();
  document.getElementById("img-slide-2-2").style.outline = "thick solid " + outline_color;
});

document.getElementById("img-slide-2-3").addEventListener('click', function () {
  document.getElementById("image2").style.backgroundImage = "url('images/slide_2_2.png')";
  RemoveBorder();
  document.getElementById("img-slide-2-3").style.outline = "thick solid " + outline_color;
});

document.getElementById("img-slide-2-4").addEventListener('click', function () {
  document.getElementById("image2").style.backgroundImage = "url('images/slide_2_3.png')";
  RemoveBorder();
  document.getElementById("img-slide-2-4").style.outline = "thick solid " + outline_color;
});

// IMAGE SECTION 3:
document.getElementById("img-slide-3-1").addEventListener('click', function () {
  document.getElementById("image3").style.backgroundImage = "url('images/slide_3.png')";
  RemoveBorder();
  document.getElementById("img-slide-3-1").style.outline = "thick solid " + outline_color;
});

document.getElementById("img-slide-3-2").addEventListener('click', function () {
  document.getElementById("image3").style.backgroundImage = "url('images/slide_3_1.png')";
  RemoveBorder();
  document.getElementById("img-slide-3-2").style.outline = "thick solid " + outline_color;
});

document.getElementById("img-slide-3-3").addEventListener('click', function () {
  document.getElementById("image3").style.backgroundImage = "url('images/slide_3_2.png')";
  RemoveBorder();
  document.getElementById("img-slide-3-3").style.outline = "thick solid " + outline_color;
});

document.getElementById("img-slide-3-4").addEventListener('click', function () {
  document.getElementById("image3").style.backgroundImage = "url('images/slide_3_3.png')";
  RemoveBorder();
  document.getElementById("img-slide-3-4").style.outline = "thick solid " + outline_color;
});

function RemoveBorder() {
  document.getElementById("img-slide-1-1").style.outline = null;
  document.getElementById("img-slide-1-2").style.outline = null;
  document.getElementById("img-slide-1-3").style.outline = null;
  document.getElementById("img-slide-1-4").style.outline = null;

  document.getElementById("img-slide-2-1").style.outline = null;
  document.getElementById("img-slide-2-2").style.outline = null;
  document.getElementById("img-slide-2-3").style.outline = null;
  document.getElementById("img-slide-2-4").style.outline = null;

  document.getElementById("img-slide-3-1").style.outline = null;
  document.getElementById("img-slide-3-2").style.outline = null;
  document.getElementById("img-slide-3-3").style.outline = null;
  document.getElementById("img-slide-3-4").style.outline = null;
}
