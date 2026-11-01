import { useState } from 'react';
import LanguageIcon from './LanguageIcon';

const Form = ({ setActiveTab, isMobileMenuOpen, setIsMobileMenuOpen, menuRef, language, setLanguage, t, isBeforeDeadline }) => {
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    song: '',
    allergies: '',
    withGuest: false,
    guestFirstName: '',
    guestLastName: '',
    guestSong: '',
    guestAllergies: '',
    busToRestaurant: false,
    busFromRestaurant: false,
    busLocation: '',
    contactMethod: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxTv1UC0vQCMhD2l27IwuO93ISzmXd_yy9Aj6GrQEpT7Z44avf4nMdtL6v_1rVf3vW0/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      alert(t('form.success'));
      setIsLoading(false);
      setFormData({
        firstName: '',
        lastName: '',
        song: '',
        allergies: '',
        withGuest: false,
        guestFirstName: '',
        guestLastName: '',
        guestSong: '',
        guestAllergies: '',
        busToRestaurant: false,
        busFromRestaurant: false,
        busLocation: '',
        contactMethod: ''
      });
      setActiveTab('home');
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsLoading(false);
      alert(t('form.error'));
    }
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
        <h1 className="form-heading">{t('form.heading')}</h1>
      </div>
      <p className="form-disclaimer mobile-header">{t('form.disclaimer')}</p>
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
      <h1 className="form-heading desktop-only">{t('form.heading')}</h1>
      <p className="form-disclaimer desktop-only">{t('form.disclaimer')}</p>
      <form onSubmit={handleSubmit} className="rsvp-form">
        <div className="form-group">
          <label>{t('form.firstName')}</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>{t('form.lastName')}</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>
            {t('form.song')}
            <span className="tooltip-icon" title={t('form.songTooltip')}>?</span>
          </label>
          <input
            type="text"
            name="song"
            value={formData.song}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label>{t('form.allergies')}</label>
          <input
            type="text"
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group toggle-group">
          <label>{t('form.withGuest')}</label>
          <div className="toggle-buttons">
            <button
              type="button"
              className={formData.withGuest ? 'active' : ''}
              onClick={() => setFormData(prev => ({ ...prev, withGuest: true }))}
            >
              {t('form.yes')}
            </button>
            <button
              type="button"
              className={!formData.withGuest ? 'active' : ''}
              onClick={() => setFormData(prev => ({ ...prev, withGuest: false }))}
            >
              {t('form.no')}
            </button>
          </div>
        </div>
        
        {formData.withGuest && (
          <>
            <div className="form-group">
              <label>{t('form.guestFirstName')}</label>
              <input
                type="text"
                name="guestFirstName"
                value={formData.guestFirstName}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label>{t('form.guestLastName')}</label>
              <input
                type="text"
                name="guestLastName"
                value={formData.guestLastName}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label>
                {t('form.guestSong')}
                <span className="tooltip-icon" title={t('form.songTooltip')}>?</span>
              </label>
              <input
                type="text"
                name="guestSong"
                value={formData.guestSong}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label>{t('form.guestAllergies')}</label>
              <input
                type="text"
                name="guestAllergies"
                value={formData.guestAllergies}
                onChange={handleChange}
              />
            </div>
          </>
        )}
        
        <div className="form-group toggle-group">
          <label>{t('form.busToRestaurant')}</label>
          <div className="toggle-buttons">
            <button
              type="button"
              className={formData.busToRestaurant ? 'active' : ''}
              onClick={() => setFormData(prev => ({ ...prev, busToRestaurant: true }))}
            >
              {t('form.yes')}
            </button>
            <button
              type="button"
              className={!formData.busToRestaurant ? 'active' : ''}
              onClick={() => setFormData(prev => ({ ...prev, busToRestaurant: false }))}
            >
              {t('form.no')}
            </button>
          </div>
        </div>
        
        <div className="form-group toggle-group">
          <label>{t('form.busFromRestaurant')}</label>
          <div className="toggle-buttons">
            <button
              type="button"
              className={formData.busFromRestaurant ? 'active' : ''}
              onClick={() => setFormData(prev => ({ ...prev, busFromRestaurant: true }))}
            >
              {t('form.yes')}
            </button>
            <button
              type="button"
              className={!formData.busFromRestaurant ? 'active' : ''}
              onClick={() => setFormData(prev => ({ ...prev, busFromRestaurant: false }))}
            >
              {t('form.no')}
            </button>
          </div>
        </div>
        
        {(formData.busToRestaurant || formData.busFromRestaurant) && (
          <div className="form-group">
            <label>{t('form.busLocation')}</label>
            <select
              name="busLocation"
              value={formData.busLocation}
              onChange={handleChange}
              className="language-dropdown"
              required
            >
              <option value="">{t('form.selectLocation')}</option>
              <option value="Fuenterrabía">{t('form.fuenterrabia')}</option>
              <option value="San Sebastián">{t('form.sanSebastian')}</option>
            </select>
          </div>
        )}
        
        <div className="form-group">
          <label>
            {t('form.contactMethod')}
            <span className="tooltip-icon" title={t('form.contactMethodTooltip')}>?</span>
          </label>
          <input
            type="text"
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit" className="confirm-button" disabled={isLoading}>
          {isLoading && <span className="loader"></span>}
          {isLoading ? t('form.sending') : t('form.confirm')}
        </button>
      </form>
    </div>
  );
};

export default Form;
