import Document, { Html, Head, Main, NextScript } from 'next/document';
import logoS from '../assets/logos/SponSure_S.png';
class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="shortcut icon" href={logoS} />
          <link
            rel="stylesheet"
            crossOrigin="anonymous"
            href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@600;700&family=DM+Sans:wght@400;500;700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
