const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const timer = () =>{
  return new Promise((resolve,reject) => {
    rl.question('Please enter a time in seconds', (time) => {
      if (time >= 0) {
        console.log(`Timer set for ${time} seconds`);
        setTimeout(()=>process.stdout.write('\x07'), 1000 * time);
        resolve(setTimeout(timer,1000 * time));
      } else if (time === 'b') {
        process.stdout.write('\x07');
        resolve(timer);
      } else {
        timer();
      }
    });
  });
};

const main = async() => {
  await timer();
};
main();