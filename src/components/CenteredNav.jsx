import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const navigation = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' }
];

const Logo = () => (
  <ScrollLink to="hero" smooth={true} duration={500} className="cursor-pointer group">
    <span className="font-mono text-lg flex items-center">
      <span className="text-accent opacity-70">&lt;</span>
      <span className="text-white mx-1 font-script text-2xl tracking-wide transform group-hover:scale-105 transition-transform duration-300">
        Kodanda Hari
      </span>
      <span className="text-accent opacity-70">/&gt;</span>
    </span>
  </ScrollLink>
);

const ThemeToggle = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <button
      aria-label="Toggle dark mode"
      className="ml-4 p-2 rounded-full bg-surface hover:bg-accent hover:text-background-darker transition-colors text-accent shadow"
      onClick={() => setDark((d) => !d)}
    >
      {dark ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  );
};

const CenteredNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['hero', ...navigation.map((nav) => nav.to)];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'py-3 bg-background-darker/95 backdrop-blur-md shadow-lg' : 'py-5 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <Logo />

            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <ScrollLink key={item.to} to={item.to} smooth={true} duration={500} spy={true} className="relative group">
                  <span
                    className={`text-sm tracking-wide transition-colors duration-300 cursor-pointer ${
                      activeSection === item.to ? 'text-accent font-medium' : 'text-text-secondary group-hover:text-white'
                    }`}
                  >
                    {item.name}
                  </span>
                  {activeSection === item.to && (
                    <motion.div
                      className="absolute -bottom-2 left-0 w-full h-0.5 bg-accent rounded-full"
                      layoutId="navbar-indicator"
                      transition={{ type: 'spring', duration: 0.6 }}
                    />
                  )}
                </ScrollLink>
              ))}
              <ThemeToggle />
            </div>

            <button
              className="md:hidden p-2 text-text-secondary hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className="w-full h-0.5 bg-current transition-transform duration-300"
                  style={{ transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}
                />
                <span
                  className="w-full h-0.5 bg-current transition-opacity duration-300"
                  style={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                />
                <span
                  className="w-full h-0.5 bg-current transition-transform duration-300"
                  style={{ transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}
                />
              </div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background-darker/95 backdrop-blur-md border-t border-white/10"
            >
              <div className="container py-4">
                {navigation.map((item) => (
                  <ScrollLink
                    key={item.to}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3 text-sm cursor-pointer transition-colors ${
                      activeSection === item.to ? 'text-accent font-medium' : 'text-text-secondary hover:text-white'
                    }`}
                  >
                    {item.name}
                  </ScrollLink>
                ))}
                <ThemeToggle />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      <div className={`h-16 ${isScrolled ? 'md:h-14' : 'md:h-20'}`} />
    </>
  );
};

export default CenteredNav;
