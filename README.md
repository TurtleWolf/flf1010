[ ![Codeship Status for TurtleWolf/Food_Liberation_Front-codeship](https://app.codeship.com/projects/c16de1f0-0520-0136-6ab5-12afcd81044a/status?branch=master)](https://app.codeship.com/projects/280673)
  
  
+ editbarrel/ dates prefill  
+ new Date(year, month, day, hours, minutes, seconds, milliseconds)
+ sure you want to delete 
+ component grouping by directory
+ login component
+ hide creditentials
+ html5 boiler plate over frontend 
+ serve static, see below or just change build pack?
8. codeship pipeline

The build folder is ready to be deployed.
You may serve it with a static server:
```
  npm install -g serve
  serve -s build
```
Find out more about deployment [here:](http://bit.ly/2vY88Kr)  
```
npm install -g create-react-app
```

# Food_Liberation_Front  
### loopBACK &amp; react on Cloud 9  
```
npm install
node .
```
###### open new terminal
```
cd client_src
npm install
npm start
```
### or to recreate from scratch.. 
http://loopback.io/doc/en/lb3/Create-new-data-source.html  
## [Create a simple API](http://loopback.io/doc/en/lb3/Create-a-simple-API.html "Use the application generator tool to quickly create a LoopBack application, data sources, and models.")  
```
npm install -g loopback-cli
```
```
lb
```
//  ❯     api-server (A LoopBack API server with local User auth)
```
cd Food_Lieraton_Front
```

## [Add a data source](http://loopback.io/doc/en/lb3/Connect-your-API-to-a-data-source.html#add-a-data-source "LoopBack enables you to easily persist your data model to a variety of data sources without having to write code.")
```
lb datasource  
```
```
"mLAB_flf": {
    "host": "",
    "port": 61678,
    "url": "mongodb://food-liberation-front:92!1WdzRBH*a@ds261678.mlab.com:61678/food-liberation-front",
    "database": "food-liberation-front",
    "password": "92!1WdzRBH*a",
    "name": "mLAB_flf",
    "user": "food-liberation-front",
    "connector": "mongodb"
  }  
```
```
lb model
```
```
{
  "name": "Barrel",
  "base": "PersistedModel",
  "properties": {
    "Name": {
      "type": "string",
      "required": true,
      "default": "Barrel #0048"
    },
    "barrel_number": {
      "type": "number",
      "required": true,
      "default": 48
    },
    "date_planted": {
      "type": "date",
      "required": true,
      "default": "2018-03-20T00:00:00.000Z"
    },
    "size": {
      "type": "string",
      "required": true,
      "default": "1 gallon"
    },
    "contents": {
      "type": "string",
      "required": true,
      "default": "sunchoke, air potato, walking onion"
    },
    "location": {
      "type": "string",
      "required": true,
      "default": "EBF"
    },
    "geoLocaction": {
      "type": "geopoint",
      "required": true,
      "default": {
        "lat": 35.5951,
        "lng": 82.5515
      }
    },
    "date_last_checked": {
      "type": "date",
      "required": true,
      "default": "2017-11-20T00:00:00.000Z"
    },
    "notes": {
      "type": "string"
    },
    "image": {
      "type": "string",
      "default": "https://goo.gl/photos/p3jXTkmstWyUvA2r5"
    }
  },
}

```
```
node .
```

or [Node 6.x recommended](http://www.ibm.com/support/knowledgecenter/SSFS6T/com.ibm.apic.toolkit.doc/tapim_cli_install.html "Installing the API Connect Developer Toolkit")  

```
npm install -g apiconnect    

```
```
apic loopback
```
```
cd /home/ubuntu/workspace/StrongBackTangent
```
```
apic create --type model
```

```
lb app loopback-example-database  
```



// fuzzy directions ..




```
cd loopback-example-database  
npm install --save loopback-connector-mongodb  
```
```
//lb datasource accountDS
slc datasource:accountDS
# follow the prompts 
```
```
//lb model
slc loopback:model
# follow the prompts 
```
