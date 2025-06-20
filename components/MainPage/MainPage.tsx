"use client";

import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import styles from "./styles.module.scss";
import { useStores } from "@/hooks/useStores";

const MainPage = observer(() => {
  const { globalStore } = useStores();

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("window:", window);
      console.log("Telegram:", window.Telegram);
      if (window.Telegram?.WebApp) {
        const tg = window.Telegram.WebApp;

        console.log("initData:", tg.initData);
        console.log("user:", tg.initDataUnsafe?.user?.username);
        console.log("platform:", tg.platform);

        tg.MainButton.setText("Продолжить");
        tg.MainButton.show();
      } else {
        console.log("Telegram.WebApp НЕ доступен");
      }
    }
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Telegram WebApp</h1>
      <p>Платформа: {globalStore.platform}</p>
      <p>Имя пользователя: {globalStore.userName}</p>
    </div>
  );
});

export default MainPage
