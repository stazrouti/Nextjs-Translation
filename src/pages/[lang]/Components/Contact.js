"use client";
import { Lang } from '@/app/Currentlng';
import Link from 'next/link';
import { useTranslation } from "react-i18next";

export default function Services() {
    const { t } = useTranslation();
    return (
        <section id="Contact" className="contact-section text-center py-16">
            <h2 className="text-2xl font-bold mb-4" data-aos="fade-up">{t('Home.contact_section.title')}</h2>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8" >
                <div className="mx-2 md:w-1/2" data-aos="fade-left" >
                    <div className="px-32" >
                        <img
                            src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=626&ext=jpg&ga=GA1.1.1573562918.1700557704&semt=sph"
                            alt="Customer Support"
                            className="max-h-64 sm:hidden md:block"

                        />
                    </div>
                </div>
                <div className="md:w-1/2 text-left" data-aos="fade-right">
                    <p className="text-gray-700">
                        {t('Home.contact_section.description')}
                    </p>
                    <p className="text-gray-700">
                        {t('Home.contact_section.description2')}
                    </p>
                    <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600" >
                        <Link href={`${Lang()}/Contact`}>{t('Home.contact_section.button')}</Link>
                    </button>
                </div>
            </div>
        </section>
    )
}