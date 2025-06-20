# === СТАДИЯ 1: Сборка приложения ===
FROM node:20-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем остальные файлы проекта
COPY . .

# Собираем Next.js приложение в standalone режиме
RUN npm run build

# === СТАДИЯ 2: Продакшн-образ ===
FROM node:20-alpine AS runner

# Устанавливаем переменные окружения
ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /app

# Копируем только необходимые файлы
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Открываем порт
EXPOSE 3000

# Запускаем standalone сервер
CMD ["node", "server.js"]
