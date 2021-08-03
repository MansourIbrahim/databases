const mysql = require('mysql');
const util = require('util');


const CONNECTION_CONFIG = {
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'userdb',
  };


  const CREATE_AUTHORS_TABLE = `
  CREATE TABLE IF NOT EXISTS authors (
    author_no INT NOT NULL AUTO_INCREMENT,
    author_name VARCHAR(50),
    university VARCHAR(50),
    date_of_birth DATE,
    h_index INT,
    gender ENUM('m', 'f'),
    PRIMARY KEY (author_no)
    );`;

    const ADD_MENTOR_COLUMN =`
    ALTER TABLE authors
     ADD mentor INT,
     ADD CONSTRAINT FOREIGN KEY(mentor) REFERENCES authors(author_no);  
    `
    async function exercise1() {
        const connection = mysql.createConnection(CONNECTION_CONFIG);
        const execQuery = util.promisify(connection.query.bind(connection));
        try {
            await execQuery(CREATE_AUTHORS_TABLE);
            await execQuery(ADD_MENTOR_COLUMN);
            connection.end();
        } catch (err) {
            console.error(err.message);
            connection.end();
          }
    
    }


    exercise1()

  