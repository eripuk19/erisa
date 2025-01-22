import mysql from 'mysql2/promise';

let connection = null;
export function createConnection() {
	if (!connection) {
		connection = mysql.createConnection({
			host: 'htl-projekt.com',
			user: 'erisapuka',
			port: 33060,
			password: '!Insy_2024$',
			database: '2024_4bw_erisapuka_event_app'
		});
	}
	return connection;
}
