import "@styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";
import MainLayout from "@components/layout/layout";
import Head from "next/head";
import "styles/reset.scss";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Dday Chill</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
