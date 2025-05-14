'use client'
import { useTranslation } from 'react-i18next'
import { FaGlobe } from 'react-icons/fa'

export const TranslateToggle = () => {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en')
  }

  return (
    <button
      aria-label="Translate"
      className="p-2 rounded hover:bg-muted transition flex items-center gap-2"
      onClick={toggleLanguage}
      title="Translate"
    >
      <FaGlobe className="text-xl" />
      <span>{i18n.language === 'en' ? 'EN' : 'FR'}</span>
    </button>
  )
}