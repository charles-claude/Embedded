#!/bin/sh

export FLASK_APP=server.py




startme() {
    docker-compose up --build &
    echo $! >>bjtubot_docker.pid
    flask run &
    echo $! >>bjtubot_server.pid
}

stopme() {
    kill $(cat njtubot_docker.pid)
    kill $(cat njtubot_server.pid)
}

case "$1" in
    start)   startme ;;
    stop)    stopme ;;
    restart) stopme; startme ;;
    *) echo "usage: $0 start|stop|restart" >&2
       exit 1
       ;;
esac
