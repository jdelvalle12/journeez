import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { TravelProvider } from '../utils/GlobalState';
import Nav from '../components/Nav';
import '../styles/globals.css';
import { setContext } from 'apollo-link-context';

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

export default function App({ Component, pageProps }) {
  return (
  <>

  <ApolloProvider client={client}>
   <TravelProvider>
    <Nav />
    <Component {...pageProps} />
    </TravelProvider>  
  </ApolloProvider>
  </>
  );
}


