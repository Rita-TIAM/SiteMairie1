import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const navigate = useNavigate();

  // Gestion de la soumission du formulaire d'inscription
  const handleRegister = (e) => {
    e.preventDefault();
    // Logique d'inscription ici
  };

  // Redirection vers la page de connexion
  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Créer Mon Compte</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe :</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmation De Mot de passe :</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              id="acceptedTerms"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              required
            />
            <label htmlFor="acceptedTerms">J'accepte toutes les conditions de confidentialité</label>
          </div>
          <button type="submit" className="btn btn-primary">Soumettre</button>
        </form>
        <button className="btn btn-link" onClick={handleLoginClick}>Se connecter</button>
      </div>
      <div className="auth-image register-image"></div>
    </div>
  );
};

export default Register;
