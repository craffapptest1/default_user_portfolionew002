import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/hooks/useAuth";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "portfolionew002 - Personal Portfolio",
  description: "A modern personal portfolio showcasing professional achievements, skills, and projects. Discover my work, expertise, and professional journey.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 transition-all duration-300`}
      >
        <AuthProvider>
          <Header />
          <main className="flex-grow py-8 transition-all duration-500 ease-in-out">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              {children}
            </div>
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}