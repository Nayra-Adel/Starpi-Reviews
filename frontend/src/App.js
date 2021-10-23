import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import HomePage from './pages/HomePage'
import ReviewDetails from './pages/ReviewDetails'
import Category from './pages/Category'
import SiteHeader from './components/SiteHeader'

// apollo client
const client = new ApolloClient({
  uri: 'htttp://localhost:2000//graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <Router>
      <ApolloProvider client = {client}>
        <div className="App">
          <SiteHeader />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/details/:id">
              <ReviewDetails />
            </Route>
            <Route path="/categories/:id">
              <Category />
            </Route>
          </Switch>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
