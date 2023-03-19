import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Component {...pageProps} />
    </div>
  );
}
