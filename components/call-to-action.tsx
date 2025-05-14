'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

export default function CallToAction() {
    const { t } = useTranslation()
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">{t('Start Learning')}</h2>
                    <p className="mt-4">{t("Let's begin the conversation.")}</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg">
                            <Link 
                                href="https://wa.me/590690323355" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FaWhatsapp className="text-zinc-50 dark:text-zinc-950 text-xl" />
                                <span className="text-nowrap">{t('Call Me Today')}</span>
                            </Link>
                        </Button>

                      {/*  <Button asChild size="lg" variant="outline">
                            <Link href="/">
                                <span>Book Demo</span>
                            </Link>
                        </Button> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
