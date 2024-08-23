import "@/styles/globals.css";
import "@mantine/charts/styles.css";
import "@mantine/core/styles.css";

import {
  ColorSchemeScript,
  createTheme,
  MantineColorsTuple,
  MantineProvider,
} from "@mantine/core";
import { Metadata } from "next";
import { Inter, Lexend_Deca } from "next/font/google";

const lexendDeca = Lexend_Deca({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const myColor: MantineColorsTuple = [
  "#e5f4ff",
  "#cde2ff",
  "#9bc2ff",
  "#64a0ff",
  "#3984fe",
  "#1d72fe",
  "#0969ff",
  "#0058e4",
  "#004ecc",
  "#0043b5",
];

const theme = createTheme({
  colors: { blue: myColor },
  fontFamily: `${inter.style.fontFamily}, sans-serif`,
  headings: { fontFamily: `${lexendDeca.style.fontFamily}, sans-serif` },
});

export const metadata: Metadata = {
  title: "My Mantine app",
  description: "I have followed setup instructions carefully",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
