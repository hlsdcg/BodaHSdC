import { useLanguage } from '../contexts/LanguageContext';
import LanguageIcon from './LanguageIcon';

const AdditionalInfo = ({ isMobileMenuOpen, setIsMobileMenuOpen, menuRef, setActiveTab, language, setLanguage, t, isBeforeDeadline }) => {
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
        <h1 className="heading">{t('tabs.additional')}</h1>
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
      <h1 className="heading desktop-only">{t('tabs.additional')}</h1>
      <div className="info-section">
        <h2>{t('additional.terms')}</h2>
        <ul>
          <li>{t('additional.dressCode')}: {t('additional.greenAndWhite')}</li>
          <li>{t('additional.noChildren')}</li>
          <li>{t('additional.noFlats')}</li>
        </ul>
      </div>
      <div className="info-section">
        <h2>{t('additional.hotels')}</h2>
        <p>{t('additional.hotelsIntro')}</p>
        <h3>{t('additional.sanSebastianHotels')}</h3>
        <ul>
          <li><a href="https://maps.app.goo.gl/x2WdTRMN4aVSL91B8" target="_blank" rel="noopener noreferrer">{t('additional.hotelInsideMelia')}</a>: {t('additional.detailsToBeConfirmed')}</li>
        </ul>
        <h3>{t('additional.fuenterrabiaHotels')}</h3>
        <ul>
          <li><a href="https://maps.app.goo.gl/hWvMVHY1ymTzTdbJA" target="_blank" rel="noopener noreferrer">{t('additional.hotelJauregui')}</a>: {t('additional.hotelJaureguiDetails')}<p>{t('additional.hotelJaureguiContactInfo')}</p></li>
        </ul>
      </div>
      <div className="info-section">
        <h2>{t('additional.tips')}</h2>
        <p>{t('additional.tipsIntro')}</p>
        <p>{t('additional.accommodationRecommendation')}</p>
        <h3>{t('additional.pintxosSanSebastian')}</h3>
        <ol>
          <li><a href="https://maps.app.goo.gl/b53fq4RjhZPXiMY49" target="_blank" rel="noopener noreferrer">{t('additional.laCuchara')}</a>: {t('additional.laCucharaItems')}</li>
          <li><a href="https://maps.app.goo.gl/PpGPXpJ4KW5mrvEh9" target="_blank" rel="noopener noreferrer">{t('additional.barSport')}</a>: {t('additional.barSportItems')}</li>
          <li><a href="https://maps.app.goo.gl/FRPCVk9LaNzsBaZX9" target="_blank" rel="noopener noreferrer">{t('additional.casaUrola')}</a>: {t('additional.casaUrolaItems')}</li>
          <li><a href="https://maps.app.goo.gl/WDHfYdT6YqoEMqYr9" target="_blank" rel="noopener noreferrer">{t('additional.atari')}</a>: {t('additional.atariItems')}</li>
          <li><a href="https://maps.app.goo.gl/hjseMU37dehWMtkx7" target="_blank" rel="noopener noreferrer">{t('additional.bordaBerri')}</a>: {t('additional.bordaBerriItems')}</li>
          <li><a href="https://maps.app.goo.gl/1TuTYXTUnyQnNJN66" target="_blank" rel="noopener noreferrer">{t('additional.gandarias')}</a>: {t('additional.gandariasItems')}</li>
          <li><a href="https://maps.app.goo.gl/xUHqyveaZ1nTf983A" target="_blank" rel="noopener noreferrer">{t('additional.laVina')}</a>: {t('additional.laVinaItems')}</li>
        </ol>
        <h3>{t('additional.pintxosFuenterrabia')}</h3>
        <ol>
          <li><a href="https://maps.app.goo.gl/yzToNaHfCLcebZPf6" target="_blank" rel="noopener noreferrer">{t('additional.granSol')}</a>: {t('additional.granSolItems')}</li>
          <li><a href="https://maps.app.goo.gl/fMdepiJAUnWgbnvx7" target="_blank" rel="noopener noreferrer">{t('additional.barIgnacio')}</a>: {t('additional.barIgnacioItems')}</li>
          <li><a href="https://maps.app.goo.gl/wiiuwYuXhoWccbA3A" target="_blank" rel="noopener noreferrer">{t('additional.irupuntxa')}</a>: {t('additional.irupuntxaItems')}</li>
          <li><a href="https://maps.app.goo.gl/5JwWSiXrsKLKk4Y19" target="_blank" rel="noopener noreferrer">{t('additional.rafael')}</a></li>
        </ol>
        <h3>{t('additional.restaurantsNearSanSebastian')}</h3>
        <ol>
          <li><a href="https://maps.app.goo.gl/EJp6Qk6tZZabLQBj9" target="_blank" rel="noopener noreferrer">{t('additional.kako')}</a>: {t('additional.kakoItems')}</li>
          <li><a href="https://maps.app.goo.gl/DBz3WRi5gyTSN5BDA" target="_blank" rel="noopener noreferrer">{t('additional.iriarteEnea')}</a>: {t('additional.iriarteEneaItems')}</li>
          <li><a href="https://maps.app.goo.gl/2uB78dvG98FjwB5w8" target="_blank" rel="noopener noreferrer">{t('additional.casaCamara')}</a>: {t('additional.casaCamaraItems')}</li>
          <li><a href="https://maps.app.goo.gl/craffpJoFizdWhWdA" target="_blank" rel="noopener noreferrer">{t('additional.astillero')}</a>: {t('additional.astilleroItems')}</li>
          <li><a href="https://maps.app.goo.gl/JeT46VwbK7tSVqSh9" target="_blank" rel="noopener noreferrer">{t('additional.hermandad')}</a>: {t('additional.hermandadItems')}</li>
          <li><a href="https://maps.app.goo.gl/1UWXUnirwpw4yBfN9" target="_blank" rel="noopener noreferrer">{t('additional.kupela')}</a>: {t('additional.kupelaItems')}</li>
          <li><a href="https://maps.app.goo.gl/DQjt2pqyAfKbQxoj8" target="_blank" rel="noopener noreferrer">{t('additional.abarka')}</a> ({t('additional.expensive')}).</li>
          <li><a href="https://maps.app.goo.gl/J62dPXdawVyjouGX9" target="_blank" rel="noopener noreferrer">{t('additional.juanitoKojua')}</a>: {t('additional.juanitoKojuaItems')} ({t('additional.expensive')}).</li>
          <li><a href="https://maps.app.goo.gl/rdMp44et4Fvhr14aA" target="_blank" rel="noopener noreferrer">{t('additional.barNestor')}</a>: {t('additional.barNestorItems')}</li>
          <li><a href="https://maps.app.goo.gl/6ZL8JjUgFx6ELecD7" target="_blank" rel="noopener noreferrer">{t('additional.petritegi')}</a>: {t('additional.petritegiItems')}</li>
          <li><a href="https://maps.app.goo.gl/H4GdJnojV21ZUtW9A" target="_blank" rel="noopener noreferrer">{t('additional.patxikuenea')}</a>: {t('additional.patxikueneaItems')}</li>
          <li><a href="https://maps.app.goo.gl/htbjnnp7XcsLJYLX7" target="_blank" rel="noopener noreferrer">{t('additional.patrixi')}</a></li>
          <li><a href="https://maps.app.goo.gl/r8NcQ9VE3vSXQVRo9" target="_blank" rel="noopener noreferrer">{t('additional.karlosArguinano')}</a>: {t('additional.karlosArguinanoItems')}</li>
        </ol>
        <h3>{t('additional.placesToVisit')}</h3>
        <ol>
          <li><a href="https://maps.app.goo.gl/Pkzy82JvFU3nNucf7" target="_blank" rel="noopener noreferrer">{t('additional.playaConcha')}</a></li>
          <li><a href="https://maps.app.goo.gl/tMfir1BPLfA48M5x7" target="_blank" rel="noopener noreferrer">{t('additional.miradorIgueldo')}</a></li>
          <li><a href="https://maps.app.goo.gl/PrT7BQqSVDbjurbu9" target="_blank" rel="noopener noreferrer">{t('additional.palacioMiramar')}</a></li>
          <li><a href="https://maps.app.goo.gl/5GTB2zuqQDF9iSB77" target="_blank" rel="noopener noreferrer">{t('additional.miradorPaseoNuevo')}</a></li>
          <li><a href="https://maps.app.goo.gl/gRFbZZ6nPj68vP2J8" target="_blank" rel="noopener noreferrer">{t('additional.palacioAiete')}</a></li>
          <li><a href="https://maps.app.goo.gl/rjY64jpBCWSjZfwF8" target="_blank" rel="noopener noreferrer">{t('additional.estadioAnoeta')}</a></li>
          <li><a href="https://maps.app.goo.gl/n5Cxz3TKR4GQJDqc6" target="_blank" rel="noopener noreferrer">{t('additional.museoChillida')}</a></li>
          <li><a href="https://maps.app.goo.gl/ezxJ11KRe93ceFAg9" target="_blank" rel="noopener noreferrer">{t('additional.aquarium')}</a></li>
          <li><a href="https://maps.app.goo.gl/sCnX5URu4VZE69zB6" target="_blank" rel="noopener noreferrer">{t('additional.fuenterrabia')}</a></li>
          <li><a href="https://maps.app.goo.gl/42AJCLHYWcALERuJ7" target="_blank" rel="noopener noreferrer">{t('additional.parador')}</a></li>
          <li><a href="https://maps.app.goo.gl/P88JvQHeQ98yRDLG7" target="_blank" rel="noopener noreferrer">{t('additional.penasAya')}</a></li>
          <li><a href="https://maps.app.goo.gl/Ti7iNzzdEpFEGbjP9" target="_blank" rel="noopener noreferrer">{t('additional.zumaya')}</a>: {t('additional.zumayaItems')}</li>
          <li><a href="https://maps.app.goo.gl/LDnRzQ1oREvjTWxs9" target="_blank" rel="noopener noreferrer">{t('additional.getaria')}</a></li>
          <li><a href="https://maps.app.goo.gl/HCBQRWkm3rBwWfYUA" target="_blank" rel="noopener noreferrer">{t('additional.zarauz')}</a></li>
        </ol>
      </div>
      <div className="info-section">
        <h2>{t('additional.gifts')}</h2>
        <p>{t('additional.giftsText')}</p>
        <p>ES61 0128 7820 8601 0428 9522</p>
      </div>
    </div>
  );
};

export default AdditionalInfo;
