import { Karla } from "next/font/google";
import "./globals.css";
import { SideBar } from "@/components/sidebar";
import Header from "@/components/header";
import PageWrapper from "@/components/pagewrapper";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";

const karla = Karla({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-karla",
});
export const metadata: Metadata = {
  title: "Seprol Admin Dashboard",
  description: "NextJs admin dashboard created by Seprol",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={karla.className}>
        <ThemeProvider
          themes={["dark", "custom", "light"]}
          attribute="class"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex">
            <SideBar></SideBar>
            <Header></Header>
            <PageWrapper children={children}></PageWrapper>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
