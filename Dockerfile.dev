FROM node:alpine
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY ./server .
ENV NODE_ENV development

CMD ["npm", "run", "start"]