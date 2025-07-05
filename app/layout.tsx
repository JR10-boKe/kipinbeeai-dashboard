// app/layout.tsx
export const metadata = {
  title: "KipinBeeAI",
  description: "Dashboard KipinCARGO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white antialiased">{children}</body>
    </html>
  );
}
