"use client"

import { ChakraProvider } from '@chakra-ui/react'
import WithSubnavigation from '@/component/WithSubnavigation';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <ChakraProvider>
        <WithSubnavigation />
        {children}
      </ChakraProvider>
        </body>
    </html>
  );
}
