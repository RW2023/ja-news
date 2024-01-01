//src/pages/_app.tsx
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import Layout from '@/app/layout';
import '@fortawesome/fontawesome-free/css/all.min.css';


function MyApp({ Component, pageProps }: AppProps) {
    return (
      <Layout>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={pageProps.route} />
        </AnimatePresence>
      </Layout>
    );
}

export default MyApp;