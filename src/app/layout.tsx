import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import AntProvider from "@/providers/ant-provider";
import TanProvider from "@/providers/tan-provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ant Design",
  description: "Ant Design Boilerplate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanProvider>
          <AntdRegistry>
            <AntProvider>
              {children}
            </AntProvider>
          </AntdRegistry>
          {
            process.env.NODE_ENV === "development" && <ReactQueryDevtools />
          }
        </TanProvider>
      </body>
    </html>
  );
}
