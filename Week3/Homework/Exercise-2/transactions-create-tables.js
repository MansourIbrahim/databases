const util = require("util");
const mysql = require("mysql");

const CONNECTION_CONFIG = {
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "userdb",
};

const CREATE_ACCOUNT = `
CREATE TABLE IF NOT EXISTS account (
    account_number INT,
    balance INT
  );`;

const CREATE_ACCOUNT_CHANGES = `
  CREATE TABLE IF NOT EXISTS account_changes (
    change_number INT,
    account_number INT,
    amount INT,
    changed_date DATE,
    remark VARCHAR(50)
  );`;

async function transactionsCreateTables() {
  const connection = mysql.createConnection(CONNECTION_CONFIG);
  const execQuery = util.promisify(connection.query.bind(connection));
  try {
    await execQuery(CREATE_ACCOUNT);
    await execQuery(CREATE_ACCOUNT_CHANGES);
    connection.end();
  } catch (err) {
    console.error(err.message);
    connection.end();
  }
}

transactionsCreateTables();
