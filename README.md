# RefeGreen

> Little program to arbitre tennis matches

## Build Setup

``` bash
# install dependencies
yarn // npm install

# serve with hot reload at localhost:8080
yarn dev // npm run dev

# build for production with minification
yarn build // npm run build

# build for production and view the bundle analyzer report
yarn build --report // npm run build --report

# run unit tests
yarn unit // npm run unit

# run all tests
yarn test // npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Security vulnerability

If you have a message "We found a potential security vulnerability in one of your dependencies.  
A dependency defined in ./package-lock.json has known security vulnerabilities and should be updated."

- Find the name of the package or the package which contain this package in the _package-lock.json_
- Run `yarn upgrade-interactive --latest`
- Find the right package to upgrade (use _up/down_ to select), _Space_ to select the package and _Enter_ to validate
- Update
- Run `yarn dev` to test the serve
- If it still broken, run `git checkout .\package.json` to reverse changes in this file
- Change only the dependancies associated to the bug on the right realese version in the _package.json_ file
- Run `yarn` to update all dependancies then `yarn dev` to test the serve
