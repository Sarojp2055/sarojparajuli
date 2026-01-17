import { motion } from 'framer-motion';
import { usePortfolioData, getVisibleItems } from '../data/DataContext';

export default function Contact() {
    const { data, loading } = usePortfolioData();
    const contact = data?.contact || {};
    const socials = getVisibleItems(contact.socials || []);

    if (loading) {
        return (
            <div className="pt-32 pb-20 container mx-auto px-6">
                <div className="animate-pulse">
                    <div className="h-10 bg-surface-200 rounded w-1/3 mb-12"></div>
                    <div className="grid grid-cols-2 gap-12">
                        <div className="space-y-6">
                            {[1, 2, 3].map(i => <div key={i} className="h-20 bg-surface-200 rounded-2xl"></div>)}
                        </div>
                        <div className="space-y-4">
                            <div className="h-8 bg-surface-200 rounded w-1/2 mb-6"></div>
                            <div className="grid grid-cols-2 gap-4">
                                {[1, 2, 3, 4].map(i => <div key={i} className="h-14 bg-surface-200 rounded-xl"></div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pt-32 pb-20 container mx-auto px-6"
        >
            <h1 className="text-4xl font-bold mb-4 text-text-primary">
                Get in <span className="text-primary-500">Touch</span>
            </h1>
            <p className="text-lg text-text-secondary mb-12 max-w-2xl">
                {contact.intro}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info Cards */}
                <div className="space-y-6">
                    {/* Email */}
                    <motion.a
                        href={`mailto:${contact.email}`}
                        whileHover={{ scale: 1.02 }}
                        className="block p-6 bg-surface-100 rounded-2xl border-2 border-surface-200 hover:border-primary-500 transition-all group"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-text-secondary mb-1">Email</p>
                                <p className="font-bold text-text-primary">{contact.email}</p>
                            </div>
                        </div>
                    </motion.a>

                    {/* Location */}
                    <div className="p-6 bg-surface-100 rounded-2xl border-2 border-surface-200">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center text-accent-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-text-secondary mb-1">Location</p>
                                <p className="font-bold text-text-primary">{contact.location}</p>
                            </div>
                        </div>
                    </div>

                    {/* Availability */}
                    <div className="p-6 bg-surface-100 rounded-2xl border-2 border-surface-200">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-text-secondary mb-1">Availability</p>
                                <p className="font-bold text-text-primary">{contact.availability}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div>
                    <h2 className="text-2xl font-bold mb-6 text-text-primary">Connect With Me</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {socials.map((social) => (
                            <motion.a
                                key={social.id}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="p-4 bg-surface-100 rounded-xl border-2 border-surface-200 hover:border-primary-500 transition-all flex items-center gap-3 group"
                            >
                                <span className="text-2xl">{social.icon}</span>
                                <span className="font-bold text-text-primary group-hover:text-primary-500 transition-colors">
                                    {social.name}
                                </span>
                            </motion.a>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.a
                        href={`mailto:${contact.email}`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-8 block w-full py-4 px-8 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-center font-bold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all"
                    >
                        Send Me a Message
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
}
