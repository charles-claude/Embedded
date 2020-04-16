#!/bin/sh


startme() {
    export FLASK_APP=server.py

    docker-compose up --build &
    echo $! >>bjtubot_docker.pid
    flask run &
    echo $! >>bjtubot_server.pid
}

stopme() {
    kill -15 $(cat bjtubot_docker.pid)
    rm bjtubot_docker.pid
    kill -15 $(cat bjtubot_server.pid)
    rm bjtubot_server.pid
}

restartme() {
    kill -15 $(cat bjtubot_docker.pid)
    rm bjtubot_docker.pid
    echo "restarting sleep 5"
    sleep 5
    docker-compose up --build &
    echo $! >>bjtubot_docker.pid
}

case "$1" in
    start)   startme ;;
    stop)    stopme ;;
    restart) restartme ;;
    *) echo "usage: $0 start|stop|restart" >&2
       exit 1
       ;;
esac
