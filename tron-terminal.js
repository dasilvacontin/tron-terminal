// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   tron-terminal.js                                   :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: dda-silv <dda-silv@student.42.fr>          +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2014/08/03 20:16:02 by dda-silv          #+#    #+#             //
//   Updated: 2014/08/04 00:47:46 by dda-silv         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

// faire crasher the loserz

var Game = require('./Game');
var Player = require('./Player');

var selectShell = require('select-shell');
var stdin = process.stdin,
	stdout = process.stdout;
var readline = require('readline').createInterface({
	input: stdin,
	output: stdout
});

var chalk = require('chalk');
var charm = require('charm')();
var username;
var title_css = chalk.black.bgYellow;
var high_css = chalk.underline;
var dim_css = chalk.reset;
var explorer = require('dgram').createSocket("udp4");
explorer.bind(4242, function () {
	explorer.setBroadcast(true);
});
var local_player;
var local_game;

console.reset = function () {
	process.stdout.write('\033c');
	console.log(' ');
	console.log( title_css('  tron-terminal v0.1  ') );
	console.log( title_css('  by @dasilvacontin   ') );
	console.log(' ');
	if (username) console.log('Welcome ' + username + '!\n' );
}

function host_menu() {
	console.reset();
	console.log( title_css(' HOST ') );	
}

function lan_menu() {

}

function main_menu() {

	console.log("\n" + title_css("Select an option:") + "\n");

	var select = selectShell({
		multiSelect : false
	});
	select
		.option('Host', 'host')
		.option('Join LAN', 'lan')
		.list(function (choice) {
			switch(choice.value) {
				case 'host': host_menu();
						break;
				case 'lan': lan_menu();
						break;
			}
		});
	select.on('close', main_menu);
}

function lan_list() {
	var message = new Buffer("W0L0L0 JE SAIS PAS UDP");
	explorer.send(message, 0, message.length, 4242, "255.255.255.255");
   		
	explorer.on("message", function (msg, rinfo) {
		console.log("\n response!");
		console.log("message: " + message);
		console.log(rinfo);
	});
}

function title() {
	readline.question("Please, enter your nickname: ", function (answer) {
		console.log("Welcome " + answer + "!");

		local_player = new Player();
		local_player.setUsername(answer);
		local_player.setIsLocal(true);
		
		main_menu();
	});
}

console.reset();
title();
