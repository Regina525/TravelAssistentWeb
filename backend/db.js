import mysq from "mysql";
const db = mysq.createConnection({
    "host":"localhost",
    "user":"root",
    "password":"",
    "database":"travel"
})

export default db;