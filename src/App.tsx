import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Palette, 
  Server, 
  MessageSquare, 
  Mail, 
  Github,
  ChevronDown,
  Star,
  Zap,
  Cpu,
  Monitor,
  Database,
  Bot,
  Menu,
  X,
  Sun,
  Moon
} from 'lucide-react';

function App() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(150);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  
  const texts = [
    'Frontend Developer',
    'UI/UX Designer',
    'Minecraft Server Creator',
    'Discord Bot Developer'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        setTypeSpeed(50);
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        setTypeSpeed(150);
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, typeSpeed, texts]);

  const skills = [
    { name: 'React', icon: <Code className="w-8 h-8" />, color: 'from-red-400 to-red-600' },
    { name: 'TypeScript', icon: <Cpu className="w-8 h-8" />, color: 'from-red-500 to-red-700' },
    { name: 'JavaScript', icon: <Zap className="w-8 h-8" />, color: 'from-red-400 to-orange-500' },
    { name: 'HTML/CSS', icon: <Monitor className="w-8 h-8" />, color: 'from-red-600 to-red-800' },
    { name: 'Python', icon: <Database className="w-8 h-8" />, color: 'from-red-500 to-red-600' },
    { name: 'C++', icon: <Cpu className="w-8 h-8" />, color: 'from-red-700 to-red-900' }
  ];

  const services = [
    {
      icon: <Monitor className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Creating responsive, modern websites with React and TypeScript',
      gradient: 'from-red-500 to-red-700'
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user interfaces',
      gradient: 'from-red-600 to-red-800'
    },
    {
      icon: <Server className="w-12 h-12" />,
      title: 'Minecraft Servers',
      description: 'Building and managing custom Minecraft server experiences',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: 'Discord Bots',
      description: 'Developing powerful Discord bots for communities',
      gradient: 'from-red-700 to-red-900'
    }
  ];

  const navItems = [
    { name: 'Home', href: 'hero' },
    { name: 'Skills', href: 'skills' },
    { name: 'Services', href: 'services' },
    { name: 'Contact', href: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = isDarkMode 
    ? 'bg-black text-white' 
    : 'bg-white text-gray-900';

  const navBgClasses = isDarkMode
    ? scrolled ? 'bg-black/90' : 'bg-transparent'
    : scrolled ? 'bg-white/90' : 'bg-transparent';

  const cardBgClasses = isDarkMode 
    ? 'bg-gray-900 hover:bg-gray-800 border-gray-800' 
    : 'bg-gray-100 hover:bg-gray-200 border-gray-300';

  const sectionBgClasses = isDarkMode 
    ? 'bg-gray-900' 
    : 'bg-gray-50';

  return (
    <div className={`${themeClasses} min-h-screen transition-colors duration-300`}>
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBgClasses} backdrop-blur-md border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform"
            >
              Criss
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`${isDarkMode ? 'text-gray-300 hover:text-red-400' : 'text-gray-600 hover:text-red-500'} font-medium transition-colors duration-200 hover:scale-105 transform`}
                >
                  {item.name}
                </button>
              ))}
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all duration-200 hover:scale-110`}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all duration-200`}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} transition-colors`}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`md:hidden py-4 ${isDarkMode ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-md border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-3 ${isDarkMode ? 'text-gray-300 hover:text-red-400 hover:bg-gray-800' : 'text-gray-600 hover:text-red-500 hover:bg-gray-100'} font-medium transition-colors duration-200`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Animated Background */}
      <div className="fixed inset-0 opacity-10">
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-br from-red-600 via-red-800 to-black' : 'bg-gradient-to-br from-red-200 via-red-300 to-gray-100'} animate-pulse`}></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-red-500 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center z-10">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-pulse">
              Criss
            </h1>
            <div className="text-2xl md:text-4xl font-light h-16 flex items-center justify-center">
              <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>I'm a </span>
              <span className="ml-2 text-red-400 font-medium">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>
          
          <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto mb-12 leading-relaxed`}>
            Crafting digital experiences with code, creativity, and innovation. 
            Building the future one pixel at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-700 rounded-full font-semibold text-lg text-white hover:from-red-600 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-red-500/25"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-4 border-2 border-red-500 rounded-full font-semibold text-lg ${isDarkMode ? 'hover:bg-red-500 hover:text-white' : 'hover:bg-red-500 hover:text-white'} transform hover:scale-105 transition-all duration-300`}
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-red-400" />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`${cardBgClasses} rounded-2xl p-6 text-center transition-all duration-300 transform hover:scale-110 hover:rotate-3 cursor-pointer border hover:border-red-500`}>
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${skill.color} mb-4 group-hover:animate-pulse`}>
                    {skill.icon}
                  </div>
                  <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white group-hover:text-red-400' : 'text-gray-900 group-hover:text-red-500'} transition-colors`}>
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 px-4 ${sectionBgClasses} relative`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            What I Do
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`${isDarkMode ? 'bg-black hover:bg-gray-800 border-gray-800' : 'bg-white hover:bg-gray-50 border-gray-200'} rounded-2xl p-8 text-center transition-all duration-500 transform hover:scale-105 cursor-pointer border hover:border-red-500 h-full`}>
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${service.gradient} mb-6 group-hover:animate-spin`}>
                    {service.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white group-hover:text-red-400' : 'text-gray-900 group-hover:text-red-500'} transition-colors`}>
                    {service.title}
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'} leading-relaxed transition-colors`}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-12 max-w-2xl mx-auto`}>
            Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="mailto:criss.drrz@gmail.com"
              className="flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-red-500 to-red-700 rounded-full font-semibold text-lg text-white hover:from-red-600 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-red-500/25"
            >
              <Mail className="w-6 h-6" />
              Email Me
            </a>
          </div>
          
          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/CrissDrc"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 ${isDarkMode ? 'bg-gray-900 hover:bg-gray-800 border-gray-800' : 'bg-gray-100 hover:bg-gray-200 border-gray-300'} rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12 border hover:border-red-500`}
            >
              <Github className={`w-8 h-8 ${isDarkMode ? 'text-gray-300 hover:text-red-400' : 'text-gray-600 hover:text-red-500'} transition-colors`} />
            </a>
            <a
              href="https://discord.com/users/criss.drrz"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 ${isDarkMode ? 'bg-gray-900 hover:bg-gray-800 border-gray-800' : 'bg-gray-100 hover:bg-gray-200 border-gray-300'} rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12 border hover:border-red-500`}
            >
              <MessageSquare className={`w-8 h-8 ${isDarkMode ? 'text-gray-300 hover:text-red-400' : 'text-gray-600 hover:text-red-500'} transition-colors`} />
            </a>
          </div>
          
          <div className="mt-8 text-center">
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-2`}>criss.drrz@gmail.com</p>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Discord: criss.drrz</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 ${isDarkMode ? 'bg-black border-gray-900' : 'bg-gray-100 border-gray-200'} border-t`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            © 2025 Criss. Built with React & TypeScript
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;