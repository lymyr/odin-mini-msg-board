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

// todo: add before deploy. check rows, if too many, delete oldest ~30 rows ig idk
async function checkRows() {
    const { rows } = await pool.query('SELECT COUNT(*) FROM messages')
    return rows
}

async function deleteOldMessages() {
    await pool.query('SELECT FROM messages ')
}