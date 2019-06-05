var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log();
console.log(q.host);
console.log(q.path);
console.log(q.pathname);
console.log(q.search);
console.log(q.port);
console.log(q.query);
console.log(q.auth);
console.log(q.hash);
console.log(q.hostname);
console.log(q.search);
console.log(q.slashes);


console.log();

var qdata = q.query;
console.log(qdata.month);