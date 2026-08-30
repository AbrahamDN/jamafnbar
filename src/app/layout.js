import { Inter } from "next/font/google";
// import Script from "next/script";

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

 </body>
    </html>
  );
}
