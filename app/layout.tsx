import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tweets",
  description: "Tweets",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en-US">
      <body>{children}</body>
    </html>
  );
}
