/* ==========================================================================
   Cuttana — content & data layer
   All user-facing strings live here in three languages: ru / pl / en.
   `window.CUTTANA` is consumed by i18n.js, main.js and clients.js.
   ========================================================================== */
(function () {
  "use strict";

  /* ---- Static UI strings (flat keys, used via data-i18n) ---------------- */
  const i18n = {
    ru: {
      "meta.title": "Cuttana — мужской барбершоп в Варшаве",
      "meta.desc":
        "Cuttana — барбершоп в Варшаве. Стрижка, фейд и борода, выстроенные под тебя. Запись онлайн через Booksy.",

      "nav.services": "Услуги",
      "nav.why": "Почему мы",
      "nav.work": "Работы",
      "nav.team": "Команда",
      "nav.location": "Контакты",
      "nav.book": "Записаться",

      "hero.eyebrow": "Barbershop · Warszawa",
      "hero.title": "Стрижка, выстроенная под тебя",
      "hero.subtitle":
        "Мужской барбершоп в Варшаве. Структура, форма и баланс — без шаблонов.",
      "hero.cta": "Записаться",
      "hero.cta2": "Услуги",
      "hero.scroll": "Листай",

      "services.tag": "Услуги",
      "services.title": "В CUTTANA\nвсего 3 услуги",
      "services.intro":
        "Не потому что у нас мало фантазии, а потому что нам важна структура, а не солянка — когда цена зависит от объёма работы и опыта мастера, а не от красивого названия.",

      "why.tag": "Почему мы",
      "why.title": "Почему выбирают Cuttana",
      "why.subtitle":
        "Главное — мы не стрижём по шаблону. Всё строится вокруг тебя.",

      "work.tag": "Работы",
      "work.title": "Наши работы",
      "work.subtitle": "Реальные клиенты Cuttana и то, что мы для них сделали.",
      "work.all": "Все работы",
      "work.madeBy": "Мастер",

      "team.tag": "Команда",
      "team.title": "Наша команда",
      "team.subtitle":
        "Каждый мастер — со своим почерком. Выбирай по вайбу и прайсу.",
      "team.price": "Прайс-лист",
      "team.works": "Мои работы",
      "team.pros": "Плюсы",
      "team.cons": "Особенности",

      "price.heading": "Прайс-лист",
      "price.combos": "Комплекты",
      "price.close": "Закрыть",

      "book.tag": "Запись",
      "book.title": "Записывайся онлайн",
      "book.subtitle":
        "Запись через Booksy — выбирай мастера, услугу и удобное время.",
      "book.cta": "Записаться на Booksy",

      "loc.tag": "Контакты",
      "loc.title": "Как нас найти",
      "loc.note": "Видео ниже покажет, как дойти до двери.",
      "loc.maps": "Открыть в Google Maps",

      "ig.title": "Мы в Instagram",
      "ig.subtitle":
        "Свежие работы, бэкстейдж и атмосфера барбершопа — в нашем Instagram.",
      "ig.cta": "Открыть Instagram",

      "footer.tagline": "Мужской барбершоп в Варшаве.",
      "footer.nav": "Навигация",
      "footer.contact": "Контакты",
      "footer.rights": "Все права защищены.",
      "footer.legal":
        "Сайт носит информационный характер. Запись и оплата — через Booksy.",

      "clients.title": "Все работы",
      "clients.subtitle": "Полная галерея работ Cuttana. Фильтруй по мастеру и услуге.",
      "clients.filterBarber": "Мастер",
      "clients.filterService": "Услуга",
      "clients.all": "Все",
      "clients.empty": "Нет работ по выбранным фильтрам.",
      "clients.back": "На главную",
      "clients.count": "работ",
    },

    pl: {
      "meta.title": "Cuttana — barbershop w Warszawie",
      "meta.desc":
        "Cuttana — barbershop w Warszawie. Strzyżenie, fade i broda skrojone pod Ciebie. Rezerwacja online przez Booksy.",

      "nav.services": "Usługi",
      "nav.why": "Dlaczego my",
      "nav.work": "Realizacje",
      "nav.team": "Zespół",
      "nav.location": "Kontakt",
      "nav.book": "Rezerwuj",

      "hero.eyebrow": "Barbershop · Warszawa",
      "hero.title": "Strzyżenie skrojone pod Ciebie",
      "hero.subtitle":
        "Barbershop w Warszawie. Struktura, forma i balans — bez szablonów.",
      "hero.cta": "Rezerwuj",
      "hero.cta2": "Usługi",
      "hero.scroll": "Przewiń",

      "services.tag": "Usługi",
      "services.title": "W CUTTANA\nsą tylko 3 usługi",
      "services.intro":
        "Nie dlatego, że brakuje nam wyobraźni, a dlatego, że zależy nam na strukturze, a nie na zbieraninie — gdy cena zależy od zakresu pracy i doświadczenia barbera, a nie od ładnej nazwy.",

      "why.tag": "Dlaczego my",
      "why.title": "Dlaczego wybierają Cuttana",
      "why.subtitle":
        "Najważniejsze — nie tniemy według szablonu. Wszystko budujemy wokół Ciebie.",

      "work.tag": "Realizacje",
      "work.title": "Nasze realizacje",
      "work.subtitle": "Prawdziwi klienci Cuttana i to, co dla nich zrobiliśmy.",
      "work.all": "Wszystkie realizacje",
      "work.madeBy": "Barber",

      "team.tag": "Zespół",
      "team.title": "Nasz zespół",
      "team.subtitle":
        "Każdy barber ma swój styl. Wybierz po klimacie i cenniku.",
      "team.price": "Cennik",
      "team.works": "Moje prace",
      "team.pros": "Plusy",
      "team.cons": "Cechy",

      "price.heading": "Cennik",
      "price.combos": "Zestawy",
      "price.close": "Zamknij",

      "book.tag": "Rezerwacja",
      "book.title": "Rezerwuj online",
      "book.subtitle":
        "Rezerwacja przez Booksy — wybierz barbera, usługę i dogodny termin.",
      "book.cta": "Rezerwuj na Booksy",

      "loc.tag": "Kontakt",
      "loc.title": "Jak nas znaleźć",
      "loc.note": "Film poniżej pokaże, jak dotrzeć do drzwi.",
      "loc.maps": "Otwórz w Mapach Google",

      "ig.title": "Jesteśmy na Instagramie",
      "ig.subtitle":
        "Najnowsze prace, backstage i atmosfera barbershopu — na naszym Instagramie.",
      "ig.cta": "Otwórz Instagram",

      "footer.tagline": "Barbershop w Warszawie.",
      "footer.nav": "Nawigacja",
      "footer.contact": "Kontakt",
      "footer.rights": "Wszelkie prawa zastrzeżone.",
      "footer.legal":
        "Strona ma charakter informacyjny. Rezerwacja i płatność — przez Booksy.",

      "clients.title": "Wszystkie realizacje",
      "clients.subtitle":
        "Pełna galeria prac Cuttana. Filtruj po barberze i usłudze.",
      "clients.filterBarber": "Barber",
      "clients.filterService": "Usługa",
      "clients.all": "Wszystkie",
      "clients.empty": "Brak realizacji dla wybranych filtrów.",
      "clients.back": "Strona główna",
      "clients.count": "realizacji",
    },

    en: {
      "meta.title": "Cuttana — barbershop in Warsaw",
      "meta.desc":
        "Cuttana — a barbershop in Warsaw. Haircut, fade and beard built around you. Book online via Booksy.",

      "nav.services": "Services",
      "nav.why": "Why us",
      "nav.work": "Work",
      "nav.team": "Team",
      "nav.location": "Contact",
      "nav.book": "Book now",

      "hero.eyebrow": "Barbershop · Warsaw",
      "hero.title": "A cut built around you",
      "hero.subtitle":
        "A barbershop in Warsaw. Structure, form and balance — never a template.",
      "hero.cta": "Book now",
      "hero.cta2": "Services",
      "hero.scroll": "Scroll",

      "services.tag": "Services",
      "services.title": "CUTTANA has\nonly 3 services",
      "services.intro":
        "Not because we're short on imagination, but because we care about structure, not a mishmash — where the price depends on the scope of work and the barber's experience, not on a fancy name.",

      "why.tag": "Why us",
      "why.title": "Why people choose Cuttana",
      "why.subtitle":
        "Above all — we don't cut to a template. Everything is built around you.",

      "work.tag": "Work",
      "work.title": "Our work",
      "work.subtitle": "Real Cuttana clients and what we did for them.",
      "work.all": "View all work",
      "work.madeBy": "Made by",

      "team.tag": "Team",
      "team.title": "Our team",
      "team.subtitle":
        "Every barber has their own signature. Pick by vibe and price.",
      "team.price": "Price list",
      "team.works": "My work",
      "team.pros": "Pros",
      "team.cons": "Notes",

      "price.heading": "Price list",
      "price.combos": "Combos",
      "price.close": "Close",

      "book.tag": "Booking",
      "book.title": "Book online",
      "book.subtitle":
        "Booking via Booksy — choose your barber, service and time.",
      "book.cta": "Book on Booksy",

      "loc.tag": "Contact",
      "loc.title": "Find us",
      "loc.note": "The video below shows how to reach the door.",
      "loc.maps": "Open in Google Maps",

      "ig.title": "We're on Instagram",
      "ig.subtitle":
        "Latest work, backstage and the barbershop atmosphere — on our Instagram.",
      "ig.cta": "Open Instagram",

      "footer.tagline": "A barbershop in Warsaw.",
      "footer.nav": "Navigation",
      "footer.contact": "Contact",
      "footer.rights": "All rights reserved.",
      "footer.legal":
        "This site is informational. Booking and payment are handled via Booksy.",

      "clients.title": "All work",
      "clients.subtitle":
        "The full Cuttana gallery. Filter by barber and service.",
      "clients.filterBarber": "Barber",
      "clients.filterService": "Service",
      "clients.all": "All",
      "clients.empty": "No work matches the selected filters.",
      "clients.back": "Home",
      "clients.count": "results",
    },
  };

  /* ---- Constant links --------------------------------------------------- */
  const links = {
    booksy: "https://booksy.com/pl-pl/dl/show-business/137479",
    instagram: "https://www.instagram.com/cuttana_barbershop",
    instagramHandle: "@cuttana_barbershop",
    maps: "https://maps.google.com/?q=Zwyci%C4%99zc%C3%B3w+13,+Warszawa,+Polska",
    mapsEmbed:
      "https://www.google.com/maps?q=Zwyci%C4%99zc%C3%B3w%2013,%20Warszawa,%20Polska&output=embed",
    address: "Zwycięzców 13, Warszawa, Polska",
  };

  /* ---- Services (brand names kept in English across languages) ---------- */
  const services = [
    {
      key: "scissors",
      icon: "scissors",
      name: "Scissors Haircut",
      desc: {
        ru:
          "Когда в работе много длины и ножниц: слои, текстура, направление и баланс. Здесь больше времени и нюансов.",
        pl:
          "Gdy w grę wchodzi długość i nożyczki: warstwy, tekstura, kierunek i balans. Tu liczy się czas i niuanse.",
        en:
          "When the work is about length and scissors: layers, texture, direction and balance. More time, more nuance.",
      },
    },
    {
      key: "fade",
      icon: "clipper",
      name: "Fade | Buzzcut",
      desc: {
        ru:
          "Любые махинации машинкой — это сюда: фейд, баззкат, бока машинкой.",
        pl:
          "Wszystko, co robi maszynka — tutaj: fade, buzzcut, boki maszynką.",
        en:
          "Anything done with the clippers lives here: fade, buzzcut, machine sides.",
      },
    },
    {
      key: "beard",
      icon: "razor",
      name: "Beard",
      desc: {
        ru:
          "Не «чуть подравнять», а выстроить форму так, чтобы она усиливала стрижку. Мы всегда смотрим на образ целиком.",
        pl:
          "Nie „lekko podrównać”, a zbudować formę, która wzmacnia fryzurę. Zawsze patrzymy na całość wizerunku.",
        en:
          "Not a quick trim, but a shape built to strengthen the haircut. We always look at the whole image.",
      },
    },
  ];

  /* ---- Why us ----------------------------------------------------------- */
  const why = [
    {
      icon: "target",
      title: {
        ru: "Адаптация под тебя",
        pl: "Adaptacja pod Ciebie",
        en: "Adapted to you",
      },
      desc: {
        ru:
          "Главное преимущество Cuttana — мы не стрижём по шаблону. Каждую стрижку адаптируем под форму головы, тип и рост волос, образ жизни и твой стиль.",
        pl:
          "Główna przewaga Cuttana — nie tniemy według szablonu. Każdą fryzurę dopasowujemy do kształtu głowy, typu i wzrostu włosów, stylu życia i Twojego stylu.",
        en:
          "Cuttana's main edge — we don't cut to a template. Every haircut is adapted to your head shape, hair type and growth, lifestyle and style.",
      },
    },
    {
      icon: "layers",
      title: {
        ru: "Структура, а не солянка",
        pl: "Struktura, nie zbieranina",
        en: "Structure, not a mishmash",
      },
      desc: {
        ru:
          "Понятный прайс и 3 услуги вместо десятка названий: ты платишь за работу и опыт, а не за маркетинг.",
        pl:
          "Przejrzysty cennik i 3 usługi zamiast dziesiątek nazw: płacisz za pracę i doświadczenie, nie za marketing.",
        en:
          "A clear price list and 3 services instead of a dozen names: you pay for the work and experience, not the marketing.",
      },
    },
    {
      icon: "coffee",
      title: {
        ru: "Напитки за счёт заведения",
        pl: "Napoje na koszt firmy",
        en: "Drinks on the house",
      },
      desc: {
        ru:
          "Кофе, чай, вода или что-то покрепче — пока мы работаем, ты просто расслабляешься.",
        pl:
          "Kawa, herbata, woda albo coś mocniejszego — w czasie pracy Ty po prostu odpoczywasz.",
        en:
          "Coffee, tea, water or something stronger — while we work, you just relax.",
      },
    },
    {
      icon: "sparkles",
      title: {
        ru: "Образ целиком",
        pl: "Cały wizerunek",
        en: "The whole image",
      },
      desc: {
        ru:
          "Мы всегда смотрим на образ целиком — стрижка, борода и баланс между ними.",
        pl:
          "Zawsze patrzymy na całość — fryzura, broda i balans między nimi.",
        en:
          "We always look at the whole image — hair, beard and the balance between them.",
      },
    },
  ];

  /* ---- Price lists (two tiers; each barber points to one) --------------- */
  const priceTiers = {
    basic: {
      services: [
        { name: "Scissors Haircut", price: 120 },
        { name: "Fade | Buzzcut", price: 90 },
        { name: "Beard", price: 75 },
      ],
      combos: [
        { name: "Scissors Haircut + Beard", price: 170 },
        { name: "Fade | Buzzcut + Beard", price: 150 },
      ],
    },
    premium: {
      services: [
        { name: "Scissors Haircut", price: 170 },
        { name: "Fade | Buzzcut", price: 140 },
        { name: "Beard", price: 100 },
      ],
      combos: [
        { name: "Scissors Haircut + Beard", price: 230 },
        { name: "Fade | Buzzcut + Beard", price: 210 },
      ],
    },
  };
  const currency = "zł";

  /* ---- Team ------------------------------------------------------------- */
  const team = [
    {
      key: "sergey",
      name: { ru: "Сергей", pl: "Sergiej", en: "Sergey" },
      image: "assets/team/sergey.jpg",
      tier: "premium",
      rank: {
        ru: "Основатель фракции",
        pl: "Założyciel frakcji",
        en: "Faction founder",
      },
      pros: {
        ru: [
          "Стрижёт как будто у него включены чит-коды",
          "Исправит любую ошибку: от «друг постриг» до «я попробовал сам — теперь жалею»",
          "Поймёт твой запрос быстрее, чем ты скажешь «мне коротко, но не слишком»",
        ],
        pl: [
          "Strzyże, jakby miał włączone cheaty",
          "Naprawi każdy błąd: od „kolega ściął” po „spróbowałem sam — teraz żałuję”",
          "Zrozumie Cię szybciej, niż powiesz „krótko, ale nie za bardzo”",
        ],
        en: [
          "Cuts like he's got the cheat codes on",
          "Fixes any mistake: from “a friend cut it” to “I tried myself — now I regret it”",
          "Reads your request before you finish saying “short, but not too short”",
        ],
      },
      cons: {
        ru: [
          "Цена уровня «легендарный предмет»",
          "Очень быстро вызывает привыкание",
          "После него тяжело доверять другим NPC",
        ],
        pl: [
          "Cena na poziomie „przedmiotu legendarnego”",
          "Bardzo szybko uzależnia",
          "Po nim ciężko zaufać innym NPC",
        ],
        en: [
          "Price tier: “legendary item”",
          "Highly addictive, very fast",
          "After him it's hard to trust other NPCs",
        ],
      },
    },
    {
      key: "polina",
      name: { ru: "Полина", pl: "Polina", en: "Polina" },
      image: "assets/team/polina.jpg",
      tier: "premium",
      rank: {
        ru: "Главный стратег",
        pl: "Główny strateg",
        en: "Head strategist",
      },
      pros: {
        ru: [
          "Всегда делает то, что нужно, и без промахов",
          "Выдерживает диалоги уровня «а может чуть короче? Ещё короче. Нет, длиннее»",
          "Идеальный баланс скорости и качества, как любимый герой в RPG",
        ],
        pl: [
          "Zawsze robi to, co trzeba, i bez wpadek",
          "Wytrzyma dialog „a może krócej? Jeszcze krócej. Nie, dłużej”",
          "Idealny balans szybkości i jakości, jak ulubiony bohater w RPG",
        ],
        en: [
          "Always does exactly what's needed, no misses",
          "Survives the “maybe shorter? Shorter. No, longer” dialogue",
          "Perfect balance of speed and quality, like your main in an RPG",
        ],
      },
      cons: {
        ru: [
          "Слишком честна: скажет, если твоя идея со стрижкой станет провалом миссии",
          "Зависимость от качалки: была в зале — стрижка +10% к идеальности",
        ],
        pl: [
          "Zbyt szczera: powie, jeśli Twój pomysł na fryzurę to porażka misji",
          "Uzależniona od siłowni: była na treningu — fryzura +10% do perfekcji",
        ],
        en: [
          "Too honest: she'll tell you if your idea is a failed mission",
          "Gym-dependent: if she trained — the cut gets +10% to perfection",
        ],
      },
    },
    {
      key: "nazar",
      name: { ru: "Назар", pl: "Nazar", en: "Nazar" },
      image: "assets/team/nazar.jpg",
      tier: "basic",
      rank: {
        ru: "Начинающий собиратель форм",
        pl: "Początkujący kolekcjoner form",
        en: "Rookie form-collector",
      },
      pros: {
        ru: [
          "Старательность уровня «проверить каждый миллиметр»",
          "Цена как «лайтовая миссия»",
          "Всегда хочет сделать лучше всех — качает опыт",
          "Ученик «главного стратега»",
        ],
        pl: [
          "Staranność na poziomie „sprawdzić każdy milimetr”",
          "Cena jak „misja na lekko”",
          "Zawsze chce zrobić najlepiej — podbija doświadczenie",
          "Uczeń „głównego stratega”",
        ],
        en: [
          "Diligence at the “check every millimetre” level",
          "Price like an “easy-mode mission”",
          "Always wants to do it best — grinding experience",
          "Apprentice of the “head strategist”",
        ],
      },
      cons: {
        ru: [
          "Скорость... ну... он прокачивается, ок?",
          "Постоянно уточняет и задаёт много вопросов — зато точно попадает в запрос",
          "Быстро эволюционирует в ценник «барбер с опытом»",
        ],
        pl: [
          "Szybkość... no... podbija poziom, ok?",
          "Ciągle dopytuje — za to trafia w zapytanie idealnie",
          "Szybko ewoluuje w cennik „barber z doświadczeniem”",
        ],
        en: [
          "Speed... well... he's levelling up, ok?",
          "Asks a lot of questions — but nails the request every time",
          "Evolves fast into the “experienced barber” price tag",
        ],
      },
    },
    {
      key: "tatiana",
      name: { ru: "Татьяна", pl: "Tatiana", en: "Tatiana" },
      image: "assets/team/tatiana.jpg",
      tier: "basic",
      rank: {
        ru: "Новобранец с опытом",
        pl: "Rekrut z doświadczeniem",
        en: "Recruit with experience",
      },
      pros: {
        ru: [
          "Выпускница Полины — работает по стандартам Cuttana",
          "Есть опыт работы — меньше «нащупывания», больше уверенности",
          "Внимательна к деталям — учитывает форму головы и рост волос",
          "Пока ещё доступный прайс",
        ],
        pl: [
          "Absolwentka Poliny — pracuje według standardów Cuttana",
          "Ma doświadczenie — mniej „szukania”, więcej pewności",
          "Dba o detale — uwzględnia kształt głowy i wzrost włosów",
          "Na razie wciąż przystępny cennik",
        ],
        en: [
          "Trained by Polina — works to Cuttana standards",
          "Has real experience — less guessing, more confidence",
          "Detail-driven — accounts for head shape and hair growth",
          "Still an accessible price, for now",
        ],
      },
      cons: {
        ru: [
          "С лёгкостью превращает опыт в результат",
          "Быстро набирает постоянных клиентов",
          "Есть риск не успеть записаться по текущему прайсу",
        ],
        pl: [
          "Z łatwością zamienia doświadczenie w efekt",
          "Szybko zdobywa stałych klientów",
          "Jest ryzyko, że nie zdążysz po obecnym cenniku",
        ],
        en: [
          "Turns experience into results with ease",
          "Builds a regular client base fast",
          "Risk: you might not book in at the current price",
        ],
      },
    },
  ];

  /* ---- Client cases (sample set; extend freely) ------------------------- */
  const clients = [
    {
      id: "case-01",
      name: { ru: "Артём", pl: "Artiom", en: "Artem" },
      barber: "sergey",
      services: ["fade", "beard"],
      image: "assets/clients/case-01.jpg",
      desc: {
        ru: "Средний фейд и плотная борода с чётким контуром.",
        pl: "Średni fade i gęsta broda z wyraźnym konturem.",
        en: "Mid fade with a dense, sharply lined beard.",
      },
    },
    {
      id: "case-02",
      name: { ru: "Михаил", pl: "Michaił", en: "Mikhail" },
      barber: "polina",
      services: ["scissors"],
      image: "assets/clients/case-02.jpg",
      desc: {
        ru: "Ножницы по длине: текстура и мягкое движение.",
        pl: "Nożyczki na długości: tekstura i miękki ruch.",
        en: "Scissor work on length: texture and soft movement.",
      },
    },
    {
      id: "case-03",
      name: { ru: "Дэниел", pl: "Daniel", en: "Daniel" },
      barber: "nazar",
      services: ["fade"],
      image: "assets/clients/case-03.jpg",
      desc: {
        ru: "Баззкат с лёгким переходом по бокам.",
        pl: "Buzzcut z lekkim przejściem na bokach.",
        en: "Buzzcut with a soft fade on the sides.",
      },
    },
    {
      id: "case-04",
      name: { ru: "Оля", pl: "Ola", en: "Ola" },
      barber: "tatiana",
      services: ["scissors", "beard"],
      image: "assets/clients/case-04.jpg",
      desc: {
        ru: "Стрижка ножницами и аккуратная форма бороды.",
        pl: "Strzyżenie nożyczkami i schludna forma brody.",
        en: "Scissor cut paired with a clean beard shape.",
      },
    },
    {
      id: "case-05",
      name: { ru: "Кирилл", pl: "Cyryl", en: "Kirill" },
      barber: "sergey",
      services: ["scissors", "beard"],
      image: "assets/clients/case-05.jpg",
      desc: {
        ru: "Длина, слои и борода, собранные в один образ.",
        pl: "Długość, warstwy i broda złożone w jeden wizerunek.",
        en: "Length, layers and beard pulled into one look.",
      },
    },
    {
      id: "case-06",
      name: { ru: "Ян", pl: "Jan", en: "Jan" },
      barber: "polina",
      services: ["fade", "beard"],
      image: "assets/clients/case-06.jpg",
      desc: {
        ru: "Высокий фейд с балансом под форму лица.",
        pl: "Wysoki fade zbalansowany pod kształt twarzy.",
        en: "High fade balanced to the face shape.",
      },
    },
    {
      id: "case-07",
      name: { ru: "Андрей", pl: "Andriej", en: "Andrey" },
      barber: "nazar",
      services: ["beard"],
      image: "assets/clients/case-07.jpg",
      desc: {
        ru: "Оформление и коррекция бороды шейвером.",
        pl: "Modelowanie i korekta brody shaverem.",
        en: "Beard shaping and correction with a shaver.",
      },
    },
    {
      id: "case-08",
      name: { ru: "Виктор", pl: "Wiktor", en: "Viktor" },
      barber: "tatiana",
      services: ["fade"],
      image: "assets/clients/case-08.jpg",
      desc: {
        ru: "Чистый фейд с акцентом на контуры.",
        pl: "Czysty fade z akcentem na kontury.",
        en: "Clean fade with the focus on lines.",
      },
    },
  ];

  window.CUTTANA = {
    i18n,
    links,
    services,
    why,
    team,
    clients,
    priceTiers,
    currency,
    defaultLang: "ru",
    langs: ["ru", "pl", "en"],
  };
})();
