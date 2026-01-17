import { motion } from 'framer-motion';
import { usePortfolioData, getVisibleItems } from '../data/DataContext';

export default function Journey() {
    const { data, loading } = usePortfolioData();
    const journey = getVisibleItems(data?.journey || []);

    if (loading) {
        return (
            <div className="pt-32 pb-20 container mx-auto px-6">
                <div className="animate-pulse">
                    <div className="h-10 bg-surface-200 rounded w-1/3 mb-12"></div>
                    <div className="space-y-8 ml-6">
                        {[1, 2].map(i => <div key={i} className="h-32 bg-surface-200 rounded"></div>)}
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
                Professional <span className="text-accent-500">Journey</span>
            </h1>

            <div className="relative border-l-2 border-surface-200 ml-3 md:ml-6 space-y-12">
                {journey.map((job) => (
                    <motion.div
                        key={job.id}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: job.order * 0.15 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Dot */}
                        <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-surface-50 border-4 border-accent-500"></div>

                        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                            <h2 className="text-2xl font-bold text-text-primary">{job.role}</h2>
                            <span className="font-mono text-sm text-accent-600 bg-accent-100/50 px-3 py-1 rounded-full">
                                {job.period}
                            </span>
                        </div>

                        <h3 className="text-xl text-primary-600 mb-4 font-medium">{job.company}</h3>
                        <p className="text-lg text-text-secondary leading-relaxed bg-surface-100 p-6 rounded-xl border border-surface-200">
                            {job.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
