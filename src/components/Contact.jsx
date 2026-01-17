export default function Contact() {
    return (
        <footer id="contact" className="py-24 relative overflow-hidden bg-surface-900 text-white">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 filter blur-[80px] translate-x-1/3 -translate-y-1/3 bg-accent-600 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 filter blur-[60px] -translate-x-1/3 translate-y-1/4 bg-primary-600 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Ready to collaborate?</h2>
                <p className="max-w-2xl mx-auto mb-12 text-lg text-surface-200">
                    I'm currently open to new opportunities in data science and statistical consulting.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <a
                    href="mailto:saroj_official@hotmail.io"
                    className="inline-flex items-center justify-center bg-white text-surface-900 text-lg font-bold px-10 py-4 rounded-full hover:bg-surface-200 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 mb-20"
                >
                    Say Hello
                </a>

                <div className="flex justify-center gap-10 mb-16">
                    {['LinkedIn', 'GitHub', 'Scholar', 'Twitter'].map(social => (
                        <a
                            key={social}
                            href={`https://${social.toLowerCase()}.com/in/saroj-parajuli`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-surface-300 hover:text-white transition-colors text-base font-medium relative group"
                        >
                            {social}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-400 transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                <div className="border-t border-surface-800 pt-8 mt-8 text-sm text-surface-400">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p>&copy; {new Date().getFullYear()} Saroj Parajuli. All rights reserved.</p>
                        <p className="font-mono text-xs">Built with React & Tailwind CSS</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
