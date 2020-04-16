#!/bin/sh

pip install Flask
apt-get install docker
apt-get install docker-compose

groupadd docker
usermod -aG docker $USER
newgrp docker
