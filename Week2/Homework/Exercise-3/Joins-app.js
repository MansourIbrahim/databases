const mysql = require("mysql");
const util = require("util");

const CONNECTION_CONFIG = {
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "userdb",
};

const QUERY1 = `
  SELECT ath.author_name author, mnt.author_name mentor 
  FROM authors ath LEFT JOIN authors mnt 
  ON ath.mentor = mnt.author_no;`;

const QUERY2 = `
    SELECT authors.author_no, author_name, university, date_of_birth, h_index, gender, mentor, paper_title 
    FROM authors LEFT JOIN author_papers_junction apj 
    ON authors.author_no = apj.author_no LEFT JOIN research_Papers rb
    ON apj.paper_id = rb.paper_id;`;

async function exercise3() {
  const connection = mysql.createConnection(CONNECTION_CONFIG);
  const execQuery = util.promisify(connection.query.bind(connection));
  try {
    const query1Result = await execQuery(QUERY1);
    console.log(query1Result);
    const query2Result = await execQuery(QUERY2);
    console.log(query2Result);
    connection.end();
  } catch (err) {
    console.error(err.message);
    connection.end();
  }
}

exercise3();
