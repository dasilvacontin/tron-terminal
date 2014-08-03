// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   Player.js                                          :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: dda-silv <dda-silv@student.42.fr>          +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2014/08/04 00:32:04 by dda-silv          #+#    #+#             //
//   Updated: 2014/08/04 00:35:37 by dda-silv         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

function Player(){
	var local = false;
	var address = "";
	var username = "";
	
	this.setIsLocal = function (val) {
		local = val:
	}
	this.isLocal = function () {
		return local;
	}

	this.setAddress = function (val) {
		address = val;
	}
	this.getAddress = function () {
		return address;
	}

	this.setUsername = function (val) {
		username = val;
	}
	this.getUsername = function () {
		return username;
	}
}

module.exports = Player;
