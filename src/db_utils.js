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
		
		return con;
	}
	
	function exec_sql_file(path) {
		//reads an sql file and executes it
	}
	
	function exec_sql(sql) {
		//returns the result of a query
		var con = connect();
		
		//connects to the database
		var result = con.connect(function(err) {
			if (err) throw err;
			
			//queries the database. Throws an error if there's a problem
			let result = con.query(sql, function(err, result) {
				if (err) throw err;
				return result;
			});
			return result;
		});
		
		return result;
	}
}