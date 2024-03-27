// import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import "@/styles/globals.css";
export const metadata: Metadata = {
  title: "전국 보건소 위치 안내",
  description: "전국 보건소 위치 안내 서비스 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="naver-site-verification"
          content="34354046817ce9ba08c0873250fe14840eb042f2"
        />
        <link
          rel="canonical"
          href="https://health-center-sigma.vercel.app"
        ></link>

        <meta
          name="google-site-verification"
          content="CjhiNpJOA2vVV19-D1aG2TlXazXl8oGe61gDC2Tchn0"
        />
        {/* <GoogleAnalytics gaId="G-L57MXLTT6K" /> */}
      </head>
      <body>{children}</body>
    </html>
  );
}
