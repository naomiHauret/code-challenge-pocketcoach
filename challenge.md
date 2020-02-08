*Challenge from : [PocketCoach](https://www.pocketcoach.co/)*

## Step 1
You may use any library you want to fulfill this task. Create a react project and use git for your version control. Take care to use meaningful git commit messages. Use npm for package management.
The only things to make the program run should be:
`npm install`
`npm run dev` (for development)
`npm run prod` (for production ready code)

**Bonus:** use hot reloading for dev

## Step 2
Your task is to show data in a table from an object "offers".
You can use this code to generate your data:

```js
var offers = {};
var dd = new Date();
for (var i=0; i< 10; i++) {
    offers[i] = {"id":i, "date": new Date(dd.setMinutes(dd.getMinutes() + i*10)), "amount": Math.random()*10,
    "bid": 9.5 + Math.random()};
}
```

## Step 3
Automatically insert new rows into the "offers" object every 5 seconds. The table should represent these changes and always update accordingly.
You can use any kind of library for a nicer look and feel (i.e. bootstrap if you want)
It is very important how you solve this task and structure your code.

## Step 4
Use hooks for state management.
Add a column to the table namend “update” this row should contain a button in each row named “update”.
When clicking the button it should change from “update” to “loading” and get disabled. After 2 seconds it should change back to “update” and be enabled again.