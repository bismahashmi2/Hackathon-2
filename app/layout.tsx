import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Headers/Header1";
import Navbar from "./components/Navbar/Navbar1";
import Footer from "./components/Footer/footer"
import { Children } from "react";
import { Root } from "postcss";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "UI/UX Hackathon Project",
  description: "This is my first Next.Js Project",
};


   type RootLayoutProps = {
    children: React.ReactNode
  }
  const RootLayout: React.FC <RootLayoutProps> = (props) => {
    console.log (props , "props")
    return (
      <html lang = "en">
        <body>
          <Header/>
          <Navbar/>
          {props.children}
          <Footer/>
        </body>
      </html>
    )
  }
  
  
  export default RootLayout;
