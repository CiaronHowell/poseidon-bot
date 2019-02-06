FROM node:8

#Create directory
WORKDIR /usr/src/bot

#This ensures that package and package-lock will copy over
COPY package*.json ./

#Installs the modules needed for the bot
RUN npm install

#Copies all of the files
COPY . .

CMD ["npm", "start"]
