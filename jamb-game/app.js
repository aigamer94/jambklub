const ROWS = [
  { id: 'ones', label: 'Ones', hint: '× 1' }, { id: 'twos', label: 'Twos', hint: '× 2' },
  { id: 'threes', label: 'Threes', hint: '× 3' }, { id: 'fours', label: 'Fours', hint: '× 4' },
  { id: 'fives', label: 'Fives', hint: '× 5' }, { id: 'sixes', label: 'Sixes', hint: '× 6' },
  { id: 'max', label: 'Maximum', hint: 'sum 5' }, { id: 'min', label: 'Minimum', hint: 'sum 5' },
  { id: 'triling', label: 'Triling', hint: '+ 20' }, { id: 'kenta', label: 'Kenta', hint: 'straight' },
  { id: 'full', label: 'Full', hint: '+ 30' }, { id: 'poker', label: 'Poker', hint: '+ 40' },
  { id: 'jamb', label: 'Jamb', hint: '+ 50' }
];

const TRANSLATIONS = {
  en: {
    'brand.home': 'Jamb Klub home', 'nav.language': 'Language', 'nav.rules': 'How to play', 'nav.newGame': 'New game',
    'sound.toggle': 'Toggle sound', 'sound.mute': 'Mute sound', 'sound.enable': 'Enable sound',
    'hero.eyebrow': 'SERBIAN DICE CLASSIC', 'hero.line1': 'Roll with a plan.', 'hero.line2': 'Score with nerve.',
    'meta.sheet': 'Sheet', 'meta.turn': 'Turn', 'meta.total': 'Grand total', 'meta.columns': '{count} columns',
    'play.yourTurn': 'YOUR TURN', 'play.ready': 'Ready to roll?', 'play.rollCount': 'Roll {count} of 3',
    'play.rollsUsed': '{count} of three rolls used', 'play.diceTray': 'Dice tray', 'play.die': 'Die {index}: {value}',
    'play.held': ', held', 'play.trayStart': 'Roll all six dice. Afterward, tap dice to hold them.',
    'play.trayActive': 'Tap a die to hold it. Only the best five are used for scoring.',
    'play.rollDice': 'Roll dice', 'play.rollAgain': 'Roll again', 'play.chooseScore': 'Choose a score',
    'announcement.eyebrow': 'ANNOUNCEMENT', 'announcement.choose': 'Choose an announcement',
    'announcement.instructions': 'After your first roll, select an open Najava cell to commit to it.',
    'announcement.cancel': 'Cancel announcement', 'announcement.title': 'Najava: {row}',
    'announcement.committed': 'Committed. Score {score} now or keep rolling.',
    'score.eyebrow': 'SCORE SHEET', 'score.heading': 'Make every box count.', 'score.available': 'Available',
    'score.locked': 'Locked', 'score.hint': 'Select a glowing cell to score it. Hover or focus a column heading to see its rule.',
    'score.category': 'Category', 'score.score': 'score', 'score.declare': 'declare', 'score.upper': 'Upper + bonus',
    'score.middle': '(MAX − MIN) × Ones', 'score.columnTotal': 'Column total',
    'status.available': 'available', 'status.announceable': 'ready to declare', 'status.locked': 'locked', 'status.filled': 'filled',
    'message.directedTitle': 'Directed turn', 'message.directedCopy': 'You must score {row} in the Directed column.',
    'message.announcementTitle': 'Announcement locked', 'message.announcementCopy': 'Finish {row} and score it in Najava.',
    'message.freshTitle': 'Fresh turn', 'message.freshCopy': 'Roll all six dice to reveal your scoring options.',
    'message.scoreTitle': 'Time to score', 'message.scoreCopy': 'Select one highlighted box, including zero where necessary.',
    'message.shapeTitle': 'Shape your hand', 'message.shapeCopy': 'Hold useful dice, reroll, or score a highlighted box now.',
    'setup.eyebrow': 'NEW GAME', 'setup.heading': 'Choose your sheet.', 'setup.copy': 'More columns mean a longer, more tactical game.',
    'setup.classic': 'Classic', 'setup.classicTime': '78 turns · about 35 min', 'setup.extended': 'Extended',
    'setup.extendedTime': '104 turns · about 50 min', 'setup.master': 'Master', 'setup.masterTime': '130 turns · about 70 min',
    'setup.start': 'Start game', 'common.close': 'Close',
    'rules.eyebrow': 'QUICK RULES', 'rules.heading': 'How this Jamb works.', 'rules.rollTitle': 'Roll',
    'rules.rollCopy': 'Roll six dice up to three times. Hold any dice between rolls; the best five count.',
    'rules.scoreTitle': 'Score', 'rules.scoreCopy': 'Choose one glowing box. Number rows count matching dice. Combination rows add their printed bonuses.',
    'rules.orderTitle': 'Respect order', 'rules.orderCopy': 'Arrows constrain the next legal box. Najava must be declared after roll one. Ruka scores roll one only.',
    'rules.winTitle': 'Win', 'rules.winCopy': 'Finish every box. Each column totals its upper bonus, MAX–MIN calculation, and combinations.',
    'rules.upper': 'Upper bonus', 'rules.upperFormula': '+30 at 60', 'rules.middle': 'Middle',
    'rules.middleFormula': '(MAX − MIN) × Ones', 'rules.straight': 'Straight', 'rules.back': 'Back to the table',
    'finish.eyebrow': 'SHEET COMPLETE', 'finish.masterful': 'A masterful sheet.', 'finish.fine': 'A fine game.',
    'finish.copy': '{total} points across {count} columns.', 'finish.defaultCopy': 'That is your final Jamb score.', 'finish.again': 'Play again',
    'row.ones': 'Ones', 'row.twos': 'Twos', 'row.threes': 'Threes', 'row.fours': 'Fours', 'row.fives': 'Fives',
    'row.sixes': 'Sixes', 'row.max': 'Maximum', 'row.min': 'Minimum', 'row.triling': 'Triling', 'row.kenta': 'Kenta',
    'row.full': 'Full', 'row.poker': 'Poker', 'row.jamb': 'Jamb', 'hint.sum': 'sum 5', 'hint.straight': 'straight',
    'column.down.name': 'Down', 'column.down.rule': 'Top to bottom', 'column.down.detail': 'Only the first empty box from the top is open.',
    'column.free.name': 'Free', 'column.free.rule': 'Any order', 'column.free.detail': 'Score any empty row.',
    'column.up.name': 'Up', 'column.up.rule': 'Bottom to top', 'column.up.detail': 'Only the first empty box from the bottom is open.',
    'column.announcement.name': 'Najava', 'column.announcement.rule': 'Declare after roll 1', 'column.announcement.detail': 'After roll one, choose a row. You must score it this turn.',
    'column.hand.name': 'Ruka', 'column.hand.rule': 'First roll only', 'column.hand.detail': 'Any row, but only immediately after the first roll.',
    'column.middle.name': 'Middle', 'column.middle.rule': 'From MAX / MIN', 'column.middle.detail': 'Build upward from MAX and downward from MIN.',
    'column.double.name': 'Double', 'column.double.rule': 'From both ends', 'column.double.detail': 'Build down from Ones or up from Jamb.',
    'column.mandatory.name': 'Mandatory', 'column.mandatory.rule': 'Last; top down', 'column.mandatory.detail': 'Unlocks after the other columns are complete, then fills top to bottom.',
    'column.directed.name': 'Directed', 'column.directed.rule': 'Follows Najava', 'column.directed.detail': 'After a Najava score, your next turn must score its matching Directed row.',
    'column.maximum.name': 'Maximum', 'column.maximum.rule': 'Perfect or zero', 'column.maximum.detail': 'Only a category maximum scores; after roll three you may record zero.'
  },
  sr: {
    'brand.home': 'Početna stranica Jamb Kluba', 'nav.language': 'Jezik', 'nav.rules': 'Kako se igra', 'nav.newGame': 'Nova igra',
    'sound.toggle': 'Uključi ili isključi zvuk', 'sound.mute': 'Isključi zvuk', 'sound.enable': 'Uključi zvuk',
    'hero.eyebrow': 'SRPSKI KLASIK SA KOCKICAMA', 'hero.line1': 'Bacaj sa planom.', 'hero.line2': 'Upiši hrabro.',
    'meta.sheet': 'Listić', 'meta.turn': 'Potez', 'meta.total': 'Ukupan zbir', 'meta.columns': '{count} kolona',
    'play.yourTurn': 'TVOJ POTEZ', 'play.ready': 'Spreman za bacanje?', 'play.rollCount': 'Bacanje {count} od 3',
    'play.rollsUsed': 'Broj bacanja: {count} od 3', 'play.diceTray': 'Polje za kockice', 'play.die': 'Kockica {index}: {value}',
    'play.held': ', zadržana', 'play.trayStart': 'Baci svih šest kockica. Zatim dodirni kockice koje želiš da zadržiš.',
    'play.trayActive': 'Dodirni kockicu da je zadržiš. Za rezultat se računa najboljih pet.',
    'play.rollDice': 'Baci kockice', 'play.rollAgain': 'Baci ponovo', 'play.chooseScore': 'Izaberi polje',
    'announcement.eyebrow': 'NAJAVA', 'announcement.choose': 'Izaberi najavu',
    'announcement.instructions': 'Posle prvog bacanja izaberi slobodno polje u koloni Najava i obaveži se na njega.',
    'announcement.cancel': 'Otkaži najavu', 'announcement.title': 'Najava: {row}',
    'announcement.committed': 'Najava je zaključana. Upiši {score} ili nastavi sa bacanjem.',
    'score.eyebrow': 'JAMB LISTIĆ', 'score.heading': 'Svako polje je važno.', 'score.available': 'Slobodno',
    'score.locked': 'Zaključano', 'score.hint': 'Izaberi osvetljeno polje za upis. Zadrži pokazivač iznad zaglavlja kolone da vidiš njeno pravilo.',
    'score.category': 'Kategorija', 'score.score': 'upiši', 'score.declare': 'najavi', 'score.upper': 'Gornji zbir + bonus',
    'score.middle': '(MAX − MIN) × Jedinice', 'score.columnTotal': 'Zbir kolone',
    'status.available': 'slobodno', 'status.announceable': 'spremno za najavu', 'status.locked': 'zaključano', 'status.filled': 'popunjeno',
    'message.directedTitle': 'Dirigovani potez', 'message.directedCopy': 'Moraš da upišeš {row} u kolonu Dirigovana.',
    'message.announcementTitle': 'Najava je zaključana', 'message.announcementCopy': 'Ostvari kategoriju {row} i upiši rezultat u Najavu.',
    'message.freshTitle': 'Novi potez', 'message.freshCopy': 'Baci svih šest kockica da otkriješ dostupna polja.',
    'message.scoreTitle': 'Vreme je za upis', 'message.scoreCopy': 'Izaberi jedno osvetljeno polje; po potrebi možeš upisati i nulu.',
    'message.shapeTitle': 'Složi kombinaciju', 'message.shapeCopy': 'Zadrži korisne kockice, baci ponovo ili odmah upiši rezultat.',
    'setup.eyebrow': 'NOVA IGRA', 'setup.heading': 'Izaberi listić.', 'setup.copy': 'Više kolona znači dužu i taktički zahtevniju igru.',
    'setup.classic': 'Klasični', 'setup.classicTime': '78 poteza · oko 35 min', 'setup.extended': 'Prošireni',
    'setup.extendedTime': '104 poteza · oko 50 min', 'setup.master': 'Majstorski', 'setup.masterTime': '130 poteza · oko 70 min',
    'setup.start': 'Započni igru', 'common.close': 'Zatvori',
    'rules.eyebrow': 'KRATKA PRAVILA', 'rules.heading': 'Kako se igra ovaj Jamb.', 'rules.rollTitle': 'Bacanje',
    'rules.rollCopy': 'Baci šest kockica najviše tri puta. Između bacanja zadrži željene kockice; računa se najboljih pet.',
    'rules.scoreTitle': 'Upis', 'rules.scoreCopy': 'Izaberi jedno osvetljeno polje. Brojčani redovi računaju odgovarajuće kockice, a kombinacije dodaju naznačeni bonus.',
    'rules.orderTitle': 'Poštuj redosled', 'rules.orderCopy': 'Strelice određuju sledeće dozvoljeno polje. Najava se bira posle prvog bacanja, a Ručna važi samo iz prve ruke.',
    'rules.winTitle': 'Pobeda', 'rules.winCopy': 'Popuni sva polja. Svaka kolona sabira gornji bonus, obračun MAX–MIN i kombinacije.',
    'rules.upper': 'Gornji bonus', 'rules.upperFormula': '+30 na 60', 'rules.middle': 'Srednji deo',
    'rules.middleFormula': '(MAX − MIN) × Jedinice', 'rules.straight': 'Kenta', 'rules.back': 'Nazad na listić',
    'finish.eyebrow': 'LISTIĆ JE POPUNJEN', 'finish.masterful': 'Majstorska partija.', 'finish.fine': 'Odlična partija.',
    'finish.copy': '{total} poena u {count} kolona.', 'finish.defaultCopy': 'Ovo je tvoj konačni Jamb rezultat.', 'finish.again': 'Igraj ponovo',
    'row.ones': 'Jedinice', 'row.twos': 'Dvojke', 'row.threes': 'Trojke', 'row.fours': 'Četvorke', 'row.fives': 'Petice',
    'row.sixes': 'Šestice', 'row.max': 'Maksimum', 'row.min': 'Minimum', 'row.triling': 'Triling', 'row.kenta': 'Kenta',
    'row.full': 'Ful', 'row.poker': 'Poker', 'row.jamb': 'Jamb', 'hint.sum': 'zbir 5', 'hint.straight': 'niz',
    'column.down.name': 'Nadole', 'column.down.rule': 'Od vrha nadole', 'column.down.detail': 'Otvoreno je samo prvo prazno polje od vrha.',
    'column.free.name': 'Slobodna', 'column.free.rule': 'Bilo kojim redom', 'column.free.detail': 'Upiši rezultat u bilo koji prazan red.',
    'column.up.name': 'Nagore', 'column.up.rule': 'Od dna nagore', 'column.up.detail': 'Otvoreno je samo prvo prazno polje od dna.',
    'column.announcement.name': 'Najava', 'column.announcement.rule': 'Najavi posle 1. bacanja', 'column.announcement.detail': 'Posle prvog bacanja izaberi red i obavezno ga upiši u ovom potezu.',
    'column.hand.name': 'Ručna', 'column.hand.rule': 'Samo prvo bacanje', 'column.hand.detail': 'Bilo koji red, ali isključivo odmah posle prvog bacanja.',
    'column.middle.name': 'Srednja', 'column.middle.rule': 'Od MAX / MIN', 'column.middle.detail': 'Popunjava se nagore od MAX i nadole od MIN.',
    'column.double.name': 'Dupla', 'column.double.rule': 'Sa oba kraja', 'column.double.detail': 'Popunjava se nadole od Jedinica ili nagore od Jamba.',
    'column.mandatory.name': 'Obavezna', 'column.mandatory.rule': 'Poslednja; nadole', 'column.mandatory.detail': 'Otključava se kada su ostale kolone gotove, a zatim se popunjava nadole.',
    'column.directed.name': 'Dirigovana', 'column.directed.rule': 'Prati Najavu', 'column.directed.detail': 'Posle upisa u Najavu, sledeći potez upisuje isti red u Dirigovanu.',
    'column.maximum.name': 'Maksimalna', 'column.maximum.rule': 'Maksimum ili nula', 'column.maximum.detail': 'Boduje se samo maksimalan rezultat kategorije; posle trećeg bacanja možeš upisati nulu.'
  }
};

