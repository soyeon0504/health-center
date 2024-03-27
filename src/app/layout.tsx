import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import '@/styles/globals.css';
export const metadata: Metadata = {
  title: '전국 보건소 위치 안내',
  description: '전국 보건소 위치 안내 서비스 앱',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
      <meta name="naver-site-verification" content="b0f4d84f68c0fd2e40d8a29f8bed00a3b49742b0" />
        {/* <link
          rel="canonical"
          href="https://health-center-nkl8aj2lq-soyeon.vercel.app"
        ></link>

        <meta
          name="google-site-verification"
          content="Q2bHOLs6jaFYy4NK_gCCdUCjf270wQ8zYE_nerDd7lw"
        />
        <GoogleAnalytics gaId="G-L57MXLTT6K" /> */}
      </head>
      <body>{children}</body>
    </html>
  );
}