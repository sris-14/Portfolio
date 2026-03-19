
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
