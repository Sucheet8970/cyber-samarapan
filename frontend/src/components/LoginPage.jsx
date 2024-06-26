import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import { signup, login } from '../services/apiService'; 

function LoginPage() {
  const [isRightPanelActive, setRightPanelActive] = useState(false);
  const [signupData, setSignupData] = useState({ email: '', password: '' });
  const [signinData, setSigninData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Signup Data:', JSON.stringify(signupData, null, 2));
    console.log('Signin Data:', JSON.stringify(signinData, null, 2));
  }, [signupData, signinData]);

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSigninChange = (e) => {
    setSigninData({ ...signinData, [e.target.name]: e.target.value });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(signupData);
      alert('User registered successfully.');
      setRightPanelActive(false); // Switch to sign-in view after successful signup
    } catch (error) {
      alert(error);
    }
  };

  const handleSigninSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(signinData);
      alert('Login successful.');
      navigate('/home'); // Redirect to home page after successful login
    } catch (error) {
      alert('Invalid credentials.');
    }
  };

  return (
    <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
      <div className="form-container sign-up-container">
        <form onSubmit={handleSignupSubmit}>
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Username" name="username" value={signupData.username} onChange={handleSignupChange} />
          <input type="email" placeholder="Email" name="email" value={signupData.email} onChange={handleSignupChange} />
          <input type="password" placeholder="Password" name="password" value={signupData.password} onChange={handleSignupChange} />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form onSubmit={handleSigninSubmit}>
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" name="email" value={signinData.email} onChange={handleSigninChange} />
          <input type="password" placeholder="Password" name="password" value={signinData.password} onChange={handleSigninChange} />
          <a href="#">Forgot your password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" id="signIn" onClick={() => setRightPanelActive(false)}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" id="signUp" onClick={() => setRightPanelActive(true)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
