import type { Metadata } from "next";
import { Indie_Flower, Patrick_Hand } from "next/font/google";
import "./globals.css";

const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  weight: ["400"],
});


const indieFlower = Indie_Flower({
  subsets: ["latin"],
  weight: ["400"],
});


export const metadata: Metadata = {
  title: "Mena Special Present",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${indieFlower.className} antialiased overflow-clip`}
      >
        {children}
      </body>
    </html>
  );
}
