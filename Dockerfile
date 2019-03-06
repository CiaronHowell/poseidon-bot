FROM node:8

# Create directory
RUN mkdir -p /srv/app

# Copies everything from current area to the following directory
COPY . /srv/app

# Sets work directory
WORKDIR /srv/app

# Installs the dependencies 
RUN npm install