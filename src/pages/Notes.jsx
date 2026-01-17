import { motion } from 'framer-motion';
import { usePortfolioData, getVisibleItems } from '../data/DataContext';

export default function Notes() {
    const { data, loading } = usePortfolioData();
    const notes = getVisibleItems(data?.notes || []);

    // Group notes by category
    const categories = [...new Set(notes.map(n => n.category))];

    if (loading) {
        return (
            <div className="pt-32 pb-20 container mx-auto px-6">
                <div className="animate-pulse">
                    <div className="h-10 bg-surface-200 rounded w-1/3 mb-12"></div>
                    <div className="grid grid-cols-2 gap-6">
                        {[1, 2, 3, 4].map(i => <div key={i} className="h-32 bg-surface-200 rounded-xl"></div>)}
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
                Notes & <span className="text-accent-500">Facts</span>
            </h1>
            <p className="text-lg text-text-secondary mb-12">
                Random thoughts, favorite things, and interesting facts about me.
            </p>

            {/* Category Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
                {categories.map((category) => (
                    <span
                        key={category}
                        className="px-3 py-2 bg-primary-100/30 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 rounded-lg text-[10px] font-bold border border-primary-200 dark:border-primary-800/50 text-center flex items-center justify-center min-h-[40px] shadow-sm tracking-wider uppercase"
                    >
                        {category}
                    </span>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {notes.map((note) => (
                    <motion.div
                        key={note.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: note.order * 0.1 }}
                        className="p-8 bg-surface-50 border-2 border-surface-200 rounded-xl relative overflow-hidden group hover:border-primary-500 transition-colors"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-text-primary select-none">
                            {note.order}
                        </div>
                        <span className="text-xs font-mono px-2 py-1 bg-accent-100 text-accent-700 rounded mb-3 inline-block">
                            {note.category}
                        </span>
                        <h2 className="text-xl font-bold text-text-primary mb-3 relative z-10">
                            {note.title}
                        </h2>
                        <p className="text-lg text-text-secondary relative z-10 leading-relaxed">
                            "{note.content}"
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
