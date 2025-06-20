"use client";

import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStores } from "@/hooks/useStores";

export const AppProvider = observer(
  ({ children }: { children: React.ReactNode }) => {
    const { globalStore } = useStores();

    useEffect(() => {
      if (typeof window !== "undefined" && window.Telegram?.WebApp) {
        const tg = window.Telegram.WebApp;

        globalStore.setUserName(tg.initDataUnsafe?.user?.username ?? "");
        globalStore.setPlatform(tg.platform ?? "");
        tg.expand();
      }
    }, []);

    return <>{children}</>;
  },
);
