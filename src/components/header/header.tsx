import './header.css';

type AppHeaderProps = {
  title: string;
}

const Header = ({title}: AppHeaderProps) => {
  return (
    <header className="app-header">
      <button className="back-button" onClick={() => window.history.back()}>
        Back
      </button>
      <div className="app__title">{title}</div>
      <div></div>
    </header>
  )
};

export default Header;
