import { Inter } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { AppProvider } from "./context.js/appContext";
import Content from "./components/content";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JAMAF Restaurant",
  description:
    "Jamaican Bar & Cuisine in Manchester. Website by Originally.Black",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <AppProvider>
          <Content>{children}</Content>
        </AppProvider>
// <Script
//   id="originally-black-widget"
//   src="http://localhost:3000/api/blackcard/widget/v1.js?v=2"
//   data-blackcard-key="bcw_live_qGPoFyLQ8qwc6d2EDE51zUsfH2oGi2weEkA1T6HbCKA"
//   data-label="Open BlackCard"
//   data-position="left"
//   strategy="afterInteractive"
// />
 </body>
    </html>
  );
}
