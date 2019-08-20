# Notepad

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Application Run process 
Application can start with commands `npm run start`
before running that command please  copy `env.example` file and rename to 
`.env` after that will  be generated the file with provided name which currently fixed as `environment.ts` for local development 
and as  `environment.prod.ts` for production

## About project
notepad add contain following functionality:
  #### create note
    you need to fill required fields and if all fileds is filled correct and don`t have validation error then you can 
    add note with title and some note
    the data will be stored inside of gist API which will be avelabel in your own gist.
    And will be stored in your brouser local storage for restore the value from storage.
    the reason why data stored inside local storage:
      because the github API point for get gists not return the content which providing to api during of creation process.
  #### delete all notes
    delete all  note should be remove the all notes from local storage and view should be updated acordingly
  #### delete note 
    delete one note item should be remove one note from localStorage if its exist and 
    remove note from view acordingly
    
## See stats
    Separate view where we can see the charts which updating each 5 second.
   
## Structure 

      src
      ├── app
      │   ├── app.component.html
      │   ├── app.component.scss
      │   ├── app.component.spec.ts
      │   ├── app.component.ts
      │   ├── app.module.ts
      │   ├── app-routing.module.ts
      │   ├── core // Core module
      │   │   ├── constants // Constant variables
      │   │   │   └── index.ts
      │   │   ├── core.module.ts
      │   │   ├── guard // guards which will contain permisions
      │   │   │   └── module-import-guard.ts
      │   │   ├── interceptors // setting data before request and after  response
      │   │   │   ├── http-request.interceptor.ts
      │   │   │   └── http-token.interceptor.ts
      │   │   └── services // Services for handling http data
      │   │       ├── gist.service.spec.ts
      │   │       └── gist.service.ts
      │   ├── gist-charting //gist charting  module for handling statistics logic
      │   │   ├── chart
      │   │   │   ├── chart.component.html
      │   │   │   ├── chart.component.scss
      │   │   │   ├── chart.component.spec.ts
      │   │   │   └── chart.component.ts
      │   │   ├── gist-charting.component.html
      │   │   ├── gist-charting.component.scss
      │   │   ├── gist-charting.component.spec.ts
      │   │   ├── gist-charting.component.ts
      │   │   ├── gist-charting.module.ts
      │   │   └── gist-charting-routing.module.ts
      │   ├── gist-manager // gist module for handling add and remove gists 
      │   │   ├── gist-manager.component.html
      │   │   ├── gist-manager.component.scss
      │   │   ├── gist-manager.component.spec.ts
      │   │   ├── gist-manager.component.ts
      │   │   ├── gist-manager.module.ts
      │   │   └── gist-manager-routing.module.ts
      │   ├── models // backend models
      │   └── not-found // Not found component
      │       ├── not-found.component.html
      │       ├── not-found.component.scss
      │       ├── not-found.component.spec.ts
      │       └── not-found.component.ts
      ├── assets
      ├── environments
      │   ├── environment.prod.ts
      │   └── environment.ts
      ├── favicon.ico
      ├── index.html
      ├── main.ts
      ├── polyfills.ts
      ├── styles
      │   └── _variables.scss
      ├── styles.scss
      └── test.ts


## Time
    time of implementation is 11 Hours
    
### Todo
      Need to add backend api models for supporting all typings
