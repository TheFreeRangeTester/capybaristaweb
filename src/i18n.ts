export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
};

export const localeSwitchLabels: Record<Locale, string> = {
  es: "ES",
  en: "EN",
};

export const localeSwitchActions: Record<Locale, string> = {
  es: "Cambiar a español",
  en: "Switch to English",
};

export function oppositeLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es";
}

export const copy = {
  es: {
    meta: {
      homeTitle: "Capybarista · Apps for iOS",
      homeDescription:
        "Capybarista es un estudio independiente de apps iOS creado por un ingeniero argentino en Nueva Zelanda, con foco en calidad de software, privacidad y productos útiles.",
    },
    nav: {
      apps: "Apps",
      blog: "Blog",
      privacy: "Privacidad",
      privacyPolicy: "Política de privacidad",
    },
    home: {
      heroTitle: "Hola 👋🏻",
      intro:
        "Somos Capybarista, un estudio indie para apps iOS con aroma a café, foco tranquilo y pequeñas herramientas premium. Creamos experiencias simples para volver a tu estado mental, tus juegos y tus rutinas sin fricción.",
      explore: "Explorar apps",
      readBlog: "Leer el blog",
      appsTitle: "Apps iOS para volver a tu ritmo.",
      appsText:
        "Cada producto tiene una página propia, su blog y acceso directo a la política de privacidad compartida del estudio.",
      aboutTitle: "Un estudio indie, una persona detrás.",
      aboutText:
        "Capybarista es el proyecto de un desarrollador argentino viviendo en Nueva Zelanda, con más de 16 años dedicado a la ingeniería de calidad en software. Después de años ayudando a crear productos confiables, decidí construir aplicaciones iOS propias con la calidad, la privacidad y la experiencia diaria como foco principal.",
      aboutNote:
        "Creo productos que quiero que existan para usarlos yo también: herramientas simples, cuidadas y honestas para personas con gustos y necesidades parecidas.",
      aboutPhotoAlt: "Fundador de Capybarista en Nueva Zelanda",
      socialLabel: "También estoy en",
      blogTitle: "Guías cortas, útiles y sin vueltas.",
      blogText:
        "El blog está pensado para explicar cómo usar cada app, compartir tips y dejar documentado lo esencial.",
      privacyTitle: "Política de privacidad lista para hostear.",
      privacyText:
        "Una ruta estática para centralizar la privacidad de Capybarista y enlazarla desde App Store Connect, las apps y cada página de producto.",
      openPrivacy: "Abrir privacidad",
      viewApp: "Ver app",
      readGuide: "Leer guía",
    },
    appDirectory: {
      title: "Apps",
      intro:
        "Apps iOS simples, privadas y cuidadas. Las construyo para usarlas yo también, y espero que también le sirvan a personas con gustos y necesidades parecidas.",
      appStoreSoon: "App Store pronto",
      screenshotAlt: "Vista previa de la app",
      learnMore: "Detalles",
    },
    blogIndex: {
      title: "Blog",
      intro:
        "Guías cortas para usar mejor cada app, descubrir pequeños tips y dejar documentado lo esencial.",
    },
    apps: {
      checkpoint: {
        name: "Checkpoint",
        description:
          "Un companion sin fricción para gamers que quieren retomar partidas sin olvidar dónde estaban, qué hacían o cuál era el siguiente objetivo.",
        tags: ["Gaming", "Backlog", "iOS"],
        detailTitle: "Checkpoint",
        detailIntro:
          "Retomá tus juegos sin perder contexto: último objetivo, próximo paso, notas rápidas y ese detalle que siempre se olvida entre sesiones.",
        purposeTitle: "Para qué sirve",
        purpose:
          "Checkpoint está pensada como una libreta ultra rápida para cada juego. Te ayuda a recordar dónde dejaste una partida, qué querías hacer después y qué pistas o misiones no querés perder.",
        sections: {
          storyTitle: "Nació de una vida con muchas pestañas abiertas",
          storyBody: [
            "Soy padre de dos, tengo un trabajo full time, side projects de desarrollo y también proyectos de música. Me encantan los videojuegos, pero muchas veces vuelvo a una partida después de varios días, semanas o meses sin tocarla.",
            "Y a veces ni siquiera hace falta que pase tanto tiempo: un juego que jugué la semana pasada ya puede dejarme mirando la pantalla con esa pregunta incómoda de dónde estaba, qué tenía que hacer o cuál era mi próximo objetivo.",
          ],
          problemTitle: "Cuando el juego no alcanza para recordar",
          problemText:
            "Los logs de quests ayudan... a veces. Otras veces son demasiado vagos, están escondidos en menús eternos o directamente no explican el contexto que tu yo del pasado tenía clarísimo. Zelda: Oracle of Ages, te estoy mirando a vos.",
          problemItems: [
            {
              title: "Próxima acción",
              body: "Capturá exactamente qué querés hacer la próxima vez que abras el juego, sin reconstruirlo de memoria.",
            },
            {
              title: "Tareas relacionadas",
              body: "Guardá pendientes concretos: hablar con alguien, conseguir un ítem, revisar una zona o terminar una cadena de misiones.",
            },
            {
              title: "Guías y recursos",
              body: "Dejá a mano mapas, guías, videos o páginas útiles que encontraste en internet y que no querés buscar otra vez.",
            },
          ],
          resumeTitle: "Resume game, y listo",
          resumeText:
            "La idea de Checkpoint es simple: cuando finalmente aparece el tiempo para jugar, toco Resume game y tengo todo lo necesario para volver sin fricción. No necesito acordarme de mil detalles, porque ya los dejé guardados en el teléfono.",
          resumeItems: [
            "Objetivo actual claro antes de abrir el juego.",
            "Notas rápidas con el contexto de la última sesión.",
            "Tareas y recursos reunidos en un solo lugar.",
          ],
          guideCta: "Leer guía de uso",
        },
      },
      newen: {
        name: "Newen",
        description:
          "Un mood tracker reflexivo para reconocer energía, emociones y patrones personales con calma, sin convertir el día en una encuesta.",
        tags: ["Mood tracking", "Reflexión", "iOS"],
        detailTitle: "Newen",
        detailIntro:
          "Una app para observar tu estado de ánimo, energía y pequeñas señales internas con una experiencia suave y privada.",
        purposeTitle: "Para qué sirve",
        purpose:
          "Newen ayuda a registrar cómo te sentís y descubrir patrones sin presión. La idea es que puedas pausar, nombrar lo que pasa y seguir con más claridad.",
        sections: {
          rhythmTitle: "Registrar sin convertirlo en tarea",
          rhythmText:
            "Newen está pensada para capturar un momento emocional en segundos: elegís cómo te sentís, sumás contexto si hace falta y seguís con tu día. No necesitás escribir un diario largo ni completar formularios eternos.",
          rhythmItems: [
            {
              title: "Estados claros",
              body: "Elegí entre emociones simples y reconocibles para que el registro sea rápido incluso cuando no tenés energía para explicar demasiado.",
            },
            {
              title: "Contexto opcional",
              body: "Agregá una nota corta cuando algo importe: una reunión, una conversación, un descanso, una buena noticia o un día pesado.",
            },
            {
              title: "Patrones visibles",
              body: "Con el tiempo, Newen te ayuda a mirar tendencias, días recurrentes y cambios de energía sin juzgar lo que aparece.",
            },
          ],
          privacyTitle: "Privada, local y protegida",
          privacyText:
            "Tus registros son tuyos. Newen no necesita cuentas, no usa tracking y no convierte tus emociones en datos para publicidad. La experiencia está diseñada para que puedas observarte con calma y confianza.",
          privacyImage: "/newen-privacy-es.svg",
          privacyImageAlt: "Resumen visual de privacidad de Newen: datos locales, sin cuentas, Face ID, iCloud y uso offline",
          privacyPoints: [
            "Sin cuentas, emails ni perfiles externos.",
            "Datos guardados localmente en tu dispositivo.",
            "Sin anuncios, sin tracking y sin recopilación de datos.",
            "Bloqueo con Face ID para sumar una capa de privacidad.",
            "Sincronización opcional entre dispositivos mediante iCloud.",
          ],
          watchTitle: "También en Apple Watch",
          watchText:
            "Cuando tenés Apple Watch, Newen se vuelve todavía más ligera: podés registrar un estado desde la muñeca y hacer microsesiones de reflexión sin sacar el teléfono.",
          watchItems: [
            "Registros rápidos cuando algo acaba de pasar.",
            "Reflexiones breves de 30 segundos a 2 minutos.",
            "Una forma menos invasiva de mantener consistencia durante el día.",
          ],
          guideCta: "Leer guía de uso",
        },
      },
      guidesTitle: "Guías",
      privacyTitle: "Privacidad",
      privacyText: "La información de privacidad de Capybarista vive en la",
    },
    posts: {
      checkpoint: {
        title: "Cómo guardar tu primer checkpoint",
        excerpt:
          "Una guía breve para dejar una partida lista para retomar aunque pasen días o semanas.",
        intro:
          "Una forma rápida de guardar el contexto de una partida cuando la vida no siempre te deja jugar seguido.",
        image: "/checkpoint-post-hero.png",
        imageAlt: "Ilustracion pixel art de una sala gamer con una persona retomando una partida desde el sofa",
        cta: {
          title: "Listo para guardar tu próximo checkpoint",
          body: "Checkpoint Companion ya está disponible en App Store para iPhone.",
          label: "Ver en App Store",
          href: "https://apps.apple.com/nz/app/checkpoint-companion/id6766421117",
        },
        galleryLabel: "Capturas de Checkpoint",
        gallery: [
          {
            src: "/checkpoint-games-list.jpeg",
            alt: "Lista de juegos en Checkpoint con tareas activas y partidas recientes",
            caption: "La lista muestra tus juegos, cuáles jugaste recientemente y qué tareas siguen activas.",
          },
          {
            src: "/checkpoint-detail-actions.png",
            alt: "Detalle de Sekiro en Checkpoint con objetivo, última sesión, notas, tareas, recursos y menú para agregar contenido",
            caption: "Cada juego puede tener objetivo actual, última sesión, notas, tareas y recursos útiles.",
          },
          {
            src: "/checkpoint-resume-game.jpeg",
            alt: "Vista Resume Game de Sekiro con objetivo, tarea activa y recurso guardado",
            caption: "Resume Game deja todo lo importante a mano para volver a jugar sin fricción.",
          },
        ],
        sections: [
          {
            title: "Por qué creé Checkpoint",
            body: [
              "La idea nació de una situación bastante concreta: soy padre de familia, tengo un trabajo full time y no siempre puedo dedicarle a los videojuegos el tiempo que me gustaría.",
              "Me pasaba que retomaba un juego que me encantaba y, en vez de volver directo a disfrutarlo, tenía que reconstruir dónde lo había dejado, qué estaba buscando, qué estaba farmeando o cuál era esa cosita próxima que quería hacer.",
              "No me hacía ilusión navegar mil logs de quests, abrir guías intentando adivinar en qué punto estaba o perder los primeros veinte minutos de una sesión corta tratando de recordar mi propio plan.",
            ],
          },
          {
            title: "Qué guardar antes de cerrar",
            body: [
              "Checkpoint existe para capturar lo mínimo que necesitas antes de apagar la consola: dónde estás, cuál es el objetivo actual, qué hiciste en la última sesión y qué recurso o guía conviene tener a mano.",
              "La clave no es escribir una novela. Dos o tres líneas claras valen mucho más que una nota larga que nunca vas a volver a leer.",
            ],
            bullets: [
              "Objetivo actual: una acción concreta para la próxima sesión.",
              "Última sesión: qué acabas de hacer y dónde quedaste.",
              "Notas: pistas, decisiones pendientes o cosas que no quieres olvidar.",
              "Recursos: una guía, mapa o referencia que ya encontraste y no quieres buscar de nuevo.",
            ],
          },
          {
            title: "Qué agregar y cuándo",
            body: [
              "Checkpoint funciona mejor cuando cada cosa tiene un propósito claro. La idea no es convertir tus juegos en una planilla enorme, sino guardar el tipo justo de contexto para que tu próxima sesión empiece rápido.",
              "Estas son las cuatro piezas principales que puedes agregar y cuándo conviene usar cada una.",
            ],
            bullets: [
              "Juegos: agregá un juego cuando querés poder retomarlo más adelante sin depender de la memoria. Es el contenedor principal para su objetivo actual, última sesión y todo lo relacionado.",
              "Notas: usá una nota para contexto que no necesariamente requiere acción inmediata: una pista, una decisión pendiente, algo que probaste, una historia que querés recordar o cualquier detalle que explique dónde estabas mentalmente.",
              "Tareas: usá una tarea cuando hay una acción concreta por hacer. Por ejemplo: desbloquear un ítem, hablar con un personaje, volver a una zona, farmear un recurso o completar un paso específico.",
              "Recursos: agregá un recurso cuando encontraste algo útil afuera del juego y sabés que lo vas a necesitar otra vez: una guía, un mapa, una wiki, un video, una build o una página con la ubicación de algo difícil de recordar.",
            ],
            after:
              "Si algo responde a la pregunta “qué hago después”, probablemente es una tarea. Si responde “por qué estaba haciendo esto”, probablemente es una nota. Si vive en internet y te ahorra buscar de nuevo, es un recurso.",
          },
          {
            title: "Volver sin fricción",
            body: [
              "Gracias a ese pequeño ritual, hoy puedo ir progresando en The Legend of Zelda: Oracle of Ages, Sekiro, Tears of the Kingdom y muchos juegos más, cambiando de contexto sin sentir que estoy empezando de cero cada vez.",
              "Cuando tengo treinta minutos libres, abro Checkpoint, leo mi próxima acción y entro al juego con intención. Ese es el objetivo: menos administración, más juego.",
            ],
          },
          {
            title: "Tu primer checkpoint",
            body: "Para empezar, elige un juego que tengas abandonado y crea una entrada sencilla. No intentes documentarlo todo. Solo deja una pista suficientemente buena para tu yo del futuro.",
            bullets: [
              "Escribe una próxima acción concreta.",
              "Agrega una nota corta con el contexto de la última sesión.",
              "Guarda una guía o recurso si ya sabes que lo vas a necesitar.",
              "Cuando vuelvas, revisa ese checkpoint antes de abrir el juego.",
            ],
            after:
              "Si después de leerlo puedes volver a jugar sin perder tiempo recordando, el checkpoint ya cumplió su trabajo.",
          },
        ],
      },
      newen: {
        title: "Cómo sacarle el máximo a Newen",
        excerpt:
          "Recomendaciones para obtener insights reales sin convertir el registro emocional en otra obligación.",
        intro:
          "Newen está diseñada para ser simple. Sin fricción. Sin ruido. Pero el verdadero valor aparece en cómo la usás con el tiempo.",
        image: "/newen-guide-es.svg",
        imageAlt: "Guía visual en español para sacarle el máximo provecho a Newen",
        sections: [
          {
            title: "1. Priorizá la consistencia, no la perfección",
            body: [
              "No necesitás cargar todo perfecto.",
              "Lo importante es ser constante.",
              "Incluso unos pocos registros por día ya empiezan a mostrar patrones, y ahí es donde está el valor.",
            ],
          },
          {
            title: "2. Usá recordatorios (si te sirven)",
            body: [
              "Podés usar Newen sin ningún recordatorio.",
              "Pero si querés estructura, podés configurar hasta 3 por día.",
              "Una configuración simple que recomiendo:",
            ],
            bullets: ["Uno a la mañana.", "Uno a mitad del día.", "Uno a la noche."],
            after:
              "Esto te da una visión más completa del día, no solo de cómo terminó. Porque tendemos a recordar la última emoción, no todo el recorrido.",
          },
          {
            title: "3. No estás limitado a 3 registros por día",
            body: [
              "Los recordatorios son solo eso: recordatorios.",
              "Podés cargar todos los estados emocionales que quieras.",
              "De hecho, es útil hacerlo cuando pasa algo relevante:",
            ],
            bullets: [
              "Una reunión estresante.",
              "Una buena charla.",
              "Un momento que te quedó marcado.",
            ],
            after:
              "Eso le da contexto a tus datos. Y con el tiempo, ese contexto se transforma en patrones.",
          },
          {
            title: "4. Las notas no son obligatorias, pero ayudan mucho",
            body: [
              "No tenés que escribir si no querés.",
              "Pero una nota corta puede marcar la diferencia.",
              "Cuando mires semanas o meses atrás, no solo vas a ver cómo te sentías: vas a recordar por qué.",
              "Eso convierte datos en entendimiento real.",
            ],
          },
          {
            title: "5. Tomate tiempo para reflexionar sobre tus patrones",
            body: [
              "Newen detecta patrones, pero el impacto real viene de reflexionar sobre ellos.",
              "Tomate un momento cada tanto y preguntate:",
            ],
            bullets: [
              "¿Tiene sentido este patrón?",
              "¿Es algo que quiero cambiar?",
              "¿Qué puede estar causándolo?",
            ],
            after:
              "Hacelo con calma. Sin distracciones. A veces no pasa nada. A veces hace click. Ahí empieza el cambio.",
          },
          {
            title: "6. Si tenés Apple Watch, aprovechalo",
            body: [
              "Si tenés Apple Watch, todo es más rápido.",
              "Podés registrar estados en segundos, sin fricción.",
              "Y también podés hacer sesiones de reflexión:",
            ],
            bullets: ["30 segundos.", "1 minuto.", "2 minutos."],
            after:
              "Misma recomendación: sin distracciones, con calma. Es un hábito chico que puede generar insights grandes.",
          },
          {
            title: "Cierre",
            body: [
              "Newen no te dice qué hacer.",
              "Te ayuda a ver lo que ya está pasando.",
              "Y con un poco de consistencia, vas a empezar a notar patrones que siempre estuvieron ahí, solo que no los estabas mirando.",
            ],
          },
        ],
      },
      privacyCard: {
        app: "Capybarista",
        title: "Privacidad en apps pequeñas",
        excerpt:
          "Dónde vive la política de privacidad y cómo se organizan las futuras actualizaciones.",
      },
    },
    privacy: {
      title: "Política de privacidad",
      updated: "Última actualización: 2 de junio de 2026.",
      intro:
        "Capybarista desarrolla apps iOS independientes, incluyendo Checkpoint y Newen. La idea principal es simple: crear herramientas útiles que respeten la privacidad del usuario por defecto.",
      sections: [
        {
          title: "Información general",
          body: "Las apps de Capybarista están publicadas bajo la cuenta personal del desarrollador en App Store. Al desarrollar estas apps, tomo decisiones pensadas para minimizar la información que se solicita, se procesa o se comparte.",
        },
        {
          title: "Sin cuentas y sin backend propio",
          body: "No necesitás crear una cuenta para usar nuestras apps. Capybarista no opera un backend propio para almacenar tus datos, no mantiene perfiles de usuario y no accede al contenido que guardás dentro de las apps.",
        },
        {
          title: "Almacenamiento y sincronización",
          body: "Los datos que ingresás en las apps se guardan localmente en los dispositivos donde las usás. Cuando una app ofrece sincronización entre dispositivos, esa sincronización se realiza mediante iCloud, específicamente CloudKit, usando la base de datos privada asociada a tu cuenta de Apple. Capybarista no puede leer ni administrar ese contenido privado.",
        },
        {
          title: "Información personal",
          body: "Capybarista no recopila información personal identificable como nombre, correo electrónico, teléfono, ubicación precisa, información financiera o identificadores de usuario propios. Tampoco vende datos personales ni comparte información con fines publicitarios.",
        },
        {
          title: "Analytics, publicidad y tracking",
          body: "Actualmente nuestras apps no usan redes publicitarias, herramientas de tracking ni SDKs de terceros para analizar tu actividad. No rastreamos usuarios entre apps o sitios web.",
        },
        {
          title: "Apple Health / HealthKit",
          body: "Algunas apps de Capybarista pueden ofrecer integraciones opcionales con Apple Health usando HealthKit. En esta versión, Newen puede guardar nuevos check-ins de ánimo como entradas State of Mind en Apple Health si activás la sincronización con Apple Health y concedés permiso. Esta integración está desactivada por defecto. Newen no lee datos de Apple Health en esta versión, no sube datos de HealthKit a servidores de Capybarista y no comparte datos de HealthKit con terceros. Notas, etiquetas, contextos y registros históricos de ánimo no se exportan a Apple Health. Podés desactivar el acceso a Apple Health en cualquier momento desde la configuración de Newen o desde la configuración de privacidad de Salud de Apple en tu dispositivo.",
        },
        {
          title: "Eliminación de datos",
          body: "Como tus datos viven en tu dispositivo y, cuando corresponde, en tu iCloud, podés eliminarlos desde la app, eliminando la app del dispositivo o gestionando los datos de iCloud desde la configuración de Apple. Si desactivás iCloud para una app, la sincronización entre dispositivos puede dejar de funcionar.",
        },
        {
          title: "Cookies y este sitio web",
          body: "Este sitio web es una web estática para presentar las apps de Capybarista y alojar esta política de privacidad. No está pensado para crear cuentas, recolectar información personal ni almacenar cookies propias para tracking.",
        },
        {
          title: "Cambios y contacto",
          body: "Podemos actualizar esta política de privacidad si cambian nuestras apps, funcionalidades o prácticas de datos. Para consultas sobre privacidad, usá el canal de soporte indicado en la página de App Store de la app correspondiente. Cuando Capybarista tenga un correo público de soporte, lo agregaremos también a esta página.",
        },
      ],
    },
  },
  en: {
    meta: {
      homeTitle: "Capybarista · Apps for iOS",
      homeDescription:
        "Capybarista is an independent iOS app studio by an Argentine software quality engineer in New Zealand, focused on private, polished, useful apps.",
    },
    nav: {
      apps: "Apps",
      blog: "Blog",
      privacy: "Privacy",
      privacyPolicy: "Privacy Policy",
    },
    home: {
      heroTitle: "Hello 👋🏻",
      intro:
        "We are Capybarista, an indie iOS app studio with coffee energy, quiet focus, and premium little tools. We build simple experiences for returning to your mood, your games, and your routines without friction.",
      explore: "Explore apps",
      readBlog: "Read the blog",
      appsTitle: "iOS apps for returning to your rhythm.",
      appsText:
        "Each product has its own page, app-specific blog posts, and direct access to the studio privacy policy.",
      aboutTitle: "An indie studio with one person behind it.",
      aboutText:
        "Capybarista is built by an Argentine developer living in New Zealand, with more than 16 years dedicated to software quality engineering. After years helping teams ship reliable products, I decided to create my own iOS apps with quality, privacy, and everyday usefulness as the main focus.",
      aboutNote:
        "I build products I genuinely want to exist and use myself: simple, carefully made, honest tools for people with similar tastes and needs.",
      aboutPhotoAlt: "Capybarista founder in New Zealand",
      socialLabel: "You can also find me on",
      blogTitle: "Short, useful, practical guides.",
      blogText:
        "The blog explains how to use each app, shares tips, and keeps the essential documentation easy to find.",
      privacyTitle: "Privacy Policy ready to host.",
      privacyText:
        "A static route to centralize Capybarista privacy information and link it from App Store Connect, the apps, and each product page.",
      openPrivacy: "Open privacy",
      viewApp: "View app",
      readGuide: "Read guide",
    },
    appDirectory: {
      title: "Apps",
      intro:
        "Simple, private, carefully made iOS apps. I build them for myself first, and hope they are useful for people with similar tastes and needs.",
      appStoreSoon: "App Store soon",
      screenshotAlt: "App preview",
      learnMore: "Details",
    },
    blogIndex: {
      title: "Blog",
      intro:
        "Short guides for getting more out of each app, learning small tips, and keeping the essentials easy to find.",
    },
    apps: {
      checkpoint: {
        name: "Checkpoint",
        description:
          "A frictionless gaming companion for players who want to resume games without forgetting where they were, what they were doing, or what came next.",
        tags: ["Gaming", "Backlog", "iOS"],
        detailTitle: "Checkpoint",
        detailIntro:
          "Resume your games without losing context: last objective, next step, quick notes, and the small details that disappear between sessions.",
        purposeTitle: "What it is for",
        purpose:
          "Checkpoint is a fast notebook for each game. It helps you remember where you left off, what you wanted to do next, and which clues or quests you do not want to lose.",
        sections: {
          storyTitle: "Born from a life with too many tabs open",
          storyBody: [
            "I am a father of two, I have a full-time job, development side projects, and music projects too. I love videogames, but I often come back to a game after several days, weeks, or months away from it.",
            "And sometimes it does not even take that long: I can play something last week and still come back wondering where I was, what I was doing, or what my next objective was supposed to be.",
          ],
          problemTitle: "When the game itself is not enough",
          problemText:
            "Quest logs help... sometimes. Other times they are too vague, buried inside endless menus, or missing the context that past-me understood perfectly. Zelda: Oracle of Ages, I am looking at you.",
          problemItems: [
            {
              title: "Next action",
              body: "Capture exactly what you want to do next time you open the game, without rebuilding it from memory.",
            },
            {
              title: "Related tasks",
              body: "Save concrete to-dos: talk to someone, find an item, revisit an area, or finish a quest chain.",
            },
            {
              title: "Guides and resources",
              body: "Keep maps, guides, videos, or useful pages you found online close by so you do not have to search again.",
            },
          ],
          resumeTitle: "Resume game, and you are back",
          resumeText:
            "The idea behind Checkpoint is simple: when I finally find time to play, I tap Resume game and everything I need is right there. I do not need to remember a thousand little details, because I already saved them on my phone.",
          resumeItems: [
            "A clear current objective before opening the game.",
            "Quick notes with context from the last session.",
            "Tasks and resources gathered in one place.",
          ],
          guideCta: "Read usage guide",
        },
      },
      newen: {
        name: "Newen",
        description:
          "A reflective mood tracker for noticing energy, emotions, and personal patterns calmly, without turning the day into a survey.",
        tags: ["Mood tracking", "Reflection", "iOS"],
        detailTitle: "Newen",
        detailIntro:
          "An app for observing your mood, energy, and small internal signals through a soft, private experience.",
        purposeTitle: "What it is for",
        purpose:
          "Newen helps you record how you feel and discover patterns without pressure. Pause, name what is happening, and continue with more clarity.",
        sections: {
          rhythmTitle: "Log without turning it into a chore",
          rhythmText:
            "Newen is designed to capture an emotional moment in seconds: choose how you feel, add context when it helps, and continue with your day. No long journaling session or endless form required.",
          rhythmItems: [
            {
              title: "Clear states",
              body: "Pick from simple, recognizable emotions so logging stays fast even when you do not have the energy to explain everything.",
            },
            {
              title: "Optional context",
              body: "Add a short note when something matters: a meeting, a conversation, a break, good news, or a heavy day.",
            },
            {
              title: "Visible patterns",
              body: "Over time, Newen helps you look at trends, recurring days, and energy shifts without judging what shows up.",
            },
          ],
          privacyTitle: "Private, local, and protected",
          privacyText:
            "Your entries are yours. Newen does not require accounts, does not use tracking, and does not turn your emotions into advertising data. The experience is built so you can observe yourself calmly and confidently.",
          privacyImage: "/newen-privacy-es.png",
          privacyImageAlt: "Newen privacy overview: local data, no accounts, Face ID, iCloud, and offline use",
          privacyPoints: [
            "No accounts, emails, or external profiles.",
            "Data stored locally on your device.",
            "No ads, no tracking, and no data collection.",
            "Face ID lock for an extra privacy layer.",
            "Optional device sync through iCloud.",
          ],
          watchTitle: "Also on Apple Watch",
          watchText:
            "With Apple Watch, Newen becomes even lighter: log a state from your wrist and start tiny reflection sessions without picking up your phone.",
          watchItems: [
            "Quick logs right after something happens.",
            "Short reflection sessions from 30 seconds to 2 minutes.",
            "A less intrusive way to stay consistent throughout the day.",
          ],
          guideCta: "Read usage guide",
        },
      },
      guidesTitle: "Guides",
      privacyTitle: "Privacy",
      privacyText: "Capybarista privacy information lives in the",
    },
    posts: {
      checkpoint: {
        title: "How to save your first checkpoint",
        excerpt:
          "A short guide for leaving a game ready to resume even after days or weeks away.",
        intro:
          "A quick way to save the context of a playthrough when life does not always leave you with long gaming sessions.",
        image: "/checkpoint-post-hero.png",
        imageAlt: "Pixel art illustration of a gaming room with someone resuming a game from the couch",
        cta: {
          title: "Ready to save your next checkpoint",
          body: "CheckPoint Companion is available now on the App Store for iPhone.",
          label: "View on App Store",
          href: "https://apps.apple.com/nz/app/checkpoint-companion/id6766421117",
        },
        galleryLabel: "Checkpoint screenshots",
        gallery: [
          {
            src: "/checkpoint-games-list.jpeg",
            alt: "Checkpoint game list with active tasks and recently played games",
            caption: "The list shows your games, which ones you played recently, and which tasks are still active.",
          },
          {
            src: "/checkpoint-detail-actions.png",
            alt: "Sekiro detail screen in Checkpoint with objective, last session, notes, tasks, resources, and add menu",
            caption: "Each game can keep the current objective, last session, notes, tasks, and useful resources.",
          },
          {
            src: "/checkpoint-resume-game.jpeg",
            alt: "Sekiro Resume Game view with objective, active task, and saved resource",
            caption: "Resume Game keeps everything important close by so you can get back into the game without friction.",
          },
        ],
        sections: [
          {
            title: "Why I built Checkpoint",
            body: [
              "Checkpoint came from a very real problem in my own life: I am a dad, I work full time, and I do not always have as much time for videogames as I would like.",
              "I kept coming back to games I loved only to realize I had no idea where I left off, what I was looking for, what I was farming, or what small next thing I had planned to do.",
              "I did not want to dig through endless quest logs or open guides just to reverse-engineer where past me had stopped. When a session is short, spending the first twenty minutes remembering your plan feels terrible.",
            ],
          },
          {
            title: "What to save before closing",
            body: [
              "Checkpoint is built around saving the minimum useful context before you put the controller down: where you are, the current objective, what happened in the last session, and any resource or guide you already found.",
              "The goal is not to write a novel. Two or three clear lines are more useful than a long note you will never read again.",
            ],
            bullets: [
              "Current objective: one concrete action for the next session.",
              "Last session: what you just did and where you stopped.",
              "Notes: clues, pending decisions, or details you do not want to forget.",
              "Resources: a guide, map, or reference you already found and do not want to search for again.",
            ],
          },
          {
            title: "What to add, and when",
            body: [
              "Checkpoint works best when each thing has a clear purpose. The point is not to turn your games into a huge spreadsheet, but to save the right kind of context so your next session starts quickly.",
              "These are the four main pieces you can add, and when each one makes sense.",
            ],
            bullets: [
              "Games: add a game when you want to be able to resume it later without relying on memory. It is the main container for its current objective, last session, and everything related to that playthrough.",
              "Notes: use a note for context that does not necessarily require immediate action: a clue, a pending decision, something you tried, a story beat you want to remember, or any detail that explains where your head was.",
              "Tasks: use a task when there is a concrete action to take. For example: unlock an item, talk to a character, return to an area, farm a resource, or finish a specific step.",
              "Resources: add a resource when you found something useful outside the game and know you will need it again: a guide, map, wiki, video, build, or page with the location of something hard to remember.",
            ],
            after:
              "If something answers “what do I do next?”, it is probably a task. If it answers “why was I doing this?”, it is probably a note. If it lives online and saves you from searching again, it is a resource.",
          },
          {
            title: "Coming back without friction",
            body: [
              "Thanks to that small ritual, I am now making progress in The Legend of Zelda: Oracle of Ages, Sekiro, Tears of the Kingdom, and many more games, switching context without feeling like I am starting from zero every time.",
              "When I get thirty free minutes, I open Checkpoint, read the next action, and jump into the game with intention. That is the whole point: less administration, more playing.",
            ],
          },
          {
            title: "Your first checkpoint",
            body: "To start, pick one game you have left hanging and create a simple entry. Do not try to document everything. Just leave a good enough trail for your future self.",
            bullets: [
              "Write one concrete next action.",
              "Add a short note with the context from your last session.",
              "Save a guide or resource if you already know you will need it.",
              "When you return, review that checkpoint before opening the game.",
            ],
            after:
              "If reading it lets you start playing without wasting time remembering, the checkpoint did its job.",
          },
        ],
      },
      newen: {
        title: "How to get the most out of Newen",
        excerpt:
          "Recommendations for getting meaningful insights without turning mood tracking into another chore.",
        intro:
          "Newen is simple by design. No friction, no noise. But the real value comes from how you use it over time.",
        image: "/newen-guide-en.png",
        imageAlt: "English visual guide for getting the most out of Newen",
        sections: [
          {
            title: "1. Focus on consistency, not perfection",
            body: [
              "You don’t need to log everything perfectly.",
              "What matters is showing up consistently.",
              "Even just a few check-ins per day can reveal patterns over time, and those patterns are where the value is.",
            ],
          },
          {
            title: "2. Use reminders (if they help you)",
            body: [
              "You can use Newen without any reminders at all.",
              "But if you want a bit of structure, you can set up to 3 per day.",
              "A simple setup I recommend:",
            ],
            bullets: ["one in the morning", "one in the middle of the day", "one at night"],
            after:
              "This gives you a more complete picture of your day, not just how it ended. Because we tend to remember the last emotion, not the full journey.",
          },
          {
            title: "3. You’re not limited to 3 entries per day",
            body: [
              "Reminders are just prompts, not limits.",
              "You can log as many emotional states as you want.",
              "In fact, it’s especially useful when something meaningful happens:",
            ],
            bullets: [
              "a stressful meeting",
              "a great conversation",
              "a moment that stands out",
            ],
            after:
              "These moments give context to your data. And over time, that context becomes patterns.",
          },
          {
            title: "4. Notes are optional, but powerful",
            body: [
              "You don’t have to write anything.",
              "But adding a short note can make a big difference.",
              "When you look back weeks or months later, you won’t just see how you felt: you’ll remember why.",
              "That’s the difference between vague memories and real understanding.",
            ],
          },
          {
            title: "5. Take time to reflect on your patterns",
            body: [
              "Newen surfaces patterns for you, but the real impact comes from reflecting on them.",
              "Take a moment, every now and then, to pause and think:",
            ],
            bullets: [
              "Does this pattern make sense?",
              "Is this something I want to change?",
              "What might be causing this?",
            ],
            after:
              "Do it calmly. Without distractions. Sometimes nothing happens. Sometimes something clicks. That’s where change starts.",
          },
          {
            title: "6. If you have an Apple Watch, use it",
            body: [
              "If you do have an Apple Watch, it makes everything faster.",
              "You can log your mood in seconds, no friction, no distractions.",
              "And you can also start quick reflection sessions:",
            ],
            bullets: ["30 seconds", "1 minute", "2 minutes"],
            after:
              "Same recommendation as before: do it calmly, without interruptions. It’s a small habit that can unlock surprisingly deep insights.",
          },
          {
            title: "Final thought",
            body: [
              "Newen won’t tell you what to do.",
              "It helps you see what’s already happening.",
              "And with just a bit of consistency, you’ll start noticing patterns that were always there, you just weren’t paying attention.",
            ],
          },
        ],
      },
      privacyCard: {
        app: "Capybarista",
        title: "Privacy in small apps",
        excerpt:
          "Where the privacy policy lives and how future updates are organized.",
      },
    },
    privacy: {
      title: "Privacy Policy",
      updated: "Last updated: June 2, 2026.",
      intro:
        "Capybarista develops independent iOS apps, including Checkpoint and Newen. The core idea is simple: build useful tools that respect user privacy by default.",
      sections: [
        {
          title: "General information",
          body: "Capybarista apps are released on the App Store under the developer’s personal account. When building these apps, I make product and engineering decisions that minimize the information requested, processed, or shared.",
        },
        {
          title: "No accounts and no custom backend",
          body: "You do not need to create an account to use our apps. Capybarista does not operate a custom backend to store your data, does not maintain user profiles, and does not access the content you save inside the apps.",
        },
        {
          title: "Storage and sync",
          body: "The data you enter in the apps is stored locally on the devices where you use them. When an app offers sync across devices, that sync is handled through iCloud, specifically CloudKit, using the private database associated with your Apple account. Capybarista cannot read or manage that private content.",
        },
        {
          title: "Personal information",
          body: "Capybarista does not collect personally identifying information such as your name, email address, phone number, precise location, financial information, or custom user identifiers. We do not sell personal data or share information for advertising.",
        },
        {
          title: "Analytics, advertising, and tracking",
          body: "Our current apps do not use advertising networks, tracking tools, or third-party SDKs to analyze your activity. We do not track users across apps or websites.",
        },
        {
          title: "Apple Health / HealthKit",
          body: "Some Capybarista apps may offer optional integrations with Apple Health using HealthKit. In this version, Newen can save new mood check-ins as State of Mind entries in Apple Health if you enable Apple Health sync and grant permission. This integration is off by default. Newen does not read Apple Health data in this version, does not upload HealthKit data to Capybarista servers, and does not share HealthKit data with third parties. Notes, tags, contexts, and historical mood entries are not exported to Apple Health. You can disable Apple Health access at any time from Newen settings or from Apple’s Health privacy settings on your device.",
        },
        {
          title: "Deleting data",
          body: "Because your data lives on your device and, when applicable, in your iCloud account, you can delete it from within the app, by deleting the app from your device, or by managing iCloud data from Apple settings. If you disable iCloud for an app, sync across devices may stop working.",
        },
        {
          title: "Cookies and this website",
          body: "This website is a static site used to present Capybarista apps and host this privacy policy. It is not designed to create accounts, collect personal information, or store first-party tracking cookies.",
        },
        {
          title: "Changes and contact",
          body: "We may update this Privacy Policy if our apps, features, or data practices change. For privacy questions, use the support channel listed on the App Store page for the relevant app. When Capybarista has a public support email, we will also add it to this page.",
        },
      ],
    },
  },
} satisfies Record<Locale, unknown>;
