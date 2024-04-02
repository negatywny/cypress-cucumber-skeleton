<a name="readme-top"></a>
<div align="center">
<h1 align="center">Cypress Cucumber Skeleton</h3>
<a href="https://github.com/negatywny/cypress-cucumber-skeleton"><strong>GitHub repository page »</strong></a>

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Cucumber](https://img.shields.io/badge/Cucumber-43B02A?style=for-the-badge&logo=cucumber&logoColor=white)
![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)

</div>
<br>
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#cypress-heroes">Cypress Heroes</a></li>
    <ul>
       <li><a href="#get-to-know-the-app">Get to Know the App</a></li>
        <li><a href="#start-the-app">Start the App</a></li>
    </ul>
    <li><a href="#cypress-e2e-tests">Cypress E2E Tests</a></li>
    <ul>
       <li><a href="#test-scenarios-and-steps">Test Scenarios and Steps</a></li>
       <li><a href="#run-the-tests">Run the Tests</a></li>
        <li><a href="#open-cypress-gui">Open Cypress GUI</a></li>
        <li><a href="#generate-reports-after-tests">Generate Reports After Tests</a></li>
        <li><a href="#ci-cd">CI/CD</a></li>
    </ul>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


## About The Project

***Hello there!***

I've created a simple draft project for my E2E Tests using Cypress with TypeScript and Cucumber. 

Main Goals of the project are:
- Dockerize the Cypress Heroes App
- Add data-cy selectors to Cypress Heroes
- Create example cucumber scenarios
- Add mochawesome reports
- Add CI/CD

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Getting Started
### Prerequisites

Before you start, you will need to have `yarn`, `task` and `node` installed.

You can get them using [homebrew](https://brew.sh/).
- yarn
  ```sh
  brew install yarn
  ```
- task
  ```sh
  brew install task
  ```
- node
  ```sh
  brew install node
  ```

---
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/negatywny/cypress-cucumber-skeleton.git
   ```
2. Install dependencies and set up the app
   ```sh
   task install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Cypress Heroes
### Get to Know the App
The Cypress Heroes app is a take on the classic Angular Tour of Heroes tutorial application. The app displays a list of heroes for hire. You can view the hero's contract price, the number of fans (likes) the hero has, and the number of saves (completed jobs). Heroes can be created, edited, and deleted.

The app features a few different pages and several components that provide a good starting point to learn testing with Cypress.

Some features of the app include:

Multi-page with several components
Authentication
API calls to a real back-end
Forms
Attempting to click the like or hire icons will result in being prompted to log into the app. There are two baked-in logins, a normal user and an admin user with elevated permissions. Here are the credentials for the logins:

***Normal User:***
 ```sh
  username: test@test.com, 
  password: test123
```

***Admin:***
 ```sh
  username: admin@test.com, 
  password: test123
```


Logging in as a normal user will allow you to like and hire the hero. Notice that when doing so, the number of fans and saves increases (respectively).

You gain access to add, edit, and delete heroes as an admin user.

Cypress Heroes GitHub Repo:
https://github.com/cypress-io/cypress-heroes

---
### Start the App

You can start the app without docker:
 ```sh
 task dev
```

**OR**

Use docker compose
 ```sh
 task up
```

After that, the app should be available at the URL:
http://localhost:3000/heroes



<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Cypress E2E Tests
### Test Scenarios and Steps

All test scenarios are created using Cucumber and can be found in: [Test Scenarios](cypress/scenarios)

All scenarios steps are implemented using Cypress with TypeScript and are stored in: [Steps](cypress/support/step_definitions)

### Run the Tests
To run all Cypress tests in headless:
 ```sh
 task test
```

To run smoke tests in headless:
```sh
task test:smoke
```

### Open Cypress GUI

To open Cypress GUI:
 ```sh
 task open
```

### Generate Reports After Tests
After executing the tests, Cypress will save the results. To generate an HTML mochawesome report, simply use:
 ```sh
 task reports
```
Your newly generated HTML report will be stored in: [Cypress Reports](cypress/reports/mochareports)

### CI CD
GitHub Actions checks are created and running for particular cases:

- When you create a PR. Screenshots with errors are added to job artifacts if any test will fail. Here are workflow results: [E2E Tests for PRs](https://github.com/negatywny/cypress-cucumber-skeleton/actions/workflows/pr-e2e-actions.yml)
- Daily E2E Regression (at 8:00 AM) for main branch. Daily report is added to job artifacts. Here are workflow results: [Daily E2E Regression](https://github.com/negatywny/cypress-cucumber-skeleton/actions/workflows/e2e_cronjob_main.yml)

## Contact

![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white) https://www.linkedin.com/in/plusina/

![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white) 
```pawellusina1915@gmail.com```

<p align="right">(<a href="#readme-top">back to top</a>)</p>







