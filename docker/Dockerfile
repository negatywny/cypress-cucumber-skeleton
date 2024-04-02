FROM node:lts

RUN mkdir -p /home/node/dev/node_modules && chown -R node:node /home/node/dev
WORKDIR /home/node/dev

COPY package.json . 
COPY yarn.lock .
COPY app app

RUN yarn install
RUN yarn setup

ENTRYPOINT ["yarn", "run"]
