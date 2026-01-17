import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAccessibility } from '../data/AccessibilityContext';
import { usePortfolioData } from '../data/DataContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScreenReaderEnabled, setIsScreenReaderEnabled, speechRate, setSpeechRate, speak } = useAccessibility();
  const { data } = usePortfolioData();
  const location = useLocation();

  const isHome = location.pathname === '/';
  const profilePicture = data?.siteSettings?.profilePicture;

  useEffect(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('portfolio-theme');

    if (savedTheme) {
      // Use saved preference
      const isDarkMode = savedTheme === 'dark';
      setIsDark(isDarkMode);
      document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // Fall back to system preference
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when screen size increases
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    // Save to localStorage
    localStorage.setItem('portfolio-theme', newTheme ? 'dark' : 'light');
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Summary', path: '/summary' },
    { name: 'Education', path: '/education' },
    { name: 'Skills', path: '/skills' },
    { name: 'Journey', path: '/journey' },
    { name: 'Hobbies', path: '/hobbies' },
    { name: 'Notes', path: '/notes' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-surface-50/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className={`w-9 h-9 ${(!isHome && profilePicture) ? '' : 'bg-primary-600'} rounded-full flex items-center justify-center text-white font-mono font-bold text-lg group-hover:bg-primary-500 transition-all duration-300 shadow-lg shadow-primary-500/30 overflow-hidden border-2 border-primary-500/20 group-hover:border-primary-500`}>
              {(!isHome && profilePicture) ? (
                <img
                  src={profilePicture}
                  alt="Saroj"
                  className="w-full h-full object-cover"
                />
              ) : (
                'Σ'
              )}
            </div>
            <span className="text-xl font-bold font-mono tracking-tight text-primary-800 dark:text-primary-300 group-hover:text-primary-600 transition-colors">
              Saroj<span className="text-accent-500">.stat</span>
            </span>
          </NavLink>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex gap-1 items-center bg-surface-50/80 p-1.5 rounded-full border-2 border-text-primary shadow-sm backdrop-blur-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => `
                  px-4 py-2 rounded-full text-xs font-bold transition-all duration-300
                  border-2
                  ${isActive
                    ? 'bg-text-primary text-surface-50 border-text-primary shadow-md transform scale-105'
                    : 'text-text-secondary border-primary-500/50 hover:border-primary-500 hover:text-text-primary hover:bg-surface-200'
                  }
                `}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Accessibility Toggle */}
            <button
              onClick={() => {
                const newState = !isScreenReaderEnabled;
                setIsScreenReaderEnabled(newState);
                speak(newState ? "Accessibility mode enabled" : "Accessibility mode disabled");
              }}
              className={`p-2 rounded-full transition-all border-2 ${isScreenReaderEnabled ? 'bg-primary-500 border-primary-400 text-white shadow-lg shadow-primary-500/25' : 'bg-surface-100 text-text-secondary border-primary-500/50 hover:border-primary-500'}`}
              title="Toggle Accessibility (Hover to Read)"
            >
              <span className="text-lg font-bold">♿</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-surface-100 text-text-secondary hover:text-primary-600 transition-colors border-2 border-primary-500/50 hover:border-primary-500"
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-surface-100 text-text-secondary hover:text-primary-600 transition-colors border-2 border-primary-500/50 hover:border-primary-500"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Speed Changer (Horizontal Line below buttons) - Desktop */}
        <div className="hidden lg:flex justify-end mt-2">
          <AnimatePresence>
            {isScreenReaderEnabled && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-3 bg-surface-50/90 border border-primary-500/30 rounded-full py-1.5 px-4 backdrop-blur-md shadow-lg"
              >
                <span className="text-[10px] font-bold text-text-secondary uppercase whitespace-nowrap">Speed: {speechRate}x</span>
                <input
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.1"
                  value={speechRate}
                  onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                  className="w-24 h-1.5 bg-surface-200 rounded-full appearance-none cursor-pointer accent-primary-500"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden mt-4 overflow-hidden"
            >
              <div className="flex flex-col gap-2 p-4 bg-surface-100/95 backdrop-blur-lg rounded-2xl border-2 border-primary-500/50 shadow-2xl">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) => `
                      px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300
                      flex items-center justify-between
                      ${isActive
                        ? 'bg-text-primary text-surface-50 translate-x-2'
                        : 'text-text-secondary hover:bg-surface-200 hover:text-text-primary'
                      }
                    `}
                  >
                    <span>{item.name}</span>
                    <span className="opacity-30">→</span>
                  </NavLink>
                ))}

                {/* Speed Changer - Mobile */}
                {isScreenReaderEnabled && (
                  <div className="mt-4 p-4 bg-surface-200/50 rounded-xl border border-primary-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold text-text-secondary uppercase">Speech Speed</span>
                      <span className="text-[10px] font-bold text-primary-600">{speechRate}x</span>
                    </div>
                    <input
                      type="range"
                      min="0.5"
                      max="2"
                      step="0.1"
                      value={speechRate}
                      onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                      className="w-full h-1.5 bg-surface-300 rounded-full appearance-none cursor-pointer accent-primary-500"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
