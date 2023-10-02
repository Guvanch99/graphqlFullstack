import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import App from './app/components/App/app';
import client from "./utils/client";
import {loadDevMessages, loadErrorMessages} from "@apollo/client/dev";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
