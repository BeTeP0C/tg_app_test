"use client";

import { useEffect, useState } from "react";
import MainPage from "@/components/MainPage/MainPage";

const Page = () => {
  const [username, setUsername] = useState("");
  const [platformLocal, setPlatform] = useState("");
  const [isTelegramReady, setTelegramReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      setTelegramReady(true);

      // tg.ready(); // обязательный вызов
      tg.expand(); // разворачивает WebApp

      const user = tg.initDataUnsafe?.user;
      const { platform } = tg;

      if (user) {
        setUsername(
          user.username || `${user.first_name} ${user.last_name || ""}`,
        );
      }

      setPlatform(platform || "unknown");

      // Покажем кнопку Telegram
      tg.MainButton.setText("Продолжить");
      tg.MainButton.show();
    } else {
      console.log("❌ Telegram WebApp API недоступен");
    }
  }, []);

  return (
    <main style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>🚀 Telegram WebApp</h1>

      {isTelegramReady ? (
        <>
          <p>
            <strong>Имя пользователя:</strong> {username || "неизвестно"}
          </p>
          <p>
            <strong>Платформа:</strong> {platformLocal}
          </p>
        </>
      ) : (
        <p>❗ Запусти приложение из Telegram через кнопку</p>
      )}
    </main>
  );
};

export default Page;
