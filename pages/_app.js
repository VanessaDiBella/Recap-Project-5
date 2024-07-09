import GlobalStyle from "../styles";
import ArtPieces from "./art-pieces";
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <ArtPieces />
    </>
  );
}
