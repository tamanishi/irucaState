const irucaState = require('./irucaState.js');

const states = ["在席", "退社", "取込中", "離席", "外出", "休暇", "会議中", "帰社", "社外研修", "社内研修", "在宅勤務"];

if (process.argv.length < 3) {
    console.log('needs target status.');
    process.exit(-1);
}

if (!states.includes(process.argv[2])) {
    console.log('unsupported status : ' + process.argv[2]);
    process.exit(-1);
}

irucaState.state(process.argv[2]);
