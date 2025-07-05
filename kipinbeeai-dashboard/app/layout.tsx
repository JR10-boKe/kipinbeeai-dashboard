export const metadata = {
  title: "KipinBeeAI Dashboard",
  description: "Dashboard de operaciones en KipinCARGO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
