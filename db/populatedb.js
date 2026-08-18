import { Client } from "pg";

let SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        made_by VARCHAR (20),
        text VARCHAR (300),
        date_added TIMESTAMP
    );
`
if (process.argv[3] == 'seed')
    SQL += `\n
        INSERT INTO messages (made_by, text, date_added) VALUES
            ('Luffy', 'I\'\'ll become pirate king!', NOW()),
            ('Pacquiao', 'Happy new year everyone!', NOW()),
            ('Steve', 'Hi.', NOW());
    `
async function main() {
    const client = new Client({
        connectionString: process.env.DBSTRING
    })
    await client.connect()
    await client.query(SQL)
    await client.end()
    console.log("Finished :)")
}

main()