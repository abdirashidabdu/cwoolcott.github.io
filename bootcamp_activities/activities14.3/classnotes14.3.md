# The Power of the ORM


### 

* **Party Database Instructions**

Once you have answered any and all questions regarding ORMs and how they are used, Slack out the following:

Files

13-PartyDatabase/Unsolved
Instructions

You will be creating a holiday party planner application. We want to help create parties for our clients whilst also keeping track of all the events that we are host. In MySQL, create a database called party_db with two tables structured like the tables below. Utilize the provided schema.sql and seeds.sql file in order to build the tables and seed initial values.

id  party_name | party_type | party_cost | client_id
1   Everybody Loves Raymond | tv  | 500 | 1
2   Big Bang Theory | tv | 900 | 1
3   Top Gun | movie | 200 | 2
4   Whiskey | grown-up | 300 | 2
5   Cigar | grown-up | 250 | 3

id  client_name
1   Bilal
2   Brianne
3   Vincent

Create a Node MySQL application with an ORM that executes once the server is launched.

You will not need Express or Handlebars for this assignment. Use console.log to print the data collected to the console.

Create a MySQL database with the tables and data which were slacked out to you.

Create a Node app and connect it to MySQL with a config folder and with a connection.js file inside of that folder.

Create an orm.js file, and make an ORM that will do the following:

Console log all the party names.
Console log all the client names.
Console log all the parties that have a party-type of grown-up.
Console log all the clients and their parties.
BONUS: create a function within your ORM that will let the user add more clients and parties to the database.

* **The Asynchronous Solution Instructions**

* Work in pairs to see if you can come up with the reason why our code in `18-TheAsynchProblem` is console.logging "undefined" despite no errors being recorded.

* See if you can come up with a possible solution to this problem.

  * You are free to search the web for potential causes/solutions to this issue, as it is a problem that many new coders have faced and that they will continue to face for years and years to come.

  * Use the code contained within `18-TheAsynchProblem` to run, test, and mess with on your own.
