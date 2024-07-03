import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MD Tarekul Islam Sabbir",
  description: "Portfolio of MD Tarekul Islam Sabbir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className="bg-[#854df50a]">
      <body className={inter.className}>
        <div className="max-w-6xl mx-auto ">
          <Nav />
          {children}
        </div>
       
      </body>
    </html>
  );
}
