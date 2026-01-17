import { motion } from 'framer-motion';

const skills = [
    { name: "Python & R", level: 90, color: "bg-primary-600" },
    { name: "Raw Statistics & Maths", level: 85, color: "bg-primary-500" },
    { name: "AI Workflows & Agents", level: 80, color: "bg-accent-500" },
    { name: "Excel & SQL", level: 95, color: "bg-primary-400" },
    { name: "Data Tech", level: 75, color: "bg-primary-300" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-surface-100">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">
                        Technical <span className="text-primary-600">Proficiency</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h3 className="text-xl font-bold mb-8 text-text-secondary uppercase tracking-widest text-sm">Core Competencies</h3>
                        <div className="space-y-8">
                            {skills.map((skill, index) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium text-text-primary">{skill.name}</span>
                                        <span className="text-sm font-mono text-text-secondary">{skill.level}%</span>
                                    </div>
                                    <div className="h-2.5 w-full bg-surface-200 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                                            className={`h-full rounded-full ${skill.color}`}
                                        ></motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-8 text-text-secondary uppercase tracking-widest text-sm">Tools of Trade</h3>
                        <div className="flex flex-wrap gap-3 mb-12">
                            {['Tableau', 'PowerBI', 'Jupyter', 'Git', 'Docker', 'Stan', 'PyMC', 'SAS', 'MATLAB', 'Excel'].map((tool, i) => (
                                <motion.span
                                    key={tool}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="px-4 py-2 rounded-lg border border-primary-200 bg-surface-50 text-primary-800 text-sm font-medium cursor-default shadow-sm hover:shadow-md hover:border-primary-400 transition-all"
                                >
                                    {tool}
                                </motion.span>
                            ))}
                        </div>

                        {/* Distribution Visual */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="p-8 rounded-2xl bg-surface-50 border border-surface-200 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-accent-500"></div>
                            <div className="text-center text-xs text-text-secondary mb-6 font-mono uppercase tracking-widest">Normal Distribution of Skills</div>
                            <div className="flex items-end justify-center gap-1.5 h-32">
                                {[10, 25, 40, 60, 90, 70, 45, 30, 15, 5].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: i * 0.05 + 0.5, type: 'spring' }}
                                        className="w-1/12 bg-primary-400/80 dark:bg-primary-500/80 rounded-t hover:bg-accent-500 transition-colors"
                                    ></motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