const COLUMN_LIBRARY = {
  down: { name: 'Down', symbol: '↓', rule: 'Top to bottom', detail: 'Only the first empty box from the top is open.' },
  free: { name: 'Free', symbol: '◇', rule: 'Any order', detail: 'Score any empty row.' },
  up: { name: 'Up', symbol: '↑', rule: 'Bottom to top', detail: 'Only the first empty box from the bottom is open.' },
  announcement: { name: 'Najava', symbol: 'N', rule: 'Declare after roll 1', detail: 'After roll one, choose a row. You must score it this turn.' },
  hand: { name: 'Ruka', symbol: 'R', rule: 'First roll only', detail: 'Any row, but only immediately after the first roll.' },
  middle: { name: 'Middle', symbol: '↕', rule: 'From MAX / MIN', detail: 'Build upward from MAX and downward from MIN.' },
  double: { name: 'Double', symbol: '⇅', rule: 'From both ends', detail: 'Build down from Ones or up from Jamb.' },
  mandatory: { name: 'Mandatory', symbol: 'O', rule: 'Last; top down', detail: 'Unlocks after the other columns are complete, then fills top to bottom.' },
  directed: { name: 'Directed', symbol: 'D', rule: 'Follows Najava', detail: 'After a Najava score, your next turn must score its matching Directed row.' },
  maximum: { name: 'Maximum', symbol: 'M', rule: 'Perfect or zero', detail: 'Only a category maximum scores; after roll three you may record zero.' }
};

