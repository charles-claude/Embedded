#!/bin/sh

export FLASK_APP=server.py

docker-compose up --build &
echo $! >>/tmp/bjtubot_docker.pid

flask run
