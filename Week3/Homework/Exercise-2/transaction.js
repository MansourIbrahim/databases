const util = require("util");
const mysql = require("mysql");

const CONNECTION_CONFIG = {
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "userdb",
};

async function transaction() {
  const connection = mysql.createConnection(CONNECTION_CONFIG);
  const execQuery = util.promisify(connection.query.bind(connection));
  try {
    await execQuery(`start transaction;`);
    await execQuery(
      `INSERT INTO account_changes VALUES(503, 101, -1000, '2021-08-10', 'to 102')`
    );
    await execQuery(
      `INSERT INTO account_changes VALUES(504, 102, 1000, '2021-08-10', 'from 101')`
    );
    await execQuery(
      `UPDATE  account SET balance = balance-1000 WHERE account_number = 101`
    );
    await execQuery(
      `UPDATE  account SET balance = balance+1000 WHERE account_number = 102`
    );
    await execQuery(`commit;`);
    connection.end();
  } catch (err) {
    console.error(err.message);
    connection.end();
  }
}

transaction();
