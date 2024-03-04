FROM node:lts

RUN mkdir -p /home/node/dev/node_modules && chown -R node:node /home/node/dev
WORKDIR /home/node/dev

COPY app ./app
COPY package.json ./
RUN npm install
RUN npm run setup

ENTRYPOINT ["npm", "run"]
