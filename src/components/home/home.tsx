import { useEffect, useState } from "react";
import { monoClient } from "../../api";
import { AppState, MonoAccount } from "../../types";
import Footer from "../footer";

const Home = () => {
  const [state, setState] = useState<AppState>({
    dayLimit: 0,
    currentDate: new Date(),
    currency: 'UAH',
    nextPaymentDate: new Date(2023, 11, 10),
    personal: null,
  });

  function getDaysLeft(): number {
    const { currentDate, nextPaymentDate } = state;
    const daysLeft = Math.floor((nextPaymentDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));
    return daysLeft;
  }

  useEffect(() => {
    async function fetchMonoInfo() {
      try {
        const data = await monoClient.getClientInfo();

        const card = data?.accounts.find((account: MonoAccount) => account.id === process.env.REACT_APP_PRIMARY_MONO_CARD_ID);

        if (data && card) {
          setState({
            ...state,
            personal: {
              name: data.name,
              card
            }
          });
        }
      } catch (e) {
        console.error(e);
      }
    };

    //fetchMonoInfo();
  }, []);


  return (
    <>
      <header className="app__header">
        <h1 className="app__header-title">Balance</h1>
      </header>
      {state.personal && (
        <>
          <div className="card">
            <div className="card__title primary">Daily limit</div>
            <div className="d-flex">
              <div className="text--big daylimit">{((state.personal.card.balance / 100) / getDaysLeft()).toFixed(2)}</div>
              <div className="text--secondary">{state.currency}</div>
            </div>
          </div>
          <div className="card">
            <div className="card__title secondary">Total amount</div>
            <div className="d-flex">
              <div className="daylimit">{(state.personal.card.balance / 100)}</div>
              <div className="text--secondary">{state.currency}</div>
            </div>
          </div>
        </>
      )}

    </>
  );
}

export default Home;
