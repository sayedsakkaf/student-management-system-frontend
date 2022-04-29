# Student Management System (Front-end)
> By Sayed Sakkaf


## Introduction

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system. This is the front-end which links to the [back-end](https://github.com/sayedsakkaf/student-management-system). This will need to be also need to be cloned for the project to function properly.

### Applications used:

Below is a list of applications that I had used to complete my project and are also prerequisites for running the project on your system

* [Visual Studio Code](https://code.visualstudio.com/download) - Front-end Development
* [LiveServer by Ritwick Dey](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - Live Server Add-on
* HTML, JavaScript and CSS - Langauges used in front-end development


## Installing:

To get this project up and running on your system, you will need to clone this repository down to your system. 
<img width="383" alt="Screenshot 2022-04-29 at 15 05 37" src="https://user-images.githubusercontent.com/100779457/165960445-7404c4b5-3a94-4d50-b969-b2f257b0761d.png">

This can be done by clicking on the code option on the Github repository, copying the link shown and using git clone to clone it down to your system. 

* Using VSCode, open the folder location where the repository was cloned down. 
* Now that the folder is open on VS code, we have access to all the HTML and JavaScript files need to make the website function and interact with the back-end. 


## Deployment
* Start the back-end, ensuring that there is an instance of the back-end running on port localhost:8080
* Then view the webpage, right click on the index.html file and select Open with Live Server. The home page will open up:

<img width="1477" alt="Screenshot 2022-04-29 at 15 46 29" src="https://user-images.githubusercontent.com/100779457/165969402-0d70f75c-2797-46bb-aa63-33825c60efd2.png">

* There are four options in the navigation bar - CREATE, READ, UPDATE and DELETE and each of these using API requests to make changes to files in a database from the back-end. 


## Demonstration for CREATE
* Create - Inserting data into first and last name:
<img width="575" alt="Screenshot 2022-04-29 at 15 55 42" src="https://user-images.githubusercontent.com/100779457/165970186-0b79e4d5-8040-4c33-bc0d-25aaeb5ae2fb.png">

* This returns the student that has been added to the database and the appropriate response:
<img width="987" alt="Screenshot 2022-04-29 at 15 55 52" src="https://user-images.githubusercontent.com/100779457/165970515-faa2371a-56e0-4525-b987-785b53f429e8.png">

## Demonstration for READ
* Read - Reading data from the database. Ability to read all or read by ID:

* Read all
<img width="1489" alt="Screenshot 2022-04-29 at 16 02 13" src="https://user-images.githubusercontent.com/100779457/165971389-e4cec364-8e4c-43fb-b9f9-67c1e8c1fce3.png">


* Read by ID
<img width="1477" alt="Screenshot 2022-04-29 at 16 02 25" src="https://user-images.githubusercontent.com/100779457/165971406-a8a4144e-839e-4378-bf50-adbd03f6f006.png">



## How this works in the background

With the linked port 8080 and the API running in the background, the JavaScript files consist of GET, PUT, POST and DELETE methods which then communicate with the database linked to the API. This then sends and receives data into that database and displays it on screen. An example can be seen below of the DELETE method: 

<img width="892" alt="Screenshot 2022-04-29 at 16 07 42" src="https://user-images.githubusercontent.com/100779457/165972175-cfe3bdd8-98c2-471f-b40e-855ad5fc86db.png">






## Authors

* **Sayed** - *Project Development* - [sayedsakkaf](https://github.com/sayedsakkaf)


## Acknowledgments

* Special thanks the the 22FebEnable3 cohort for peer support
* Special thanks to Morgan Walsh - Trainer
