# FROM node:18-alpine
# WORKDIR /src
# COPY . .
# RUN rm -rf node_modules
# RUN npm install --legacy-peer-deps
# RUN npm run build
# RUN npm install pm2 -g

FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/ecosystem.config.cjs ./

RUN npm install --only=production && npm install pm2 -g

EXPOSE 3000

#CMD ["pm2-runtime", "ecosystem.config.cjs"]


