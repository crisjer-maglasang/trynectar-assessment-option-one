import "@/app/globals.css";
import SideMark from "@/components/SideMark";

export const metadata = {
  title: "Trynetcar Option1",
  description: "Test Assessment by Trynetcar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen font-mono">
        <SideMark />
        <div>{children}</div>
      </body>
    </html>
  );
}
