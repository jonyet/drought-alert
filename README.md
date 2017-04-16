# drought-alert
utilize wunderground API to gather data for a given area to alert the user that they should water their young trees

**Prerequisites**

- node 7.8.0 [https://github.com/creationix/nvm]
- weather underground API key (anvil plan)[https://www.wunderground.com/weather/API/]

**Getting Started**

once you have your API key:
- clone this project
- create a copy of `.envschema`.
- rename the copy to `.env` and update it with your API key.

the `.gitignore` will already omit your private key from exposure. it's free, so big deal, but good for practice, right? after doing this you should be able to just install your dependencies and run the script.

```npm install```

```npm start```
