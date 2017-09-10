function findSum(){
  var sum = 0;
  var args = process.argv.slice(2);
  for (var i = 0; i < args.length; i++){
    sum += Number(args[i], 10);
  }
  console.log(sum);
}

findSum();
