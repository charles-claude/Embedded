'use strict';

const tmi = require('tmi.js');

const tmiConfig = {
    options: {
        debug: true
    },
    connection: {
        reconnect:  true
    },
    identity: {
        username: "BjtuBOT",
        password: "oauth:rxci979c6ychrk6ii1mp39wmlpv2hp"
    },
    channels: [
        "nerilwyn"
    ]
};

let client = new tmi.client(tmiConfig);

client.connect();

client.on('connected', (adress, port) => {
    console.log(client.getUsername() + " s'est connecté sur : " + adress + ", port : " + port);
    client.say("votre nom de chaine", "Hello Twitch ! I'm a real human Kappa");
});

client.on('chat', (channel, user, message, isSelf) => {
    if (isSelf) return;
    client.say(channel, user['display-name'] + " a dit " + message);
});
