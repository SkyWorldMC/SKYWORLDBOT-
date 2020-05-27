const request = require('request');

exports.run = (client, message, args, ops) => {
    const Discord = require('discord.js');
    const url = "https://itzlightyhd.cf/facts.json";
    request(url, function(err, response, body) {
        if(err) {
            message.reply("Can't get some facts of the day, try again later.");
        }
        body = JSON.parse(body);
        let facts = body.facts[Math.floor(Math.random() * body.facts.length)];
        message.reply(facts);
    });
}
