import { motion } from 'framer-motion';
import { usePortfolioData, getVisibleItems } from '../data/DataContext';

export default function Education() {
    const { data, loading } = usePortfolioData();
    const education = getVisibleItems(data?.education || []);
    const certifications = getVisibleItems(data?.certifications || []);

    if (loading) {
        return (
            <div className="pt-32 pb-20 container mx-auto px-6">
                <div className="animate-pulse">
                    <div className="h-10 bg-surface-200 rounded w-1/2 mb-12"></div>
                    <div className="grid grid-cols-2 gap-12">
                        <div className="space-y-6">
                            {[1, 2].map(i => <div key={i} className="h-24 bg-surface-200 rounded"></div>)}
                        </div>
                        <div className="space-y-4">
                            {[1, 2, 3].map(i => <div key={i} className="h-20 bg-surface-200 rounded"></div>)}
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
            <h1 className="text-4xl font-bold mb-12 text-text-primary">
                Education & <span className="text-accent-500">Certifications</span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Academic Degrees */}
                <div>
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <span className="text-primary-500 text-3xl">🎓</span> Academic Background
                    </h2>
                    <div className="space-y-8">
                        {education.map((edu) => (
                            <motion.div
                                key={edu.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: edu.order * 0.1 }}
                                className="relative pl-8 border-l-2 border-surface-200"
                            >
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500"></div>
                                <h3 className="text-xl font-bold text-text-primary">{edu.degree}</h3>
                                <p className="text-primary-600 font-medium mb-2">{edu.institution} | {edu.year}</p>
                                <p className="text-text-secondary">{edu.details}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications */}
                <div>
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <span className="text-accent-500 text-3xl">📜</span> Certifications
                    </h2>
                    <div className="grid gap-4">
                        {certifications.map((cert) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: cert.order * 0.1 }}
                                className="p-6 bg-surface-100 rounded-xl border border-surface-200 hover:border-accent-500 transition-colors group"
                            >
                                <h3 className="font-bold text-lg text-text-primary group-hover:text-accent-500 transition-colors">
                                    {cert.name}
                                </h3>
                                <div className="flex justify-between mt-2 text-sm text-text-secondary">
                                    <span>{cert.issuer}</span>
                                    <span className="font-mono bg-surface-200 px-2 py-0.5 rounded text-xs">{cert.year}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
