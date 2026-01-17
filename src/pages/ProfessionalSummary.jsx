import { motion } from 'framer-motion';
import { usePortfolioData, getVisibleItems } from '../data/DataContext';

export default function ProfessionalSummary() {
    const { data, loading } = usePortfolioData();
    const summary = data?.professionalSummary || {};
    const highlights = getVisibleItems(summary.highlights || []);

    if (loading) {
        return (
            <div className="pt-32 pb-20 container mx-auto px-6">
                <div className="animate-pulse">
                    <div className="h-10 bg-surface-200 rounded w-1/2 mb-8"></div>
                    <div className="h-32 bg-surface-200 rounded mb-8"></div>
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
            <h1 className="text-4xl font-bold mb-8 text-text-primary">
                Professional <span className="text-primary-500">Summary</span>
            </h1>

            <div className="bg-surface-100 p-8 rounded-2xl border border-surface-200 shadow-sm mb-12">
                <p className="text-xl text-text-secondary leading-relaxed mb-8">
                    {summary.text}
                </p>

                <h3 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-6 border-b border-surface-200 pb-2">
                    Key Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {highlights.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: item.order * 0.1 }}
                            className="flex items-start gap-3 p-4 bg-surface-50 rounded-lg border border-surface-200"
                        >
                            <span className="text-accent-500 mt-0.5 text-lg">▹</span>
                            <span className="text-text-primary font-medium">{item.text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
