// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Dark/Light mode toggle with localStorage
const root = document.documentElement;
const key = 'pref-theme';
const saved = localStorage.getItem(key);
if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);

const toggle = document.getElementById('modeToggle');
toggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  localStorage.setItem(key, next);
});
