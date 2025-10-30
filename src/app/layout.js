import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const isProd = process.env.NODE_ENV === 'production';
const prefix = isProd ? '/karavan-timeline' : '';

export const metadata = {
  title: "Karavan ACF Timeline",
  description:
    "Essa é a linha do tempo da Karavan, a caravan com K, que representará o ACF e todo o Brasil no Sema Show 2025",
  icons: {
    icon: `${prefix}/logo1.png`,
    shortcut: `${prefix}/logo1.png`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
