const util = require("util");
const mysql = require("mysql");

const CONNECTION_CONFIG = {
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "userdb",
};

const AccountData = [
  { account_number: 101, balance: 4500 },
  { account_number: 102, balance: 7000 },
  { account_number: 103, balance: 3500 },
];

const AccountChangesData = [
  {
    change_number: 501,
    account_number: 102,
    amount: 500,
    changed_date: "2021-07-21",
    remark: "from 103",
  },
  {
    change_number: 502,
    account_number: 103,
    amount: -500,
    changed_date: "2021-07-21",
    remark: "to 102",
  },
];

async function transactionsInsertValues() {
  const connection = mysql.createConnection(CONNECTION_CONFIG);
  const execQuery = util.promisify(connection.query.bind(connection));
  try {
    const AccountDataPromises = AccountData.map((account) =>
      execQuery("INSERT INTO account SET ?", account)
    );
    await Promise.all(AccountDataPromises);
    const AccountChangesDataPromises = AccountChangesData.map((accountChange) =>
      execQuery("INSERT INTO account_changes SET ?", accountChange)
    );
    await Promise.all(AccountChangesDataPromises);
    connection.end();
  } catch (err) {
    console.error(err.message);
    connection.end();
  }
}

transactionsInsertValues();
