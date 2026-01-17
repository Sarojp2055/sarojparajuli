import { motion } from 'framer-motion';
import { usePortfolioData, getVisibleItems } from '../data/DataContext';

export default function Projects() {
    const { data, loading } = usePortfolioData();
    const projects = getVisibleItems(data?.projects || []);

    if (loading) {
        return (
            <div className="pt-32 pb-20 container mx-auto px-6">
                <div className="animate-pulse">
                    <div className="h-10 bg-surface-200 rounded w-1/3 mb-8"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[1, 2].map(i => (
                            <div key={i} className="h-48 bg-surface-200 rounded-2xl"></div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-20 container mx-auto px-6 min-h-screen"
        >
            <div className="max-w-4xl mx-auto">
                <header className="mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-text-primary"
                    >
                        Featured <span className="text-primary-600">Projects</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-text-secondary text-lg"
                    >
                        A showcase of my statistical models, data tools, and research explorations.
                    </motion.p>
                </header>

                <div className="grid grid-cols-1 gap-8">
                    {projects.length > 0 ? (
                        projects.map((project, index) => (
                            <motion.div
                                key={project.id || index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-surface-100 rounded-3xl p-8 border border-surface-200 hover:border-primary-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/5"
                            >
                                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                                    {/* Project Number - Now on the left */}
                                    <div className="flex w-16 h-16 md:w-20 md:h-20 bg-surface-50 rounded-2xl items-center justify-center text-3xl font-mono text-primary-200 group-hover:text-primary-500 group-hover:bg-primary-50 transition-all duration-300 border border-surface-200 shrink-0">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-primary-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-text-secondary leading-relaxed mb-6 text-lg">
                                            {project.summary}
                                        </p>

                                        <div className="flex flex-wrap gap-4 items-center">
                                            {project.link && project.link.trim() !== '' && (
                                                <a
                                                    href={project.link.startsWith('http') ? project.link : `https://${project.link}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-primary-600 font-bold hover:gap-3 transition-all group/link underline-offset-4 hover:underline"
                                                >
                                                    View Project
                                                    <span className="text-xl">→</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-surface-100 rounded-3xl border-2 border-dashed border-surface-200">
                            <p className="text-text-secondary italic">No projects added yet. Update your Google Sheet to see them here!</p>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