const SETS = {
  6: ['down', 'free', 'up', 'announcement', 'hand', 'middle'],
  8: ['down', 'free', 'up', 'announcement', 'hand', 'middle', 'double', 'mandatory'],
  10: ['down', 'free', 'up', 'announcement', 'hand', 'middle', 'double', 'directed', 'maximum', 'mandatory']
};

const state = {
  columns: [], scores: {}, dice: Array(6).fill(1), held: Array(6).fill(false), rollCount: 0,
  turn: 1, announcedRow: null, forcedDirectedRow: null, sound: true, finished: false,
  language: ['sr', 'en'].includes(localStorage.getItem('jamb-klub-language')) ? localStorage.getItem('jamb-klub-language') : 'en'
};

const $ = (selector) => document.querySelector(selector);
const diceTray = $('#diceTray');
const scoreHead = $('#scoreHead');
const scoreBody = $('#scoreBody');

function t(key, values = {}) {
  const template = TRANSLATIONS[state.language]?.[key] ?? TRANSLATIONS.en[key] ?? key;
  return template.replace(/\{(\w+)\}/g, (_, name) => values[name] ?? `{${name}}`);
}

function rowText(rowId) { return t(`row.${rowId}`); }
function rowHint(row) {
  if (row.id === 'max' || row.id === 'min') return t('hint.sum');
  if (row.id === 'kenta') return t('hint.straight');
  return row.hint;
}
function columnText(columnId, field) { return t(`column.${columnId}.${field}`); }

