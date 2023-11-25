import { BrowserRouter } from 'react-router-dom';
import './App.css';
import SecureApp from './secure-app';

function App() {

  return (
    <BrowserRouter>
      <SecureApp />
    </BrowserRouter>
  );
}

export default App;
