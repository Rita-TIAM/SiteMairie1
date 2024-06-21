import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Gestion de la soumission du formulaire de connexion
  const handleLogin = (e) => {
    e.preventDefault();
    // Logique de connexion ici
  };

  // Redirection vers la page d'inscription
  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Accéder À Mon Compte</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Adresse :</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot De Passe :</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Se Connecter</button>
        </form>
        <button className="btn btn-link" onClick={handleRegisterClick}>Créer mon compte</button>
      </div>
      <div className="auth-image login-image"></div>
    </div>
  );
};

export default Login;
