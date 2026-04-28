/* ============================================================
   Y8 Pitch Prep — Shared vocabulary + utilities
   ============================================================ */

const VOCAB = {
  family: [
    { en: 'Dad',                pinyin: 'bàba',     char: '爸爸' },
    { en: 'Mum',                pinyin: 'māma',     char: '妈妈' },
    { en: 'Older brother',      pinyin: 'gēge',     char: '哥哥' },
    { en: 'Older sister',       pinyin: 'jiějie',   char: '姐姐' },
    { en: 'Younger brother',    pinyin: 'dìdi',     char: '弟弟' },
    { en: 'Younger sister',     pinyin: 'mèimei',   char: '妹妹' },
    { en: 'Pet dog',            pinyin: 'gǒu',      char: '狗' },
    { en: 'Pet cat',            pinyin: 'māo',      char: '猫' },
    { en: 'Grandpa (paternal)', pinyin: 'yéye',     char: '爷爷' },
    { en: 'Grandma (paternal)', pinyin: 'nǎinai',   char: '奶奶' },
    { en: 'Uncle',              pinyin: 'shūshu',   char: '叔叔' },
    { en: 'Aunty',              pinyin: 'āyí',      char: '阿姨' },
  ],
  appearance: [
    { en: 'Tall',     pinyin: 'gāo',      char: '高' },
    { en: 'Short',    pinyin: 'ǎi',       char: '矮' },
    { en: 'Chubby',   pinyin: 'pàng',     char: '胖' },
    { en: 'Slim',     pinyin: 'shòu',     char: '瘦' },
    { en: 'Pretty',   pinyin: 'piàoliang', char: '漂亮' },
    { en: 'Handsome', pinyin: 'shuài',    char: '帅' },
    { en: 'Cute',     pinyin: "kě'ài",    char: '可爱' },
  ],
  personality: [
    { en: 'Clever',         pinyin: 'cōngming', char: '聪明' },
    { en: 'Friendly',       pinyin: 'yǒuhǎo',   char: '友好' },
    { en: 'Happy',          pinyin: 'kuàilè',   char: '快乐' },
    { en: 'Strict',         pinyin: 'yánlì',    char: '严厉' },
    { en: 'Quiet',          pinyin: 'ānjìng',   char: '安静' },
    { en: 'Lively',         pinyin: 'huópō',    char: '活泼' },
    { en: 'Fun/Interesting', pinyin: 'yǒuqù',   char: '有趣' },
  ],
  countries: [
    { en: 'Chinese',    pinyin: 'Zhōngguó rén',   char: '中国人' },
    { en: 'Australian', pinyin: 'Àodàlìyà rén',   char: '澳大利亚人' },
    { en: 'American',   pinyin: 'Měiguó rén',     char: '美国人' },
    { en: 'British',    pinyin: 'Yīngguó rén',    char: '英国人' },
    { en: 'Japanese',   pinyin: 'Rìběn rén',      char: '日本人' },
  ],
  cities: [
    { en: 'Sydney',    pinyin: 'Xīní',     char: '悉尼' },
    { en: 'Beijing',   pinyin: 'Běijīng',  char: '北京' },
    { en: 'Shanghai',  pinyin: 'Shànghǎi', char: '上海' },
    { en: 'Australia', pinyin: 'Àodàlìyà', char: '澳大利亚' },
    { en: 'China',     pinyin: 'Zhōngguó', char: '中国' },
  ],
  ages: [
    { en: '13', pinyin: 'shísān',    char: '十三' },
    { en: '14', pinyin: 'shísì',     char: '十四' },
    { en: '15', pinyin: 'shíwǔ',     char: '十五' },
    { en: '40', pinyin: 'sìshí',     char: '四十' },
    { en: '45', pinyin: 'sìshíwǔ',   char: '四十五' },
    { en: '50', pinyin: 'wǔshí',     char: '五十' },
  ],
  linkers: [
    { en: 'and', pinyin: 'hé',     char: '和' },
    { en: 'but', pinyin: 'dànshì', char: '但是' },
  ],
};

/* Sentences for the sentence builder. Each sentence:
   tokens: scrambled in this fixed order, student must rearrange to correct.
   correct: array of pinyin tokens in correct order. */
