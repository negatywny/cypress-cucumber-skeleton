## Get to Know the App
The Cypress Heroes app is a take on the classic Angular Tour of Heroes tutorial application. The app displays a list of heroes for hire. You can view the hero's contract price, the number of fans (likes) the hero has, and the number of saves (completed jobs). Heroes can be created, edited, and deleted.

The app features a few different pages and several components that provide a good starting point to learn testing with Cypress.

Some features of the app include:

Multi-page with serval components
Authentication
API calls to a real back-end
Forms
Attempting to click the like or hire icons will result in being prompted to log into the app. There are two baked-in logins, a normal user and an admin user with elevated permissions. Here are the credentials for the logins:

```Normal User: username: test@test.com, password: test123```


```Admin User: username: admin@test.com, password: test123```


Logging in as a normal user will allow you to like and hire the hero. Notice that when doing so, the number of fans and saves increases (respectively).

You gain access to add, edit, and delete heroes as an admin user.
<!--  -->
<!--  -->