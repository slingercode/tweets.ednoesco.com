import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="slingercode personal collection of tweets"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="slingercode" />
        <meta property="og:description" content="Collection of tweets" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dj4s8gwk9/image/upload/v1658541301/slingercode/og_dfynin"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
