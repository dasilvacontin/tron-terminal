var charm = require('charm')();
var sleep = require('sleep');
charm.pipe(process.stdout);
charm.reset();

console.log('hi');
sleep.sleep(1);

charm
	.move(1, 1)
	.foreground('yellow')
	.write('h');
sleep.sleep(1);
charm
	.move(1, 1)
	.foreground('blue')
	.write('k');
sleep.sleep(1);
charm.move(2, -1).write('l');
