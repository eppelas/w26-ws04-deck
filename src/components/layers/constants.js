export const NodeType = {
  MINDSET: 'MINDSET',
  CODING: 'CODING',
  CREATIVE: 'CREATIVE',
  MUSIC: 'MUSIC',
  DESIGN: 'DESIGN',
  INFRA: 'INFRA'
}

export const SCHEMA_NODES = [
  // ═══ LEFT COLUMN: LEVELS (isLevel = true) ═══
  {
    id: 'level-1',
    type: NodeType.MINDSET,
    isLevel: true,
    title: 'Lvl 1: Awareness',
    description: 'How AI is changing life, work, and the world.',
    details: 'The hardest part isn\'t the tools — it\'s believing what is possible. The real barrier is the "glass ceiling" in your head. Start by understanding how AI is reshaping industries, regulations, and daily life.',
    connections: ['level-2'],
    tools: ['AI Mindset YouTube', 'AI Mindset Report', 'AI Mindset Knowledge Base'],
    toolsLabel: 'Links',
    timeEstimate: '0-5 Hours',
    x: 0, y: 0,
    toolDetails: [
      { name: 'AI Mindset YouTube', url: 'https://www.youtube.com/@A-I-Mindset', category: 'YouTube', description: 'Video lectures and workshops from the AI Mindset Lab.' },
      { name: 'AI Mindset Report', url: 'https://gap.aimindset.org/', category: 'Report', description: '11 сдвигов в мире AI, которые произошли в 2025. Вертикальный обзор: как AI меняет индустрии, регуляции, рабочие места и креативные процессы.' },
      { name: 'AI Mindset Knowledge Base', url: 'https://base.aimindset.org/guides/', category: 'Guides', description: 'Гайды по AI-автоматизации и интеграции. Практические руководства от экосистемы AI Mindset.' },
      { name: 'No Priors', url: 'https://www.youtube.com/@NoPriorsPodcast', category: 'Podcast', description: 'Подкаст Sarah Guo и Elad Gil с лидерами AI-индустрии. Глубокие интервью про технологии, стартапы и будущее AI.', bestFor: 'Industry insights, founder interviews.' },
      { name: 'Unskipped with Jack Altman', url: 'https://www.youtube.com/@uncappedpod', category: 'Podcast', description: 'Подкаст Jack Altman. Честные разговоры о возможностях и рисках искусственного интеллекта.', bestFor: 'Candid AI discussions.' },
      { name: 'Machine Learning Street Talk', url: 'https://www.youtube.com/@MachineLearningStreetTalk', category: 'Podcast', description: 'Глубокие технические разговоры о машинном обучении и AI. Интервью с исследователями и практиками.', bestFor: 'Deep ML/AI technical discussions.' },
      { name: 'Practical AI', url: 'https://changelog.com/practicalai', category: 'Podcast', description: 'Подкаст о практическом применении AI. Реальные кейсы внедрения машинного обучения в продукты и процессы.', bestFor: 'Applied AI, real-world ML use cases.' },
      { name: 'Learning from Machine Learning', url: 'https://www.learningfromml.com', category: 'Podcast', description: 'Подкаст Seth Levine. Уроки из мира машинного обучения для бизнеса и жизни.', bestFor: 'ML lessons for business and life.' },
    ]
  },
  {
    id: 'level-2',
    type: NodeType.MINDSET,
    isLevel: true,
    title: 'Lvl 2: Usage & Diversity',
    description: 'Probing the filters. DeepSeek vs GPT vs Claude.',
    details: 'Models are not "all human knowledge" but a heavily filtered slice. Each company has different safety filters, data, and cultural biases. Try the same provocative questions across models — you\'ll see the difference immediately.',
    connections: ['level-3'],
    tools: ['ChatGPT', 'Claude', 'DeepSeek', 'Gemini', 'Perplexity', 'Grok', 'Krisp', 'Granola', 'SuperWhisper'],
    timeEstimate: '5-30 Hours',
    x: 0, y: 1,
    toolDetails: [
      { name: 'Perplexity', url: 'https://perplexity.ai', category: 'AI Search', description: 'Search + AI. Always gives sources.', bestFor: 'Fact-checking, research with citations.' },
      { name: 'valyu.ai', url: 'https://valyu.ai', category: 'Deep Research', description: 'Инструмент для глубокого исследования (deep research). Структурированный анализ.', bestFor: 'Thorough analysis, research.' },
      { name: 'Parallel.ai', url: 'https://parallel.ai', category: 'Deep Research', description: 'Сервис для глубоких исследований с параллельным анализом источников.', bestFor: 'Comparing perspectives, deep research.' },
      { name: 'Krisp', url: 'https://krisp.ai', category: 'Productivity', description: 'AI-шумоподавление и транскрипция звонков в реальном времени.', bestFor: 'Clean audio in calls, meeting transcription.' },
      { name: 'Granola', url: 'https://granola.so', category: 'Productivity', description: 'AI-заметки для встреч. Автоматическая структуризация и саммари.', bestFor: 'Meeting notes, automatic summaries.' },
      { name: 'SuperWhisper', url: 'https://superwhisper.com', category: 'Voice', description: 'Голосовой ввод через Whisper. Диктовка в любом приложении на macOS и Windows.', bestFor: 'Voice-to-text, dictation.' },
      { name: 'Wispr Flow', url: 'https://www.wispr.ai', category: 'Voice', description: 'Голосовой ввод и управление приложениями голосом. Диктовка + голосовые команды.', bestFor: 'Voice dictation and commands.' },
      { name: 'MacWhisper', url: 'https://goodsnooze.gumroad.com/l/macwhisper', category: 'Voice', description: 'macOS-приложение для транскрипции аудиофайлов. Загружаешь аудио — получаешь текст.', bestFor: 'Audio file transcription.' },
      { name: '@WhisperSummaryAI_bot', url: 'https://t.me/WhisperSummaryAI_bot', category: 'Telegram Bot', description: 'Telegram-бот для создания кратких сводок (саммари) из голосовых и текстов.', bestFor: 'Quick summaries from voice/text.' },
      { name: 'LLMs Interfaces (Guide)', url: 'https://base.aimindset.org/guides/guide-LLMs-interfaces', category: 'Guide', description: 'Гайд AI Mindset: обзор интерфейсов для работы с LLM.', bestFor: 'Understanding different model interfaces.' },
      { name: 'GPTs (Guide)', url: 'https://base.aimindset.org/guides/guide-GPTs', category: 'Guide', description: 'Гайд AI Mindset: как создавать и использовать Custom GPTs.', bestFor: 'Learning to build custom GPTs.' },
      { name: 'SuperWhisper (Guide)', url: 'https://base.aimindset.org/guides/guide-Superwhisper', category: 'Guide', description: 'Гайд AI Mindset: настройка и использование SuperWhisper для голосового ввода.', bestFor: 'Setting up voice-to-text workflow.' },
      { name: 'Voice Interfaces (Meet)', url: 'https://base.aimindset.org/guides/Voice-interfaces-meet', category: 'Guide', description: 'Запись встречи AI Mindset про голосовые интерфейсы и их интеграцию.', bestFor: 'Voice interface inspiration.' },
    ],
    tips: [
      {
        title: 'Каскад из трёх промптов для PDF',
        text: `Когда закидываете большой PDF в Claude или GPT, они часто "плывут" по контексту. Используйте каскад:
1. Структурный: "Проанализируй оглавление и выдели 5 ключевых тезисов. Сделай Mind Map структуру".
2. Критический: "Найди утверждения, которые противоречат общепринятым фактам или другим частям самого документа. Выпиши с указанием глав".
3. Прикладной: "Исходя из контекста моей задачи [описать задачу], выдели 3 конкретных шага, которые я могу внедрить уже завтра. Игнорируй воду".
Это помогает не просто получить "краткое содержание", а вытащить рабочие инструменты.`
      }
    ]
  },
  {
    id: 'level-3',
    type: NodeType.MINDSET,
    isLevel: true,
    title: 'Lvl 3: Context & RAG',
    description: 'Knowledge Bases, Second Brains.',
    details: 'Moving beyond the "mainstream" answer. Using RAG or own KB/Memory to feed specific context. Reducing hallucinations by providing specific modern data.',
    connections: ['level-4'],
    tools: ['Custom GPTs', 'NotebookLM', 'Obsidian'],
    timeEstimate: '30-100 Hours',
    x: 0, y: 2,
    toolDetails: [
      { name: 'Collective Knowledge Management', url: 'https://base.aimindset.org/guides/Collective-Knowledge-Management-demo', category: 'Demo', description: 'Демо AI Mindset: автоматизация обработки встреч и построение коллективных баз знаний.' },
      { name: 'Browse.ai', url: 'https://browse.ai', category: 'Data Collection', description: 'Движок для сбора и мониторинга данных с любого веб-сайта.', bestFor: 'Web scraping, data monitoring.' },
      { name: 'Give me news', url: 'https://t.me/givemenews_bot', category: 'Telegram Bot', description: 'Парсер новостей в Telegram по ключевым словам.', bestFor: 'News monitoring, keyword tracking.' },
      { name: 'Competely.ai', url: 'https://competely.ai', category: 'Competitive Intel', description: 'Автоматическое выявление прямых и косвенных конкурентов. Анализирует семантическое сходство продуктов, маркетинга и целевых аудиторий.', bestFor: 'Competitor analysis, market research.' },
      { name: 'Outset.ai', url: 'https://outset.ai', category: 'UX Research', description: 'AI-исследования: проведение и синтез видео-, аудио- и юзабилити-сессий.', bestFor: 'User research, usability testing.' },
      { name: 'Youscan.io', url: 'https://youscan.io', category: 'Social Monitoring', description: 'Computer vision находит на фотографиях логотипы, объекты, сцены — мониторинг бренда без текстового упоминания.', bestFor: 'Brand monitoring, visual search.' },
      { name: 'Decisional AI', url: 'https://decisional.ai', category: 'Finance', description: 'AI-помощник для финансовых аналитиков. Автоматизирует работу с документами: PDF в Excel, поиск по файлам, готовые аналитические отчеты.', bestFor: 'Financial analysis, document processing.' },
      { name: 'Intelligo.ai', url: 'https://intelligo.ai', category: 'Due Diligence', description: 'AI обучен работать как аналитик по due diligence: выявляет красные флаги (криминал, финансы, конфликты интересов).', bestFor: 'Background checks, risk analysis.' },
      { name: 'Crunchbase', url: 'https://crunchbase.com', category: 'Startup Intel', description: 'Анализ миллиардов сигналов о стартапах. Предсказывает финансирование, поглощения и IPO с точностью 95%.', bestFor: 'Startup research, investment signals.' },
      { name: 'Polymer AI', url: 'https://polymersearch.com', category: 'Data Viz', description: 'No-code платформа для интерактивных дашбордов. AI автоматически генерирует графики и выявляет паттерны из Google Sheets, Shopify, SQL и др.', bestFor: 'Dashboards, data visualization.' },
      { name: 'PQAI', url: 'https://pqai.org', category: 'Patent Search', description: 'Open-source платформа для патентного поиска на естественном языке.', bestFor: 'Patent search, IP research.' },
    ]
  },
  {
    id: 'level-4',
    type: NodeType.MINDSET,
    isLevel: true,
    title: 'Lvl 4: Building',
    description: 'Creating custom tools and projects.',
    details: 'Building your own instruments with AI. From app generators to full IDEs. The moment you stop consuming and start creating — everything changes.',
    connections: ['level-5'],
    tools: ['Cursor', 'Windsurf', 'Lovable', 'Google Build'],
    timeEstimate: '50-200 Hours',
    x: 0, y: 3,
    toolDetails: [
      { name: 'Vibecoding Platforms Map', url: 'https://base.aimindset.org/guides/map-Vibecoding-Platforms', category: 'Guide', description: 'Карта AI Mindset: обзор платформ для вайб-кодинга и быстрого создания MVP.' },
      { name: 'OpenRouter', url: 'https://openrouter.ai', category: 'API Aggregator', description: 'Агрегатор всех топовых нейросетей (Claude, GPT-4, Llama) в одном API. Экономия и доступ без VPN.', bestFor: 'API access to many models, cost optimization.' },
      { name: 'OpenSpec', url: 'https://openspec.dev', category: 'Specs', description: 'Ресурс со спецификациями для постановки задач. Шаблоны PRD и технических требований.' },
    ],
    cases: [
      { title: 'AI Mindset Report', url: 'https://gap.aimindset.org/', description: 'Информационный сайт об уровнях AI-компетенций. Создан с помощью AI-кодинга.' },
      { title: 'Interaction Map', description: 'Эта карта инструментов — drag & drop нодовая система с деталями, связями и фильтрацией. Создана с помощью AI-кодинга (Windsurf Cascade + React).' },
    ]
  },
  {
    id: 'level-5',
    type: NodeType.MINDSET,
    isLevel: true,
    title: 'Lvl 5: Engineering',
    description: 'Creating custom visual & interactive tools.',
    details: 'Отличие от Building: вы не просто создаёте приложение — вы создаёте инструменты под себя, в том числе те, которые сами могут билдить. Автономные агенты, мультимодальные системы (видео, аудио, генерация картинок), кастомные пайплайны. Our case: интерактивная презентация с вокселями, анимациями и data-driven слайдами + специальные генераторы для SVG-метафор и 3D-сцен.',
    connections: [],
    tools: ['Windsurf', 'React', 'Vite', 'Tailwind'],
    timeEstimate: '200+ Hours',
    x: 0, y: 4,
    cases: [
      { title: 'This Deck', description: 'Интерактивная презентация WS04 — React + Vite + Tailwind, создана в Windsurf (Cascade). Для генерирования вокселей и SVG-метафор создали специальные инструменты, которые можно использовать в будущих проектах с соблюдением нашего стиля.' },
    ]
  },

  // ═══ RIGHT SIDE: TOOLS & DOMAINS (distributed by level) ═══

  // ═══ IMAGE COLUMN (x=2): Levels of Image Generation ═══
  {
    id: 'img-prompting',
    type: NodeType.CREATIVE,
    title: 'Image: Prompting',
    description: 'Генерация картинок из текста. Первый шаг.',
    details: 'Пишешь промпт — получаешь картинку. Главное — научиться формулировать и понимать, какая модель для чего.',
    connections: ['img-styles'],
    tools: ['Midjourney', 'Flux', 'Seedream', 'Fusara', 'Krea'],
    timeEstimate: 'Level 2',
    x: 2, y: 1,
    toolDetails: [
      { name: 'Fusara', url: 'https://fusara.ai', category: 'Aggregator', description: '~10 моделей (image/video), бот помогает с промптами; image references; часто дают пробные кредиты.', bestFor: 'Comparing models, accessing paid models.' },
      { name: 'Midjourney', url: 'https://www.midjourney.com/explore', category: 'Art Model', description: 'Aesthetic king. Веб-интерфейс без Discord. Пробные кредиты иногда через интеграции (Fusara).', bestFor: 'High-end art, fantasy, advertising.' },
      { name: 'Flux.1', url: 'https://blackforestlabs.ai', category: 'Open Model', description: 'Excellent prompt adherence and object rotation.', bestFor: 'Complex scenes, realistic text.' },
      { name: 'Seedream (Dreamina)', url: 'https://dreamina.capcut.com', category: 'Gen & Edit', description: 'Бесплатный доступ к Seedream; свежие версии модели; хороший baseline реализма.', bestFor: 'Realism, Editing, Typography.' },
      { name: 'Imagen 4 (ImageFX)', url: 'https://labs.google/fx/tools/image-fx', category: 'Model', description: 'Google\'s photorealism standard.', bestFor: 'Photorealism, Text.' },
      { name: 'Leonardo AI', url: 'https://leonardo.ai', category: 'Platform', description: 'Несколько моделей; дневные токены на бесплатном тарифе.', bestFor: 'Daily free generations, multiple models.' },
      { name: 'Playground AI', url: 'https://playground.com', category: 'Platform', description: 'Быстрые A/B по стилям; ежедневные бесплатные генерации.', bestFor: 'Style comparison, free daily credits.' },
      { name: 'RoboNeo', url: 'https://roboneo.ai', category: 'Chat Interface', description: 'Быстрые клипы/изображения (особенно техно/робо-стиль); чат-интерфейс.', bestFor: 'Fast generation, techno/robo style.' },
      { name: 'AI Creative Map', url: 'https://base.aimindset.org/guides/map-AI-Creative-Map', category: 'Guide', description: 'Карта AI Mindset: все инструменты для создания контента.', bestFor: 'Overview of creative AI tools.' },
    ],
    cases: [
      { title: 'Children\'s Book with AI', url: 'https://medium.com/@vera.danchenko/i-wrote-a-children-book-with-dalle-chat-gpt-and-midjourney-and-this-is-how-i-did-it-6f2828264a03', description: 'Вера Данченко написала и проиллюстрировала детскую книгу с помощью DALL-E, ChatGPT и Midjourney.' },
    ]
  },
  {
    id: 'img-styles',
    type: NodeType.CREATIVE,
    title: 'Image: Styles & References',
    description: 'Контроль стиля, мудборды, image references.',
    details: 'Не просто "сделай красиво", а управление стилем: references, trained styles, мудборды. Консистентность между картинками.',
    connections: ['img-editing'],
    tools: ['Krea', 'Visual Electric', 'Reve.art', 'Recraft'],
    timeEstimate: 'Level 3',
    x: 2, y: 2,
    toolDetails: [
      { name: 'Krea.ai', url: 'https://www.krea.ai', category: 'Realtime Canvas', description: 'Image references, realtime; можно смешивать графический и текстовый промпт со стилями; Video; бесплатные Krea/Flux/Qwen.', bestFor: 'Interactive design, style mixing, upscaling.' },
      { name: 'Visual Electric', url: 'https://visualelectric.com', category: 'Moodboarding', description: 'Качественная стилизация; Trained References; удобная галерея примеров.', bestFor: 'Designers, Moodboards, Photorealism.' },
      { name: 'Reve.art', url: 'https://reve.art', category: 'Creative', description: 'Moodboard, prompt enhancer, describe, seed control; быстрый старт.', bestFor: 'Moodboards, prompt exploration.' },
      { name: 'Recraft', url: 'https://recraft.ai', category: 'Vector/Brand', description: 'Infinite canvas for Vector generation and Brand sets.', bestFor: 'SVG icons, consistent brand identity.' },
      { name: 'Ideogram', url: 'https://ideogram.ai', category: 'Typography', description: 'Leader in rendering text inside images.', bestFor: 'T-shirt designs, posters with text.' },
      { name: 'Florafauna.ai', url: 'https://florafauna.ai', category: 'Node Graph', description: 'Нодовая система images/video; удобный restyling; бесплатные Flux Dev и Runway Gen-4.', bestFor: 'Restyling, free Flux/Runway access.' },
      { name: 'Napkin.ai', url: 'https://www.napkin.ai', category: 'Visualization', description: 'Превращает текст в визуальные схемы и диаграммы.', bestFor: 'Diagrams, presentations from text.' },
    ]
  },
  {
    id: 'img-editing',
    type: NodeType.CREATIVE,
    title: 'Image: Editing & Inpaint',
    description: 'Редактирование, inpaint, прорисовка на Nano Banana.',
    details: 'Точечное редактирование: inpaint, outpaint, замена элементов. Прорисовка деталей через Nano Banana в AI Studio. Контроль над результатом.',
    connections: ['img-advanced'],
    tools: ['Krea', 'Seedream', 'AI Studio', 'Runway'],
    timeEstimate: 'Level 4',
    x: 2, y: 3,
    toolDetails: [
      { name: 'AI Studio: Nano Banana', url: 'https://aistudio.google.com', category: 'Free Demo', description: 'Бесплатная демо Nano Banana; удобно для тестов текста в картинках и прорисовки деталей.', bestFor: 'Text in images, iterative editing, detail painting.' },
      { name: 'Seedream (Dreamina)', url: 'https://dreamina.capcut.com', category: 'Gen & Edit', description: 'Бесплатный доступ к Seedream; inpaint, outpaint, editing.', bestFor: 'Inpaint, Outpaint, Editing.' },
      { name: 'Krea.ai', url: 'https://www.krea.ai', category: 'Realtime Canvas', description: 'Realtime generation and upscaling. Inpaint на canvas.', bestFor: 'Interactive editing, Upscaling.' },
      { name: 'Runway', url: 'https://runwayml.com', category: 'Platform', description: 'Image editing tools: inpaint, expand, erase.', bestFor: 'Professional image editing.' },
    ]
  },
  {
    id: 'img-advanced',
    type: NodeType.CREATIVE,
    title: 'Image: LoRA & ComfyUI',
    description: 'Тренировка моделей, кастомные пайплайны.',
    details: 'Тренировка LoRA под свой стиль/персонажа. ComfyUI для сложных пайплайнов: контроль каждого шага генерации. Локальный запуск моделей.',
    connections: [],
    tools: ['ComfyUI', 'CivitAI', 'Fooocus', 'HuggingFace'],
    timeEstimate: 'Level 5',
    x: 2, y: 4,
    toolDetails: [
      { name: 'ComfyUI', url: 'https://github.com/comfyanonymous/ComfyUI', category: 'Framework', description: 'Node-based visual programming for GenAI. Image, video, and audio pipelines.', bestFor: 'Complex pipelines, mixing, offline work.' },
      { name: 'CivitAI', url: 'https://civitai.com', category: 'Model Hub', description: 'The place for LoRAs, Checkpoints, and training.', bestFor: 'Finding specific styles/characters.' },
      { name: 'Fooocus', url: 'https://github.com/lllyasviel/Fooocus', category: 'Local Interface', description: 'Simplest offline interface for SDXL.', bestFor: 'Beginners wanting local privacy.' },
      { name: 'Mage.Space', url: 'https://mage.space', category: 'SD Hub', description: 'Много SD/SDXL чекпойнтов и LoRA; бесплатная очередь.', bestFor: 'SD/SDXL models, free queue.' },
      { name: 'SeaArt.ai', url: 'https://seaart.ai', category: 'Model Hub', description: 'Большая библиотека моделей/LoRA; дневные кредиты.', bestFor: 'Finding LoRA, daily credits.' },
      { name: 'Tensor.art', url: 'https://tensor.art', category: 'Model Hub', description: 'Хаб SD/SDXL/LoRA; быстрые тесты трендовых моделей.', bestFor: 'Testing trending models.' },
      { name: 'Civitai Create', url: 'https://civitai.com', category: 'Model Hub', description: 'Запуск популярных моделей прямо из Civitai.', bestFor: 'Running community models online.' },
      { name: 'HuggingFace', url: 'https://huggingface.co', category: 'Repo', description: 'The GitHub of ML models.', bestFor: 'Finding weights, Spaces.' },
    ]
  },

  // ═══ VIDEO COLUMN (x=3): Levels of Video Generation ═══
  {
    id: 'vid-generation',
    type: NodeType.CREATIVE,
    title: 'Video: Generation',
    description: 'Text/Image-to-Video. Первые клипы.',
    details: 'Генерация видео из текста или картинки. Каждая модель — свои сильные стороны: физика, кинематографичность, длина клипа.',
    connections: ['vid-avatars'],
    tools: ['Kling', 'Veo 3', 'Sora', 'Luma', 'Hailuo'],
    timeEstimate: 'Level 2',
    x: 3, y: 1,
    toolDetails: [
      { name: 'Kling', url: 'https://klingai.com', category: 'Model', description: 'Long clips (2 mins), complex physics. Лучше всех с физикой мира и таймлапсами.', bestFor: 'Long scenes, physics, action.' },
      { name: 'Veo 3', url: 'https://deepmind.google/models/veo', category: 'Model', description: 'Google\'s cinematic model. Лучше всех со звуком, видео-Photoshop.', bestFor: 'Cinematic shots, dialogue, audio sync.' },
      { name: 'Sora', url: 'https://sora.chatgpt.com', category: 'Model', description: 'OpenAI\'s physics simulator.', bestFor: 'Realism, Complex camera moves.' },
      { name: 'Luma Dream Machine', url: 'https://lumalabs.ai', category: 'Model', description: 'Быстрые клипы, плавные движения камеры, лупы.', bestFor: 'Social clips, morphs, loops.' },
      { name: 'Hailuo.ai', url: 'https://hailuo.ai', category: 'Model', description: 'Хорошая генерация от изображения в начале к изображению в конце.', bestFor: 'Start-to-End transitions.' },
      { name: 'Pika', url: 'https://pika.art', category: 'Platform', description: 'Простой интерфейс, быстрые короткие клипы, анимация изображений.', bestFor: 'Social media, image animation.' },
      { name: 'PixVerse', url: 'https://pixverse.ai', category: 'Platform', description: 'Быстрый t2v/i2v, хороший старт для соцсетей.', bestFor: 'Social media videos.' },
      { name: 'SeeDance (ByteDance)', url: 'https://seedance.ai', category: 'Animation', description: 'Сервис анимации и генерации видео (text/image-to-video).', bestFor: 'Animation, dance generation.' },
      { name: 'Freeflik AI', url: 'https://freeflik.com', category: 'Platform', description: 'Простой t2v/i2v с пресетами.', bestFor: 'Simple video generation.' },
      { name: 'RoboNeo', url: 'https://roboneo.ai', category: 'Chat Interface', description: 'Чат-интерфейс, умеет видео-клипы.', bestFor: 'Quick video clips.' },
    ]
  },
  {
    id: 'vid-avatars',
    type: NodeType.CREATIVE,
    title: 'Video: Avatars',
    description: 'Цифровые аватары, talking heads, lip sync.',
    details: 'Фото + голос = говорящий персонаж. Для рилсов, презентаций, обучающих видео. Lip sync и eye contact correction.',
    connections: ['vid-editing'],
    tools: ['HeyGen', 'Captions.ai', 'Higgsfield'],
    timeEstimate: 'Level 3',
    x: 3, y: 2,
    toolDetails: [
      { name: 'HeyGen', url: 'https://heygen.com', category: 'Avatars', description: 'Цифровые аватары: фото + голос = говорящий персонаж для рилсов и презентаций.', bestFor: 'Digital avatars, talking heads.' },
      { name: 'Captions.ai', url: 'https://www.captions.ai', category: 'Video Tool', description: 'Создание виральных видео с автоматическим переводом и коррекцией взгляда в камеру.', bestFor: 'Viral videos, auto-translation, eye contact fix.' },
      { name: 'Higgsfield AI', url: 'https://higgsfield.ai', category: 'AI Effects', description: 'Видео/изображения с AI-эффектами; Soul ID для обучения лица.', bestFor: 'AI photo/video effects, face training.' },
    ]
  },
  {
    id: 'vid-editing',
    type: NodeType.CREATIVE,
    title: 'Video: Editing & Compositing',
    description: 'Монтаж, элементы, JSON-based видео.',
    details: 'Профессиональное редактирование: tracking, inpaint, motion brush. Compositing элементов. Программный монтаж через JSON-спецификации.',
    connections: ['vid-production'],
    tools: ['Runway', 'Kling', 'Topaz', 'Florafauna'],
    timeEstimate: 'Level 4',
    x: 3, y: 3,
    toolDetails: [
      { name: 'Runway Gen-4', url: 'https://runwayml.com', category: 'Platform', description: 'Full editor (tracking, inpaint) + Generation. Editing tools are best in class.', bestFor: 'Professional control, Motion Brush.' },
      { name: 'Kling', url: 'https://klingai.com', category: 'Video Editing', description: 'Помимо генерации — мощные инструменты редактирования видео, эффекты, lip sync.', bestFor: 'Video editing, effects, lip sync.' },
      { name: 'Topaz Video AI', url: 'https://topazlabs.com', category: 'Post-Production', description: 'Upscale/стабилизация/слоумо.', bestFor: 'Video upscaling, stabilization.' },
      { name: 'Florafauna.ai', url: 'https://florafauna.ai', category: 'Node Graph', description: 'Нодовая система images/video; удобный restyling.', bestFor: 'Video restyling, node workflows.' },
    ]
  },
  {
    id: 'vid-production',
    type: NodeType.CREATIVE,
    title: 'Video: Full Production',
    description: 'Многоклиповый монтаж, сценарии, пайплайны.',
    details: 'Полный продакшн: от сценария до финального видео. Многоклиповый монтаж, color grading, звук. Автоматизация через ComfyUI video pipelines.',
    connections: [],
    tools: ['ComfyUI', 'Wan 2.1', 'Runway'],
    timeEstimate: 'Level 5',
    x: 3, y: 4,
    toolDetails: [
      { name: 'ComfyUI', url: 'https://github.com/comfyanonymous/ComfyUI', category: 'Framework', description: 'Node-based visual programming. Video generation и editing pipelines.', bestFor: 'Complex video pipelines, automation.' },
      { name: 'Wan 2.1', url: 'https://huggingface.co/Wan-AI', category: 'Open Source', description: 'Модель видеогенерации, можно ставить локально.', bestFor: 'Local video generation.' },
    ]
  },

  // ═══ MUSIC COLUMN (x=4): Levels of Music & Audio ═══
  {
    id: 'music-tracks',
    type: NodeType.MUSIC,
    title: 'Music: Track Generation',
    description: 'Генерация треков из промптов.',
    details: 'Пишешь описание — получаешь готовый трек с вокалом. Radio-ready songs за минуты.',
    connections: ['music-voice'],
    tools: ['Suno', 'Udio', 'Stable Audio', 'Soundraw'],
    timeEstimate: 'Level 2',
    x: 4, y: 1,
    toolDetails: [
      { name: 'Suno', url: 'https://suno.com', category: 'Song Generator', description: 'Вокальные треки за минуты. Radio-ready songs из промптов.', bestFor: 'Catchy hooks, full songs, fun.' },
      { name: 'Udio', url: 'https://udio.com', category: 'Song Generator', description: 'Качественный вокал, структурные правки.', bestFor: 'Realistic vocals, complex genres.' },
      { name: 'Stable Audio', url: 'https://stableaudio.com', category: 'Music/SFX', description: 'Лупы, фон, SFX; контроль длительности.', bestFor: 'Background music, sound effects.' },
      { name: 'Soundraw', url: 'https://soundraw.io', category: 'Music', description: 'Быстрый трек под конкретный тайминг.', bestFor: 'Timed background tracks.' },
      { name: 'MusicGen (Meta)', url: 'https://huggingface.co/facebook/musicgen-large', category: 'Open Source', description: 'Опенсорс генерация музыки от Meta.', bestFor: 'Open-source music generation.' },
    ]
  },
  {
    id: 'music-voice',
    type: NodeType.MUSIC,
    title: 'Music: Voice Design',
    description: 'Voice cloning, интонации, TTS.',
    details: 'Клонирование голоса, дизайн интонаций и "чтения". Контроль над тем, КАК голос звучит — не только что говорит.',
    connections: ['music-sounddesign'],
    tools: ['ElevenLabs', 'MiniMax', 'Play.ht', 'Cartesia'],
    timeEstimate: 'Level 3',
    x: 4, y: 2,
    toolDetails: [
      { name: 'ElevenLabs', url: 'https://elevenlabs.io', category: 'Speech (TTS)', description: 'Топ-качество TTS и клонирование голосов. Industry standard.', bestFor: 'Dubbing, Audiobooks, Voice Cloning.' },
      { name: 'MiniMax', url: 'https://minimax.io', category: 'Voice', description: 'Бесплатные кредиты для клонирования голоса, voice design, text to audio.', bestFor: 'Free voice cloning, voice design.' },
      { name: 'Play.ht', url: 'https://play.ht', category: 'TTS', description: 'Большая библиотека голосов, SSML.', bestFor: 'Multiple voices, fine control.' },
      { name: 'Cartesia', url: 'https://cartesia.ai', category: 'API', description: 'Real-time голос через API.', bestFor: 'Real-time voice in apps.' },
      { name: 'OpenVoice', url: 'https://github.com/myshell-ai/OpenVoice', category: 'Open Source', description: 'Открытый voice conversion и style-трансфер голоса.', bestFor: 'Voice style transfer.' },
      { name: 'Coqui XTTS', url: 'https://huggingface.co/coqui', category: 'Open Source', description: 'Локально/opensource модели XTTS на HuggingFace.', bestFor: 'Local TTS, privacy.' },
    ]
  },
  {
    id: 'music-sounddesign',
    type: NodeType.MUSIC,
    title: 'Music: Sound Design',
    description: 'Многослойное редактирование, стемы, SFX.',
    details: 'Разделение треков на дорожки (стемы), микширование, sound effects. Профессиональная работа со звуком.',
    connections: ['music-agents'],
    tools: ['Demucs', 'Stable Audio', 'Udio'],
    timeEstimate: 'Level 4',
    x: 4, y: 3,
    toolDetails: [
      { name: 'Demucs', url: 'https://github.com/facebookresearch/demucs', category: 'Open Source', description: 'Разделение треков на дорожки (стемы).', bestFor: 'Stem separation, remixing.' },
      { name: 'Stable Audio', url: 'https://stableaudio.com', category: 'Music/SFX', description: 'Лупы, фон, SFX; контроль длительности.', bestFor: 'Sound effects, loops.' },
    ]
  },
  {
    id: 'music-agents',
    type: NodeType.MUSIC,
    title: 'Music: Voice Agents',
    description: 'Голосовые агенты, real-time voice.',
    details: 'Голосовые агенты которые разговаривают в реальном времени. Интеграция в приложения и сервисы.',
    connections: [],
    tools: ['Cartesia', 'ElevenLabs', 'OpenVoice'],
    timeEstimate: 'Level 5',
    x: 4, y: 4,
    toolDetails: [
      { name: 'Cartesia', url: 'https://cartesia.ai', category: 'API', description: 'Real-time голос через API. Ultra-low latency.', bestFor: 'Real-time voice agents in apps.' },
      { name: 'ElevenLabs', url: 'https://elevenlabs.io', category: 'Conversational AI', description: 'Conversational AI agents с клонированным голосом.', bestFor: 'Voice agents, conversational AI.' },
    ]
  },

  // ═══ DESIGN COLUMN (x=5) ═══
  {
    id: 'design-start',
    type: NodeType.DESIGN,
    title: 'Design & Vector',
    description: 'Clean logos, icons, and consistent assets.',
    details: 'Moving away from raster noise to clean, usable design assets and consistent styling.',
    connections: ['design-3d'],
    tools: ['Recraft', 'Ideogram', 'Krea'],
    timeEstimate: '10 Hours',
    x: 5, y: 2,
    toolDetails: [
      { name: 'Recraft', url: 'https://recraft.ai', category: 'Vector/Brand', description: 'Infinite canvas for Vector generation and Brand sets.', bestFor: 'SVG icons, consistent brand identity.' },
      { name: 'Ideogram', url: 'https://ideogram.ai', category: 'Typography', description: 'Leader in rendering text inside images.', bestFor: 'T-shirt designs, posters with text.' },
      { name: 'Krea.ai', url: 'https://www.krea.ai', category: 'Realtime Canvas', description: 'Realtime generation and upscaling.', bestFor: 'Interactive design, Upscaling.' },
    ]
  },
  {
    id: 'design-3d',
    type: NodeType.DESIGN,
    title: '3D & Spatial',
    description: 'Text-to-3D and SVG conversion.',
    details: 'Generating assets for the spatial web and game design.',
    connections: [],
    tools: ['Spline', 'Formia'],
    timeEstimate: 'Project Based',
    x: 5, y: 3,
    toolDetails: [
      { name: 'Spline', url: 'https://spline.design', category: '3D Design', description: 'Web-based 3D design with AI text-to-3D.', bestFor: 'Web 3D assets, simple models.' },
      { name: 'Formia.so', url: 'https://formia.so', category: 'SVG to 3D', description: 'Instant conversion of 2D vectors to 3D meshes.', bestFor: 'Logos to 3D.' }
    ]
  },

  // --- Level 3 row: Vibe Coding & Automation ---
  {
    id: 'coding-generators',
    type: NodeType.CODING,
    title: 'Vibe Coding & Automation',
    description: 'Платформы для создания приложений и автоматизаций.',
    details: 'От идеи к MVP за часы. Google Build — самый простой вход. Автоматизации — когда нужно связать сервисы между собой без кода.',
    connections: ['coding-ide'],
    tools: ['Google Build', 'Lovable', 'Replit', 'n8n', 'Make'],
    timeEstimate: 'Hours to MVP',
    x: 1, y: 2,
    toolDetails: [
      { name: 'Google Build', url: 'https://aistudio.google.com/apps', category: 'Prompt-to-App', description: 'Самый простой вход в вайб-кодинг. В браузере, видишь результат сразу. Лучше понимает красивый дизайн. Можно скачать код или расшарить ссылку и делать вместе. Галерея чужих проектов как inspiration.', bestFor: 'Быстрый вход, совместная работа, быстрые итерации.' },
      { name: 'Lovable', url: 'https://lovable.dev', category: 'Prompt-to-App', description: 'Rapid full-stack prototyping with Supabase integration.', bestFor: 'Scaffolding full-stack foundations to export later.' },
      { name: 'Replit', url: 'https://replit.com', category: 'Cloud IDE / Agent', description: 'All-in-one cloud environment. Zero setup deployment.', bestFor: 'Fast MVP/Demos, Non-technical founders.' },
      { name: 'bolt.new', url: 'https://bolt.new', category: 'Browser Container', description: 'Instant full-stack generation in the browser (WebContainers).', bestFor: 'One-off prototypes, browser demos.' },
      { name: 'v0.dev', url: 'https://v0.dev', category: 'UI Generator', description: 'Vercel ecosystem tool for Next.js/Tailwind UI.', bestFor: 'High quality UI/Frontend prototypes.' },
      { name: 'Cowork', url: 'https://cowork.dev', category: 'Vibe Coding', description: 'Сервис для вайб-кодинга и быстрого создания MVP.', bestFor: 'Collaborative vibe-coding.' },
      { name: 'Oh My OpenCode', url: 'https://ohmyopencode.com', category: 'Code Interface', description: 'Интерфейс для работы с кодом через GPT.', bestFor: 'GPT-powered code workflows.' },
      { name: 'n8n', url: 'https://n8n.io', category: 'Automation', description: 'Self-hosted workflow automation. Open-source альтернатива Zapier/Make.', bestFor: 'Complex automations, self-hosted.' },
      { name: 'Make.com', url: 'https://www.make.com', category: 'Automation', description: 'Облачные автоматизации (бывший Integromat). Визуальный редактор.', bestFor: 'Cloud automations, visual editor.' },
      { name: 'Zapier', url: 'https://zapier.com', category: 'Automation', description: 'Простые триггерные связки (Telegram -> Trello, и т.д.).', bestFor: 'Simple trigger-based automations.' },
    ]
  },
  {
    id: 'coding-ide',
    type: NodeType.CODING,
    title: 'IDEs',
    description: 'The "Last 20%". Logic, Refactoring, Scale.',
    details: 'Where the real work happens. Harder projects, more control.',
    connections: ['coding-terminal', 'coding-agents'],
    tools: ['Cursor', 'Windsurf'],
    timeEstimate: 'Career Skill',
    x: 1, y: 3,
    toolDetails: [
      { name: 'Cursor', url: 'https://cursor.com', category: 'AI-First IDE', description: 'Fork of VS Code. Deep context control.', bestFor: 'Pro dev, Refactoring, Scalable projects.' },
      { name: 'Windsurf', url: 'https://codeium.com/windsurf', category: 'Flow IDE', description: 'Focuses on "Flow" and deep agentic behavior (Cascade).', bestFor: 'Automating routine, mixed teams.' },
    ],
    tips: [
      {
        title: 'Настройка Cursor как "продолжения мозга"',
        text: `Совет Антона Воскобовича:
1. Файл .cursorrules: Создайте в корне проекта. Пропишите: "Ты — Senior Fullstack Architect. Всегда проверяй соответствие кода паттерну [название]. Не используй устаревшие библиотеки. Ответы кратко, только суть".
2. Индексация папок: В настройках Cursor включите индексацию не только кода, но и папки /docs или Obsidian Vault. Теперь можно спрашивать: "Как эта функция соотносится с моей концепцией из заметки X?".
3. MCP Server: Подключите локальный MCP сервер для работы с файловой системой. Убирает галлюцинации при работе с путями и структурой файлов.`
      }
    ]
  },
  {
    id: 'coding-terminal',
    type: NodeType.CODING,
    title: 'Terminal & CLI',
    description: 'Claude Code, agentic terminal workflows.',
    details: 'Advanced tweaking via conversational CLI. Bridging the gap between vibe-coding and traditional engineering.',
    connections: [],
    tools: ['Claude Code', 'Aider', 'GitHub Copilot CLI'],
    timeEstimate: 'Deep Skill',
    x: 1, y: 4,
    toolDetails: [
      { name: 'Claude Code', url: 'https://docs.anthropic.com/en/docs/claude-code', category: 'CLI Agent', description: 'Conversational interface for granular codebase control.', bestFor: 'Complex refactoring, debugging.' },
    ]
  },
  {
    id: 'coding-agents',
    type: NodeType.CODING,
    title: 'Agents & Automation',
    description: 'MCP, Workflows, Autonomous pipelines.',
    details: 'Building agents that work for you while you sleep. From simple automations to complex multi-step pipelines.',
    connections: [],
    tools: ['MCP', 'n8n', 'Make', 'Zapier', 'Linear'],
    timeEstimate: 'Ongoing',
    x: 1, y: 5,
    toolDetails: [
      { name: 'MCP', url: 'https://modelcontextprotocol.io', category: 'Protocol', description: 'Model Context Protocol — connecting AI to external tools and data.', bestFor: 'Custom integrations, tool orchestration.' },
      { name: 'n8n', url: 'https://n8n.io', category: 'Automation', description: 'Self-hosted workflow automation. Open-source альтернатива Zapier/Make.', bestFor: 'Complex automations, self-hosted.' },
      { name: 'Make.com', url: 'https://www.make.com', category: 'Automation', description: 'Облачные автоматизации (бывший Integromat). Визуальный редактор.', bestFor: 'Cloud automations, visual editor.' },
      { name: 'Zapier', url: 'https://zapier.com', category: 'Automation', description: 'Простые триггерные связки (Telegram -> Trello, и т.д.).', bestFor: 'Simple trigger-based automations.' },
      { name: 'Pipedream', url: 'https://pipedream.com', category: 'Developer Tool', description: 'Сервис для разработчиков: работа с API и быстрая обработка вебхуков.', bestFor: 'API integrations, webhooks.' },
      { name: 'Linear', url: 'https://linear.app', category: 'Project Management', description: 'Управление задачами и роадмапом. Удобен из-за MCP-интеграции и автоматизаций с Obsidian и n8n.', bestFor: 'Task management with MCP, roadmap.' },
      { name: 'OpenClaw Guide', url: 'https://timeweb.cloud/tutorials/razvertyvanie-openclaw-svoe-lichnoe-ii-v-telegram', category: 'Tutorial', description: 'Подробная инструкция по созданию личного AI-ассистента (MoltNet) в Telegram на мощностях Timeweb Cloud.', bestFor: 'Building personal Telegram AI assistant.' },
      { name: 'Caila.io', url: 'https://docs.caila.io/docs/guides/ai-tools', category: 'Developer Guide', description: 'Гайд по подключению AI-инструментов для разработчиков. Интеграция LLM в приложения.', bestFor: 'Integrating AI tools into dev workflows.' },
    ]
  },
  {
    id: 'infra',
    type: NodeType.INFRA,
    title: 'Local & Cloud Compute',
    description: 'Running open models (Flux, Wan).',
    details: 'When you need privacy, no censorship, or lower long-term costs. Renting H100s or running on your 4090.',
    connections: ['img-advanced', 'vid-production', 'music-agents'],
    tools: ['RunPod', 'HuggingFace', 'CivitAI', 'ComfyUI'],
    timeEstimate: 'Lifetime Mastery',
    x: 5, y: 4,
    toolDetails: [
      { name: 'CivitAI', url: 'https://civitai.com', category: 'Model Hub', description: 'The place for LoRAs, Checkpoints, and training.', bestFor: 'Finding specific styles/characters.' },
      { name: 'HuggingFace', url: 'https://huggingface.co', category: 'Repo', description: 'The GitHub of ML models.', bestFor: 'Finding weights, Spaces.' },
      { name: 'ComfyUI', url: 'https://github.com/comfyanonymous/ComfyUI', category: 'Framework', description: 'Node-based visual programming for GenAI. Image, video, and audio pipelines.', bestFor: 'Complex pipelines, mixing, offline work.' }
    ]
  },
]
