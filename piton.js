// Seleciona todos os slides e botões
const items = document.querySelectorAll('.item');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let current = 0;

// Função que mostra o slide atual
function showSlide(index) {
  items.forEach(item => item.classList.remove('active'));
  items[index].classList.add('active');
}

// Botão "próximo"
nextBtn.addEventListener('click', () => {
  current++;
  if (current >= items.length) current = 0;
  showSlide(current);
});

// Botão "anterior"
prevBtn.addEventListener('click', () => {
  current--;
  if (current < 0) current = items.length - 1;
  showSlide(current);
});

