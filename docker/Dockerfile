FROM node:lts

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY app .
RUN yarn install
RUN yarn run setup

ENTRYPOINT ["yarn", "run"]
