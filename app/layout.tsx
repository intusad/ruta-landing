import "./globals.css";

export const metadata = {
  title: "RUTA COMMUNITY",
  description: "Zajednica motociklista i avanturista.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hr">
      <body>{children}</body>
    </html>
  );
}
