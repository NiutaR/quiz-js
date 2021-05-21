const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: "localhost",
        dialect: "mysql",
    }
);

(async () => {
    try {
        await.sequelize.authenticate();
        console.log("Connection has been established succe")
    }
})