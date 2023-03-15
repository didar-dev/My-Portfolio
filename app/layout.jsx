import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        {children} <Analytics />
      </body>
    </html>
  );
}
