FROM node:alpine
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY ./server .
COPY ./package.json .
ENV NODE_ENV development

CMD ["npm", "run", "start"]