FROM node:8
ENV NPM_CONFIG_LOGLEVEL info
ENV HOME /opt/data/node-chat-app

RUN mkdir -p $HOME
WORKDIR $HOME
COPY . $HOME

RUN cd $HOME && npm install
EXPOSE 3000
CMD ["npm","start"]
