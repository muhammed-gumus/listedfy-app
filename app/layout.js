import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { ItemsProvider } from "./context/items";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Listedfy",
  description: "Music IMDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ItemsProvider>
        <Providers>{children}</Providers>
        </ItemsProvider>
      </body>
    </html>
  );
}
