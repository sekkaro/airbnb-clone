#! /bin/bash
yarn build:server
docker build . -t junior1031/airbnb-clone:latest
docker push junior1031/airbnb-clone:latest
ssh root@198.211.112.221 "docker pull junior1031/airbnb-clone:latest && docker tag junior1031/airbnb-clone:latest dokku/api:latest && dokku tags:deploy api latest"