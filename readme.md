# Scraper in node.js
I write this project with language node.js. I use mongoose Schema for creating table in database and library request for simple http calls.

This project contain:  
pages.js - model for database;
scrape.js - config project. 

For start it you need:
1. Install all dependencies, command 
```npm i``` or ```npm install```;
2. Change database in scrape.js;
3. Start app, command npm start;
4. Open Postman and paste url ```http://localhost:3000/addpage```;
5. In the tab body paste url of the site that you want to parse.
