#!/bin/sh

sudo pip install Flask
sudo apt-get install docker
sudo apt-get install docker-compose

groupadd docker
sudo usermod -aG docker $USER
newgrp docker
