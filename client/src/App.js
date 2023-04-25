import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { TravelProvider } from './utils/GlobalState';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Explore from './pages/Explore';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Blogs from './pages/Blogs';
import './index.css'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Add this line to fix the React DOM server error
if (typeof window !== "undefined") {
  require("react-dom");
}

export default function App() {
  return (

  
  <ApolloProvider client={client}>
    <Router>
      <div>
        <TravelProvider>
          <Nav />
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/login" 
              element={<Login />} 
            />
            <Route 
              path="/signup" 
              element={<Signup />} 
            />
            <Route 
              path="/about" 
              element={<About />} 
            />
            <Route 
              path="/explore" 
              element={<Explore />} 
            />
            <Route 
              path="/profile" 
              element={<Profile />} 
            />
            <Route 
              path="/blogs" 
              element={<Blogs />} 
            />
          </Routes>
        </TravelProvider>
      </div>
    </Router>
  </ApolloProvider>
  );
}


