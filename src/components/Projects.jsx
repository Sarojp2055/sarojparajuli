import { motion } from 'framer-motion';

const projects = [
    {
        title: "Sales Data Analysis",
        category: "Data Analysis",
        description: "Comprehensive analysis of retail sales data using Excel and Python. identified key seasonal trends and optimized reporting workflows.",
        tags: ["Excel", "Python", "Data Viz"],
        color: "bg-blue-500"
    },
    {
        title: "Customer Churn Prediction",
        category: "Machine Learning",
        description: "Developed a predictive model to identify customers at risk of churning. Utilized logistic regression and decision trees in R.",
        tags: ["R", "ML", "Classification"],
        color: "bg-emerald-500"
    },
    {
        title: "Statistical Hypothesis Report",
        category: "Raw Statistics",
        description: "A detailed theoretical report applying rigorous hypothesis testing (A/B testing) to marketing campaign data.",
        tags: ["Statistics", "Maths", "Hypothesis Testing"],
        color: "bg-purple-500"
    },
    {
        title: "AI Agent Workflow Demo",
        category: "AI & Agents",
        description: "Prototype of an autonomous AI agent capable of scraping web data and summarizing news using LLMs.",
        tags: ["AI", "Agents", "LLMs"],
        color: "bg-orange-500"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-surface-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">
                        Selected <span className="text-accent-500">Case Studies</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        A showcase of complex problems solved through rigorous data analysis and algorithmic thinking.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-surface-100 rounded-xl overflow-hidden border border-surface-200 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* Top Accent Line */}
                            <div className={`h-1.5 w-full ${project.color || 'bg-primary-500'}`}></div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-surface-200 text-text-secondary">
                                        {project.category}
                                    </span>
                                    <a href="#" className="p-2 rounded-full bg-surface-200 text-text-primary opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary-100 hover:text-primary-700">
                                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7V17"></path></svg>
                                    </a>
                                </div>

                                <h3 className="text-2xl font-bold mb-3 text-text-primary group-hover:text-primary-600 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="mb-6 text-text-secondary leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-6 border-t border-surface-200">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-mono font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/40 px-2 py-1 rounded">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