function applyStaticTranslations() {
  document.documentElement.lang = state.language;
  document.querySelectorAll('[data-i18n]').forEach(element => { element.textContent = t(element.dataset.i18n); });
  document.querySelectorAll('[data-i18n-aria]').forEach(element => { element.setAttribute('aria-label', t(element.dataset.i18nAria)); });
  document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === state.language)));
  const soundLabel = t(state.sound ? 'sound.mute' : 'sound.enable');
  $('#soundButton').setAttribute('aria-label', soundLabel);
  $('#soundButton').setAttribute('title', soundLabel);
}

function setLanguage(language) {
  if (!TRANSLATIONS[language]) return;
  state.language = language;
  localStorage.setItem('jamb-klub-language', language);
  applyStaticTranslations();
  render();
}

function rowScore(rowId, dice = state.dice, rollCount = state.rollCount) {
  const counts = Array(7).fill(0);
  dice.forEach(value => counts[value]++);
  const bestFive = [...dice].sort((a, b) => b - a).slice(0, 5);
  const matching = Math.max(...counts);
  const matchValue = counts.lastIndexOf(matching);
  if (rowId.endsWith('s') && ROWS.findIndex(r => r.id === rowId) < 6) {
    const value = ROWS.findIndex(r => r.id === rowId) + 1;
    return Math.min(counts[value], 5) * value;
  }
  if (rowId === 'max') return bestFive.reduce((sum, n) => sum + n, 0);
  if (rowId === 'min') return [...dice].sort((a, b) => a - b).slice(0, 5).reduce((sum, n) => sum + n, 0);
  if (rowId === 'triling') return matching >= 3 ? matchValue * 3 + 20 : 0;
  if (rowId === 'kenta') {
    const unique = new Set(dice);
    const straight = [1,2,3,4,5].every(n => unique.has(n)) || [2,3,4,5,6].every(n => unique.has(n));
    return straight ? ({ 1: 66, 2: 56, 3: 46 }[rollCount] || 0) : 0;
  }
  if (rowId === 'full') {
    const groups = counts.filter(n => n > 0).sort((a,b) => b-a);
    if (!(groups[0] >= 3 && groups[1] >= 2)) return 0;
    const triple = counts.findIndex(n => n >= 3);
    const pair = counts.findIndex((n, value) => value !== triple && n >= 2);
    return triple * 3 + pair * 2 + 30;
  }
  if (rowId === 'poker') return matching >= 4 ? matchValue * 4 + 40 : 0;
  if (rowId === 'jamb') return matching >= 5 ? matchValue * 5 + 50 : 0;
  return 0;
}

