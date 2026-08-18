import pool from "./pool.js";

export async function getMessages() {
    const { rows } = await pool.query('SELECT * FROM messages')
    return rows
}

export async function getMessage(id) {
    const { rows } = await pool.query('SELECT * FROM messages WHERE messages.id = $1', [id])
    return rows
}

export async function postMessage(madeBy, text, dateAdded) {
    await pool.query(`
        INSERT INTO messages (made_by, text, date_added)
        VALUES ($1, $2, $3);`,
    [madeBy, text, dateAdded])
}

// used so i wont use too much storage in deployment.
// checks rows, if too many, delete oldest ~10 rows ig idk
export async function checkRows() {
    const { rows } = await pool.query('SELECT COUNT(*) FROM messages')
    return rows[0].count
}

export async function deleteOldMessages() {
    await pool.query(`
        DELETE FROM messages 
            WHERE messages.id IN (
                SELECT id FROM messages ORDER BY date_added ASC LIMIT 10
            )
    `)
}