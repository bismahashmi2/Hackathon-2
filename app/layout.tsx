import type { Metadata } from "next";
import Header from "@/components/Header/Header"
import "./globals.css";
import Footer from "@/components/Footer/footer";



export const metadata: Metadata = {
  title: "UI/UX Hackathon Project",
  description: "This is my first Next.Js Project",
};

   type RootLayoutProps = {
    children: React.ReactNode
  }
  const RootLayout: React.FC <RootLayoutProps> = (props) => {
    
    return (
      <html lang = "en">
       
        <body className="overflow-x-hidden">
          <Header />
         {props.children}
          <Footer/>
        </body>
      </html>
    )
  }
  
  
  export default RootLayout;
