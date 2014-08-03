var selectShell = require('select-shell');
var stream = process.stdin;
var select = selectShell({
	multiSelect: false	
});

select
	.option('Host', 0)
	.option('Join LAN', 1)
	.list();

select.on('select', function (options) {
	console.log(options);
	process.exit(0);
});

select.on('cancel', function (options) {
	console.log('Cancel select, '+ options.length + ' options selected');
	process.exit(0);
});
