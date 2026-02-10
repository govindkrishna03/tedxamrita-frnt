import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "TEDx YourCollege",
  description: "Ideas worth spreading",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Navbar scrolled={false} />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
