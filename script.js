
const MilitaryResource = require('./script_1.js');
const Squad = require('./script_2.js');
let tanks = new MilitaryResource('tanks', 1000, 400);
let mashineGunner = new MilitaryResource('Mashine Gunner', 1000, 200);
let squad = new Squad([tanks, mashineGunner]);

