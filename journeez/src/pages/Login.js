import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import  Link  from 'next/link';
import { useRouter } from 'next/router';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
// import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
// import { resolvers, typeDefs } from "../server/schemas/resolvers";



// const client = new ApolloClient({
//   uri: "http://localhost:4000/graphql",
//   cache: new InMemoryCache(),
//   resolvers: resolvers,
//   typeDefs: typeDefs,
// });

// const { data, loading, error } = useQuery(GET_POSTS);

// const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);

function Login() {
  const router = useRouter();
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
      router.push('./Profile'); // redirect to profile page
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="login-container my-1">
      <Link className='go-to-signup' href="./Signup">← Go to Signup</Link>

      <h2 className='login-heading'>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="submit-button flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
