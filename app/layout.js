import "./globals.css";
import { Montserrat } from "@next/font/google"

export const metadata = {
  title: "Agroinnovator",
  description: "Future thinking agriculture",
};

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-monserrat",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <nav>
          <h1>navbar</h1>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="#">Signup</a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
