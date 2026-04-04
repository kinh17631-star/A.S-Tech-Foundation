import "../app/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  title: "A.S Tech Foundation",
  description: "Buy Premium Ready-Made Websites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />

  
        <WhatsAppButton />
      </body>
    </html>
  );
}
