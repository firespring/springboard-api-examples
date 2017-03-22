#Firespring API Docs

##Javascript

###Installation

Clone the project:

```
git@github.com:firespring/springboard-api-examples.git
```

###Necessary to use

* `WEBSITE_ID` You can find this in the ID column in the Springboard's website-selector
* `API_KEY`

**Optional**

* `MESSAGE_ID`
* `ORDER_ID`


Keep in mind, if you change the name of example.js you must update the index.html to correspond to your change

Once the project is copied on a local environment, right click on the index.html and open with your favorite browser

Go into your springboard account, and go to the Account Management tab. 

1. Click `API Keys`

2. Click add API Key (be sure not to close the window before having stored your API Key somewhere.
This will be the last time you will be able to access this full key.)

3. Add the API Key to `const API_KEY`

4. If you want to get information on a specific message or order add a `MESSAGE_ID` or `ORDER_ID` to the end of
your API url.

> If you want to get orders, be sure to change the api url to `https://my.firespring.com/api/v1/websites/WEBSITE_ID/orders/`

> If you want to get the `MESSAGE_ID` you can make an API call to get access to all the ID's, or look at the end number 
of the url string of a specific message in the message-center I.E. `https://my.firespring.com/website/WEBSITE_ID/message-center/message/MESSAGE_ID`

> If you want to get the `ORDER_ID` you can make an API call to get access to all the ID's, or look at the end number
of the url string of a specific order in the `online-tools` --> `order-administration` section of the Springboard
I.E. `https://my.firespring.com/website/WEBSITE_ID/online-tools/order-administration/ORDER_ID/`