const mysql = require("mysql");
const util = require("util");

const { AUTHORS_DATA, PAPER_DATA, JUNCTION_DATA } = require("./data.js");

const CONNECTION_CONFIG = {
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "userdb",
};

const CREATE_RESEARCH_PAPERS_TABLE = `
  CREATE TABLE IF NOT EXISTS research_Papers (
    paper_id INT NOT NULL AUTO_INCREMENT,
    paper_title VARCHAR(150),
    conference VARCHAR(150),
    publish_date DATE,
    PRIMARY KEY (paper_id)
    );`;

// many to many relationship.

const CREATE_AUTHORS_PAPERS_JUNCTION_TABLE = `
    CREATE TABLE IF NOT EXISTS author_Papers_junction (
        author_no INT NOT NULL,
        paper_id INT NOT NULL,
        CONSTRAINT PK_author_Papers_junction PRIMARY KEY(
          author_no, paper_id ),
        FOREIGN KEY (author_no) REFERENCES authors(author_no),
        FOREIGN KEY (paper_id) REFERENCES research_Papers (paper_id)
      );`;

async function exercise2() {
  const connection = mysql.createConnection(CONNECTION_CONFIG);
  const execQuery = util.promisify(connection.query.bind(connection));
  try {
    await execQuery(CREATE_RESEARCH_PAPERS_TABLE);
    await execQuery(CREATE_AUTHORS_PAPERS_JUNCTION_TABLE);
    const authorsPromises = AUTHORS_DATA.map((author) =>
      execQuery("INSERT INTO authors SET ?", author)
    );
    const papersPromises = PAPER_DATA.map((paper) =>
      execQuery("INSERT INTO research_Papers SET ?", paper)
    );
    await Promise.all(authorsPromises, papersPromises);
    const junctionPromises = JUNCTION_DATA.map((junction) =>
      execQuery("INSERT INTO authors_papers_junction SET ?", junction)
    );
    await Promise.all(junctionPromises);
    connection.end();
  } catch (err) {
    console.error(err.message);
    connection.end();
  }
}

exercise2();
