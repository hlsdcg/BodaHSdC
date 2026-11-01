import { useState, useEffect, useRef } from 'react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import Home from './components/Home';
import AdditionalInfo from './components/AdditionalInfo';
import Form from './components/Form';
import Login from './components/Login';
import LanguageIcon from './components/LanguageIcon';
import './App.css';

const AppContent = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  
  const isBeforeDeadline = new Date() < new Date('2027-01-01');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const renderTab = () => {
    if (activeTab === 'form' && !isBeforeDeadline) {
      setActiveTab('home');
      return <Home 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        menuRef={menuRef}
        setActiveTab={setActiveTab}
        language={language}
        setLanguage={setLanguage}
        t={t}
        isBeforeDeadline={isBeforeDeadline}
      />;
    }
    
    switch (activeTab) {
      case 'home':
        return <Home 
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          menuRef={menuRef}
          setActiveTab={setActiveTab}
          language={language}
          setLanguage={setLanguage}
          t={t}
          isBeforeDeadline={isBeforeDeadline}
        />;
      case 'additional':
        return <AdditionalInfo 
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          menuRef={menuRef}
          setActiveTab={setActiveTab}
          language={language}
          setLanguage={setLanguage}
          t={t}
          isBeforeDeadline={isBeforeDeadline}
        />;
      case 'form':
        return <Form 
          setActiveTab={setActiveTab}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          menuRef={menuRef}
          language={language}
          setLanguage={setLanguage}
          t={t}
          isBeforeDeadline={isBeforeDeadline}
        />;
      default:
        return <Home 
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          menuRef={menuRef}
          setActiveTab={setActiveTab}
          language={language}
          setLanguage={setLanguage}
          t={t}
          isBeforeDeadline={isBeforeDeadline}
        />;
    }
  };

  return (
    <div className="app">
      {!isAuthenticated ? (
        <Login onLogin={() => setIsAuthenticated(true)} language={language} setLanguage={setLanguage} t={t} />
      ) : (
        <>
          <header className="header">
            <nav className="tabs">
              <button
                className={`tab ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => setActiveTab('home')}
              >
                {t('tabs.home')}
              </button>
              <button
                className={`tab ${activeTab === 'additional' ? 'active' : ''}`}
                onClick={() => setActiveTab('additional')}
              >
                {t('tabs.additional')}
              </button>
              {isBeforeDeadline && (
                <button
                  className={`tab ${activeTab === 'form' ? 'active' : ''}`}
                  onClick={() => setActiveTab('form')}
                >
                  {t('tabs.form')}
                </button>
              )}
            </nav>
            <div className="language-selector">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <LanguageIcon />
                <select 
                  value={language} 
                  onChange={(e) => setLanguage(e.target.value)}
                  className="language-dropdown"
                >
                  <option value="es">Español</option>
                  <option value="en">English</option>
                </select>
              </div>
            </div>
          </header>
          
          <main className="main-content">
            {renderTab()}
          </main>
        </>
      )}
    </div>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