function perfectScore(rowId) {
  const index = ROWS.findIndex(r => r.id === rowId);
  if (index < 6) return (index + 1) * 5;
  return { max: 30, min: 5, triling: 38, kenta: 66, full: 58, poker: 64, jamb: 80 }[rowId];
}

function empty(columnId, rowIndex) { return state.scores[columnId][rowIndex] === null; }
function complete(columnId) { return state.scores[columnId].every(value => value !== null); }

function positionalRows(columnId) {
  const empties = ROWS.map((_, i) => i).filter(i => empty(columnId, i));
  if (!empties.length) return [];
  if (columnId === 'down' || columnId === 'mandatory') return [empties[0]];
  if (columnId === 'up') return [empties.at(-1)];
  if (columnId === 'middle') {
    const upper = [6,5,4,3,2,1,0].find(i => empty(columnId, i));
    const lower = [7,8,9,10,11,12].find(i => empty(columnId, i));
    return [upper, lower].filter(i => i !== undefined);
  }
  if (columnId === 'double') return [empties[0], empties.at(-1)].filter((v, i, a) => a.indexOf(v) === i);
  return empties;
}

function isAvailable(columnId, rowIndex) {
  if (state.rollCount === 0 || !empty(columnId, rowIndex)) return false;
  if (state.forcedDirectedRow !== null) return columnId === 'directed' && rowIndex === state.forcedDirectedRow;
  if (columnId === 'directed') return false;
  if (columnId === 'mandatory') {
    const othersDone = state.columns.filter(c => c !== 'mandatory').every(complete);
    return othersDone && positionalRows(columnId).includes(rowIndex);
  }
  if (columnId === 'announcement') return state.announcedRow === rowIndex;
  if (state.announcedRow !== null) return false;
  if (columnId === 'hand' && state.rollCount !== 1) return false;
  if (columnId === 'maximum') {
    const actual = rowScore(ROWS[rowIndex].id);
    return actual === perfectScore(ROWS[rowIndex].id) || state.rollCount === 3;
  }
  return positionalRows(columnId).includes(rowIndex);
}

