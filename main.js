function fadeInPage() {
    if (!window.AnimationEvent) {return;}
    var fader = document.getElementById('fader');
    fader.classList.add('fade-out')
}

document.addEventListener('DOMContentLoaded', function() {
    if (!window.AnimationEvent) {return;}
    var anchors = document.getElementsByTagName('a');
    for (var idx=0; idx<anchors.length; idx+=1){
        if (anchors[idx].hostname !== window.location.hostname || 
            anchors[idx].pathname === window.location.pathname) {continue;}
        anchors[idx].addEventListener('click', function(event) {
            var fader = document.getElementById('fader'), 
            anchor = event.currentTarget;

            var listener = function() {
                window.location = anchor.href;
                fader.removeEventListener('animationend', listener)
            };
            fader.addEventListener('animationend', listener);

            event.preventDefault();
            fader.classList.add('fade-in')
        });
    }
});

window.addEventListener('pageshow', function(event) {
    if (!event.persisted) {
        return;
    }
    var fader = this.document.getElementById('fader');
    fader.classList.remove('fade-in');
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("imgSlide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}