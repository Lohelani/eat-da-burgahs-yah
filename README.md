# Eat-Da-Burger

#### _12 Node Express Handlebars: Eat Da Burger, 12.06.20_

### _By Lohelani Hicks_

***Requirements:***

Requirements for this assignment were to create a burger logger with MySQL, Node, Express and a homemade ORM. The application must use Node and MySQL to query and route data in the app.Eat-Da-Burger is a restaurant app that lets users input the names of burgers they'd like to eat.Whenever a user submits a burger's name, your app will display the burger on the left side of the page as available. Each burger in the waiting area also has a `Devour` button. When the user clicks it, the burger will move to the right side of the page. Each burger on the right side of the page will have a `Delete Button`.  When the user clicks delete, it will be removed from the db and the page. 


## Description and Method

For this application, I created an orm and connection js file to handle the mysql connection. in burgers controllers js file I used router to write the get, post, put and delete methods. I create a db in mysql workbench, and seeded the db with a few standard burgers. With these and the additional files, a user is able to input a burger, devour a burger, and delete a burger. When user deletes a burger, it is removed from the db. This app is deployed using MYSQL Heroku.

### Technologies Used:
* Node
* Exress
* Router
* MySQL
* Heroku

# Heroku Link to Deployed Application:

 https://noexistentfoodyoucaneat.herokuapp.com/

 # Link to Github Repository:

  https://github.com/Lohelani/eat-da-burgahs-yah

# Screenshot

![image](https://user-images.githubusercontent.com/70550481/101407455-f02bde00-38a8-11eb-93a3-22f782483506.png)

