#Firespring API Docs

###Installation

Clone the project:
```
git@github.com:firespring/springboard-api-examples.git
```
###Necessary To Use

* `WEBSITE_ID`
* `API_KEY`

**Optional**

* `MESSAGE_ID`
* `ORDER_ID`

##Javascript

Keep in mind, if you change the name of example.js you must update the index.html to correspond to your change

Once the project is copied on a local environment, right click on the index.html and open with your favorite browser

Go into your springboard account, and go to the Account Management tab. 

1. Click `API Keys`

2. Click Add API Key (Be sure not to close the window before having stored your API Key somewhere.
This will be the last time you will be able to access this full key.)

3. Add the API Key to `const API_KEY`

4. If you want to get information on a specific message or order add a `MESSAGE_ID` or `ORDER_ID` to the end of
your API url.

> If you want to get orders, be sure to change the api url to `https://my.firespring.com/api/v1/websites/WEBSITE_ID/orders/`

##PHP

In your terminal run:
```
curl -sS https://getcomposer.org/installer | php
```
That will install composer on your composer which is necessary to run guzzle, which is how we will be making the API call

Next run:
```
php composer.phar install
```

This will install all of our dependencies.

**Running the Application**

* This is an executable PHP file

Go into your springboard account, and go to the Account Management tab. 

1. Click `API Keys`

2. Click Add API Key (Be sure not to close the window before having stored your API Key somewhere.
This will be the last time you will be able to access this full key.)

3. Add the API Key to `const API_KEY`

4. If you want to get information on a specific message or order add a `MESSAGE_ID` or `ORDER_ID` to the end of
your API url.

5. In your terminal, make sure you are in the directory of this project inside the PHP file.

6. Run `php example.php` to see results of the API call

> If you want to get orders, be sure to change the api url to `https://my.firespring.com/api/v1/websites/WEBSITE_ID/orders/`

 