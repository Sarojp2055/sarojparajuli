import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-24 bg-surface-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">
                            Hello, I'm <span className="text-accent-500">Saroj</span>.
                        </h2>
                        <p className="mb-6 text-lg text-text-secondary leading-relaxed">
                            I am a passionate aspiring Data Scientist skilled in <strong>Statistics, AI workflows, and Agentic Systems</strong>.
                            My focus is on leveraging theoretical knowledge and technical skills to build robust data solutions.
                        </p>
                        <p className="mb-8 text-lg text-text-secondary leading-relaxed">
                            I have a strong command of <strong>Python, R, and Raw Statistics</strong>, and I am eager to apply my expertise in real-world data science challenges.
                        </p>

                        <div className="flex gap-6">
                            <div className="p-6 rounded-2xl bg-primary-50 border border-primary-100 flex-1 text-center hover:bg-primary-100 transition-colors">
                                <h3 className="font-bold text-3xl mb-2 text-primary-700 dark:text-primary-400">5+</h3>
                                <p className="text-sm text-text-secondary font-medium uppercase tracking-wide">Years Experience</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-accent-50 border border-accent-100 flex-1 text-center hover:bg-accent-100 transition-colors">
                                <h3 className="font-bold text-3xl mb-2 text-accent-700 dark:text-accent-400">100+</h3>
                                <p className="text-sm text-text-secondary font-medium uppercase tracking-wide">Models Deployed</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Abstract Profile representation */}
                        <div className="aspect-square rounded-[2rem] overflow-hidden relative border-8 border-surface-100 shadow-2xl max-w-md mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />

                            {/* Floating pill */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ delay: 0.4 }}
                                className="absolute bottom-6 right-6 p-4 rounded-xl shadow-lg bg-surface-50/90 backdrop-blur-md border border-surface-200"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="block w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                                    <span className="text-sm font-bold font-mono text-text-primary">p-value &lt; 0.05</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decor */}
                        <div className="absolute -z-10 top-10 -right-10 w-32 h-32 bg-accent-200 dark:bg-accent-900 rounded-full blur-3xl opacity-50"></div>
                        <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-primary-200 dark:bg-primary-900 rounded-full blur-3xl opacity-50"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
