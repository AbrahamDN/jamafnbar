import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./context.js/appContext";
import Content from "./components/content";
import Script from "next/script";


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
  <script src="http://localhost:3000/api/blackcard/widget/v1.js" data-blackcard-key="bcw_live_JbrdBdBgAu9z8fBtPA7ZH5WB7ZAa6Dq4jdLfu4PTAjg" data-label="Open BlackCard" data-position="right" defer></script>
        </body>
    </html>
  );
}
