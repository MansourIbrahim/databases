const mysql = require("mysql");

const CONNECTION_CONFIG = {
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "new_world",
};

// original code
function getPopulation(Country, name, code, cb) {
  const conn = mysql.createConnection(CONNECTION_CONFIG);

  // assuming that connection to the database is established and stored as conn
  conn.query(
    `SELECT Population FROM ${Country} WHERE Name = '${name}' and code = '${code}'`,
    function (err, result) {
      if (err) cb(err);
      if (result.length == 0) cb(new Error("Not found"));
      cb(null, result[0].name);
    }
  );
}

//Give an example of a value that can be passed as name and code that would take advantage of SQL-injection and (fetch all the records in the database)

getPopulation("Country", 'Egypt" or "1=1', 'EGY" or "1=1', console.log);

//Rewrite the function so that it is no longer vulnerable to SQL injection

function getPopulation(Country, name, code, cb) {
  const conn = mysql.createConnection(CONNECTION_CONFIG);

  // assuming that connection to the database is established and stored as conn
  conn.query(
    `SELECT Population FROM ${Country} WHERE Name =? and code =?`,
    function (err, result) {
      if (err) cb(err);
      if (result.length == 0) cb(new Error("Not found"));
      cb(null, result[0].name);
    }
  );
}
