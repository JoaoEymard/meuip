#!/bin/bash

# variables
IMAGE="pbr-myip"
NAME="myipservice"
VERSION="$(cat VERSION)"

# build
docker build -t $IMAGE:$VERSION .

# run 
docker run -d -p 3020:3000 \
--name $NAME $IMAGE:$VERSION
