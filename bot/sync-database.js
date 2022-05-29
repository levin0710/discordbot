 const Sequelize = require('sequelize');

 const sequelize = new Sequelize('discorbot', 'username', 'password', {
     host: 'localhost',
     dialect: 'sqlite',
     logging: false,
     storage: 'database.sqlite',
 });

 require('./models/tictactoe.js')(sequelize, Sequelize.DataTypes);

 sequelize.sync().then(async () => {
     console.log('Database synced');
     sequelize.close();
 }).catch(console.error);