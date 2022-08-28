import { AppProps } from 'next/app';
import { StrictMode } from 'react';
import { Provider } from 'urql';
import { client } from '~/client';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StrictMode>
      <Provider value={client}>
        <Component {...pageProps} />
      </Provider>
    </StrictMode>
  );
};

export default App;
