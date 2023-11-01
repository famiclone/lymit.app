import { useState } from 'react';
import { MdAccountBalanceWallet, MdSettings } from 'react-icons/md';
import settingsIcon from './assets/icons/settings.svg';
import './App.css';

type AppState = {
  dayLimit: number;
  currentDate: Date;
  total: number;
  currency: string;
  nextPaymentDate: Date;
}

function App() {
  const [state, setState] = useState<AppState>({
    dayLimit: 0,
    total: 5868,
    currentDate: new Date(),
    currency: 'UAH',
    nextPaymentDate: new Date(2023, 10, 15 + 1),
  });

  function getDaysLeft(): number {
    const { currentDate, nextPaymentDate } = state;
    const daysLeft = Math.floor((nextPaymentDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));
    return daysLeft;
  }

  return (
    <div className="app">
      <div className="app__content">
        <header className="app__header">
          <h1 className="app__header-title">Balance</h1>
        </header>
        <div className="card">
          <div className="card__title primary">Daily limit</div>
          <div className="d-flex">
            <div className="text--big daylimit">{(state.total / getDaysLeft()).toFixed(2)}</div>
            <div className="text--secondary">{state.currency}</div>
          </div>
        </div>
        <div className="card">
          <div className="card__title secondary">Total amount</div>
          <div className="d-flex">
            <div className="daylimit">{(state.total)}</div>
            <div className="text--secondary">{state.currency}</div>
          </div>
        </div>
      </div>

      <footer className="app__footer">
        <div className="footer__button active">
          <MdAccountBalanceWallet size={32}/>
          Balance
        </div>
        <div className="footer__button">
          <MdSettings size={32}/>
          Settings
        </div>
      </footer>
    </div>
  );
}

export default App;
