# React Basic Product Manage

## Description

This is a talent assignment requested by a private company.
Made close to the sent destination.
In the remaining time, new features have been added by researching.

## Requirements

For development, you will only need Node.js installed on your environement.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install

    $ git clone https://github.com/mehmetbuber38/react-basic-product-manage
    $ cd react-basic-product-manage
    $ yarn install or npm install

## Available Scripts
!IMPORTANT: You must set up a mini node express server to be able to login and keep user information.

### `node server`

In the project directory, you can run:

### `yarn start` or ### `npm run start`

### `yarn build` or ### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

### Dependencies

- [React](http://facebook.github.io/react).

- [bootstrap](https://getbootstrap.com/) is used to site grid layout.

- [react-router](https://reactrouter.com/) is used to linked pages.

- [cors](https://github.com/expressjs/cors#readme) is used to login page user

- [SCSS](https://github.com/sass/dart-sass) is used to scss modules.

- [react-hot-toast](https://github.com/timolins/react-hot-toast) is used to fire notification.

- [react-lazy-load-image-component](https://github.com/Aljullu/react-lazy-load-image-component#readme) is used to image for performance
