FROM node:8

# Create directory
RUN mkdir -p /srv/app

# This ensures that package and package-lock will copy over
COPY . /srv/app

# Installs the modules needed for the bot
WORKDIR /srv/app
RUN npm install

# Copies all of the files
COPY . .

CMD ["npm", "start"]
