import { Client } from "pg";
import { loadEnvFile } from 'node:process'

loadEnvFile()

let SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        made_by VARCHAR (20),
        text VARCHAR (300),
        date_added TIMESTAMPTZ
    );
`
if (process.argv[2] == 'seed')
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