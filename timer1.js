const cmdargs = process.argv.slice(2);

const timer = (args) => {
  let results = [];
  if (args.length === 0) {
    console.log("No timers set, try entering some positive numbers in the command line!");
    return;
  }
  args.forEach((element) => {
    if (!isNaN(element)) {
      if (element < 0) {
        console.log(`please enter only positive numbers; removed '${element}'`);
      } else {
        results.push(element);
      }
    } else {
      console.log(`please enter only positive numbers; removed '${element}'`);
    }
  });
  results.forEach(element => {
    setTimeout(()=>process.stdout.write('\x07'), 1000 * element);
  });
  console.log(`Timers for ${results.slice(0,results.length - 1)} and ${results[results.length - 1]} set, waiting...`);
};

timer(cmdargs);