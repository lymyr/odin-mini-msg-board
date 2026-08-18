import { checkRows, deleteOldMessages } from "../db/query.js";

export default async function limitMessages(req, res, next) {
    const amount = await checkRows();
    if (amount > 25)
        deleteOldMessages()
}