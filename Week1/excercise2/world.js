const mysql = require('mysql');

//create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'hyfuser',
    password : 'hyfpassword',
    database : 'new_world'
  });

//connect
db.connect((err)=>{
    if(err)throw err;
    console.log('Mysql connected...');
});

// What are the names of countries with population greater than 8 million?
db.query("SELECT name FROM country WHERE population > 8000000",(err, result) => {
      if (err) throw err;
      console.log(result);
    }
  );

  // What are the names of countries that have “land” in their names?
  db.query("SELECT name FROM country WHERE name LIKE '%land%'",(err, result) => {
      if (err) throw err;
      console.log(result);
    }
  );

  // What are the names of the cities with population in between 500,000 and 1 million?
  db.query("SELECT name FROM city WHERE population BETWEEN 500000 AND 1000000",(err, result) => {
      if (err) throw err;
      console.log(result);
    }
  );

  // What's the name of all the countries on the continent ‘Europe’?
  db.query("SELECT name FROM country WHERE continent = 'europe'",(err, result) => {
      if (err) throw err;
      console.log(result);
    }
  );

  // List all the countries in the descending order of their surface areas.
  db.query("SELECT name FROM country ORDER BY SurfaceArea DESC",(err, result) => {
      if (err) throw err;
      console.log(result);
    }
  );

  // What are the names of all the cities in the Netherlands?
  db.query("SELECT name FROM city WHERE countrycode = 'nld'",(err, result) => {
      if (err) throw err;
      console.log(result);
    }
  );

  // What is the population of Rotterdam?
  db.query("SELECT population FROM city WHERE name = 'rotterdam'",(err, result) => {
      if (err) throw err;
      console.log(result);
    }
  );

  // What's the top 10 countries by Surface Area?
  db.query("SELECT name FROM country ORDER BY surfacearea DESC LIMIT 10",(err, result) => {
      if (err) throw err;
      console.log(result);
    }
  );

  // What's the top 10 most populated cities?
  db.query("SELECT name FROM city ORDER BY population DESC LIMIT 10",(err, result) => {
      if (err) throw err;
      console.log(result);
    }
  );

  // What is the population number of the world?
  db.query("SELECT SUM (population) AS 'World_POPULATION' FROM country",(err, result) => {
      if (err) throw err;
      console.log(result);
    }
  );

  db.end((err)=>{
    if(err){
        throw err;
    }
    console.log('Mysql disconnected...');
});