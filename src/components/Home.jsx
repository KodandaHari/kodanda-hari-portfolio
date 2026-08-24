import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FaArrowDown, FaEnvelope, FaGithub, FaLinkedin, FaStar } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';

const ROLES = ['Full Stack AEM Developer', 'AEM Developer', 'Java Developer'];

const TypewriterRole = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = ROLES[wordIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % ROLES.length);
        }
      }, 50);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        if (displayedText.length === currentWord.length) {
          timer = setTimeout(() => setIsDeleting(true), 1500);
        }
      }, 100);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, wordIndex]);

  return (
    <div className="inline-flex items-center min-w-[220px] h-8">
      <span className="text-accent font-mono">
        {displayedText}
        <span className="animate-pulse ml-0.5 text-accent">|</span>
      </span>
    </div>
  );
};

const ProfileBadge = () => (
  <div className="relative z-10 w-40 h-40 rounded-full border-4 border-white/20 shadow-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
    {/* TODO: replace with <img src={process.env.PUBLIC_URL + '/your-photo.jpg'} .../> once you have a photo */}
    <span className="text-5xl font-bold text-background-darker">KH</span>
  </div>
);

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/KodandaHari' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/kodanda-nowpada-68961919b/' },
  { icon: FaEnvelope, href: 'mailto:kodandahari463@gmail.com' }
];

const Hero = () => {
  const techStack = ['AEM', 'AEMaaCS', 'Java', 'React'];

  const blobs = [
    { style: { top: '10%', left: '5%', width: 120, height: 120, background: 'linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)', opacity: 0.35 }, delay: 0 },
    { style: { bottom: '15%', right: '10%', width: 160, height: 160, background: 'linear-gradient(135deg, #5eead4 0%, #14b8a6 100%)', opacity: 0.3 }, delay: 0.5 },
    { style: { top: '40%', right: '20%', width: 90, height: 90, background: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)', opacity: 0.25 }, delay: 1 }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background-dark relative overflow-hidden">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-2xl z-0"
          style={blob.style}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1.1, 0.9, 1], opacity: blob.style.opacity }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror', delay: blob.delay }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <ProfileBadge />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-block">
            <div className="bg-surface px-6 py-3 rounded-full inline-flex items-center gap-2">
              <span className="text-white/80">Hi, I'm a</span>
              <TypewriterRole />
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-text-primary">Kodanda</span> <span className="text-accent">Hari</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="px-6 py-2 bg-surface text-accent rounded-full text-sm border border-white/10"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-text-secondary text-lg leading-relaxed"
          >
            Full Stack AEM Developer with 5+ years of experience building and integrating enterprise
            websites on AEM on-premise and AEMaaCS, across frontend, backend, and Adobe integrations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <ScrollLink to="projects" smooth={true} duration={500}>
              <button className="group px-8 py-3 bg-accent hover:bg-accent-light text-background-darker rounded-full flex items-center gap-2 transition-all font-medium">
                View Projects
                <FaArrowDown className="group-hover:animate-bounce" />
              </button>
            </ScrollLink>

            <a
              href={process.env.PUBLIC_URL + '/Kodanda_Rao_Nowpada_Resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-accent text-accent hover:bg-accent/10 rounded-full transition-all"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center gap-6 pt-6"
          >
            {socialLinks.map(({ icon: Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-all p-2"
                whileHover={{ scale: 1.1 }}
              >
                <Icon size={26} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ScrollLink to="about" smooth={true} duration={500}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="cursor-pointer text-text-secondary hover:text-accent transition-colors"
          >
            <FaArrowDown size={22} />
          </motion.div>
        </ScrollLink>
      </motion.div>
    </section>
  );
};

// TODO: this is a placeholder personal-interests section — swap FANDOMS for your own, or delete this component and its usage below if you'd rather not have it.
const FANDOMS = [
  { title: 'Add a fandom', blurb: 'Say what you\'re a fan of and why it inspires you.', tag: '#placeholder' },
  { title: 'Add another', blurb: 'A second thing you\'re into outside of work.', tag: '#placeholder' }
];

const Fandom = () => (
  <section className="py-12 bg-surface-dark relative overflow-hidden">
    <div className="container relative z-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-accent">A Bit More About Me</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {FANDOMS.map((f) => (
          <motion.div
            key={f.title}
            className="card p-8 flex flex-col items-center text-center max-w-xs"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          >
            <FaStar className="text-4xl text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="text-text-secondary mb-4">{f.blurb}</p>
            <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold">
              {f.tag}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <main className="bg-background-dark font-sans">
      <Hero />
      <Fandom />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
