import {
  useLocation,
  useNavigate,
  useParams,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/footer';
import Home from './components/home';
import Settings from './components/settings';
import { SettingsProvider } from "./context/settings-provider";

function withRouter(Component: React.ComponentType<any>) {
  function ComponentWithRouterProp(props: any) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

function SecureApp() {
  const theme = 'light';

  return (
    <div className="app" data-theme={theme}>
      <div className="app__content">
        <SettingsProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          <Footer />
        </SettingsProvider>
      </div>
    </div>
  );
}

export default withRouter(SecureApp);
