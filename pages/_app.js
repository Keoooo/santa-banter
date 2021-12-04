import "tailwindcss/tailwind.css";
import "../styles/styles.css";
import Layout from "../components/Layout/Layout";
import { UserContextProvider } from "../utils/useUser";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContextProvider>
  );
}

export default MyApp;
