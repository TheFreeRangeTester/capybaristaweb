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
        "Capybarista es un estudio independiente de apps iOS creado por un ingeniero argentino en Nueva Zelanda, con foco en calidad de software, privacidad y productos utiles.",
    },
    nav: {
      apps: "Apps",
      blog: "Blog",
      privacy: "Privacy",
      privacyPolicy: "Política de privacidad",
    },
    home: {
      heroTitle: "Hola 👋🏻",
      intro:
        "Somos Capybarista, un estudio indie para apps iOS con aroma a cafe, foco tranquilo y pequeñas herramientas premium. Creamos experiencias simples para volver a tu estado mental, tus juegos y tus rutinas sin friccion.",
      explore: "Explore apps",
      readBlog: "Leer el blog",
      appsTitle: "Apps iOS para volver a tu ritmo.",
      appsText:
        "Cada producto tiene una pagina propia, su blog y acceso directo a la politica de privacidad compartida del estudio.",
      aboutTitle: "Un estudio indie, una persona detrás.",
      aboutText:
        "Capybarista es el proyecto de un desarrollador argentino viviendo en Nueva Zelanda, con más de 16 años dedicado a la ingeniería de calidad en software. Después de años ayudando a crear productos confiables, decidí construir aplicaciones iOS propias con la calidad, la privacidad y la experiencia diaria como foco principal.",
      aboutNote:
        "Creo productos que quiero que existan para usarlos yo también: herramientas simples, cuidadas y honestas para personas con gustos y necesidades parecidas.",
      aboutPhotoAlt: "Fundador de Capybarista en Nueva Zelanda",
      socialLabel: "También estoy en",
      blogTitle: "Guias cortas, utiles y sin vueltas.",
      blogText:
        "El blog esta pensado para explicar como usar cada app, compartir tips y dejar documentado lo esencial.",
      privacyTitle: "Privacy Policy lista para hostear.",
      privacyText:
        "Una ruta estatica para centralizar la privacidad de Capybarista y enlazarla desde App Store Connect, las apps y cada pagina de producto.",
      openPrivacy: "Abrir privacy",
      viewApp: "Ver app",
      readGuide: "Leer guia",
    },
    appDirectory: {
      title: "Apps",
      intro:
        "Apps iOS simples, privadas y cuidadas. Las construyo para usarlas yo tambien, y espero que tambien le sirvan a personas con gustos y necesidades parecidas.",
      appStoreSoon: "App Store pronto",
      screenshotAlt: "Vista previa de la app",
      learnMore: "Detalles",
    },
    blogIndex: {
      title: "Blog",
      intro:
        "Guias cortas para usar mejor cada app, descubrir pequenos tips y dejar documentado lo esencial.",
    },
    apps: {
      checkpoint: {
        name: "Checkpoint",
        description:
          "Un companion sin friccion para gamers que quieren retomar partidas sin olvidar donde estaban, que hacian o cual era el siguiente objetivo.",
        tags: ["Gaming", "Backlog", "iOS"],
        detailTitle: "Checkpoint",
        detailIntro:
          "Retoma tus juegos sin perder contexto: ultimo objetivo, proximo paso, notas rapidas y ese detalle que siempre se olvida entre sesiones.",
        purposeTitle: "Para que sirve",
        purpose:
          "Checkpoint esta pensada como una libreta ultra rapida para cada juego. Te ayuda a recordar donde dejaste una partida, que querias hacer despues y que pistas o misiones no quieres perder.",
      },
      newen: {
        name: "Newen",
        description:
          "Un mood tracker reflexivo para reconocer energia, emociones y patrones personales con calma, sin convertir el dia en una encuesta.",
        tags: ["Mood tracking", "Reflexion", "iOS"],
        detailTitle: "Newen",
        detailIntro:
          "Una app para observar tu estado de animo, energia y pequeñas senales internas con una experiencia suave y privada.",
        purposeTitle: "Para que sirve",
        purpose:
          "Newen ayuda a registrar como te sientes y descubrir patrones sin presion. La idea es que puedas pausar, nombrar lo que pasa y seguir con mas claridad.",
      },
      guidesTitle: "Guias",
      privacyTitle: "Privacidad",
      privacyText: "La informacion de privacidad de Capybarista vive en la",
    },
    posts: {
      checkpoint: {
        title: "Como guardar tu primer checkpoint",
        excerpt:
          "Una guia breve para dejar una partida lista para retomar aunque pasen dias o semanas.",
        intro: "Una forma rapida de guardar contexto antes de cerrar un juego.",
        sections: [
          {
            title: "Elige el juego",
            body: "Empieza con una partida que estes alternando con otras. Checkpoint brilla cuando hay distancia entre una sesion y la siguiente.",
          },
          {
            title: "Guarda el contexto",
            body: "Anota donde estas, cual era el objetivo y cualquier pista importante. Dos lineas buenas valen mas que una nota larga que nunca vuelves a leer.",
          },
          {
            title: "Deja una proxima accion",
            body: "Cierra con algo concreto: hablar con un NPC, volver a una zona, mejorar equipo o revisar una mision. Ese detalle hace que volver sea facil.",
          },
        ],
      },
      newen: {
        title: "Registrar un mood sin sobrepensarlo",
        excerpt:
          "Ideas para usar Newen como una pausa breve y honesta durante el dia.",
        intro: "Una guia breve para observar tu estado sin convertirlo en tarea.",
        sections: [
          {
            title: "Elige un momento tranquilo",
            body: "Puede ser al empezar el dia, despues de trabajar o antes de dormir. Lo importante es que el registro sea facil de repetir.",
          },
          {
            title: "Nombra lo que aparece",
            body: "Registra energia, animo y una nota corta si hace falta. Newen esta para observar, no para juzgar.",
          },
          {
            title: "Mira patrones con calma",
            body: "Con el tiempo aparecen senales: horarios, lugares, habitos o cargas que influyen en como te sientes.",
          },
        ],
      },
      privacyCard: {
        app: "Capybarista",
        title: "Privacidad en apps pequeñas",
        excerpt:
          "Donde vive la politica de privacidad y como se organizan las futuras actualizaciones.",
      },
    },
    privacy: {
      title: "Política de privacidad",
      updated: "Ultima actualizacion: 30 de abril de 2026.",
      intro:
        "Capybarista desarrolla apps iOS independientes, incluyendo Checkpoint y Newen. La idea principal es simple: crear herramientas utiles que respeten la privacidad del usuario por defecto.",
      sections: [
        {
          title: "Informacion general",
          body: "Las apps de Capybarista estan publicadas bajo la cuenta personal del desarrollador en App Store. Al desarrollar estas apps, tomo decisiones pensadas para minimizar la informacion que se solicita, se procesa o se comparte.",
        },
        {
          title: "Sin cuentas y sin backend propio",
          body: "No necesitas crear una cuenta para usar nuestras apps. Capybarista no opera un backend propio para almacenar tus datos, no mantiene perfiles de usuario y no accede al contenido que guardas dentro de las apps.",
        },
        {
          title: "Almacenamiento y sincronizacion",
          body: "Los datos que ingresas en las apps se guardan localmente en los dispositivos donde las usas. Cuando una app ofrece sincronizacion entre dispositivos, esa sincronizacion se realiza mediante iCloud, especificamente CloudKit, usando la base de datos privada asociada a tu cuenta de Apple. Capybarista no puede leer ni administrar ese contenido privado.",
        },
        {
          title: "Informacion personal",
          body: "Capybarista no recopila informacion personal identificable como nombre, correo electronico, telefono, ubicacion precisa, informacion financiera o identificadores de usuario propios. Tampoco vende datos personales ni comparte informacion con fines publicitarios.",
        },
        {
          title: "Analytics, publicidad y tracking",
          body: "Actualmente nuestras apps no usan redes publicitarias, herramientas de tracking ni SDKs de terceros para analizar tu actividad. No rastreamos usuarios entre apps o sitios web.",
        },
        {
          title: "Apple Health / HealthKit",
          body: "Las apps actuales de Capybarista no leen, escriben ni solicitan acceso a datos de Apple Health o HealthKit. Si una futura app necesitara integrarse con HealthKit, esta politica se actualizaria antes de publicar esa funcionalidad.",
        },
        {
          title: "Eliminacion de datos",
          body: "Como tus datos viven en tu dispositivo y, cuando corresponde, en tu iCloud, puedes eliminarlos desde la app, eliminando la app del dispositivo o gestionando los datos de iCloud desde la configuracion de Apple. Si desactivas iCloud para una app, la sincronizacion entre dispositivos puede dejar de funcionar.",
        },
        {
          title: "Cookies y este sitio web",
          body: "Este sitio web es una web estatica para presentar las apps de Capybarista y alojar esta politica de privacidad. No esta pensado para crear cuentas, recolectar informacion personal ni almacenar cookies propias para tracking.",
        },
        {
          title: "Cambios y contacto",
          body: "Podemos actualizar esta Privacy Policy si cambian nuestras apps, funcionalidades o practicas de datos. Para consultas sobre privacidad, usa el canal de soporte indicado en la pagina de App Store de la app correspondiente. Cuando Capybarista tenga un correo publico de soporte, lo agregaremos tambien a esta pagina.",
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
        intro: "A quick way to save context before closing a game.",
        sections: [
          {
            title: "Choose the game",
            body: "Start with a playthrough you are switching in and out of. Checkpoint shines when there is distance between one session and the next.",
          },
          {
            title: "Save the context",
            body: "Write where you are, what the objective was, and any important clue. Two useful lines are better than a long note you never read again.",
          },
          {
            title: "Leave one next action",
            body: "End with something concrete: talk to an NPC, return to an area, improve gear, or review a quest. That detail makes coming back easy.",
          },
        ],
      },
      newen: {
        title: "Track a mood without overthinking it",
        excerpt:
          "Ideas for using Newen as a brief and honest pause during the day.",
        intro: "A short guide for observing your state without turning it into a chore.",
        sections: [
          {
            title: "Choose a quiet moment",
            body: "It can be morning, after work, or before sleep. What matters is that the check-in is easy to repeat.",
          },
          {
            title: "Name what is present",
            body: "Record energy, mood, and a short note if needed. Newen is there to observe, not to judge.",
          },
          {
            title: "Notice patterns calmly",
            body: "Over time, signals appear: times, places, habits, or loads that influence how you feel.",
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
      updated: "Last updated: April 30, 2026.",
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
          body: "Current Capybarista apps do not read, write, or request access to Apple Health or HealthKit data. If a future app needs HealthKit integration, this policy will be updated before that functionality is released.",
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
