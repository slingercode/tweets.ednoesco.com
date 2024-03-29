import localFont from "next/font/local";
import { Metadata } from "next";
import "./globals.css";

const berkeley = localFont({
  display: "swap",
  variable: "--font-berkeley",
  src: "./BerkeleyMono.woff2",
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
    <html lang="en-US" className={berkeley.variable}>
      <body className="text-ednoesco-primary bg-ednoesco-background p-5 sm:p-10 max-w-screen-sm mx-auto">
        {children}
      </body>
    </html>
  );
}
