import "./globals.css";

export const metadata = {
  title: "Mariscos El Arandense",
  description: "Menú digital de Mariscos El Arandense",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}