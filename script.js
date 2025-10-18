// Add click handlers to social buttons

const links = document.querySelectorAll('a[data-testid^="test-user-social-"]');

function activateLink(link) {
  links.forEach(l => l.style.backgroundColor = '#0077cc');
  link.style.backgroundColor = 'red';
}

links.forEach(link => {
  link.addEventListener('click', function(e) {
    activateLink(this);
  });
  link.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      activateLink(this);
      this.click(); // also follow the link
    }
  });
});

