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
