import Layout from "../comps/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} /> {/* component들이 렌더링된다. */}
    </Layout>
  );
}

export default MyApp;
