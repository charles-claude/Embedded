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
	Repeat: false,
        Bannword: [],
	Slow: false,
	Slowduration: 30,
	Unique: false,
	Color: "Red",
	Samecolor: false
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
    let channel = "nerilwyn"

    //set slow mode
    if (config.Slow == true) {
        client.say(channel, "/slow " + config.Slowduration); 
    } else {
        client.say(channel, "/slowoff")
    }

    //set uniquechat
    if (config.Unique == true) {
        client.say(channel, "/uniquechat");
    } else {
        client.say(channel, "/uniquechatoff");
    }

    //set color
    client.say(channel, "/color " + config.Color);

    client.say("nerilwyn", "Kappa");
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
        let cmd = full_cmd[1]

	let me = config.Samecolor ? "/me " : "";

        switch(cmd) {
        case "hi": case "Hi":
            client.say(channel, me + "Greetings " + user['display-name']);
            break;
	case "harry":
	    client.say(channel, me + "You're a wizard " + user['display-name']);
	    break;
	case "bjtu":
	    client.say(channel, me + "BJTU: " + "http://en.njtu.edu.cn/");
            break;
	default:
	    client.say(channel, me + "Command " + cmd + " don't exist here !");

        }

    } else {

        //ban word
        if (config.Bannword.some(el => message.includes(el))) {
            client.deletemessage(channel, user.id)
        }

    }

});
