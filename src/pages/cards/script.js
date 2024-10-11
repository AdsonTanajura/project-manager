function setPriority(priority, element) {
  element.classList.remove('high-priority', 'mid-priority', 'low-priority');

  if (priority === 'High') {
    element.classList.add('high-priority');
  } else if (priority === 'Mid') {
    element.classList.add('mid-priority');
  } else if (priority === 'Low') {
    element.classList.add('low-priority');
  }
}

const priorityCards = document.querySelectorAll('.card-priority');

priorityCards.forEach((card) => {
  const priorityValue = card.textContent.trim();
  setPriority(priorityValue, card);
});

function handleClickMenuMobile() {
  const element = document.getElementById('header-mobile-nav');
  const icon = document.getElementById('menu-mobile-icon');
  const label = document.getElementById('menu-mobile-label');
  if (element.classList.contains('opened')) {
    element.classList.remove('opened');
    element.classList.add('closed');
    icon.src = '../../assets/menu.svg';
    label.textContent = 'Abrir menu';
  } else {
    element.classList.remove('closed');
    element.classList.add('opened');
    icon.src = '../../assets/close.svg';
    label.textContent = 'Fechar menu';
  }
}
