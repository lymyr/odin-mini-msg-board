# todo: revise later

## details
- **stack:** node, express, ejs, postgresql
- **learning:** dynamic html (EJS. Using includes for partials, correct tags to avoid cross-site scripting), MVC, passing data/contexts from server to client and vice versa (using req params to extract message id), hidden inputs (navigation to message id which helps communicate with backend), form validation (using express-validator), postgresql (process.argv to make connection to either local or production db, using parameterized query to avoid sql injection), also added custom function to check number of messages and delete once it reaches a certain threshold to keep things small

## setup
- **run app:** `node app.js [connectionString]`
- **create table:** `npm run populatedb [connectionString] [seed | null]`
- **connectionString example:** `postgresql://dbuser:secretpassword@database.server.com:3211/mydb`