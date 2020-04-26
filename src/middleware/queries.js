const Pool = require("pg").Pool;
const pool = new Pool({
  user: "Amy",
  host: "localhost",
  database: "rbdm",
  password: "",
  port: 5432,
});

const getEntries = (request, response) => {
  pool.query(
    "SELECT * FROM iran_nuclear_deal ORDER BY citedBy DESC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

// const getUserById = (request, response) => {
//     const id = parseInt(request.params.id)

//     pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).json(results.rows)
//     })
//   }

module.exports = {
  getEntries,
};
