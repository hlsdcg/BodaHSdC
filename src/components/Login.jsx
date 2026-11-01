import { useState } from 'react';
import LanguageIcon from './LanguageIcon';

const Login = ({ onLogin, language, setLanguage, t }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const correctUsername = "Carmen&Paco";
    const correctPassword = "Boda2027";

    if (username === correctUsername && password === correctPassword) {
      onLogin();
    } else {
      setError(t('login.error'));
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-heading">{t('login.heading')}</h1>
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
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>{t('login.username')}</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>{t('login.password')}</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="login-button">{t('login.button')}</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
