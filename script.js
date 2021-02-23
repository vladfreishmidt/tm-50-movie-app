const panels = document.querySelectorAll('.panel');

const activatePanel = (item) => {
  removeActiveClasses();
  item.classList.add('active');
};

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}

panels.forEach((panel) => {
  panel.addEventListener('click', () => activatePanel(panel));
});
