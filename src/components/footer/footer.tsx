import { useState } from "react";
import { MdAccountBalanceWallet, MdSettings, MdStar } from "react-icons/md";
import { Link } from "react-router-dom";
import './footer.css';

const Footer = () => {
  const active= window.location.pathname;

  return (
    <footer className="app__footer">
      <Link to="/" className="link--custom">
        <div className={`footer__button ${active === '/' ? 'active' : ''}`}>
          <MdAccountBalanceWallet size={32} />
          Balance
        </div>
      </Link>
      <Link to="/stats" className="link--custom">
        <div className={`footer__button ${active === '/stats' ? 'active' : ''}`}>
          <MdStar size={32} />
          Stats
        </div>
      </Link>
      <Link to="/settings" className="link--custom">
        <div className={`footer__button ${active === '/settings' ? 'active' : ''}`}>
          <MdSettings size={32} />
          Settings
        </div>
      </Link>
    </footer>
  );
}

export default Footer;
