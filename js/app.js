var cards = document.getElementsByClassName("card");

for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseenter", startTilt);
  cards[i].addEventListener("mousemove", tilt);
  cards[i].addEventListener("mouseleave", stopTilt);
}

function startTilt(event) {
  this.isTilting = true;
  tilt.call(this, event);
}

function tilt(event) {
  if (!this.isTilting) return;

  var maxTilt = 15;
  var rect = this.getBoundingClientRect();
  var mouseX = event.clientX - rect.left;
  var mouseY = event.clientY - rect.top;
  var tiltX = (mouseX - rect.width / 2) / (rect.width / 2) * maxTilt;
  var tiltY = (mouseY - rect.height / 2) / (rect.height / 2) * maxTilt;

  this.style.transform = "perspective(1400px) rotateX(" + -tiltY + "deg) rotateY(" + tiltX + "deg)";
}

function stopTilt() {
  this.isTilting = false;
  this.style.transform = "perspective(1400px) rotateX(0) rotateY(0)";
}
