import type { Metadata } from "next";
import { Inter, Libre_Baskerville, Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar,{Navigation} from "@/Navbar";
import Footer from "@/Footer";

// const inter = Inter({ subsets: ["latin"] });
const libreBaskerville = Libre_Baskerville({subsets: ['latin'], weight: "700"});
const roboto = Roboto({subsets: ['latin'], weight: "400"});

export const metadata: Metadata = {
  title: "Nateo",
  description: "Place where everything begins",
};


const navigation: Navigation = {
  home:   { path: "/",         displayName: "Home" },
  hero:   { path: "/Products", displayName: "Products" },
  about:  { path: "/about",    displayName: "About" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className} suppressHydrationWarning>
        <Providers>
          <Navbar navigation={navigation} />
          {children}
          
        </Providers>
        
        </body>
        
    </html>
  );
}
