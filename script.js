// Seleciona o botão de tema
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('.theme-toggle__icon');

// Verifica se já existe preferência salva
const savedTheme = localStorage.getItem('theme');

// Aplica o tema salvo ou o preferido do sistema
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateIcon(savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.setAttribute('data-theme', 'dark');
  updateIcon('dark');
}

// Função que atualiza o ícone
function updateIcon(theme) {
  themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Evento de clique no botão
themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateIcon(newTheme);
});
