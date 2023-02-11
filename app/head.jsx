import Script from "next/script";
export default function Head() {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-3FW29S7XTM`}
      />

      <Script id="ga-script" strategy="lazyOnload">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-3FW29S7XTM', {
        page_path: window.location.pathname,
      });
          `}
      </Script>
      <title>Didar Abdulkhaliq</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="manifest" href="/manifest.json" />
      <meta
        name="description"
        content="Didar Abdulkhaliq's personal portfolio website"
      />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:image" content="https://i.imgur.com/52NnUgf.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:title" content="Didar Abdulkhaliq" />
      <meta
        property="og:description"
        content="Didar Abdulkhaliq's personal portfolio website"
      />
      <meta property="og:url" content="https://www.didar.dev" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Didar Abdulkhaliq" />
      <meta name="google" content="notranslate" key="notranslate" />
      <meta property="og:locale" content="en_US" />
    </>
  );
}
