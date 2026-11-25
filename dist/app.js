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
    content.innerHTML = '<p>Obrazac za dogovor priprema poruku samo na ovoj stranici. Kontakt podaci i odabrani termin ne šalju se serveru i ne spremaju u lokalnu pohranu. Ne tražimo zdravstvene podatke. Sajt nema analitiku ni oglasne alate.</p><p>Kopiranje stavlja pripremljeni tekst u vaš međuspremnik. Ako je email kontakt dostupan, email link otvara vašu aplikaciju za poštu; poruku pregledate i sami šaljete. Instagram i Facebook otvaraju druge sajtove na kojima važe njihova pravila privatnosti.</p><p>Fotografije i elementi stranice učitavaju se s istog sajta. Hosting servis može obrađivati tehničke podatke potrebne za isporuku stranice. Za informacije o obradi podataka u savjetovalištu obratite se Nebojši Šajinoviću.</p>';
  } else {
    title.textContent = 'Budite ono što jeste.';
    content.innerHTML = '<p>Ne postoji savršena priprema za prvi razgovor. Ako vam pomaže, možete razmisliti o nekoliko pitanja:</p><ul><li>Šta me je navelo da potražim razgovor baš sada?</li><li>Šta bih želio ili željela bolje razumjeti?</li><li>Šta mi je važno da znam o načinu rada?</li></ul><p>Ove odgovore možete zadržati za sebe do susreta. Nema potrebe da šaljete osjetljive detalje u početnom upitu.</p>';
  }
  dialog.showModal();
}
document.querySelector('#prepare-button').addEventListener('click', () => showInfo('prepare'));
document.querySelector('#privacy-button').addEventListener('click', () => showInfo('privacy'));
dialog.querySelectorAll('.close-button, .dialog-done').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if(event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });

// Set only to the practice's confirmed public contact address.
const practiceEmail = 'savjetovalistesajinovic@gmail.com';
const appointmentForm = document.querySelector('#appointment-form');
const appointmentDate = document.querySelector('#appointment-date');
const appointmentTime = document.querySelector('#appointment-time');
const appointmentResult = document.querySelector('#appointment-result');
const appointmentMessage = document.querySelector('#appointment-message');
const appointmentStatus = document.querySelector('#appointment-status');
const appointmentEmail = document.querySelector('#appointment-email');
const onlinePlatformField = document.querySelector('#online-platform-field');
const onlinePlatform = document.querySelector('#online-platform');
function updatePlatformField() {
  const online = appointmentForm.querySelector('[name="meeting"]:checked').value === 'Online';
  onlinePlatformField.hidden = !online;
  onlinePlatform.disabled = !online;
}
appointmentForm.querySelectorAll('[name="meeting"]').forEach(input => input.addEventListener('change', updatePlatformField));
updatePlatformField();
document.querySelector('#prepare-message').disabled = false;
function sarajevoNow() {
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Sarajevo', year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
  }).formatToParts(new Date()).map(part => [part.type, part.value]));
  return { date: `${parts.year}-${parts.month}-${parts.day}`, time: `${parts.hour}:${parts.minute}` };
}
function emailLink(body) {
  return `mailto:${practiceEmail}?subject=${encodeURIComponent('Upit za prvi razgovor — BITI ZDRAV')}&body=${encodeURIComponent(body)}`;
}
appointmentDate.min = sarajevoNow().date;
if (practiceEmail) {
  const contactEmail = document.querySelector('#contact-email');
  contactEmail.href = `mailto:${practiceEmail}`;
  contactEmail.textContent = practiceEmail;
  document.querySelector('#prepare-message').textContent = 'Otvori pripremljeni email';
  contactEmail.hidden = false;
  appointmentEmail.hidden = false;
  document.querySelector('#delivery-help').textContent = 'Otvorite pripremljenu poruku u svojoj email aplikaciji, pregledajte je i pošaljite. Možete je i kopirati. Otvaranje emaila ne šalje poruku niti rezerviše termin.';
}
appointmentForm.addEventListener('input', () => {
  appointmentForm.elements.phone.setCustomValidity('');
  appointmentDate.setCustomValidity('');
  appointmentTime.setCustomValidity('');
  appointmentResult.hidden = true;
  appointmentStatus.textContent = '';
});
appointmentForm.addEventListener('submit', event => {
  event.preventDefault();
  const now = sarajevoNow();
  appointmentDate.min = now.date;
  appointmentDate.setCustomValidity(appointmentDate.value < now.date ? 'Izaberite današnji ili budući datum.' : '');
  appointmentTime.setCustomValidity(appointmentDate.value === now.date && appointmentTime.value <= now.time ? 'Izaberite vrijeme koje tek dolazi.' : '');
  const data = new FormData(appointmentForm);
  const digits = data.get('phone').replace(/\D/g, '');
  appointmentForm.elements.phone.setCustomValidity(digits.length < 6 ? 'Unesite broj telefona s pozivnim brojem.' : '');
  if (!appointmentForm.reportValidity()) return;
  const [year, month, day] = appointmentDate.value.split('-');
  const meeting = data.get('meeting');
  const platformNote = meeting === 'Online' ? `\nŽeljena platforma: ${onlinePlatform.value}.` : '';
  appointmentMessage.value = `Poštovani,\n\nŽelio/željela bih dogovoriti prvi razgovor.\nNačin susreta: ${meeting}.${platformNote}\nOdgovarao bi mi ${day}.${month}.${year}. u ${appointmentTime.value} (vrijeme u Doboju, Europe/Sarajevo).\n\nMolim vas da potvrdite dostupnost ili predložite drugi termin.\n\nSrdačan pozdrav`;
  const fullName = [data.get('firstName'), data.get('lastName')].map(value => value.trim()).join(' ');
  appointmentMessage.value += `,\n${fullName}\nEmail za odgovor: ${data.get('replyEmail').trim()}\nTelefon: ${data.get('phone').trim()}`;
  if (practiceEmail) {
    appointmentEmail.href = emailLink(appointmentMessage.value);
    window.location.href = appointmentEmail.href;
  }
  appointmentResult.hidden = false;
  appointmentStatus.textContent = 'Poruka je pripremljena. Još nije poslata; termin čeka dogovor.';
  appointmentMessage.focus();
  appointmentMessage.setSelectionRange(0, 0);
  appointmentMessage.scrollTop = 0;
});
document.querySelector('#copy-message').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(appointmentMessage.value);
    appointmentStatus.textContent = 'Poruka je kopirana. Zalijepite je u poruku savjetovalištu i pošaljite.';
  } catch {
    appointmentMessage.focus();
    appointmentMessage.select();
    appointmentStatus.textContent = 'Tekst je označen. Kopirajte ga ručno i pošaljite savjetovalištu.';
  }
});
