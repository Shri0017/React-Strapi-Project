
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import { ApolloClient,InMemoryCache,ApolloProvider } from '@apollo/client';

import SiteHeader from "./components/SiteHeader";
import Category from "./pages/Category";
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";

//apollo Client
const client = new ApolloClient({
  uri:"http://localhost:1337/graphql",
  cache:new InMemoryCache()
})


function App() {
  return (
    <Router>
      <ApolloProvider client={client}> 
    <div className="App">
     <SiteHeader />
      <Routes>
      <Route  path='/' element={<Homepage />}/>
      <Route  path='/details/:id' element={<ReviewDetails />}/>
      <Route  path='/category/:id' element={<Category />}/>
      </Routes>
    </div>
    </ApolloProvider>
    </Router>
  );
}

export default App;
