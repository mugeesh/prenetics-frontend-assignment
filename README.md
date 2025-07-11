# Getting Started with Create React App

This project is a test application built with React. Follow the steps below to set up and run the application.

## Prerequisites
- **Node.js**: Ensure you have Node.js version 20 installed.

## Download Backend Service

1. Clone the backend repository:
   ``` 
   git clone https://github.com/mugeesh/prenetics-backend-assignment

Follow the instructions in the backend repository to run the service and check the API.

To retrieve the organization ID, run the following command:
1. Clone the backend repository:
   ```
   curl -X 'GET' 'http://localhost:8080/test/v1.0/org' -H 'accept: application/json'

Alternatively, you can access the Swagger documentation:
http://localhost:9080/swagger/#/

##### System Setup and run
1. node version 20
2. update .env file, add REACT_APP_ORGANISATION_ID from backend step (4)
3. `npm install`
4. `npm start`
5. ```http://localhost:3000/```


##### Screenshot
Landing page
![1.png](screenshot/1.png)
Filter
![2.png](screenshot/2.png)
Pagination
![3.png](screenshot/3.png)
