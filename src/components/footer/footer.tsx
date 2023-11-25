import { useState } from "react";
import { MdAccountBalanceWallet, MdSettings, MdStar } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <footer className="app__footer">
      <Link to="/" className="link--custom">
        <div className={`footer__button ${active === 0 ? 'active' : ''}`} onClick={() => setActive(0)}>
          <MdAccountBalanceWallet size={32} />
          Balance
        </div>
      </Link>
      <Link to="/stats" className="link--custom">
        <div className={`footer__button ${active === 1 ? 'active' : ''}`} onClick={() => setActive(1)}>
          <MdStar size={32} />
          Stats
        </div>
      </Link>
      <Link to="/settings" className="link--custom">
        <div className={`footer__button ${active === 2 ? 'active' : ''}`} onClick={() => setActive(2)}>
          <MdSettings size={32} />
          Settings
        </div>
      </Link>
    </footer>
  );
}

export default Footer;
