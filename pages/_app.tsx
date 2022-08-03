import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>tweets</title>
      </Head>

      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default App;
