import { StoreProvider } from "../common/stores/StoreProvider";
import { AppProvider } from "./AppProvider";
import Script from "next/script";

type TRootLayout = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: TRootLayout) => {
  return (
    <html lang="ru">
      <head>
        <title>Document</title>
        <meta name="description" content="Что-то там" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/logo_only.svg" /> */}
        <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
      </head>
      <body>
        <AppProvider>
          <StoreProvider>{children}</StoreProvider>
        </AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
