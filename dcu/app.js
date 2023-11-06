const express = require('express');
const mysql = require('mysql');
const app = express();

// MySQL database configuration
const db = mysql.createConnection({
  host: '159.203.27.169',
  user: 'ICI',
  password: 'pickering',
  database: 'ICI_DB',
  socketPath: '/var/run/mysqld/mysqld.sock',
  connectTimeout: 20000
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ' + err.message);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Set up your Express app to use EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Create a route to fetch data from the database
app.get('/', (req, res) => {
  const sql = 'SELECT * FROM dcus'; //  table name

  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing the query: ' + err.message);
      return res.status(500).send('Internal Server Error');
    }

    res.render('index', { data: result });
  });
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
