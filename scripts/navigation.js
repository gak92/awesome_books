function hideAllSections() {
  var sections = document.querySelectorAll('section');
  for (let i = 0; i < sections.length; i += 1) {
    if (!sections[i].classList.contains('hidden')) {
      sections[i].classList.add('hidden');
    }
  }
}

function showSection(section) {
  const s = document.querySelector(section);
  hideAllSections();
  s.classList.remove('hidden');
}
