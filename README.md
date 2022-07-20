# Talkr Chat App

## Description

### Simple interactive chat application where users can create an account, style and edit their profile with different avatars. User can access chat room to send real-live messages to other users and have a conversation.

## User Stories

*  As new user, I would like to sign up with email and password
*  As a registered user, I would like to sign in with username and password
*  As a signed in user, I would like to sign out
*  As a signed in user, I would like to choose my profile avatar 
*  As a signed in user, I would like to enter chatroom 
*  As a signed in user, I would like to send a message to other users 

## Technologies used for Project

*  REACT
*  Node.js
*  MongoDB
*  Socket.io
*  HTML/CSS

## Goals

### MVP
* Create fullstack application 
* User to register for new account
* Create user login and logout
* Create user profile
* User to access chat room
* User to send/receive messages with other users

### MVP
* User to choose a profile avatar from API utilized
* Incorporated an emoji interface to use when messaging
* Make it responsive to mobile (only certain smaller size screens apply)


## RESTful Routing Chart

![](https://user-images.githubusercontent.com/102763920/179932614-db54fbbf-4308-4efa-b61c-fd1ddbc456c9.png)

## Wire Frames

### Registraion Page Path: '/register'

![](https://user-images.githubusercontent.com/102763920/179935846-495c78de-6665-4cc9-a866-1dd23419dc7a.png)

### Login Page Path: '/login'

![](https://user-images.githubusercontent.com/102763920/179936091-6c151b1b-97df-4a48-9ba2-8a54efd19272.png)

### Profile/Avatar Page Path: '/setAvatar'

![](https://user-images.githubusercontent.com/102763920/179936486-04a0b618-c491-46b9-a252-d951b9778349.png)

### Chat Room Page Path: '/' 

![](https://user-images.githubusercontent.com/102763920/179939182-9c17eb8f-25b7-4e09-b1f9-f7c40ee1135d.png)

![](https://user-images.githubusercontent.com/102763920/179939352-35d896b5-bb75-4394-8ce9-1c657d6e158a.png)


## ERD/Models

<<<<<<< HEAD
![](https://i.imgur.com/jb5a1K5.png)
=======
![](https://user-images.githubusercontent.com/102763920/179932200-9e385da4-13db-4960-ae65-721c67b8b07e.png)
/jb5a1K5/)


## Approach

For my capstone project I decided to create a MERN app using some of the various technologies I learned in this course. I implemented Socket.io as part of this chat/messaging application along with an API source that provides avatars for the users. I originally planned to do a basic messaging app that included basic components and CRUD principals. REACT was the main language I used to create and structure the application. I initially focused on creating the backend and utilizing MongoDB Compass to test out my routes. Installed a couple of NPM packages that I had not used before to add functionallity and appeal to the user. Such as "React-Toastify" for error messages (pop ups). "Styled-components" to help with styling and "React-Emoji-Picker" to add emoji options when typing out messages. 
  The app took a life of its own and developed into something more complex than I had planned and towards the latter days I was met with challenges with bugs and functionality errors that caused delays. With a little bit of research and elbow grease I worked around it and completed a working sample of this app. 
  
## Hurdles

Some of the toughest hurdles I had to work through was when trying to fetch the users data (messages) and cohesively show it for the other user in the app. I found that using "useState" and "useEffect" hooks along with "try/catch" made things easier, with a little bit of trial and error. Next was learning to use the socket.io package to sync with the application, reviewing the documentation and implementing different methods. Currently the app has a few kinks that need to be worked out. As a post-project goal I would like to add additional functionally for multiple users in a single chat and improved responsiveness for phones and smaller screen devices. 


>>>>>>> afbf32f071030c62ab04c8e89203f449a20bbc7e



