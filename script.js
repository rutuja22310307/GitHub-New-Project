function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('reco-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const newReco = document.getElementById('newReco').value;
  const recoList = document.getElementById('reco-list');

  const p = document.createElement('p');
  p.textContent = `"${newReco}" – Anonymous`;
  recoList.appendChild(p);

  document.getElementById('newReco').value = '';

  const popup = document.getElementById('popup');
  popup.style.display = 'block';

  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000);
});
