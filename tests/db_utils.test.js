const db_utils = require('../src/db_utils.js');

test('Test connection', () => {
	let connection = new db_utils.DB_Utils("Localhost", "invkeeper", "$copsp1");
	expect.anything(connection.connect());
});