const nrc = require('node-run-cmd');
const config = require('./config');

const runCypress = () => {
    console.log("------Finding slot on cowin------" + new Date());
    nrc.run('npx cypress run', {onDone: () => console.log("Done!!")});
};

runCypress();

setInterval(runCypress, 1000 * 60 * config.interval);
