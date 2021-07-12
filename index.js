const mysql = require('mysql');

const connection = mysql.createConnection({
 host: 'examinter.cf1gzpzcanxg.us-east-1.rds.amazonaws.com',
 user: 'pearson_candidate_5',
 password: 'pearson_candidate_5',
 database: 'candidate_5'
});
connection.connect(function(error){
 if(!!error){
 console.log('Error');
 }else{
 console.log('Connected');
 }
});
app.get('/', function(req,res){
connection.query("Select *from actor");
if(!!error){
console.log('Error in the query');
}else {
console.log('Successful query')
}
})