// Import pages
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
// Import Style
import GlobalStyle from './components/GlobalStyle';
// Import components
import Nav from './components/Nav';
// Import Router
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />

      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/contact" exact>
          <ContactUs />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
