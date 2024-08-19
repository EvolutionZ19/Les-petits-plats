const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const button = dropdown.querySelector('.dropdown-button');
  const content = dropdown.querySelector('.dropdown-content');
  let isOpen = false;

  button.addEventListener('click', () => {
    isOpen = !isOpen;
    content.classList.toggle('open', isOpen);
  });
});

document.addEventListener('click', (event) => {
  dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector('.dropdown-button');
    const content = dropdown.querySelector('.dropdown-content');

    if (!dropdown.contains(event.target)) {
      content.classList.remove('open');
    }
  });
});
