import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "English coaching for everyone": "English coaching for everyone",
        "Learn English and have fun doing it with engaging lessons tailored to your needs.": "Learn English and have fun doing it with engaging lessons tailored to your needs.",
        "Practice English as we sip coffee, hike, or surf!": "Practice English as we sip coffee, hike, or surf!",
        "Be immersed in English as we engage in interesting activities and experiences. Experiential learning is one of the best ways to retain information.": "Be immersed in English as we engage in interesting activities and experiences. Experiential learning is one of the best ways to retain information.",
        "Contact": "Contact",
        "More info": "More info",
        "Email Me": "Email Me"
      }
    },
    fr: {
      translation: {
        "Features": "Fonctionnalités",
        "Experiential learning": "L'apprentissage expérientiel",
        "Practice/English Buddy": "Pratique/Partenaire d'anglais",
        "English coaching for everyone": "Coaching d'anglais pour tous",
        "Learn English and have fun doing it with engaging lessons tailored to your needs.": "Apprenez l'anglais et amusez-vous avec des leçons adaptées à vos besoins.",
        "Tailored to your needs": "Adapté à vos besoins",
        "Whether it's adults or children, for work or personal practice, we'll help you attain your goals": "Que ce soit pour les adultes ou les enfants, pour le travail ou la pratique personnelle, nous vous aiderons à atteindre vos objectifs.",
        "Learn the Basics": "Apprenez les bases",
        "Extensive customization options, allowing you to tailor every aspect to meet your specific needs.": "Options de personnalisation étendues, vous permettant d'adapter chaque aspect à vos besoins spécifiques.",
        "Attain Fluency": "Atteindre la fluidité",
        "Improve your level with engaging audio, visual, and experiential practice.": "Améliorez votre niveau avec une pratique audio, visuelle et expérientielle engageante.",
        "recreational conversations": "conversations récréatives",
        "Let's enjoy a cup of coffee or a smoothie by the beach as we converse in English and cover current events and interests.": "Profitons d'une tasse de café ou d'un smoothie sur la plage tout en conversant en anglais et en abordant l'actualité et les centres d'intérêt.",
        "Practice English as we sip coffee, hike, or surf!": "Pratiquez l'anglais en prenant un café, en faisant de la randonnée ou du surf!",
        "25€/1hr in person & 24€/1hr, 12€/30min, or 6€/15min through video call. Be immersed in English as we engage in interesting activities and experiences. Experiential learning is one of the best ways to retain information.": "25€/1h en personne & 24€/1h, 12€/30min, ou 6€/15min par appel vidéo. Imprégnez-vous de l'anglais en participant à des activités et expériences intéressantes. L'apprentissage expérientiel est l'un des meilleurs moyens de retenir l'information.",
        "Contact": "Contact",
        "More info": "Plus d'infos",
        "Practice anytime right here!👇": "Pratiquez à tout moment ici même!👇",
        "Meet your English Buddy! Practice when & wherever you want!": "Rencontrez votre partenaire d'anglais ! Pratiquez quand et où vous voulez !",
        "Say hello...": "Dites bonjour...",
        "Send": "Envoyer",
        "Email Me": "Envoyez-moi un email",
        "Start Learning": "Commencer à apprendre",
        "Let's begin the conversation.": "Commençons la conversation.",
        "Call Me Today": "Appelez-moi aujourd'hui",
        "Everybody English, All rights reserved": "Tout le monde anglais, tous droits réservés",
      }
    }
    // Add more languages here
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
})

export default i18n