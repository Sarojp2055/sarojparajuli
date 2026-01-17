import { motion } from 'framer-motion';
import { usePortfolioData, getVisibleItems } from '../data/DataContext';

export default function Skills() {
    const { data, loading } = usePortfolioData();

    const digitalSkills = getVisibleItems(data?.digitalSkills || []);
    const softSkills = getVisibleItems(data?.softSkills || []);

    if (loading) {
        return (
            <div className="pt-32 pb-20 container mx-auto px-6">
                <div className="animate-pulse">
                    <div className="h-10 bg-surface-200 rounded w-1/3 mb-12"></div>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-4">
                            {[1, 2, 3, 4].map(i => <div key={i} className="h-8 bg-surface-200 rounded"></div>)}
                        </div>
                        <div className="space-y-4">
                            {[1, 2, 3, 4].map(i => <div key={i} className="h-16 bg-surface-200 rounded"></div>)}
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
                My <span className="text-primary-500">Skills</span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Digital Skills */}
                <div>
                    <h2 className="text-sm font-bold mb-8 uppercase tracking-widest text-text-secondary border-b border-surface-200 pb-2">
                        Digital / Technical
                    </h2>
                    <div className="space-y-6">
                        {digitalSkills.map((skill) => (
                            <motion.div
                                key={skill.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: skill.order * 0.05 }}
                            >
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-text-primary flex items-center gap-2">
                                        <span className="text-lg">{skill.icon}</span>
                                        {skill.name}
                                    </span>
                                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-surface-200 text-text-secondary">
                                        {skill.category}
                                    </span>
                                </div>
                                <div className="h-2 w-full bg-surface-200 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${skill.level}%` }}
                                        transition={{ duration: 0.8, delay: skill.order * 0.1 }}
                                        className="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full"
                                    ></motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Soft Skills */}
                <div>
                    <h2 className="text-sm font-bold mb-8 uppercase tracking-widest text-text-secondary border-b border-surface-200 pb-2">
                        Professional / Soft Skills
                    </h2>
                    <div className="grid gap-4">
                        {softSkills.map((skill) => (
                            <motion.div
                                key={skill.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: skill.order * 0.08 }}
                                className="p-4 bg-surface-100 rounded-lg border border-surface-200 hover:border-primary-500 transition-colors group"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-bold text-text-primary">{skill.name}</span>
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <div
                                                key={i}
                                                className={`w-2 h-2 rounded-full transition-colors ${i < (skill.level / 20) ? 'bg-accent-500' : 'bg-surface-300'}`}
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-sm text-text-secondary">{skill.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
