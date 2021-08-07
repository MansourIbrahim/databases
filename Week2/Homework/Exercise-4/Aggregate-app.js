const mysql = require("mysql");
const util = require("util");

const CONNECTION_CONFIG = {
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "userdb",
};

const QUERY1 = `
  SELECT paper_title, COUNT(author_no) 
  FROM research_Papers rp JOIN author_papers_junction apj
  ON rp.paper_id = apj.paper_id 
  GROUP BY paper_title;`;

const QUERY2 = `
    SELECT COUNT(DISTINCT(paper_id)) 
    FROM author_papers_junction apj 
    JOIN authors 
    ON apj.author_no = authors.author_no 
    WHERE gender="f";`;

const QUERY3 = `
    SELECT university, AVG(h_index) 
    FROM authors 
    GROUP BY university;`;

const QUERY4 = `
    SELECT university, COUNT(DISTINCT(paper_id)) papers_total 
    FROM authors, author_papers_junction apj 
    WHERE authors.author_no = apj.author_no 
    GROUP BY university;`;

const QUERY5 = `
    SELECT university, MIN(h_index) , MAX(h_index) 
     FROM authors 
     GROUP BY university;`;

async function exercise4() {
  const connection = mysql.createConnection(CONNECTION_CONFIG);
  const execQuery = util.promisify(connection.query.bind(connection));
  try {
    const query1Result = await execQuery(QUERY1);
    console.log(query1Result);
    const query2Result = await execQuery(QUERY2);
    console.log(query2Result);
    const query3Result = await execQuery(QUERY3);
    console.log(query3Result);
    const query4Result = await execQuery(QUERY4);
    console.log(query4Result);
    const query5Result = await execQuery(QUERY5);
    console.log(query5Result);
    connection.end();
  } catch (err) {
    console.error(err.message);
    connection.end();
  }
}

exercise4();
