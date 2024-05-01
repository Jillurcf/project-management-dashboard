// "use client"
import { Inter } from "next/font/google";
import "./ui/globals.css";
import QueryContextProvider from "@/context/queryContext";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
     
      <body className={inter.className}>
     <QueryContextProvider>
     
      {children}
     </QueryContextProvider>
     
      </body>
    </html>
  );
}