function canAnnounce(rowIndex) {
  if (state.rollCount !== 1 || state.announcedRow !== null || state.forcedDirectedRow !== null || !empty('announcement', rowIndex)) return false;
  return !state.columns.includes('directed') || empty('directed', rowIndex);
}

function columnTotals(columnId) {
  const s = state.scores[columnId];
  const upperRaw = s.slice(0, 6).reduce((sum, value) => sum + (value || 0), 0);
  const upper = upperRaw + (upperRaw >= 60 ? 30 : 0);
  const middle = s[6] !== null && s[7] !== null && s[0] !== null ? Math.max(0, (s[6] - s[7]) * s[0]) : 0;
  const lower = s.slice(8).reduce((sum, value) => sum + (value || 0), 0);
  return { upper, middle, lower, total: upper + middle + lower };
}

function grandTotal() { return state.columns.reduce((sum, column) => sum + columnTotals(column).total, 0); }

function renderDice() {
  const pipSets = { 1:[4], 2:[1,7], 3:[1,4,7], 4:[1,2,6,7], 5:[1,2,4,6,7], 6:[1,2,3,5,6,7] };
  diceTray.innerHTML = state.dice.map((value, index) => `<button class="die ${state.held[index] ? 'held' : ''}" data-die="${index}" ${state.rollCount === 0 ? 'disabled' : ''} aria-label="${t('play.die', { index: index + 1, value })}${state.held[index] ? t('play.held') : ''}" aria-pressed="${state.held[index]}">${pipSets[value].map(pos => `<i class="pip p${pos}"></i>`).join('')}</button>`).join('');
}

function cellState(columnId, rowIndex) {
  if (isAvailable(columnId, rowIndex)) return 'available';
  if (columnId === 'announcement' && canAnnounce(rowIndex)) return 'announceable';
  return 'locked';
}

function renderTable() {
  scoreHead.innerHTML = `<tr><th>${t('score.category')}</th>${state.columns.map(id => { const c = COLUMN_LIBRARY[id]; return `<th title="${columnText(id, 'detail')}"><span class="column-symbol">${c.symbol}</span>${columnText(id, 'name')}<span class="column-rule">${columnText(id, 'rule')}</span></th>`; }).join('')}</tr>`;
  const body = [];
  ROWS.forEach((row, rowIndex) => {
    const section = rowIndex === 6 || rowIndex === 8 ? ' section-start' : '';
    body.push(`<tr class="${section}"><th>${rowText(row.id)}<span>${rowHint(row)}</span></th>${state.columns.map(columnId => {
      const value = state.scores[columnId][rowIndex];
      const status = value !== null ? 'filled' : cellState(columnId, rowIndex);
      let content = value !== null ? value : '·';
      if (status === 'available') content = `${columnId === 'maximum' && rowScore(row.id) !== perfectScore(row.id) ? '0' : rowScore(row.id)}<small class="score-preview">${t('score.score')}</small>`;
      if (status === 'announceable') content = `N?<small class="score-preview">${t('score.declare')}</small>`;
      return `<td class="${status}" tabindex="${status === 'available' || status === 'announceable' ? 0 : -1}" data-column="${columnId}" data-row="${rowIndex}" aria-label="${columnText(columnId, 'name')}, ${rowText(row.id)}: ${t(`status.${status}`)}">${content}</td>`;
    }).join('')}</tr>`);
    if (rowIndex === 5) body.push(totalsRow(t('score.upper'), 'upper'));
    if (rowIndex === 7) body.push(totalsRow(t('score.middle'), 'middle'));
    if (rowIndex === 12) body.push(totalsRow(t('score.columnTotal'), 'total'));
  });
  scoreBody.innerHTML = body.join('');
}

