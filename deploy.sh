#!/bin/bash

# variables
NAME="ws-myip"
IMAGE=$NAME
VERSION="$(cat VERSION)"

# stop and remove
docker stop $NAME; docker rm $NAME

# build
docker build -t $IMAGE:$VERSION .

# run 
docker run -d -p 3021:3000 \
  --name $NAME $IMAGE:$VERSION
