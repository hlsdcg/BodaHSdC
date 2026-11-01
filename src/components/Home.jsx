import { useLanguage } from '../contexts/LanguageContext';
import LanguageIcon from './LanguageIcon';
import weddingImage from '../styles/images/weddingHeader.jpeg';

const Home = ({ isMobileMenuOpen, setIsMobileMenuOpen, menuRef, setActiveTab, language, setLanguage, t, isBeforeDeadline }) => {
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="tab-content">
      <div className="mobile-header">
        <button 
          className="burger-menu" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`burger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`burger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`burger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
      <nav ref={menuRef} className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <button
          className="mobile-menu-item"
          onClick={() => handleTabChange('home')}
        >
          {t('tabs.home')}
        </button>
        <button
          className="mobile-menu-item"
          onClick={() => handleTabChange('additional')}
        >
          {t('tabs.additional')}
        </button>
        {isBeforeDeadline && (
          <button
            className="mobile-menu-item"
            onClick={() => handleTabChange('form')}
          >
            {t('tabs.form')}
          </button>
        )}
        <div className="mobile-language-selector">
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
      </nav>
      <img 
        src={weddingImage} 
        alt="Wedding" 
        className="picture-placeholder"
      />
      <div className="info-section">
        <h2>{t('home.address')}</h2>
        <p><a href="https://maps.app.goo.gl/ZCeGoLakT5PNQFYc7" target="_blank" rel="noopener noreferrer">{t('home.addressValue')}</a></p>
        <p>{t('home.addressDetails')}</p>
      </div>
      <div className="info-section">
        <h2>{t('home.schedule')}</h2>
        <p>{t('home.scheduleValue')}</p>
        <p>{t('home.scheduleDescription')}</p>
      </div>
      <div className="info-section">
        <h2>{t('additional.transportation')}</h2>
        <ul>
          <li>{t('additional.busFuenterrabia')}: {t('additional.plazaSanCristobal')} (TBC)</li>
          <li>{t('additional.busSanSebastian')}: {t('additional.alamedaBoulevard')} (TBC)</li>
        </ul>
        <p>{t('additional.busReturnTimes')}</p>
        <p>{t('additional.parkingInfo')}</p>
      </div>
    </div>
  );
};

export default Home;
