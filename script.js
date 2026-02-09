function nextPage(pageNumber) {
  document.querySelectorAll('.page')
    .forEach(p => p.classList.remove('active'));

  document.getElementById('page' + pageNumber)
    .classList.add('active');

  if (pageNumber === 3) {
    startHearts();
  }
}

function startHearts() {
  const container = document.querySelector('.hearts-container');

  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';

    const hearts = ['❤️','💖','💗','💞'];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 25 + 18) + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 5) + 's';

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
  }, 200);
}
