'use client'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import sunset from '../public/sunset.jpeg'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function ContentSection() {
    const { t } = useTranslation()
    return (
        <section className="py-16 md:py-32" id="content-3">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <Image className="rounded-(--radius)" 
                    src={sunset} 
                    alt="team image" 
                    loading="lazy" 
                />

                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium">{t('Practice English as we sip coffee, hike, or surf!')}</h2>
                    <div className="space-y-6">
                        <p>{t('Be immersed in English as we engage in interesting activities and experiences. Experiential learning is one of the best ways to retain information.')}</p>

                        <Button asChild variant="secondary" size="sm" className="gap-1 pr-1.5">
                            <Link 
                                href="mailto:lebendana@gmail.com"
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                <span>{t('Email Me')}</span>
                                <ChevronRight className="size-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
