"use client";

import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import styles from "./styles.module.scss";
import { useStores } from "@/hooks/useStores";

const MainPage = observer(() => {
  const { globalStore } = useStores();

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;

      tg.MainButton.setText("Продолжить");
      tg.MainButton.show();

      const handleMainButtonClick = () => {
        alert(
          `Имя: ${globalStore.userName}, платформа: ${globalStore.platform}`,
        );
      };
      tg.onEvent("mainButtonClicked", handleMainButtonClick);

      return () => {
        tg.offEvent("mainButtonClicked", handleMainButtonClick);
      };
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
