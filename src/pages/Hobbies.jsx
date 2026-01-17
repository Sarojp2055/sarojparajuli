import { motion } from 'framer-motion';
import { usePortfolioData, getVisibleItems } from '../data/DataContext';

export default function Hobbies() {
    const { data, loading } = usePortfolioData();
    const hobbies = getVisibleItems(data?.hobbies || []);

    if (loading) {
        return (
            <div className="pt-32 pb-20 container mx-auto px-6">
                <div className="animate-pulse">
                    <div className="h-10 bg-surface-200 rounded w-1/3 mb-12"></div>
                    <div className="grid grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map(i => <div key={i} className="aspect-square bg-surface-200 rounded-2xl"></div>)}
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
                Hobbies & <span className="text-primary-500">Interests</span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {hobbies.map((hobby) => (
                    <motion.div
                        key={hobby.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: hobby.order * 0.1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="aspect-square flex flex-col items-center justify-center text-center p-8 bg-surface-100 rounded-2xl border-2 border-surface-200 hover:border-primary-500 transition-all cursor-default group"
                    >
                        <span className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">
                            {hobby.icon}
                        </span>
                        <h3 className="text-xl font-bold text-text-primary mb-2">{hobby.name}</h3>
                        <p className="text-text-secondary text-sm">{hobby.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
