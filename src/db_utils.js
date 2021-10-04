class DB_Utils {
	//helpful helper functions for a databse
	
	constructor(host = "localhost", user = "username", password = "") {
		this.host = host;
		this.user = user;
		this.password = password;
	}
	
	function connect() {
		//connects to a databse
		var mysql = require('mysql');
		
		var con = mysql.createConnection({
			host: this.host,
			user: this.user,
			password: this.password
		});
		
		con.connect(function(err) {
			if (err) throw err;
			console.log("Connected!");
		});
	}
	
	function exec_sql_file(path) {
		//reads an sql file and executes it
	}
	
	function exec_result(sql) {
		//returns the result of a query
	}
	
	function exec_commit(sql) {
		//commits the given sql
	}
}