const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });
const audienceNote = document.querySelector('#audience-note');
document.querySelectorAll('[data-audience]').forEach(link => link.addEventListener('click', () => {
  audienceNote.hidden = false;
  audienceNote.textContent = `Zanima vas podrška za ${link.dataset.audience}? U nastavku možete upoznati prve korake.`;
}));
const dialog = document.querySelector('#info-dialog');
const title = document.querySelector('#dialog-title');
const content = document.querySelector('#dialog-content');
function showInfo(kind) {
  if (kind === 'privacy') {
    title.textContent = 'Vaša privatnost';
    content.innerHTML = '<p>Ova radna verzija nema kontakt formu, analitiku ni oglasne alate. Ne traži lične ili zdravstvene podatke i ne čuva odabire u pregledniku.</p><p>Fotografija i svi elementi stranice učitavaju se s istog sajta. Hosting servis može obrađivati tehničke podatke potrebne za isporuku stranice.</p><p>Pozivanje telefonskog broja otvara vašu aplikaciju za pozive. Facebook link vodi na drugi sajt, čija pravila privatnosti važe nakon otvaranja. Za informacije o obradi podataka u samom savjetovalištu obratite se Nebojši Šajinoviću.</p>';
  } else {
    title.textContent = 'Dođite onako kako jeste.';
    content.innerHTML = '<p>Ne postoji savršena priprema za prvi razgovor. Ako vam pomaže, možete razmisliti o nekoliko pitanja:</p><ul><li>Šta me je navelo da potražim razgovor baš sada?</li><li>Šta bih želio ili željela bolje razumjeti?</li><li>Šta mi je važno da znam o načinu rada?</li></ul><p>Ove odgovore možete zadržati za sebe do susreta. Nema potrebe da šaljete osjetljive detalje u početnom upitu.</p>';
  }
  dialog.showModal();
}
document.querySelector('#prepare-button').addEventListener('click', () => showInfo('prepare'));
document.querySelector('#privacy-button').addEventListener('click', () => showInfo('privacy'));
dialog.querySelectorAll('.close-button, .dialog-done').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if(event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
