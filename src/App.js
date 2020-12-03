// Import pages
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetailPage from './pages/MovieDetailPage';
// Import Style
import GlobalStyle from './components/GlobalStyle';
// Import components
import Nav from './components/Nav';
// Import Router
import { Switch, Route, useLocation } from 'react-router-dom';
// Import Framer
import { AnimatePresence } from 'framer-motion';
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id" exact>
            <MovieDetailPage />
          </Route>
          <Route path="/contact" exact>
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
