
FROM node:16-alpine 
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
#FROM node:16-alpine AS BUILD_IMAGE
#WORKDIR /app
COPY . .
RUN npm run build
#RUN rm -rf node_modules

#FROM node:16-alpine

#ENV NODE_ENV production

#RUN addgroup -g 1001 -S nodejs
#RUN adduser -S nextjs -u 1001
#WORKDIR /app
#COPY --from=BUILD_IMAGE --chown=nextjs:nodejs /app/package.json /app/package-lock.json ./
#COPY --from=BUILD_IMAGE --chown=nextjs:nodejs /app/node_modules ./node_modules
#COPY --from=BUILD_IMAGE --chown=nextjs:nodejs /app/public ./public
#COPY --from=BUILD_IMAGE --chown=nextjs:nodejs /app/.next ./.next
#COPY --from=BUILD_IMAGE --chown=nextjs:nodejs /app/next.config.js  ./

#USER nextjs

EXPOSE 3000
CMD [ "npm","run", "start" ]