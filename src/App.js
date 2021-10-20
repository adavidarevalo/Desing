import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import Layout from './components/Layout/Layout';
import PortfolioName from './pages/Portfolio/PortfolioName'
import Contact from './pages/Contact/Contact'
import NotFoundPage from './pages/NotFound/NotFoundPage'

function App() {
  return (
    <Router>
      <Layout>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/portfolio' component={Portfolio}/>
        <Route exact path='/portfolio/:name' component={PortfolioName}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact component={NotFoundPage}/>
      </Switch>
      </Layout>
    </Router>
  );
}

export default App;
