'use strict';

const tmi = require('tmi.js');
const fs = require("fs");
const prefix = "!";

var config = {}

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



if (!fs.existsSync("bjtubot.conf")) {
    config = {
	Repeat: "false"
    };
}
else {
    let rawdata = fs.readFileSync('bjtubot.conf');
    config = JSON.parse(rawdata);
}


console.log(config);

function cmd_parser(msg) {
    let prefix_escaped = prefix.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    let regex = new RegExp("^" + prefix_escaped + "([a-zA-Z]+)\s?(.*)");
    return regex.exec(msg);
}


let client = new tmi.client(tmiConfig);

client.connect();

client.on('connected', (adress, port) => {
    console.log(client.getUsername() + " s'est connecté sur : " + adress + ", port : " + port);
    client.say("nerilwyn", "Hello Twitch ! I'm a real human Kappa");
});

/*client.on('chat', (channel, user, message, isSelf) => {
    if (isSelf || config.Repeat == false) return;
    client.say(channel, user['display-name'] + " a dit " + message);
});*/

client.on('chat', (channel, user, message, isSelf) => {
    if (isSelf) return;

    let full_cmd = cmd_parser(message);

    if (full_cmd != null) {
//cmd
    } else {

        //ban word
        if (config.Bannword.some(el => message.includes(el))) {
            client.deletemessage(channel, user.id)
        }

    }

});
