
const items = document.querySelectorAll('.item');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let current = 0;


function showSlide(index) {
  items.forEach(item => item.classList.remove('active'));
  items[index].classList.add('active');
}


nextBtn.addEventListener('click', () => {
  current++;
  if (current >= items.length) current = 0;
  showSlide(current);
});


prevBtn.addEventListener('click', () => {
  current--;
  if (current < 0) current = items.length - 1;
  showSlide(current);
});

