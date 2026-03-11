import { Roboto, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />

        {children}
      </body>
    </html>
  );
}
