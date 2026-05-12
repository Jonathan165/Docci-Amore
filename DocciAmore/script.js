const toast = document.getElementById('toast');

/* ══ BOTÃO PEDIR ══ */
document.querySelectorAll('.btn-add').forEach(btn => {
  btn.addEventListener('click', () => {
    const { nome } = btn.dataset;

    mostrarToast(`🎂 "${nome}" adicionado ao carrinho!`);

    btn.classList.add('adicionado');
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" style="width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      Adicionado
    `;

    setTimeout(() => {
      btn.classList.remove('adicionado');
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" style="width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round">
          <line x1="12" y1="5" x2="12" y2="19"/>
          <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
        Pedir
      `;
    }, 1800);
  });
});

/* ══ TOAST ══ */
let toastTimer;
function mostrarToast(msg) {
  toast.innerHTML = msg;
  toast.classList.add('visivel');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visivel'), 2800);
}