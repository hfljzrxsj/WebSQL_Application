//@ts-check
// import pkg from 'sqlite3';
const pkg = require('sqlite3');
const sqlite3 = pkg.verbose();

// 创建一个名为data.db的数据库
let db = new sqlite3.Database('./data.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the data.db database.');
});

db.serialize(() => {
  // 创建一个新表
  db.run('CREATE TABLE IF NOT EXISTS langs(name text)');

  // 插入一些数据
  db.run(`INSERT INTO langs(name) VALUES('XH')`, [], function (err) {
    if (err) {
      return console.log(err.message);
    }
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });

  // 执行SQL查询并打印结果
  db.each(`SELECT name FROM langs`, (err, row) => {
    if (err) {
      throw err;
    }
    console.log(row.name);
  });
});

// 关闭数据库连接
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});