function totalsRow(label, key) {
  return `<tr class="subtotal-row"><th>${label}</th>${state.columns.map(id => `<td>${columnTotals(id)[key]}</td>`).join('')}</tr>`;
}

function renderStatus() {
  const used = $('#rollPips').querySelectorAll('i');
  used.forEach((pip, i) => pip.classList.toggle('used', i < state.rollCount));
  $('#rollPips').setAttribute('aria-label', t('play.rollsUsed', { count: state.rollCount }));
  $('#rollHeading').textContent = state.rollCount ? t('play.rollCount', { count: state.rollCount }) : t('play.ready');
  $('#rollButtonText').textContent = state.rollCount ? (state.rollCount === 3 ? t('play.chooseScore') : t('play.rollAgain')) : t('play.rollDice');
  $('#rollButton').disabled = state.rollCount === 3 || state.finished || state.announcedRow !== null && state.rollCount === 3;
  $('#trayTip').textContent = state.rollCount ? t('play.trayActive') : t('play.trayStart');
  $('#sheetLabel').textContent = t('meta.columns', { count: state.columns.length });
  $('#turnLabel').textContent = `${Math.min(state.turn, state.columns.length * ROWS.length)} / ${state.columns.length * ROWS.length}`;
  $('#grandTotal').textContent = grandTotal();
  const card = $('#announcementCard');
  card.classList.toggle('hidden', state.announcedRow === null);
  if (state.announcedRow !== null) {
    $('#announcementTitle').textContent = t('announcement.title', { row: rowText(ROWS[state.announcedRow].id) });
    $('#announcementCopy').textContent = t('announcement.committed', { score: rowScore(ROWS[state.announcedRow].id) });
    $('#cancelAnnouncement').classList.toggle('hidden', state.rollCount !== 1);
  }
  const message = $('#turnMessage');
  if (state.forcedDirectedRow !== null) message.innerHTML = `<span>D</span><p><strong>${t('message.directedTitle')}</strong>${t('message.directedCopy', { row: rowText(ROWS[state.forcedDirectedRow].id) })}</p>`;
  else if (state.announcedRow !== null) message.innerHTML = `<span>N</span><p><strong>${t('message.announcementTitle')}</strong>${t('message.announcementCopy', { row: rowText(ROWS[state.announcedRow].id) })}</p>`;
  else if (state.rollCount === 0) message.innerHTML = `<span>${String(state.turn).padStart(2,'0')}</span><p><strong>${t('message.freshTitle')}</strong>${t('message.freshCopy')}</p>`;
  else message.innerHTML = `<span>${String(state.rollCount).padStart(2,'0')}</span><p><strong>${state.rollCount === 3 ? t('message.scoreTitle') : t('message.shapeTitle')}</strong>${state.rollCount === 3 ? t('message.scoreCopy') : t('message.shapeCopy')}</p>`;
}

function render() { renderDice(); renderTable(); renderStatus(); }

function rollDice() {
  if (state.rollCount >= 3 || state.finished) return;
  state.dice = state.dice.map((value, index) => state.held[index] ? value : Math.floor(Math.random() * 6) + 1);
  state.rollCount++;
  beep(180 + state.rollCount * 40, .035);
  render();
  document.querySelectorAll('.die:not(.held)').forEach(die => die.classList.add('rolling'));
}

function toggleDie(index) {
  if (!state.rollCount || state.rollCount === 3) return;
  state.held[index] = !state.held[index];
  beep(state.held[index] ? 420 : 280, .025);
  renderDice();
}

function announce(rowIndex) {
  state.announcedRow = rowIndex;
  beep(520, .08);
  render();
}

