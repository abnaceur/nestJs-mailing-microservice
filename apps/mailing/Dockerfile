FROM node:16.15.1

RUN npm i -g @nestjs/cli typescript ts-node

COPY package*.json /tmp/app/
RUN cd /tmp/app && npm install --force

COPY . /usr/src/app
RUN cp -a /tmp/app/node_modules /usr/src/app

WORKDIR /usr/src/app
COPY apps/mailing/startup.dev.sh /opt/startup.dev.sh
RUN chmod +x /opt/startup.dev.sh
CMD ["/bin/bash", "/opt/startup.dev.sh"]