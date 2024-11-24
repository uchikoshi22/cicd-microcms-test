
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <main>
          {children}
        </main>
        <footer>Please contact me. I am located in 福岡.</footer>
      </body>
    </html>
  );
}
