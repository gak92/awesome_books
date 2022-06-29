const navList = document.querySelector('.nav-list');

function hideAllSections() {
  const sections = document.querySelectorAll('section');
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

navList.addEventListener('click', (e) => {
  if (e.target.id === 'list') {
    showSection('.book-display');
  } else if (e.target.id === 'addnew') {
    showSection('.add-books');
  } else if (e.target.id === 'contact') {
    showSection('.contact');
  }
});
