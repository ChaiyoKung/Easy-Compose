FROM node:16-alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi
ENV NODE_ENV production
CMD ["yarn", "start"]