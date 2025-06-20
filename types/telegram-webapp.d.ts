// types/telegram-webapp.d.ts
export {};

declare global {
  interface TelegramWebApp {
    initData: string;
    initDataUnsafe: any;
    version: string;
    platform: string;
    themeParams: any;
    isExpanded: boolean;

    expand(): void;
    close(): void;

    MainButton: {
      setText(text: string): void;
      show(): void;
      hide(): void;
      onClick(cb: Function): void;
      offClick(cb: Function): void;
    };
    onEvent(event: string, callback: Function): void;
    offEvent(event: string, callback: Function): void;
  }

  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp;
    };
  }
}
