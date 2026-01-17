import { motion } from 'framer-motion';
import { usePortfolioData } from '../data/DataContext';

export default function Hero() {
    const { data, loading } = usePortfolioData();
    const hero = data?.hero || {};

    if (loading) {
        return (
            <section className="min-h-screen flex items-center justify-center bg-surface-50">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-text-secondary">Loading...</p>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-surface-50 pt-40 lg:pt-0">
            {/* Background Decor */}
            <div className="absolute inset-0 grid-bg opacity-[0.03]"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-200/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="container relative z-10 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-8 bg-primary-100/50 text-primary-800 border border-primary-200 dark:bg-primary-900/30 dark:text-primary-200 dark:border-primary-800 backdrop-blur-sm">
                                {hero.tagline || 'Statistics and Data Tech'}
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-text-primary"
                        >
                            {hero.title?.split(' ').slice(0, 3).join(' ')} <br />
                            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                                {hero.title?.split(' ').slice(3).join(' ')}
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            {hero.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
                        >
                            <a href={hero.ctaLink || '/journey'} className="btn bg-primary-600 hover:bg-primary-700 text-white px-8 py-3.5 rounded-lg font-medium transition-all shadow-lg hover:shadow-primary-600/25 hover:-translate-y-0.5 text-center">
                                {hero.ctaText || 'View Case Studies'}
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Content - Profile Picture */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                            className="relative group w-64 md:w-80 lg:w-[400px]"
                        >
                            {/* Decorative Shapes - Reduced rotation on mobile */}
                            <div className="absolute inset-0 bg-primary-600 rounded-2xl md:rounded-3xl rotate-2 md:rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
                            <div className="absolute inset-0 bg-accent-500 rounded-2xl md:rounded-3xl -rotate-1 md:-rotate-2 opacity-10 group-hover:-rotate-4 transition-transform duration-500"></div>

                            {/* Image Container */}
                            <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border-4 border-white dark:border-surface-100 shadow-2xl z-10 bg-surface-200">
                                {data?.siteSettings?.profilePicture ? (
                                    <img
                                        src={data.siteSettings.profilePicture}
                                        alt={data.siteSettings.ownerName || 'Saroj'}
                                        className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-64 flex items-center justify-center bg-primary-100 text-primary-600 italic">
                                        Portrait Placeholder
                                    </div>
                                )}

                                {/* Subtle Overlay */}
                                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] pointer-events-none"></div>
                            </div>

                            {/* Floating Badge - Now visible and sized for all screens */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-4 -right-2 md:-bottom-6 md:-left-6 bg-white dark:bg-surface-100 p-2.5 md:p-4 rounded-xl md:rounded-2xl shadow-xl z-20 border border-primary-100 dark:border-primary-900"
                            >
                                <div className="flex items-center gap-2 md:gap-3">
                                    <div className="w-8 h-8 md:w-12 md:h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center text-primary-600 text-lg md:text-2xl font-bold">
                                        Σ
                                    </div>
                                    <div>
                                        <p className="text-[8px] md:text-[10px] uppercase tracking-wider font-bold text-text-secondary">Specialization</p>
                                        <p className="text-xs md:text-base font-bold text-text-primary">Statistics & AI</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
