FROM node:20-alpine3.17

WORKDIR /app

RUN yarn global add pnpm

COPY package.json .

RUN pnpm install

COPY . .

CMD ["pnpm", "dev"]