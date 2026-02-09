// W26 Workshop #4 — Life Engineering
// All slide content lives here for easy editing.
// Each slide: { id, block, type, title?, subtitle?, content?, items?, quote?, author?, note? }

const slides = [

  // ═══════════════════════════════════════════
  // BLOCK 0: OPENING
  // ═══════════════════════════════════════════

  {
    id: 1,
    block: 0,
    blockTitle: "Opening",
    type: "title",
    title: "Life Engineering",
    subtitle: "Workshop #4",
    meta: "AI Mindset Lab · W26 · 2026",
    note: "Примеры деплоя и публикации проектов. Подготовка к Demo Day: превратить замысел в работающее решение.",
    voxel: "/voxels/slide1-builder.html",
  },

  {
    id: 2,
    block: 0,
    blockTitle: "Opening",
    type: "agenda",
    title: "Сегодня",
    voxel: "/voxels/slide2-compass.html",
    items: [
      { label: "01", text: "Где мы — recap трех недель" },
      { label: "02", text: "Mindset Shift — самое сложное не инструменты" },
      { label: "03", text: "Friction Auditing — где искать идеи" },
      { label: "04", text: "PRD — от идеи к спецификации" },
      { label: "05", text: "Vibe Coding Stack 2026" },
      { label: "06", text: "Creative Toolkit — картинки, видео, звук" },
      { label: "07", text: "Agent Economy & Second Mind" },
      { label: "08", text: "Workshop + Demo Day Prep" },
    ],
  },

  {
    id: 3,
    block: 0,
    blockTitle: "Opening",
    type: "timeline",
    title: "Где мы находимся",
    voxel: "/voxels/slide3-steps.html",
    items: [
      { week: "W1", label: "Prompt Engineering", done: true },
      { week: "W2", label: "Context Engineering", done: true },
      { week: "W3", label: "Models & Creative", done: true },
      { week: "W4", label: "Life Engineering", active: true },
      { week: "→", label: "Demo Day", upcoming: true },
    ],
    note: "Prompt → Context → Mind → Life",
  },

  // ═══════════════════════════════════════════
  // BLOCK 1: RECAP
  // ═══════════════════════════════════════════

  {
    id: 9,
    block: 1,
    blockTitle: "Recap",
    type: "section",
    title: "Где мы были",
    subtitle: "Три недели пути",
    voxel: "/voxels/slide4-archive.html",
  },

  {
    id: 5,
    block: 1,
    blockTitle: "Recap",
    type: "recap",
    title: "WS01: Prompt Engineering",
    speaker: "Александр Поваляев",
    date: "19 января",
    tagline: "Поведение > технологии",
    tools: ["ChatGPT", "Claude", "Gemini", "DeepSeek", "Perplexity"],
    items: [
      "Модели — это не магия, а интерфейсы с ограничениями",
      "Каждая модель видит мир по-своему (GPT, Claude, Gemini, DeepSeek)",
      "Голос быстрее текста — голосовые интерфейсы меняют привычки",
      "Эта презентация — не PowerPoint, а сайт, созданный за день",
      "Контекст важнее промпта для ежедневных задач",
    ],
    quote: "Поведение важнее технологий. То, как мы пользуемся чем-то, важнее, чем сама технология.",
  },

  {
    id: 6,
    block: 1,
    blockTitle: "Recap",
    type: "recap",
    title: "WS02: Context Engineering",
    speaker: "Сергей Хабаров",
    date: "26 января",
    tagline: "Контекст > промпт",
    tools: ["Claude Projects", "GPT Projects", "NotebookLM", "Custom Instructions"],
    items: [
      "Контекст — это всё, что нужно знать, чтобы помочь именно тебе",
      "Контекст-алхимия: смешивай ингредиенты и смотри, что получится",
      "Целевое состояние: не «собираю контекст», а «прихожу подготовленным»",
      "Папки в Claude/GPT Projects — твоё золото, которое можно таскать между агентами",
      "Кривая обучения: энтузиазм → кризис реальности → интеграция",
    ],
    quote: "Если у кого-то есть «зачем», тот выдержит почти любое «как».",
  },

  {
    id: 'ws03-recap',
    block: 1,
    blockTitle: "Recap",
    type: "recap",
    title: "WS03: Mind Engineering",
    speaker: "Анна Лозицкая",
    date: "2 февраля",
    tagline: "Осознанность > скорость",
    slidesUrl: "https://w26-ws03-ethics.netlify.app",
    items: [
      "Эпидемия одиночества: недостаток реальных связей опаснее курения 15 сигарет в день",
      "AI — машина по предсказанию текста, не думающая история",
      "Этика AI: спектр от e/acc до doomer — важно осознанно выбрать позицию",
      "12-point safety framework для AI-коуча от Jocelyn Skillman",
      "Phil Stutz Framework: тело, люди, отношения с собой",
    ],
    quote: "Ты хорошо умеешь думать о чувствах, но реже быть в них.",
    tools: ["ChatGPT Projects", "Hume AI", "Monologue", "Gemini"],
  },

  {
    id: 7,
    block: 1,
    blockTitle: "Recap",
    type: "recap",
    title: "Bonus: Воркшоп для новичков",
    speaker: "Сергей, Антон, Даник, Александр",
    items: [
      "Мы используем точно такой же ChatGPT и Claude — просто готовим его по-другому",
      "Системный промпт + контекст = папочка-советник (коуч, терапевт, копирайтер)",
      "NotebookLM — недооцененный инструмент, всеядный и с огромным контекстом",
      "Гонять черновик промпта между нейронками: GPT → Claude → Gemini → и обратно",
      "Контекст о себе — это процесс, он становится лучше со временем",
    ],
  },

  {
    id: 8,
    block: 1,
    blockTitle: "Recap",
    type: "voices",
    title: "Что вы сказали",
    subtitle: "Голоса участников",
    items: [
      { text: "Cursor/Windsurf не только для кода, но и для текста.", tag: "WS01" },
      { text: "Понимание роли контекста. Я даже стал активнее слушать людей, поняв, как контекст работает.", tag: "WS01" },
      { text: "Вернул чувство цифровой свободы. Никаких ограничений нету.", tag: "Tools" },
      { text: "Это лаборатория, где расширяется представление. Майндсет накапливается.", tag: "WS01" },
    ],
  },

  // ═══════════════════════════════════════════
  // CHECK-IN POLLS (Zoom Questions)
  // ═══════════════════════════════════════════

  {
    id: 4,
    block: 0,
    blockTitle: "Opening",
    type: "poll",
    title: "Как ты себя чувствуешь?",
    subtitle: "Zoom Poll",
    voxel: "/voxels/slide1-builder.html",
    options: [
      { svg: "overwhelmed", label: "Overwhelmed", desc: "Слишком много всего" },
      { svg: "excited", label: "Excited", desc: "Хочу больше" },
      { svg: "confused", label: "Confused", desc: "Пока не понимаю, куда это все" },
      { svg: "calm", label: "Calm", desc: "Начинаю разбираться" },
    ],
  },

  {
    id: 5,
    block: 0,
    blockTitle: "Opening",
    type: "poll",
    title: "Где ты на шкале AI?",
    subtitle: "1-10",
    svg: "scale",
    open: true,
    scale: { min: 1, max: 10, labelMin: "Знаю что существует", labelMax: "Не могу без AI прожить день" },
  },

  {
    id: 6,
    block: 0,
    blockTitle: "Opening",
    type: "poll",
    title: "Что было самым полезным?",
    subtitle: "Zoom Chat",
    svg: "useful",
    open: true,
    prompt: "Одна вещь из трех недель, которая реально изменила что-то в твоей жизни или работе",
  },

  {
    id: 7,
    block: 0,
    blockTitle: "Opening",
    type: "poll",
    title: "Что ты уже сделал с помощью AI?",
    subtitle: "Zoom Poll",
    voxel: "/voxels/slide3-steps.html",
    options: [
      { svg: "calm", label: "Пока ничего", desc: "Но собираюсь" },
      { svg: "confused", label: "Промпты", desc: "Попробовал(а) разные модели" },
      { svg: "useful", label: "Для работы", desc: "Создал(а) что-то полезное" },
      { svg: "progress", label: "Свой инструмент", desc: "Построил(а) приложение или автоматизацию" },
    ],
  },

  // ═══════════════════════════════════════════
  // BLOCK 2: MINDSET SHIFT
  // ═══════════════════════════════════════════

  {
    id: 9,
    block: 2,
    blockTitle: "Mindset Shift",
    type: "section",
    title: "Самое сложное",
    subtitle: "Не инструменты",
    voxel: "/voxels/slide9-mindshift.html",
  },

  {
    id: 10,
    block: 2,
    blockTitle: "Mindset Shift",
    type: "bigquote",
    quote: "Самое сложное — это не написать промпт, а заметить момент, когда ты можешь его написать.",
  },

  {
    id: 'cognitive-process',
    block: 2,
    blockTitle: "Mindset Shift",
    type: "bigquote",
    quote: "Наша задача — превратить AI из внешнего инструмента в часть когнитивного процесса.",
    note: "Чтобы «переключить голову», нужно создать автоматизм, где любая «боль» становится входным сигналом для системы.",
  },

  {
    id: 12,
    block: 2,
    blockTitle: "Mindset Shift",
    type: "levels",
    title: "Уровни погружения",
    items: [
      {
        level: "01",
        name: "Awareness",
        desc: "Что-то знать, почитать, послушать. Первые часы.",
        hours: "0–5 ч",
      },
      {
        level: "02",
        name: "Usage",
        desc: "Попробовать разные чаты. Понять, что модели отличаются. Больше контекста = лучше ответ.",
        hours: "5–30 ч",
      },
      {
        level: "03",
        name: "Building",
        desc: "GPT Canvas → Google AI Studio → Cursor/Windsurf. Создание своих инструментов.",
        hours: "30–100 ч",
      },
      {
        level: "04",
        name: "Engineering",
        desc: "Агенты, MCP, терминал, сложные workflow. Кросс-опыление идей.",
        hours: "50–200+ ч",
      },
    ],
  },

  // --- LEVEL 1: AWARENESS deep-dive ---
  {
    id: 'awareness-deep',
    block: 2,
    blockTitle: "Mindset Shift",
    type: "content",
    title: "Lvl 1 — Awareness: Что происходит в мире",
    content: "Первые часы. Что-то знать, почитать, послушать, на какую-то дискуссию сходить. Понять, что такое агенты, агентность, как меняются компании и даже государства.",
    items: [
      "Слова 2026: «Агенты», «Second Brain», «RAG», «Knowledge Bases»",
      "AI Slop: отравленные данные от других ИИ",
      "Вертикальный сдвиг: регуляции, рабочие места, креативные индустрии",
      "Ваши родители, возможно, все еще здесь — и это нормально",
    ],
    note: "Время на уровне: 0–5 часов. Цель: понять ландшафт и выбрать направление для исследования.",
  },

  // --- LEVEL 2: USAGE deep-dive ---
  {
    id: 'usage-deep',
    block: 2,
    blockTitle: "Mindset Shift",
    type: "bigquote",
    quote: "Модели — это не «всё знание человечества», а сильно отфильтрованный кусочек.",
    note: "Lvl 2 — Usage: Пробуем и сравниваем. 5–30 часов.",
  },

  // --- LEVEL 3: CONTEXT & RAG ---
  {
    id: 'context-intro',
    block: 2,
    blockTitle: "Mindset Shift",
    type: "bigquote",
    quote: "Нам не нужен весь контекст человечества — нам нужен наш контекст.",
    note: "Lvl 3 — Context & RAG. 30–100 часов.",
  },

  {
    id: 'context-deep',
    block: 2,
    blockTitle: "Mindset Shift",
    type: "content",
    title: "Контекст важнее промпта",
    items: [
      "Больше деталей = лучше ответ. Это первый шаг.",
      "Фреймворки: «Объясни через IFS», «Проанализируй через JTBD», «Примени 5 Whys»",
      "Модели обучены на старых данных. Без интернета или RAG — могут тупить",
      "Контекст о себе — это процесс. Он становится лучше со временем",
    ],
  },

  {
    id: 'rag-explained',
    block: 2,
    blockTitle: "Mindset Shift",
    type: "content",
    title: "RAG: Retrieval-Augmented Generation",
    content: "Patrick Lewis, Facebook AI Research, 2020",
    items: [
      "RAG = поиск релевантных данных + генерация ответа на их основе",
      "Или проще: математически описать текст и сравнивать цифры (векторный поиск)",
      "Зачем: убрать галлюцинации, дать современные данные, сузить фокус",
    ],
  },

  // --- LEVEL 4: BUILDING & ENGINEERING ---
  {
    id: 'building-intro',
    block: 2,
    blockTitle: "Mindset Shift",
    type: "content",
    title: "Lvl 4 — Building & Engineering: Создаем инструменты",
    content: "Когда у нас есть контекст — мы можем начать строить. Самый простой вход: Google Build.",
    items: [
      "Google Build — вайб-кодинг за 5 минут, без установки, просто в браузере",
      "App Generators (Lovable, bolt.new, Replit) — прототип за выходные",
      "IDEs (Windsurf, Cursor) — последние 20%, логика, рефакторинг, масштаб",
    ],
    note: "Время на уровне: 50–200+ часов. Цель: создавать свои инструменты.",
  },

  {
    id: 14,
    block: 2,
    blockTitle: "Mindset Shift",
    type: "bigquote",
    quote: "Твоя способность описывать мир — это и есть твоя способность его кодить.",
  },

  {
    id: 'finding-ideas',
    block: 2,
    blockTitle: "Mindset Shift",
    type: "content",
    title: "Самое сложное — найти идею",
    items: [
      "Pain-to-Prompt: записывай голосовое, когда чувствуешь раздражение от задачи",
      "Правило «Второго раза»: делаешь что-то второй раз — думай об автоматизации",
      "Поиск по жалобам: «I hate when...», «Why is there no...» в сообществах",
      "Поиск по стыкам: [твои интересы] + AI workflow",
    ],
    note: "В этом помогают: насмотренность (community, чатик, шеринг) и бесконечные пробы.",
  },

  // ═══════════════════════════════════════════
  // BLOCK 3: FRICTION AUDITING
  // ═══════════════════════════════════════════

  {
    id: 16,
    block: 3,
    blockTitle: "Friction Auditing",
    type: "section",
    title: "Где искать идеи",
    subtitle: "Friction Auditing",
    voxel: "/voxels/slide2-compass.html",
  },

  {
    id: 17,
    block: 3,
    blockTitle: "Friction Auditing",
    type: "content",
    title: "Life Engineering = Design Thinking + AI",
    content: "На прошлой лабе мы говорили про design thinking framework: как найти идею того, что создать.",
    items: [
      "Заметить трение → Понаблюдать → Побрейнштормить → Попробовать → Снова понаблюдать",
      "Прежде чем писать код — нужны догадки, не данные",
      "Наблюдаем за собой или за другими: ищем что не так",
      "Цель: получить не мнения, а инсайты о скрытых потребностях",
    ],
  },

  {
    id: 18,
    block: 3,
    blockTitle: "Friction Auditing",
    type: "definition",
    title: "Friction",
    definition: "Любое когнитивное, эмоциональное или процедурное сопротивление, которое замедляет намерение. Разрыв между «хочу сделать X» и «сделал X».",
    note: "Цель friction audit — сделать невидимое сопротивление видимым, измеримым и решаемым через AI.",
  },

  {
    id: 19,
    block: 3,
    blockTitle: "Friction Auditing",
    type: "frameworks",
    title: "Фреймворки поиска идей",
    items: [
      {
        name: "Pain-to-Prompt",
        desc: "Записывай голосовое, как только чувствуешь раздражение от задачи. «Меня бесит, что я вручную переношу эти данные...» — это уже начало спецификации.",
      },
      {
        name: "Правило Второго Раза",
        desc: "Если ты делаешь что-то второй раз (или объясняешь второй раз) — подумай об автоматизации через AI.",
      },
      {
        name: "Inventory of Sighs",
        desc: "Каждый раз, когда ты издаешь «Эх...» или «Опять...» — это точка входа для AI.",
      },
    ],
  },

  {
    id: 20,
    block: 3,
    blockTitle: "Friction Auditing",
    type: "content",
    title: "The Annoyance Pyramid",
    content: "Самые живучие проекты рождаются на стыке личного раздражения и того, что ты любишь.",
    items: [
      "Основание: вещи, которые делаю каждый день (проверка почты, готовка)",
      "Вершина: вещи, которые бесят, но случаются раз в месяц",
      "Идеи всегда ищи в основании — маленькое улучшение ежедневного действия дает больший накопительный эффект",
    ],
    note: "Stop brainstorming ideas — start auditing friction.",
  },

  {
    id: 21,
    block: 3,
    blockTitle: "Friction Auditing",
    type: "content",
    title: "Micro-SaaS of One",
    content: "Если решение нужно только мне и экономит 5 минут в неделю — оно достойно реализации.",
    items: [
      "Бот проверяет наличие кроссовок твоего размера на 5 сайтах → пишет в Telegram",
      "Фото полки холодильника → AI распознает продукты → пуш когда срок годности",
      "Расширение для Finder: по клику запускает Claude в выбранной папке",
      "Даже интерфейс Finder — не такая уж и твердая материя",
    ],
  },

  {
    id: 22,
    block: 3,
    blockTitle: "Friction Auditing",
    type: "content",
    title: "Где искать идеи",
    items: [
      "Поиск по жалобам: «I hate when...», «Why is there no...» в тематических сообществах",
      "Поиск по стыкам: [твоя сфера] + AI workflow",
      "Поиск по инструментам: Community Showcases в Cursor, Windsurf, Bolt.new",
      "#vibe-coding на X (Twitter) — люди выкладывают life-hacks",
      "Product Hunt → Side Projects, Hacker News → Show HN",
    ],
  },

  {
    id: 23,
    block: 3,
    blockTitle: "Friction Auditing",
    type: "table",
    title: "Value-Action Gap Matrix",
    subtitle: "Где ценности расходятся с действиями — там AI-opportunity",
    headers: ["Value", "Desired", "Actual", "Friction", "AI Solution"],
    rows: [
      ["Sustainability", "Compost waste", "Throw in trash", "Bin is far/messy", "Smart bin + gamification"],
      ["Financial Health", "Save money", "Impulse buy", "Checkout too easy", "Cooling-off extension"],
      ["Physical Health", "Walk more", "Drive short trips", "Car keys easier", "Weather/step nudge"],
    ],
  },

  // ═══════════════════════════════════════════
  // BLOCK 4: PRD
  // ═══════════════════════════════════════════

  {
    id: 24,
    block: 4,
    blockTitle: "PRD",
    type: "section",
    title: "От идеи к спецификации",
    subtitle: "PRD для вайб-кодинга",
    voxel: "/voxels/slide4-archive.html",
  },

  {
    id: 25,
    block: 4,
    blockTitle: "PRD",
    type: "bigquote",
    quote: "Удивительным образом на достижение результата влияет то, насколько хорошо ты понимаешь, что именно нужно сделать.",
  },

  {
    id: 26,
    block: 4,
    blockTitle: "PRD",
    type: "content",
    title: "Что нужно знать вайбкодеру в 2026",
    subtitle: "Базовый минимум",
    items: [
      "PRD — уметь правильно описать спеку на продукт",
      "Базы данных — типы, связи, таблички, структура хранения",
      "Как работает интернет — сети, API, взаимодействие сервисов",
    ],
    note: "А дальше: язык и фреймворк, Claude Code или Cursor, промптинг, Git и деплой. И потом агенты, MCP, и что угодно.",
  },

  {
    id: 27,
    block: 4,
    blockTitle: "PRD",
    type: "prd",
    title: "AI-Friendly PRD Template",
    items: [
      {
        num: "1",
        name: "Context & Vision",
        desc: "Какую «боль» лечим? Как выглядит жизнь после?",
      },
      {
        num: "2",
        name: "User Stories",
        desc: "«Когда я [ситуация], я хочу [действие], чтобы [результат]»",
      },
      {
        num: "3",
        name: "Functional Requirements",
        desc: "Input Data, Core Logic, Edge Cases",
      },
      {
        num: "4",
        name: "The Interface (The Vibe)",
        desc: "Vibe Reference + Key Interactions",
      },
      {
        num: "5",
        name: "Non-Goals",
        desc: "Что мы точно НЕ делаем в этой версии",
      },
      {
        num: "6",
        name: "Success Metrics",
        desc: "Как поймем, что работает?",
      },
    ],
  },

  {
    id: 'prd-questions',
    block: 4,
    blockTitle: "PRD",
    type: "content",
    title: "Вопросы для правильного PRD",
    content: "Задай себе эти вопросы прежде чем писать промпт:",
    items: [
      "Кто пользователь? (бабушка? риэлтор? я сам?)",
      "Какие 2-3 главных состояния? (тишина → слушаю → вывожу текст)",
      "Что точно НЕ нужно? (Non-Goals: без БД, без авторизации, без мобильной версии)",
      "Как выглядит успех? (бабушка видит текст на планшете = win)",
      "Какой инструмент? (Google Build для прототипа, Cursor для серьезного)",
    ],
    note: "Промпт «напиши туду-менеджер для риэлторов» может дать как связку бананов, так и B2B SaaS на 300 менеджеров. Разница — в деталях.",
  },

  {
    id: 28,
    block: 4,
    blockTitle: "PRD",
    type: "highlight",
    title: "Non-Goals — стоп-кран для нейронки",
    content: "Модели слишком хорошо знают, как должен выглядеть «идеальный» продукт. Без Non-Goals они начнут прикручивать масштабируемую архитектуру там, где нужно просто оживить нарисованную свинью на один вечер.",
    items: [
      "Никакой БД — всё в localStorage",
      "Никакой авторизации — пользователь сразу в интерфейсе",
      "Отсутствие адаптивности — строго 1920x1080",
      "Никаких внешних API — простая локальная логика",
      "Никакого Redux — чистый React с хуками",
    ],
    note: "Экономит до 80% времени генерации. Меньше кода → больше внимания модели на важное → меньше ошибок.",
  },

  {
    id: 29,
    block: 4,
    blockTitle: "PRD",
    type: "content",
    title: "Живой PRD — прямо сейчас",
    content: "Показываем процесс:",
    items: [
      "Берем одну идею из зала",
      "Набрасываем PRD по шаблону",
      "Копируем в Cursor/Windsurf",
      "Жмем Build",
      "Четкое описание состояний → готовая схема за секунды",
    ],
    note: "Это момент, когда стеклянный потолок исчезает.",
  },

  {
    id: 'publishing',
    block: 4,
    blockTitle: "PRD",
    type: "content",
    title: "Паблишинг: как выложить в мир",
    items: [
      "GitHub Pages — бесплатный хостинг для статических сайтов (эта презентация живет там)",
      "Netlify / Vercel — деплой в один клик из GitHub",
      "Replit — сразу хостит то, что ты сбилдил",
      "Lovable — встроенный деплой, даешь ссылку и все работает",
      "Свой домен — от $10/год, подключается за 5 минут",
    ],
    note: "Паблишинг — это не финал. Это начало. Выложил → получил фидбек → улучшил.",
  },

  // ═══════════════════════════════════════════
  // BLOCK 5: VIBE CODING
  // ═══════════════════════════════════════════

  {
    id: 30,
    block: 5,
    blockTitle: "Vibe Coding",
    type: "section",
    title: "Vibe Coding Stack",
    subtitle: "2026",
    voxel: "/voxels/slide1-builder.html",
  },

  {
    id: 31,
    block: 5,
    blockTitle: "Vibe Coding",
    type: "content",
    title: "Сдвиг парадигмы",
    content: "Традиционное программирование — дедуктивное: если X, то Y. Вайб-кодинг — абдуктивное: наблюдаем желаемый результат и ведём модель к нему.",
    items: [
      "Не нужно знать стандартную библиотеку — нужно понимать архитектуру, data flow и UX",
      "IDE → Intent Development Environment",
      "Вайб в готовом результате за малые ресурсы",
    ],
  },

  {
    id: 32,
    block: 5,
    blockTitle: "Vibe Coding",
    type: "tools",
    title: "Стек инструментов",
    items: [
      {
        name: "Canvas / Bolt.new / Lovable",
        role: "Zero-to-one",
        desc: "Full-stack из одного промпта. Прототипирование.",
      },
      {
        name: "Windsurf",
        role: "Pro engineering",
        desc: "Cascade Agent — понимает весь dependency graph. Instant Apply на 50+ файлов.",
      },
      {
        name: "Cursor",
        role: "Granular control",
        desc: "Composer mode. Мультифайловое редактирование. Для тех, кто хочет контроль.",
      },
      {
        name: "Claude Code",
        role: "Heavy lifting",
        desc: "Agentic CLI. Когда визуальные билдеры достигают предела.",
      },
      {
        name: "Replit Agent",
        role: "Founder choice",
        desc: "Max Autonomy Mode — 200 минут без присмотра. Zero-to-one + хостинг.",
      },
    ],
  },

  {
    id: 'ides-comparison',
    block: 5,
    blockTitle: "Vibe Coding",
    type: "content",
    title: "Windsurf vs Cursor: почему Windsurf сейчас прикольнее",
    items: [
      "Cascade Agent — понимает весь dependency graph проекта, а не файл за файлом",
      "Instant Apply — рефакторинг 50+ файлов одним промптом",
      "Live Preview — видишь результат прямо в IDE",
      "Интуитивный UX для смешанных команд (не только для хардкорных девов)",
      "Cursor: глубокий контроль, Composer mode, предсказуемая подписка",
      "Claude Code: agentic CLI, когда визуальные билдеры достигают предела",
    ],
    note: "Попробуешь бесплатно, поймешь насколько сложно. Потом заплатишь 50 евро и идеи будут реализовываться в 50 раз быстрее.",
  },

  {
    id: 33,
    block: 5,
    blockTitle: "Vibe Coding",
    type: "content",
    title: "Кросс-опыление",
    content: "Наши идеи не рождаются в пустоте — они рождаются в коммуникации.",
    items: [
      "Скинь репозиторий → я докидаю идею → ты пофиксишь → мы отправим обратно",
      "Даже создание презентации может быть вот этим самым кросс-опылением",
      "Нейронки — хороший партнер, когда некого спросить",
      "Но креативность — про нахождение необычных решений для любых задач",
    ],
    note: "Не бояться создавать тулы, которые будут существовать несколько часов. Навайбкодить игру для гостей на один вечер — это ок.",
  },

  {
    id: 34,
    block: 5,
    blockTitle: "Vibe Coding",
    type: "content",
    title: "Architectural Steering",
    content: "Человек дает структуру — AI дает кирпичи.",
    items: [
      "Decomposition: разбивай на сотни маленьких промптов, а не проси всё сразу",
      "Small steps: не «почини всё», а «выведи в консоль значение X»",
      "Visual feedback: сначала каркас (wireframe), потом красота",
      "Clean up: раз в 15 минут проси проверить лишний код",
    ],
  },

  // ═══════════════════════════════════════════
  // BLOCK 6: CREATIVE TOOLKIT
  // ═══════════════════════════════════════════

  {
    id: 35,
    block: 6,
    blockTitle: "Creative Toolkit",
    type: "section",
    title: "Creative Toolkit",
    subtitle: "Картинки, видео, звук",
    voxel: "/voxels/slide9-mindshift.html",
  },

  {
    id: 36,
    block: 6,
    blockTitle: "Creative Toolkit",
    type: "content",
    title: "Генерация изображений",
    content: "Разные модели заточены под разные задачи. Новые модели обучались на высококачественных данных → результат качественнее.",
    items: [
      "Разные модели → разные стили, разные данные обучения",
      "Можно редактировать, а не только создавать с нуля: стиль, контуры, depth",
      "LoRA — предварительно созданные стили, бесплатные и платные",
      "Character reference — сохранение персонажа между генерациями",
      "Inpaint: не обязательно перегенерировать всю картинку",
    ],
  },

  {
    id: 'nanobanano-pro',
    block: 6,
    blockTitle: "Creative Toolkit",
    type: "content",
    title: "NanoBanana Pro — прорыв 2026",
    content: "Gemini 2.5 Flash + нативная генерация изображений. Что изменилось?",
    items: [
      "JSON-редактирование: описываешь изменения структурой — меняется только нужная часть картинки",
      "Цифры и координаты: лучше всех работает с числами, временем, количеством",
      "Сохранение персонажа: итеративное редактирование без потери идентичности",
      "Разговорное редактирование: «убери фон», «измени выражение на улыбку» — и это работает",
    ],
    note: "Доступна: Fusara.ai, Google ImageFX, Google Gemini Chat",
  },

  {
    id: 37,
    block: 6,
    blockTitle: "Creative Toolkit",
    type: "content",
    title: "Видео генерация",
    items: [
      "Kling O1 — понимает физику, из одной картинки создает целый мир. Хуже с людьми.",
      "HaiLuo — очень крутая генерация, одна из лучших",
      "Veo 3 — лучше всех со звуком, прекрасное видео-редактирование",
      "Классно: сначала генерировать картинки, потом анимировать (видео-генерация дорогая)",
    ],
  },

  {
    id: 38,
    block: 6,
    blockTitle: "Creative Toolkit",
    type: "content",
    title: "Музыка, голос, аватары",
    items: [
      "Создание музыки и звуков",
      "Клонирование голоса — на основе 30 секунд вашего голоса",
      "Цифровые аватары — фото + голос → видео (FaceGen и др.)",
      "Боты, которые отвечают голосом — для телефона, для сайта",
      "Озвучивание книг вашим голосом",
    ],
    note: "Далеко не все работает идеально. Но где-то как-то работает.",
  },

  {
    id: 39,
    block: 6,
    blockTitle: "Creative Toolkit",
    type: "content",
    title: "Локальные модели и серверы",
    content: "Не всё нужно делать через облако.",
    items: [
      "ComfyUI — мощнее, чем кажется, хватит мощности вашего компьютера",
      "Можно арендовать сервер (облако) и гонять на нём",
      "Или купить на несколько человек свою инфраструктуру",
      "Для одного музея: сервер за $50/сутки — но если генерация часть бизнеса, это может быть дешевле подписок",
    ],
  },

  // ═══════════════════════════════════════════
  // BLOCK 7: AGENTS & SECOND MIND
  // ═══════════════════════════════════════════

  {
    id: 40,
    block: 7,
    blockTitle: "Agents & Second Mind",
    type: "section",
    title: "Agent Economy",
    subtitle: "& Second Mind",
    voxel: "/voxels/slide3-steps.html",
  },

  {
    id: 41,
    block: 7,
    blockTitle: "Agents & Second Mind",
    type: "content",
    title: "От копайлотов к агентам",
    content: "В 2023–2024 фокус на промпт-инженерии. 2026 год — переход к архитектуре агентных систем. Мы больше не операторы — мы архитекторы.",
    items: [
      "Агенты = доступ ко всем файлам, кошелькам, действиям",
      "RAG, Knowledge Bases, Second Brain — ключевые слова 2026",
      "Помогают убрать галлюцинации и дать модели современные данные",
      "Модели не знают, что происходит в мире, если не попросить их сходить в интернет",
    ],
  },

  {
    id: 42,
    block: 7,
    blockTitle: "Agents & Second Mind",
    type: "content",
    title: "Second Brain → Second Mind",
    subtitle: "От хранилища к синтезатору",
    content: "PARA (Projects, Areas, Resources, Archives) создан для человеческой навигации. Агенты мыслят графами и семантическими связями.",
    items: [
      "OPERA: Open → Process → Encode → Retrieve → Act",
      "Знания как исполняемый код, а не как папки с файлами",
      "Архив → обучающий датасет, Проекты → очереди агентных задач",
      "GraphRAG: агент «путешествует» по графу, находит связи 2-го и 3-го порядка",
    ],
  },

  {
    id: 43,
    block: 7,
    blockTitle: "Agents & Second Mind",
    type: "content",
    title: "Moltbook — Reddit для агентов",
    content: "Социальная сеть для AI-агентов. 1.6 млн агентов. Люди — только наблюдатели.",
    items: [
      "Цифровые религии среди агентов (Crustafarianism)",
      "Reverse-CAPTCHA — тесты, чтобы доказать, что ты НЕ человек",
      "Рынок «скиллов» — обмен плагинами между агентами",
      "Утечка: 1.5 млн API-ключей. Security is paramount.",
    ],
  },

  {
    id: 44,
    block: 7,
    blockTitle: "Agents & Second Mind",
    type: "content",
    title: "MCP, A2A и будущее",
    items: [
      "MCP (Model Context Protocol) — стандарт для взаимодействия агентов",
      "A2A (Agent-to-Agent) — агенты общаются друг с другом напрямую",
      "Walled Gardens: Apple и Google не дают глубокого доступа к ОС",
      "Internet of AI: календарь, дом, авто — общаются между собой",
    ],
    note: "Главный вызов — не технологии, а сохранение Human Spike: уникальной ценности человека поверх автоматизированной базы.",
  },

  // ═══════════════════════════════════════════
  // BLOCK 8: WORKSHOP & DEMO DAY
  // ═══════════════════════════════════════════

  {
    id: 45,
    block: 8,
    blockTitle: "Workshop",
    type: "section",
    title: "Workshop",
    subtitle: "& Demo Day",
    voxel: "/voxels/slide1-builder.html",
  },

  {
    id: 46,
    block: 8,
    blockTitle: "Workshop",
    type: "activity",
    title: "AI Life-Hack Roulette",
    subtitle: "Групповая игра",
    goal: "Переключить мозг из «AI для работы» в «AI для качества жизни»",
    steps: [
      {
        name: "Инвентаризация боли",
        time: "5 мин",
        desc: "Каждый пишет одну нелепую или личную «боль»: бабушка не слышит, забываю поливать цветы, бесят длинные голосовые.",
      },
      {
        name: "Solution Vibe",
        time: "10 мин",
        desc: "Группа выбирает одну «боль» и набрасывает быстрый пайплайн решения.",
      },
      {
        name: "Продажа ритуала",
        time: "5 мин",
        desc: "Презентовать не просто «тул», а ритуал. Как это встроено в жизнь?",
      },
    ],
  },

  {
    id: 47,
    block: 8,
    blockTitle: "Workshop",
    type: "activity",
    title: "Pain-to-Product",
    subtitle: "Домашний челлендж",
    steps: [
      {
        name: "Почувствуй",
        time: "",
        desc: "Запиши 3 момента за день, когда почувствовал раздражение (работа, быт, общение).",
      },
      {
        name: "Придумай",
        time: "",
        desc: "Выбери один и напиши PRD по шаблону. Non-Goals — минимум 3 пункта.",
      },
      {
        name: "Продай",
        time: "",
        desc: "Расскажи соседу, сколько часов жизни это сэкономит за год.",
      },
    ],
  },

  {
    id: 48,
    block: 8,
    blockTitle: "Workshop",
    type: "checklist",
    title: "От Боли к Билду",
    items: [
      "Записал «микро-трение» (Friction)",
      "Нашел аналогию в своем хобби (Analogy)",
      "Отсек всё лишнее (Non-Goals)",
      "Описал 5 состояний (States)",
      "Нажал Generate в Cursor",
    ],
  },

  {
    id: 49,
    block: 8,
    blockTitle: "Workshop",
    type: "demoday",
    title: "Demo Day",
    content: "Поделиться результатом: что получилось с вашим временем, презентацией или просто показать свой интерфейс.",
    items: [
      "Здесь нет слабых, плохих или недоделанных решений",
      "Сам процесс мышления в эту сторону — это уже классный результат",
      "Покажите ваш артефакт, расскажите путь",
    ],
  },

  {
    id: 50,
    block: 8,
    blockTitle: "Workshop",
    type: "closing",
    title: "Takeaways",
    items: [
      "AI Mindset — не про инструменты, а про переключение головы",
      "Friction audit > brainstorming ideas",
      "PRD + Non-Goals = управляемый результат",
      "Вайб-кодинг — абдуктивное мышление: опиши поведение, а не код",
      "Кросс-опыление: идеи рождаются в коммуникации",
      "Micro-SaaS of One: делай для себя, даже если это на один вечер",
      "Human Spike: AI поднимает пол возможностей, но потолок смысла — за тобой",
    ],
  },

  {
    id: 51,
    block: 8,
    blockTitle: "Workshop",
    type: "end",
    title: "Спасибо",
    subtitle: "AI Mindset Lab · W26 · Workshop #4",
    meta: "Life Engineering",
  },
];

export default slides;