function scoreCell(columnId, rowIndex) {
  if (!isAvailable(columnId, rowIndex)) return;
  const row = ROWS[rowIndex];
  const actual = rowScore(row.id);
  state.scores[columnId][rowIndex] = columnId === 'maximum' && actual !== perfectScore(row.id) ? 0 : actual;
  if (columnId === 'announcement' && state.columns.includes('directed')) state.forcedDirectedRow = rowIndex;
  else if (columnId === 'directed') state.forcedDirectedRow = null;
  state.announcedRow = null;
  state.rollCount = 0;
  state.held.fill(false);
  state.turn++;
  beep(660, .09);
  saveGame();
  state.finished = state.columns.every(complete);
  render();
  if (state.finished) finishGame();
}

function startGame(count) {
  state.columns = [...SETS[count]];
  state.scores = Object.fromEntries(state.columns.map(id => [id, Array(ROWS.length).fill(null)]));
  Object.assign(state, { dice: Array(6).fill(1), held: Array(6).fill(false), rollCount: 0, turn: 1, announcedRow: null, forcedDirectedRow: null, finished: false });
  saveGame();
  render();
}

function saveGame() {
  localStorage.setItem('jamb-klub-game', JSON.stringify({ columns: state.columns, scores: state.scores, turn: state.turn, forcedDirectedRow: state.forcedDirectedRow }));
}

function loadGame() {
  try {
    const saved = JSON.parse(localStorage.getItem('jamb-klub-game'));
    if (!saved || ![6,8,10].includes(saved.columns?.length)) return false;
    state.columns = saved.columns; state.scores = saved.scores; state.turn = saved.turn; state.forcedDirectedRow = saved.forcedDirectedRow ?? null;
    return true;
  } catch { return false; }
}

function finishGame() {
  const total = grandTotal();
  $('#finalScore').textContent = total;
  $('#finishTitle').textContent = t(total >= state.columns.length * 200 ? 'finish.masterful' : 'finish.fine');
  $('#finishCopy').textContent = t('finish.copy', { total, count: state.columns.length });
  $('#finishDialog').showModal();
}

let audioContext;
function beep(frequency, duration) {
  if (!state.sound) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator(); const gain = audioContext.createGain();
    oscillator.frequency.value = frequency; oscillator.type = 'sine'; gain.gain.value = .025;
    oscillator.connect(gain); gain.connect(audioContext.destination); oscillator.start(); gain.gain.exponentialRampToValueAtTime(.0001, audioContext.currentTime + duration); oscillator.stop(audioContext.currentTime + duration);
  } catch { /* Sound is an enhancement only. */ }
}

$('#rollButton').addEventListener('click', rollDice);
diceTray.addEventListener('click', event => { const die = event.target.closest('[data-die]'); if (die) toggleDie(Number(die.dataset.die)); });
scoreBody.addEventListener('click', event => {
  const cell = event.target.closest('td[data-column]'); if (!cell) return;
  const row = Number(cell.dataset.row);
  if (cell.classList.contains('announceable')) announce(row); else scoreCell(cell.dataset.column, row);
});
scoreBody.addEventListener('keydown', event => { if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('td[data-column]')) event.target.click(); });
document.addEventListener('keydown', event => { if (event.code === 'Space' && !event.target.closest('button, input, dialog[open]')) { event.preventDefault(); rollDice(); } });
$('#cancelAnnouncement').addEventListener('click', () => { state.announcedRow = null; render(); });
$('#rulesButton').addEventListener('click', () => $('#rulesDialog').showModal());
$('#newGameButton').addEventListener('click', () => $('#setupDialog').showModal());
$('#setupForm').addEventListener('submit', event => { event.preventDefault(); startGame(Number(new FormData(event.currentTarget).get('columns'))); $('#setupDialog').close(); });
$('#playAgainButton').addEventListener('click', () => { $('#finishDialog').close(); $('#setupDialog').showModal(); });
$('#soundButton').addEventListener('click', event => {
  state.sound = !state.sound;
  event.currentTarget.classList.toggle('muted', !state.sound);
  const label = t(state.sound ? 'sound.mute' : 'sound.enable');
  event.currentTarget.setAttribute('aria-label', label);
  event.currentTarget.setAttribute('title', label);
});
document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));

window.__JAMB__ = { state, ROWS, rowScore, perfectScore, columnTotals, startGame };
if (!loadGame()) startGame(6);
applyStaticTranslations();
render();
