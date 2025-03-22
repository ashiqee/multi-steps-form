
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";



import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Provider } from "react-redux";
import { store } from "@/lib/Redux/store";
import { Providers } from "@/lib/providers";



export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      
      <body
        className={clsx(
          "min-h-screen bg-background font-serif antialiased",
          fontSans.variable,
        )}
      >
       <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="justify-between flex flex-col h-screen">
           
            <main>
              {children}
            </main>
            <footer className="w-full flex items-center justify-center border-t-1 border-default-200 py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://heroui.com?utm_source=next-app-template"
                title="heroui.com homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">Ashik Mahmud</p>
              </Link>
            </footer>
          </div>
      
        </Providers>
      </body>
    </html>
  );
}
