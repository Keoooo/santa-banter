import "tailwindcss/tailwind.css";
import "../styles/styles.css";
import Layout from "../components/Layout/Layout";
import { createClient } from "@supabase/supabase-js";
import { Provider } from "react-supabase";
import { motion } from "framer-motion";
import { AuthProvider } from "../utils/useAuth";

const client = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

function MyApp({ Component, pageProps, router }) {
  return (
    <Provider value={client}>
      <AuthProvider>
        <Layout>
          <motion.div
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            transition={{ duration: 1 }}
            variants={{
              pageInitial: { opacity: 0, x: -100 },
              pageAnimate: { opacity: 1, x: 0 },
              pageExit: { opacity: 0, x: 100 },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </Layout>
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
