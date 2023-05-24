import localFont from "next/font/local";
import { Metadata } from "next";
import "./globals.css";

const berkeley = localFont({
  display: "swap",
  src: "./BerkeleyMono-Regular.woff2",
});

export const metadata: Metadata = {
  title: "Tweets",
  description: "Tweets",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en-US" className={berkeley.className}>
      <body>{children}</body>
    </html>
  );
}