const SENTENCES = [
  { en: 'My dad is tall.',
    correct: ['Wǒ', 'de', 'bàba', 'hěn', 'gāo'],
    distractors: ['shì'] },
  { en: 'My mum is slim.',
    correct: ['Wǒ', 'de', 'māma', 'hěn', 'shòu'],
    distractors: [] },
  { en: 'He is 13 years old.',
    correct: ['Tā', 'shísān', 'suì'],
    distractors: ['shì'] },
  { en: 'She is Australian.',
    correct: ['Tā', 'shì', 'Àodàlìyà', 'rén'],
    distractors: [] },
  { en: 'My older brother is tall and handsome.',
    correct: ['Wǒ', 'de', 'gēge', 'hěn', 'gāo', 'hé', 'hěn', 'shuài'],
    distractors: ['dànshì'] },
  { en: 'My younger sister is short but clever.',
    correct: ['Wǒ', 'de', 'mèimei', 'hěn', 'ǎi', 'dànshì', 'hěn', 'cōngming'],
    distractors: ['hé'] },
  { en: 'He lives in Sydney.',
    correct: ['Tā', 'zhù', 'zài', 'Xīní'],
    distractors: [] },
  { en: 'My pet dog is small and lively.',
    correct: ['Wǒ', 'de', 'gǒu', 'hěn', 'xiǎo', 'hé', 'hěn', 'huópō'],
    distractors: ['shì'] },
  { en: 'This is my dad.',
    correct: ['Zhè', 'shì', 'wǒ', 'de', 'bàba'],
    distractors: [] },
  { en: 'My mum is called Sarah.',
    correct: ['Wǒ', 'de', 'māma', 'jiào', 'Sarah'],
    distractors: ['shì'] },
];

/* ============ localStorage helpers ============ */
const STORE_KEY = 'y8pitchprep.v1';

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveState(patch) {
  try {
    const cur = loadState();
    const next = { ...cur, ...patch };
    localStorage.setItem(STORE_KEY, JSON.stringify(next));
    flashSaveIndicator();
    return next;
  } catch (e) {
    console.warn('save failed', e);
  }
}

function flashSaveIndicator(msg = 'Saved ✓') {
  let el = document.querySelector('.save-indicator');
  if (!el) {
    el = document.createElement('div');
    el.className = 'save-indicator';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 1200);
}

function clearAllProgress() {
  if (confirm('This will erase ALL your progress on this device. Continue?')) {
    localStorage.removeItem(STORE_KEY);
    location.reload();
  }
}

/* ============ Shared header (injected) ============ */
function renderHeader(activePage) {
  const html = `
    <div class="site-header-inner">
      <a class="brand" href="index.html">
        <span class="brand-dot">●</span> Y8 Pitch Prep
      </a>
      <nav class="main-nav">
        <a href="index.html"           class="${activePage==='home'?'active':''}">Home</a>
        <a href="pitch-builder.html"   class="${activePage==='pitch'?'active':''}">Pitch Builder</a>
        <a href="flashcards.html"      class="${activePage==='flashcards'?'active':''}">Flashcards</a>
        <a href="sentence-builder.html"class="${activePage==='sentence'?'active':''}">Sentence Builder</a>
        <a href="reference.html"       class="${activePage==='reference'?'active':''}">Reference</a>
      </nav>
    </div>`;
  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = html;
  document.body.insertBefore(header, document.body.firstChild);
}

/* ============ Helpers ============ */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function el(tag, props = {}, kids = []) {
  const e = document.createElement(tag);
  Object.entries(props).forEach(([k, v]) => {
    if (k === 'class') e.className = v;
    else if (k === 'html') e.innerHTML = v;
    else if (k === 'text') e.textContent = v;
    else if (k.startsWith('on') && typeof v === 'function') e.addEventListener(k.slice(2), v);
    else e.setAttribute(k, v);
  });
  (Array.isArray(kids) ? kids : [kids]).forEach(k => {
    if (k == null) return;
    e.appendChild(typeof k === 'string' ? document.createTextNode(k) : k);
  });
  return e;
}
