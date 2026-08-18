import { Pool } from "pg";
import {loadEnvFile} from 'node:process'

loadEnvFile()

export default new Pool({
    connectionString: process.env.DBSTRING
})