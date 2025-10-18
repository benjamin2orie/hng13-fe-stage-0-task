// Initialize interactive behaviors when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Set render timestamp (milliseconds since epoch)
  const timeEl = document.querySelector('[data-testid="test-user-time"]');
  if (timeEl) {
    // Use Date.now(); small rendering delay is acceptable in tests
    timeEl.textContent = Date.now().toString();
  }

  // Add click/keyboard handlers to social links
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
});

