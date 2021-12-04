import "tailwindcss/tailwind.css";
import "../styles/styles.css";
import Layout from "../components/Layout/Layout";
import { createClient } from "@supabase/supabase-js";
import { Provider } from "react-supabase";
import { UserContextProvider } from "../utils/useUser";
import { AuthProvider } from "../utils/useAuth";

const client = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
