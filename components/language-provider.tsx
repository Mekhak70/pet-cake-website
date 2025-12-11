"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "hy" | "en" | "ru"

type Translations = {
  [key: string]: {
    hy: string
    en: string
    ru: string
  }
}

export const translations: Translations = {
  // Navigation
  home: { hy: "Գլխավոր", en: "Home", ru: "Главная" },
  about: { hy: "Մեր մասին", en: "About", ru: "О нас" },
  shop: { hy: "Խանութ", en: "Shop", ru: "Магазин" },
  contact: { hy: "Կապ", en: "Contact", ru: "Контакты" },

  // Hero
  heroTitle: {
    hy: "Ամենահամեղ տորթերը ձեր սիրելի կենդանիների համար!",
    en: "Delicious Cakes for Your Beloved Pets!",
    ru: "Вкусные торты для ваших любимых питомцев!",
  },
  heroSubtext: {
    hy: "Փայփայել ձեր փափուկ ընկերներին մեր ձեռագործ, կենդանիների համար անվտանգ տորթերով։",
    en: "Treat your furry friends with our handmade, pet-safe cakes.",
    ru: "Порадуйте своих пушистых друзей нашими домашними тортами.",
  },
  orderNow: { hy: "Պատվիրել հիմա", en: "Order Now", ru: "Заказать" },

  // About
  aboutTitle: { hy: "Մեր մասին", en: "About Us", ru: "О нас" },
  aboutText: {
    hy: "Մենք սիրով պատրաստում ենք առողջ և համեղ տորթեր կենդանիների համար: Յուրաքանչյուր տորթ ձեռագործ է՝ լավագույն բաղադրիչներից՝ համապատասխանող շներին ու կատուներին։",
    en: "We are passionate bakers creating healthy and delicious cakes for pets. Every cake is handcrafted with love and the finest ingredients suitable for dogs and cats.",
    ru: "Мы - увлечённые пекари, создающие здоровые и вкусные торты для питомцев.",
  },

  // Shop
  shopTitle: { hy: "Մեր տորթերը", en: "Shop Our Cakes", ru: "Наши торты" },
  shopDesc: {
    hy: "Դիտեք մեր ձեռագործ, կենդանիների համար անվտանգ տորթերի հավաքածուն ձեր փափուկ ընկերների համար։",
    en: "Browse our selection of handmade, pet-safe cakes for your furry friends.",
    ru: "Просмотрите наш выбор домашних тортов для ваших питомцев.",
  },
  addToCart: { hy: "Ավելացնել զամբյուղում", en: "Add to Cart", ru: "В корзину" },
  checkout: { hy: "Վճարում", en: "Checkout", ru: "Оформить" },
  cart: { hy: "Զամբյուղ", en: "Cart", ru: "Корзина" },
  allPets: { hy: "Բոլոր կենդանիները", en: "All Pets", ru: "Все питомцы" },
  forDogs: { hy: "Շների համար", en: "For Dogs", ru: "Для собак" },
  forCats: { hy: "Կատուների համար", en: "For Cats", ru: "Для кошек" },
  customOrdersWelcome: {
    hy: "Ընդունվում են անհատական պատվերներ!",
    en: "Custom Orders Welcome!",
    ru: "Принимаем индивидуальные заказы!",
  },
  customOrdersDesc: {
    hy: "Ցանկանո՞ւմ եք յուրահատուկ տորթ։ Մենք սիրով պատրաստում ենք անհատական տորթեր ծննդյան օրերի, «gotcha day»-երի և այլ տոնակատարությունների համար։ Կապնվեք մեզ հետ ձեր գաղափարները քննարկելու համար։",
    en: "Looking for something special? We love creating custom cakes for birthdays, gotcha days, and other celebrations. Contact us to discuss your ideas!",
    ru: "Ищете что-то особенное? Мы с удовольствием создадим торт на заказ для дней рождения и других праздников.",
  },
  contactUs: { hy: "Կապնվեք մեզ հետ", en: "Contact Us", ru: "Связаться" },

  // Contact
  contactTitle: { hy: "Կապնվեք մեզ հետ", en: "Contact Us", ru: "Свяжитесь с нами" },
  contactText: {
    hy: "Ունե՞ք հարցեր կամ անհատական պատվերներ։ Կապնվեք մեզ հետ։",
    en: "Have questions or custom orders? Get in touch!",
    ru: "Есть вопросы или индивидуальные заказы? Свяжитесь с нами!",
  },
  name: { hy: "Անուն", en: "Name", ru: "Имя" },
  email: { hy: "Էլ. հասցե", en: "Email", ru: "Эл. почта" },
  message: { hy: "Հաղորդագրություն", en: "Message", ru: "Сообщение" },
  sendMessage: { hy: "Ուղարկել", en: "Send Message", ru: "Отправить" },
  sending: { hy: "Ուղարկվում է...", en: "Sending...", ru: "Отправка..." },
  messageSent: { hy: "Հաղորդագրությունը ուղարկված է!", en: "Message Sent!", ru: "Сообщение отправлено!" },
  messageSentDesc: {
    hy: "Շնորհակալություն կապնվելու համար։ Մենք շուտով կպատասխանենք։",
    en: "Thank you for reaching out. We'll get back to you soon!",
    ru: "Спасибо за обращение. Мы скоро свяжемся с вами!",
  },
  sendAnother: { hy: "Ուղարկել մեկ այլ հաղորդագրություն", en: "Send Another Message", ru: "Отправить ещё" },
  getInTouch: { hy: "Կապ հաստատեք", en: "Get in Touch", ru: "Связаться с нами" },
  address: { hy: "Հասցե", en: "Address", ru: "Адрес" },
  phone: { hy: "Հեռախոս", en: "Phone", ru: "Телефон" },
  hours: { hy: "Աշխատանքային ժամեր", en: "Hours", ru: "Часы работы" },
  mapComingSoon: { hy: "Քարտեզը շուտով կհայտնվի", en: "Map Coming Soon", ru: "Карта скоро появится" },
  faq: { hy: "Հաճախ տրվող հարցեր", en: "Frequently Asked Questions", ru: "Часто задаваемые вопросы" },
  faqCustomDesign: {
    hy: "Անհատական տորթեր պատրաստու՞մ եք։",
    en: "Do you offer custom cake designs?",
    ru: "Вы делаете торты на заказ?",
  },
  faqCustomDesignAnswer: {
    hy: "Այո՛։ Մենք սիրով պատրաստում ենք անհատական տորթեր ձեր կենդանու հատուկ առիթների համար։ Կապնվեք մեզ հետ ձեր գաղափարներով։",
    en: "Yes! We love creating custom cakes for your pet's special occasions. Contact us with your ideas and we'll make it happen.",
    ru: "Да! Мы с удовольствием создадим торт для особого случая вашего питомца.",
  },
  faqOrderAdvance: {
    hy: "Մինչև քանի օր առաջ պետք է պատվիրեմ՞։",
    en: "How far in advance should I order?",
    ru: "За сколько дней нужно заказывать?",
  },
  faqOrderAdvanceAnswer: {
    hy: "Առաջարկում ենք պատվիրել առնվազն 3-5 օր առաջ ստանդարտ տորթերի համար և 1-2 շաբաթ առաջ անհատական տորթերի համար։",
    en: "We recommend ordering at least 3-5 days in advance for standard cakes, and 1-2 weeks for custom designs.",
    ru: "Рекомендуем заказывать за 3-5 дней для стандартных тортов и за 1-2 недели для индивидуальных.",
  },
  faqSafe: {
    hy: "Ձեր տորթերը անվտանգ են բոլոր կենդանիների համար՞։",
    en: "Are your cakes safe for all pets?",
    ru: "Ваши торты безопасны для всех питомцев?",
  },
  faqSafeAnswer: {
    hy: "Մեր տորթերը պատրաստված են վետերինարներ հաստատած բաղադրիչներից, որոնք անվտանգ են մեծ մասի շների և կատուների համար։ Եթե ձեր կենդանու ալերգիաներ կան, խնդրում ենք տեղեկացնել։",
    en: "Our cakes are made with vet-approved ingredients safe for most dogs and cats. If your pet has allergies, please let us know and we'll accommodate.",
    ru: "Наши торты сделаны из ингредиентов, одобренных ветеринарами, безопасных для большинства собак и кошек.",
  },

  // Footer
  followUs: { hy: "Հետևեք մեզ", en: "Follow Us", ru: "Подписывайтесь" },
  allRightsReserved: {
    hy: "Բոլոր իրավունքները պաշտպանված են",
    en: "All Rights Reserved",
    ru: "Все права защищены",
  },

  // Features
  handmade: { hy: "Ձեռքով պատրաստված սիրով", en: "Handmade with Love", ru: "Сделано с любовью" },
  handmadeDesc: {
    hy: "Յուրաքանչյուր տորթ պատրաստվում է սիրով և մանրուքներին ուշադրություն դարձնելով։",
    en: "Each cake is crafted by hand with care and attention to detail.",
    ru: "Каждый торт сделан вручную с заботой и вниманием к деталям.",
  },
  petSafe: { hy: "100% անվտանգ կենդանիների համար", en: "100% Pet Safe", ru: "100% безопасно" },
  petSafeDesc: {
    hy: "Կիրառում ենք միայն լավագույն, վետերինարներ հաստատած բաղադրիչներ ձեր փափուկ ընկերների համար։",
    en: "Only the finest, vet-approved ingredients for your furry friends.",
    ru: "Только лучшие ингредиенты, одобренные ветеринарами.",
  },
  freshDaily: { hy: "Թարմ ամեն օր", en: "Fresh Daily", ru: "Свежие ежедневно" },
  freshDailyDesc: {
    hy: "Թխում ենք ամեն օր առավելագույն համի և որակի համար։",
    en: "Baked fresh every day for maximum taste and quality.",
    ru: "Выпекаем каждый день для максимального вкуса и качества.",
  },

  // CTA
  readyToTreat: {
    hy: "Պատրաստե՞լ ձեր կենդանու ուրախությանը։",
    en: "Ready to treat your pet?",
    ru: "Готовы порадовать питомца?",
  },
  readyToTreatDesc: {
    hy: "Դիտեք մեր համեղ, կենդանիների համար անվտանգ տորթերի ընտրությունը։",
    en: "Browse our selection of delicious, pet-safe cakes.",
    ru: "Просмотрите наш выбор вкусных и безопасных тортов.",
  },

  // About Page
  ourStory: { hy: "Մեր պատմությունը", en: "Our Story", ru: "Наша история" },
  aboutDescription: {
    en: "It all started with a simple wish: to celebrate our own pets' birthdays with something truly special. When we couldn't find cakes that were both safe and delicious for our furry family members, we decided to create our own. Today, Chupaboo has grown from a home-kitchen passion project into a beloved bakery serving thousands of happy pets and their families. Every cake we make is crafted with the same love and care as that very first creation. Our dedicated team of bakers uses only vet-approved, human-grade ingredients to ensure every treat is as healthy as it is delicious. Because your pets deserve the very best.",
    hy: "Ամեն ինչ սկսվեց մի պարզ ցանկությունից՝ մեր կենդանիների ծննդյան օրերը նշել ինչ-որ իսկապես յուրահատուկ բանով. Քանի որ չկար տորթ, որը միաժամանակ լիներ անվտանգ և համեղ մեր փափուկ ընտանիքի անդամների համար, մենք որոշեցինք պատրաստել այն ինքներս. Այսօր Chupaboo-ը տնային խոհանոցային փոքր նախագծից վերածվել է սիրելի բեյքելրի, որը սպասարկում է հազարավոր ուրախ կենդանիների և նրանց ընտանիքների. Մեր պատրաստած յուրաքանչյուր տորթ ստեղծվում է նույն սիրով և հոգատարությամբ, ինչպես առաջինը։.Մեր նվիրված թիմը օգտագործում է միայն վետերինարների կողմից հաստատված և մարդու սպառման համար անվտանգ բաղադրիչներ՝ ապահովելու համար, որ յուրաքանչյուր նվուրը լինի ոչ միայն համեղ, այլև առողջարար. Քանի որ ձեր կենդանիները արժանի են լավագույնին։",
    ru: "Всё началось с простого желания — отметить дни рождения наших питомцев чем-то по-настоящему особенным. Когда мы не нашли торты, которые были бы одновременно безопасными и вкусными для наших пушистых членов семьи, мы решили создать их сами. Сегодня Chupaboo выросла из небольшого домашнего проекта в любимую пекарню, обслуживающую тысячи счастливых питомцев и их семьи. Каждый торт мы создаём с той же любовью и заботой, что и самый первый. Наша преданная команда пекарей использует только одобренные ветеринарами ингредиенты, пригодные для употребления человеком, чтобы каждый десерт был не только вкусным, но и полезным. Ведь ваши питомцы заслуживают самое лучшее."
  },
  happyPets: { hy: "Շնորհավոր կենդանիներ", en: "Happy Pets", ru: "Счастливых питомцев" },
  happyFamilies: { hy: "Շնորհավոր ընտանիքներ", en: "Happy Families", ru: "Счастливых семей" },
  ourValues: { hy: "Մեր արժեքները", en: "Our Values", ru: "Наши ценности" },
  qualityFirst: { hy: "Առաջնային որակը", en: "Quality First", ru: "Качество прежде всего" },
  qualityFirstDesc: {
    hy: "Մենք երբեք չենք խնայել բաղադրիչների որակի վրա։ Յուրաքանչյուր բաղադրիչ մանրակրկիտ ընտրված է ձեր կենդանիների համար անվտանգ ու սննդարար լինելու համար։",
    en: "We never compromise on ingredients. Every component is carefully selected and tested to ensure it's safe and nutritious for your pets.",
    ru: "Мы никогда не идём на компромисс в качестве ингредиентов.",
  },
  madeWithLove: { hy: "Սիրով պատրաստված", en: "Made with Love", ru: "Сделано с любовью" },
  madeWithLoveDesc: {
    hy: "Յուրաքանչյուր տորթ ձեռագործ է մեր ոգևոր թիմի կողմից։ Մենք ներդնում ենք մեր սիրտը յուրաքանչյուր ստեղծագործության մեջ։",
    en: "Each cake is handcrafted by our passionate team. We pour our hearts into every creation because we know how much your pets mean to you.",
    ru: "Каждый торт создан вручную нашей командой с любовью.",
  },
  petHappiness: { hy: "Կենդանու ուրախություն", en: "Pet Happiness", ru: "Счастье питомцев" },
  petHappinessDesc: {
    hy: "Մեր հիմնական նպատակն է տեսնել շարժվող գոտկատեղերը և բավարարված գոռոցները։ Ձեր կենդանու ուրախությունը մեր ամենամեծ մրցանակն է։",
    en: "Our ultimate goal is to see tails wagging and purrs of contentment. Your pet's joy is our greatest reward.",
    ru: "Наша главная цель - видеть виляющие хвосты и довольное мурлыканье.",
  },

  // Checkout
  cartEmpty: { hy: "Ձեր զամբյուղը դատարկ է", en: "Your cart is empty", ru: "Корзина пуста" },
  cartEmptyDesc: {
    hy: "Ավելացրեք համեղ տորթեր ձեր զամբյուղին նախքան վճարումը։",
    en: "Add some delicious cakes to your cart before checking out.",
    ru: "Добавьте вкусные торты в корзину перед оформлением.",
  },
  browseCakes: { hy: "Դիտել տորթերը", en: "Browse Cakes", ru: "Смотреть торты" },
  backToShop: { hy: "Վերադառնալ խանութ", en: "Back to Shop", ru: "Вернуться в магазин" },
  orderSummary: { hy: "Պատվերի ամփոփում", en: "Order Summary", ru: "Сводка заказа" },
  total: { hy: "Ընդհանուր", en: "Total", ru: "Итого" },
};


type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
