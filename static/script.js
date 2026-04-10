
// here comes the letter hover effect
document.addEventListener('DOMContentLoaded', () => {
  const heading = document.querySelector('.hero h2');
  if (!heading) return;

  const text = heading.textContent;
  heading.innerHTML = '';

  text.split('').forEach((char) => {
    const span = document.createElement('span');
    span.textContent = char;
    if (char === ' ') {
      span.classList.add('space');
    }
    heading.appendChild(span);
  });
});


let curr = 0;
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;
const dotContainer = document.getElementById('dots');
// Created dots
for(let i =0; i<totalSlides; i++){
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if(i===0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dotContainer.appendChild(dot);
}

// dots movement updated
function updateDots(){
    document.querySelectorAll('.dot').forEach((d, i) => {
       d.classList.toggle('active', i === curr);
    });
}

//parsing 
function goTo(index) {
   curr = (index + totalSlides) % totalSlides;
   slides.style.transform = `translateX(-${curr * 100}%)`;
   updateDots();
}

//changing of slides
function changeSlide(dir) {
  goTo(curr + dir);
}

// auto play
setInterval (() => changeSlide(1), 3000);