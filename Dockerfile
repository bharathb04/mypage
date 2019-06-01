FROM node:10.16.0-slim
EXPOSE 3000
# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json /app
RUN npm install

# copy files to container doc
COPY . /app

# start app
CMD ["npm", "start"]