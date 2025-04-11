import "@/styles/global.css";
import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from 'use-shopping-cart'


export default function App({ Component, pageProps }) {
  return (
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
   
  );
}
