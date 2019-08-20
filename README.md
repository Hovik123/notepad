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
