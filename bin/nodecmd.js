#!/usr/bin/env node

var fn = process.argv[2];
if (!fn) {
  var usage = 'Usage: nodecmd [fn]'
  var example = 'Example:\n< someinput nodecmd decodeURIComponent';
  throw new Error('Expected JS function!\n\n'
    + usage + '\n\n'
    + example);
}

fn = eval(fn);

var b = '';
process.stdin.on('data', function(c) {
  b += c;
});
process.stdin.on('end', function() {
  process.stdout.write(fn(b));
})
