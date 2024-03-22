FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN apk --no-cache add inotify-tools
RUN npm install



COPY . .

CMD ["npm", "run", "dev"]