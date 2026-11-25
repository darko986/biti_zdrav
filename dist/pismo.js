// Keep original Latin text so switching back preserves spelling and punctuation.
const scriptSwitch = document.querySelector('#script-switch');
const scriptButtons = scriptSwitch.querySelectorAll('[data-script]');
const originalNodes = new WeakMap();
const letters = Object.fromEntries(Array.from('abcčćdđefghijklmnoprsštuvzž', (letter, index) =>
  [letter, 'абцчћдђефгхијклмнопрсштувзж'[index]]));
Object.assign(letters, {dž: 'џ', lj: 'љ', nj: 'њ'});

let activeScript = 'Latn';
try {
  if (localStorage.getItem('pismo') === 'Cyrl') activeScript = 'Cyrl';
} catch { /* Switching still works when storage is unavailable. */ }

function inScript(text) {
  if (activeScript === 'Latn') return text;
  // Preserve contact addresses, international product names and quoted foreign terms.
  return text.replace(/[\w.+-]+@[\w.-]+\.[a-z]+|Europe\/Sarajevo|Save the children|voiceover artist|PR-om|Caritas|GIZ|burnout|WhatsApp|Zoom|Viber|Garden|Google|Instagramu?|Facebooku?|online|email|dž|lj|nj|[a-zčćđšž]/gi, token => {
    const key = token.toLowerCase();
    const letter = letters[key];
    if (letter) return token[0] === token[0].toUpperCase() ? letter.toUpperCase() : letter;
    const words = {online: 'онлајн', email: 'имејл', instagram: 'инстаграм', instagramu: 'инстаграму', facebook: 'фејсбук', facebooku: 'фејсбуку'};
    const word = words[key];
    if (!word) return token;
    if (token === token.toUpperCase()) return word.toUpperCase();
    return token[0] === key[0] ? word : word[0].toUpperCase() + word.slice(1);
  });
}

function renderScript(root) {
  const nodes = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  while (nodes.nextNode()) {
    const node = nodes.currentNode;
    if (!node.data.trim() || node.parentElement.closest('#script-switch,script,style,textarea,noscript')) continue;
    if (!originalNodes.has(node)) originalNodes.set(node, node.data);
    node.data = inScript(originalNodes.get(node));
  }
}

const labelledElements = [...document.querySelectorAll('[aria-label],img[alt]')].flatMap(element =>
  ['aria-label', 'alt'].filter(name => element.hasAttribute(name)).map(name => ({
    element, name, text: element.getAttribute(name)
  })));
const latinTitle = document.title;

function renderPageScript() {
  document.documentElement.lang = 'bs-' + activeScript;
  document.title = inScript(latinTitle);
  renderScript(document.body);
  for (const {element, name, text} of labelledElements) element.setAttribute(name, inScript(text));
  for (const button of scriptButtons) button.setAttribute('aria-pressed', String(button.dataset.script === activeScript));
}

function initializeScriptSwitch() {
  renderPageScript();
  scriptSwitch.hidden = false;
  for (const button of scriptButtons) button.addEventListener('click', () => {
    activeScript = button.dataset.script;
    try { localStorage.setItem('pismo', activeScript); } catch { /* Session-only preference. */ }
    renderPageScript();
    if (!appointmentResult.hidden) updateAppointmentDraft();
    for (const field of [appointmentDate, appointmentTime, appointmentForm.elements.phone]) field.setCustomValidity('');
  });
}
