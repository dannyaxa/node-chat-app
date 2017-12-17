FROM node:8
ENV NPM_CONFIG_LOGLEVEL info

RUN npm install
EXPOSE 3000
CMD ["npm","start"]
