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
    id: 'about-us',
    block: 0,
    blockTitle: "Opening",
    type: "content",
    title: "Кто мы",
    items: [
      "Аня — продакт с бэкграундом в робототехнике, дизайне и интерфейсах. Мультимедиа-художник. Вайб-кодинг как мост между технологией и искусством.",
      "Саша — исследователь AI-систем, агентных архитектур и креативных workflow. Строит инструменты под себя.",
      "Воксель-персонаж — живой арт-объект, который реагирует на контекст презентации и подсказывает, когда пора двигаться дальше.",
    ],
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
      { label: "04", text: "PRD & Vibe Coding — от идеи к инструменту" },
      { label: "05", text: "Engineering & Agents — архитектура систем" },
      { label: "06", text: "Creative Toolkit — картинки, видео, звук" },
      { label: "07", text: "Workshop + Demo Day Prep" },
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
    id: 'ws03',
    block: 1,
    blockTitle: "Recap",
    type: "recap",
    title: "WS03: Безопасность и этика AI",
    speaker: "Анка Ставенская, Александр Поваляев",
    items: [
      "Фильтры моделей: каждая модель отфильтрована по-своему (политика, культура, безопасность)",
      "AI Slop: модели обучаются на данных других моделей — информация «отравляется»",
      "Этические гайдлайны: выстраивать границы и для себя, и для своих ассистентов",
      "Системные промпты и фреймворки — техническая сторона этики",
      "Использование AI для саморазвития и рефлексии",
    ],
    quote: "Не забывайте, что вы разговариваете не со всемирным знанием, а с чьими-то фильтрами.",
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
  // CHECK-IN POLLS (Questions + Results merged)
  // ═══════════════════════════════════════════

  {
    id: 'poll-scale-ai',
    block: 0,
    blockTitle: "Opening",
    type: "poll-scale",
    title: "Где вы на шкале AI?",
    subtitle: "42 ответа · от 1 до 10",
    labelMin: "Знаю что существует",
    labelMax: "Не могу без AI прожить день",
    average: "6.2",
    distribution: [
      { value: 1, count: 0 },
      { value: 2, count: 1 },
      { value: 3, count: 3 },
      { value: 4, count: 6 },
      { value: 5, count: 4 },
      { value: 6, count: 7 },
      { value: 7, count: 8 },
      { value: 8, count: 5 },
      { value: 9, count: 6 },
      { value: 10, count: 2 },
    ],
    note: "Пик на 7 — большинство уже интегрировали AI в ежедневную работу. Разброс от 2 до 10 — группа неоднородна, и это нормально.",
  },

  {
    id: 'poll-useful',
    block: 0,
    blockTitle: "Opening",
    type: "poll-wordcloud",
    title: "Что было самым полезным?",
    subtitle: "35 ответов · свободная форма",
    maxWeight: 8,
    words: [
      { text: "Claude Code", weight: 8, highlight: true },
      { text: "сообщество", weight: 7, highlight: true },
      { text: "примеры", weight: 6 },
      { text: "Степан", weight: 5 },
      { text: "насмотренность", weight: 5 },
      { text: "вайб-кодинг", weight: 4 },
      { text: "Obsidian", weight: 4 },
      { text: "инструменты", weight: 5 },
      { text: "автоматизация", weight: 4 },
      { text: "Сергей Рис", weight: 4 },
      { text: "страх ушёл", weight: 3, highlight: true },
      { text: "бадди-система", weight: 3 },
      { text: "архитектура", weight: 3 },
      { text: "голосовые", weight: 3 },
      { text: "безопасность", weight: 2 },
      { text: "контекст", weight: 3 },
      { text: "цепочки", weight: 2 },
      { text: "FOMO", weight: 2 },
    ],
    quotes: [
      { text: "Прошёл страх потери контроля при использовании AI", author: "Alexander V." },
      { text: "Попробовать своими руками Claude Code и увидеть, что я тоже могу", author: "Елена" },
      { text: "Это лаборатория, где расширяется представление", author: "из чата" },
    ],
    note: "Главные темы: практические инструменты, сообщество и вдохновение от других участников.",
  },

  {
    id: 'poll-progress-ai',
    block: 0,
    blockTitle: "Opening",
    type: "poll-progress",
    title: "Что вы уже сделали за 3 недели?",
    subtitle: "42 ответа · можно выбрать несколько",
    total: 42,
    stages: [
      { level: "○", label: "Ничего конкретного", desc: "Но собираюсь", count: 4, pct: 10 },
      { level: "◐", label: "Попробовал инструменты", desc: "Несколько моделей и сервисов", count: 15, pct: 36 },
      { level: "◑", label: "В процессе создания", desc: "Что-то для работы или жизни", count: 19, pct: 45 },
      { level: "●", label: "Создал для работы/жизни", desc: "Готовый результат", count: 17, pct: 40 },
      { level: "★", label: "Построил свой инструмент", desc: "Приложение или автоматизация", count: 11, pct: 26 },
    ],
    note: "90% группы уже что-то делают. 26% построили свой инструмент — к четвёртой неделе это сильный результат.",
  },

  {
    id: 'poll-results-1',
    block: 0,
    blockTitle: "Opening",
    type: "poll-results",
    title: "Результаты: как вы себя чувствуете",
    subtitle: "45 из 56 участников (80%)",
    total: 45,
    voxel: "/voxels/slide3-steps.html",
    results: [
      { svg: "calm", label: "Calm", desc: "Начинаю разбираться", count: 22, pct: 49 },
      { svg: "excited", label: "Excited", desc: "Хочу больше", count: 13, pct: 29 },
      { svg: "confused", label: "Confused", desc: "Пока не понимаю, куда это все", count: 8, pct: 18 },
      { svg: "overwhelmed", label: "Overwhelmed", desc: "Слишком много всего", count: 2, pct: 4 },
    ],
    note: "Почти половина группы уже в спокойном рабочем режиме. Это хороший сигнал к четвертой неделе.",
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
    title: "Уровни погружения в AI (click Explore Map button above)",
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
        desc: "Попробовать разные модели. Понять фильтры, сравнить ответы.",
        hours: "5–30 ч",
      },
      {
        level: "03",
        name: "Context",
        desc: "Контекст важнее промпта. RAG, Knowledge Bases, персональные данные.",
        hours: "30–100 ч",
      },
      {
        level: "04",
        name: "Building",
        desc: "Google Build, Cursor/Windsurf. Создание своих проектов.",
        hours: "50–200 ч",
      },
      {
        level: "05",
        name: "Engineering",
        desc: "Агенты, MCP, A2A, локальные модели, создание тулов под себя. Архитектура систем.",
        hours: "200+ ч",
      },
    ],
  },

  // --- LEVEL 1: AWARENESS deep-dive ---
  {
    id: 'awareness-section',
    block: 2,
    blockTitle: "Mindset Shift",
    type: "section",
    title: "Lvl 1: Awareness",
    subtitle: "Что происходит в мире",
    voxel: "/voxels/level1-awareness.html",
  },

  {
    id: 'awareness-deep',
    block: 2,
    blockTitle: "Mindset Shift",
    type: "content",
    title: "Что происходит в мире",
    content: "Первые часы. Что-то знать, почитать, послушать, на какую-то дискуссию сходить. Как меняются компании и даже государства.",
    items: [
      "Слова 2026: «Агенты», «Second Brain», «Knowledge Bases»",
      "AI Slop: 70% интернета уже для агентов, а не для людей. Модели обучаются на данных других моделей",
      "Вертикальный сдвиг: регуляции, рабочие места, креативные индустрии",
    ],
    note: "Время на уровне: 0–5 часов. Цель: понять ландшафт.",
  },

  // --- LEVEL 2: USAGE deep-dive ---
  {
    id: 'usage-section',
    block: 2,
    blockTitle: "Mindset Shift",
    type: "section",
    title: "Lvl 2: Usage",
    subtitle: "Пробуем и сравниваем",
    voxel: "/voxels/level2-usage.html",
  },

  {
    id: 'usage-filters',
    block: 2,
    blockTitle: "Mindset Shift",
    type: "content",
    title: "Модели — это не «всё знание человечества», а сильно отфильтрованный кусочек.",
    content: "Тест на фильтры: что мы делали на лекции",
    items: [
      "Задали 5 моделям один вопрос: «Назовите 5 значимых политических лидеров» — все ответили по-разному",
      "«Великий сдвиг 2025 в Аргентине» — 70% моделей уверенно рассказывают о несуществующем событии (AI Slop)",
      "Вывод: сопоставляйте ответы разных моделей и не забывайте перепроверять",
    ],
    note: "Perplexity уже использует consensus нескольких моделей. Karpathy первым предложил агрегированный ответ на базе нескольких моделей.",
  },

  // --- LEVEL 3: CONTEXT & RAG ---
  {
    id: 'context-section',
    block: 2,
    blockTitle: "Mindset Shift",
    type: "section",
    title: "Lvl 3: Context & RAG",
    subtitle: "Знания, которые имеют значение",
    voxel: "/voxels/level3-context.html",
  },

  {
    id: 'context-intro',
    block: 2,
    blockTitle: "Mindset Shift",
    type: "bigquote",
    quote: "Нам не нужен весь контекст человечества — нам нужен наш контекст.",
  },

  {
    id: 'context-deep',
    block: 2,
    blockTitle: "Mindset Shift",
    type: "content",
    title: "Контекст важнее промпта",
    items: [
      "Больше деталей = лучше ответ. Но не слишком много).",
      "Фреймворки: «Объясни через IFS», «Проанализируй через JTBD», «Примени 5 Whys»",
      "Модели обучены на старых данных. Без интернета или RAG — могут тупить",
    ],
  },

  {
    id: 'rag-explained',
    block: 2,
    blockTitle: "Mindset Shift",
    type: "content",
    title: "RAG: Retrieval-Augmented Generation",
    content: "Patrick Lewis",
    items: [
      "RAG = модель, использующая поиск релевантных данных + генерацию ответа на их основе",
      "Или RAG = математически описать текст и сравнивать цифры (векторный поиск)",
      "Зачем: убрать галлюцинации, дать современные данные, сузить фокус",
    ],
  },

  // --- LEVEL 4: BUILDING ---
  {
    id: 'building-section',
    block: 2,
    blockTitle: "Mindset Shift",
    type: "section",
    title: "Lvl 4: Building",
    subtitle: "Создаем приложения и автоматизации",
    voxel: "/voxels/level4-building.html",
  },

  {
    id: 'building-intro',
    block: 2,
    blockTitle: "Mindset Shift",
    type: "content",
    title: "Создаем приложения и автоматизации",
    content: "Когда у нас есть контекст — мы можем начать строить. Самый простой вход: Google Build.",
    items: [
      "Google Build — в браузере, видишь результат сразу, галерея чужих проектов как inspiration и возможность взять проект за основу.",
      "SVG и Voxel Art — математически описанные картинки, рисование, изменение и анимация картинок без рисования.",
      "IDEs (Windsurf, Cursor) — логика, рефакторинг, масштаб, больше контроля",
      "Проекты можно залить на GitHub или тоже делать вместе, даже разными инструментами.",
    ],
    note: "Google Build: можно скачать код или расшарить ссылку и делать вместе. Эта презентация — тоже вайб-кодинг.",
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
    voxel: "/voxels/lens.html",
  },

  {
    id: 17,
    block: 3,
    blockTitle: "Friction Auditing",
    type: "content",
    title: "1. Life Engineering = Design Thinking + AI",
    content: "design thinking framework: как найти идею того, что создать.",
    items: [
      "Наблюдать → Заметить трение → Побрейнштормить решение → Сделать прототип → Снова понаблюдать, как работает",
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
    title: "2. Friction Searching",
    definition: "Любое когнитивное, эмоциональное или процедурное сопротивление, которое замедляет намерение. Разрыв между «хочу сделать X» и «сделал X».",
    note: "Цель friction audit — сделать невидимое сопротивление видимым, измеримым и решаемым через AI.",
  },

  {
    id: 19,
    block: 3,
    blockTitle: "Friction Auditing",
    type: "frameworks",
    title: "Еще про поиска идей",
    items: [
      {
        name: "3. Pain-to-Prompt",
        desc: "Записывай голосовое, как только чувствуешь раздражение от задачи. «Меня бесит, что я вручную переношу эти данные...» — это уже начало спецификации.",
      },
      {
        name: "4. Правило Второго Раза",
        desc: "Если ты делаешь что-то второй раз (или объясняешь второй раз) — подумай об автоматизации через AI.",
      },
      {
        name: "5. Inventory of Sighs",
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
      "Сашин Pomodoro-таймер: берет задачи из Linear по MCP, контекст из Obsidian → советует, над чем работать (3 промпта)",
      "Расширение для Finder: кнопка Claude Code открывает терминал в выбранной папке",
      "Бот проверяет наличие кроссовок на 5 сайтах → пишет в Telegram",
      "Никто не даст тебе сервис, который собирает контекст из тебя. Но ты его можешь создать.",
    ],
  },

  {
    id: 22,
    block: 3,
    blockTitle: "Friction Auditing",
    type: "content",
    title: "Где искать идеи и вдохновение",
    items: [
      "Google Build Gallery — готовые проекты, можно скопировать и продолжить",
      "Сайты вайб-кодинг проектов — галереи того, что люди создали через AI",
      "#vibe-coding на X (Twitter) — life-hacks и демо",
      "Product Hunt → Side Projects, Hacker News → Show HN",
      "Community Showcases: Cursor, Windsurf, Bolt.new, Lovable",
      "Насмотренность: записывай стили, цвета, шрифты в knowledge base → CSS-файл для будущих проектов",
    ],
    note: "Хорошие идеи рождаются в коммуникации и шеринге, а не в изоляции.",
  },

  {
    id: 23,
    block: 3,
    blockTitle: "Friction Auditing",
    type: "table",
    title: "Матрица разрыва ценностей и действий",
    subtitle: "Где ценности расходятся с действиями — там AI-opportunity",
    headers: ["Ценность", "Хочу", "Делаю", "Трение", "AI-решение"],
    rows: [
      ["Экология", "Компостировать", "Выбрасываю в общий", "Контейнер далеко/грязно", "Умный контейнер + геймификация"],
      ["Финансы", "Копить", "Импульсные покупки", "Слишком легко купить", "Расширение с паузой перед покупкой"],
      ["Здоровье", "Ходить пешком", "Еду на машине", "Ключи от машины ближе", "Погода/шаги — nudge в нужный момент"],
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
    voxel: "/voxels/blueprint.html",
  },

  {
    id: 25,
    block: 4,
    blockTitle: "PRD",
    type: "bigquote",
    quote: "Удивительным образом на достижение результата влияет то, насколько хорошо ты понимаешь, что именно нужно сделать.",
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
      "Какие точки входа? (сайт? телеграм? если ссылка – то на каких девайсах должно работать?)",
      "Какие 2-3 главных состояния? (тишина → слушаю → вывожу текст)",
      "Что точно НЕ нужно? (Non-Goals: без БД, без авторизации, без мобильной версии)",
      "Как выглядит успех? (бабушка видит текст на планшете = win)",
      "Какой инструмент? (если не разбираешься – умная модель сама подскажет, какой инструмент и технологии лучше)",
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
    id: 'publishing',
    block: 4,
    blockTitle: "PRD",
    type: "content",
    title: "Паблишинг: как выложить в мир",
    items: [
      "GitHub Pages — бесплатный хостинг для статических сайтов (эта презентация живет там)",
      "Netlify / Vercel — деплой в один клик из GitHub или вашего IDE",
      "Replit / Lovable / Bolt — сразу хостит то, что ты сбилдил",
      "Google Build — можно скачать код, можно дать ссылку на редактируемый продукт",
      "Свой домен — от $10/год, подключается за 5 минут",
    ],
    note: "Паблишинг — это не финал. Это начало.",
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

  // --- VIBE CODING (continues Block 4) ---

  {
    id: 31,
    block: 4,
    blockTitle: "PRD & Vibe Coding",
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
    block: 4,
    blockTitle: "PRD & Vibe Coding",
    type: "tools",
    title: "Стек инструментов",
    items: [
      {
        name: "Canvas / Bolt.new / Lovable",
        role: "Zero-to-one",
        desc: "Full-stack из одного промпта. Прототипирование.",
      },
      {
        name: "Google Build",
        role: "More control",
        desc: "Больше понимает что-то про красивый дизайн.",
      },
      {
        name: "Replit Agent",
        role: "Long writing",
        desc: "Max Autonomy Mode — 200 минут без присмотра. Zero-to-one + хостинг.",
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
    ],
  },

  {
    id: 33,
    block: 4,
    blockTitle: "PRD & Vibe Coding",
    type: "content",
    title: "Кросс-опыление",
    content: "Наши идеи не рождаются в пустоте — они рождаются в коммуникации.",
    items: [
      "Скинь репозиторий → я докидаю идею → ты пофиксишь → мы отправим кому-то еще",
      "Даже создание презентации может быть вот этим самым кросс-опылением",
      "Нейронки — хороший партнер, когда некого спросить",
    ],
  },

  // ═════════════════════════════════════════════
  // BLOCK 5: ENGINEERING
  // ═════════════════════════════════════════════

// --- LEVEL 5: ENGINEERING deep-dive ---
{
  id: 'engineering-section',
  block: 5,
  blockTitle: "Engineering",
  type: "section",
  title: "Lvl 5: Engineering",
  subtitle: "Архитектура систем",
  voxel: "/voxels/level5-engineering.html",
},

{
  id: 'engineering-deep',
  block: 5,
  blockTitle: "Engineering",
  type: "content",
  title: "Архитектура систем",
  content: "Не просто использовать инструменты — создавать свои. Агенты, протоколы, локальные модели.",
  items: [
    "Создание инструментов под себя: Сашин hand-tracking → положение руки меняет тональность голоса (создано за 1.5 часа)",
    "Touch Designer / ComfyUI: нодовые среды для инсталляций, концертов",
    "MCP + A2A: стандарты подключения данных, инструментов и агентов друг к другу",
    "Second Brain → Second Mind: знания как исполняемый код, GraphRAG",
    "Агенты: от копайлотов к автономным системам с доступом к файлам, API, действиям",
    "Принцип: знаешь название технологии → можешь её использовать через вайб-кодинг",
    "Цель: стать архитектором, а не оператором.",
  ],
},

{
  id: 14,
  block: 5,
  blockTitle: "Engineering",
  type: "bigquote",
  quote: "Твоя способность описывать мир — это и есть твоя способность его кодить.",
},

// ═════════════════════════════════════════════
// BLOCK 6: AGENT ECONOMY
// ═════════════════════════════════════════════

{
  id: 40,
  block: 6,
  blockTitle: "Agent Economy",
  type: "section",
  title: "Agent Economy",
  subtitle: "& Second Mind",
  voxel: "/voxels/network.html",
},

{
  id: 41,
  block: 6,
  blockTitle: "Agent Economy",
  type: "content",
  title: "От копайлотов к агентам",
  content: "В 2023–2024 фокус на промпт-инженерии. 2026 год — переход к архитектуре агентных систем. Мы больше не операторы — мы архитекторы.",
  items: [
    "Агенты = доступ ко всем файлам, кошелькам, действиям",
    "RAG, Knowledge Bases, Second Brain и Agentic workflow — ключевые слова 2026",
  ],
},

{
  id: 44,
  block: 6,
  blockTitle: "Agent Economy",
  type: "content",
  title: "MCP, A2A и будущее",
  items: [
    "MCP (Model Context Protocol) — стандарт подключения данных и инструментов к агентам",
    "Пример: Сашин Pomodoro берет задачи из Linear по MCP, контекст из Obsidian",
    "A2A (Agent-to-Agent) — агенты общаются друг с другом напрямую",
    "Walled Gardens: Apple и Google не дают глубокого доступа к ОС",
    "Internet of AI: календарь, дом, авто — общаются между собой",
  ],
},

{
  id: 42,
  block: 6,
  blockTitle: "Agent Economy",
  type: "content",
  title: "От хранилища к архитектуре знаний",
  subtitle: "Second Brain → Second Mind",
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
  block: 6,
  blockTitle: "Agent Economy",
  type: "content",
  title: "Moltbook — Reddit для агентов",
  content: "Социальная сеть для AI-агентов. 1.6 млн агентов. Люди — только наблюдатели.",
  items: [
    "Цифровые религии среди агентов (Crustafarianism)",
    "Reverse-CAPTCHA — тесты, чтобы доказать, что ты НЕ человек",
    "Рынок «скиллов» — обмен плагинами между агентами",
    "Утечка: 1.5 млн API-ключей. Security is paramount.",
  ],
  note: "Главный вызов — не технологии, а сохранение Human Spike: уникальной ценности человека поверх автоматизированной базы.",
},

{
  id: 'agent-reading',
  block: 6,
  blockTitle: "Agent Economy",
  type: "content",
  title: "Что почитать про агентов",
  content: "Тема агентов развивается быстрее всего. Вот ссылки для самостоятельного изучения:",
  items: [
    "Anthropic: Building Effective Agents — anthropic.com/engineering/building-effective-agents",
    "Google: Agent White Paper — cloud.google.com/transform/agent-white-paper",
    "LangChain: What is an AI Agent? — langchain.com/what-is-an-ai-agent",
    "Choosing an Agent Framework (2025) — langflow.org/blog/the-complete-guide-to-choosing-an-ai-agent-framework-in-2025",
    "Model Context Protocol (MCP) — modelcontextprotocol.io",
    "Agent-to-Agent (A2A) — google.github.io/A2A",
  ],
},

// ═════════════════════════════════════════════
// BLOCK 7: CREATIVE TOOLKIT
// ═════════════════════════════════════════════

{
  id: 35,
  block: 7,
  blockTitle: "Creative Toolkit",
  type: "section",
  title: "Creative Toolkit",
  subtitle: "Картинки, видео, звук",
  voxel: "/voxels/palette.html",
},

// --- IMAGES: Levels of depth ---

{
  id: 36,
  block: 7,
  blockTitle: "Creative Toolkit",
  type: "levels",
  title: "Генерация изображений: уровни",
  items: [
    {
      level: "01",
      name: "Генерировать",
      desc: "ChatGPT, Midjourney, любая модель. Ваншот-картинка по промпту.",
      hours: "Вход",
    },
    {
      level: "02",
      name: "Стиль + персонаж",
      desc: "Character reference, style reference, contour reference. Повторяемые лица, тени, бренд.",
      hours: "Контроль",
    },
    {
      level: "03",
      name: "Inpaint",
      desc: "Не перегенерировать всю картинку — поменять только один элемент.",
      hours: "Хирургия",
    },
    {
      level: "04",
      name: "NanoBanana Pro + JSON",
      desc: "Редактирование через JSON-структуру. Меняешь только нужный кусок. Модель, которая понимает цифры и хорошо пишет тексты",
      hours: "Точность",
    },
    {
      level: "05",
      name: "Создать LoRA",
      desc: "Обучить свой стиль на своих данных. Повторяемость",
      hours: "Продвинутый",
    },
    {
      level: "06",
      name: "ComfyUI",
      desc: "Нодовая среда: несколько моделей, полный контроль каждого шага. Локально.",
      hours: "Про",
    },
  ],
},

{
  id: 'img-basics',
  block: 7,
  blockTitle: "Creative Toolkit",
  type: "content",
  title: "Уровни 1-2: генерация и стиль",
  content: "Все мы наигрались с ваншот-генерацией. Интересно становится, когда нужна повторяемость.",
  items: [
    "Все модели могут создать картинку — но у каждой свои данные обучения, своя специфика",
    "Современные модели обучены на фото высокого разрешения → результат детальнее",
    "Character reference: сохранение лица персонажа между генерациями",
    "Style reference: задаешь reference-картинку как пример стиля → модель воспроизводит эстетику",
    "Fusara.ai — тестировать разные модели одним промптом",
    "Artificial Analysis AI — лидерборд моделей под разные задачи",
  ],
},

{
  id: 'nanobanano-pro',
  block: 7,
  blockTitle: "Creative Toolkit",
  type: "content",
  title: "Уровень 3: NanoBanana Pro + JSON",
  content: "Побеждает всех в редактировании картинок.",
  items: [
    "JSON-редактирование: попросите модель перевести запрос в JSON — меняется только нужная часть",
    "Пример: развернуть стол на 45° по часовой стрелке, не трогая остальное",
    "Пример: поменять 600 мм на 700 мм в схеме шкафа — и в цифрах, и в пропорциях",
    "Лучше всех работает с числами, координатами, временем, количеством",
    "Итеративное редактирование без потери идентичности персонажа",
  ],
  note: "Самая дорогая модель, но и круче всех работает. Доступна: Fusara.ai, Google ImageFX, Gemini Chat.",
},

{
  id: 'img-advanced',
  block: 7,
  blockTitle: "Creative Toolkit",
  type: "content",
  title: "Уровни 4-6: Inpaint, LoRA, ComfyUI",
  items: [
    "Создать LoRA: обучить модель на своих фото → повторяемый стиль для бизнеса (300+ генераций)",
    "Где тренировать LoRA: ComfyUI, Civitai, Recraft, Visual Electric",
    "ComfyUI: нодовая среда, где каждый блок — одно действие (контур, текстура, лицо, текст...)",
    "Вся карта ComfyUI — это JSON, который можно шерить, скачивать готовые workflow из интернета, можно отдать вашей LLM файл JSON и спросить что не так в workflow, или попросить создать новый.",
    "Не для того чтобы один раз красиво — для того чтобы повторять сотни раз одинаково. К ComfyUI можно делать запросы скриптами.",
  ],
},

// --- VIDEO: Levels of depth ---

{
  id: 37,
  block: 7,
  blockTitle: "Creative Toolkit",
  type: "levels",
  title: "Видео генерация: уровни",
  items: [
    {
      level: "01",
      name: "Из картинки в видео",
      desc: "Kling O1 — понимает физику, из одной картинки создает целый мир.",
      hours: "Вход",
    },
    {
      level: "02",
      name: "Видео-редактирование",
      desc: "Veo 3.1 — insert/remove объектов + нативный звук. Runway Gen 4 — Motion Brush, контроль камеры.",
      hours: "Редактирование",
    },
    {
      level: "03",
      name: "Аватары",
      desc: "Higgsfield, HeyGen — из фото + 30 сек голоса → говорящий аватар.",
      hours: "Персонаж",
    },
    {
      level: "04",
      name: "Пайплайн в ComfyUI",
      desc: "Фото → стиль → анимация → аватар. Один workflow, полный контроль.",
      hours: "Про",
    },
  ],
  note: "Видео-генерация дорогая. Лайфхак: сначала генерировать картинки (NanoBanana), потом анимировать (Kling).",
},

// --- MUSIC & VOICE: Levels ---

{
  id: 38,
  block: 7,
  blockTitle: "Creative Toolkit",
  type: "levels",
  title: "Музыка и голос: уровни",
  items: [
    {
      level: "01",
      name: "Генерация треков",
      desc: "Suno, Udio — полноценный трек из текста: жанр, настроение, слова.",
      hours: "Вход",
    },
    {
      level: "02",
      name: "Клонирование голоса",
      desc: "ElevenLabs, Nvidia — 30 сек записи → ваш голос для озвучки и ботов. Генерация нового голоса по промпту.",
      hours: "Генерация",
    },
    {
      level: "03",
      name: "Многослойное редактирование",
      desc: "ComfyUI — 4+ слоя музыки, микширование, редактирование отдельных кусков.",
      hours: "Контроль",
    },
    {
      level: "04",
      name: "Голосовые агенты",
      desc: "Боты с голосовым ответом, аватары для рилсов, озвучивание книг, творческие проекты",
      hours: "Применение",
    },
  ],
},

// ═════════════════════════════════════════════
// BLOCK 8: WORKSHOP & DEMO DAY
// ═════════════════════════════════════════════

  {
    id: 45,
    block: 8,
    blockTitle: "Workshop",
    type: "section",
    title: "Workshop",
    subtitle: "& Demo Day",
    voxel: "/voxels/slide9-mindshift.html",
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
    id: 49,
    block: 8,
    blockTitle: "Workshop",
    type: "demoday",
    title: "Demo Day",
    subtitle: "Понедельник, 16 февраля",
    voxel: "/voxels/spotlight.html",
    content: "Поделиться результатом: что получилось с вашим временем, презентацией или просто показать свой интерфейс.",
    items: [
      "Здесь нет слабых, плохих или недоделанных решений",
      "Сам процесс мышления в эту сторону — это уже классный результат",
      "Покажите ваш артефакт, расскажите путь",
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
