import "./globals.css";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3FW29S7XTM"
        ></Script>
        <Script>
          {`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-3FW29S7XTM');
`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
