# Aajil_Cypress_Tech_Assessment

## Summary
This project is for a technical assessment to showcase my experience in thest automation.

The project is a cypress project following the page objects design pattern. Four pages are included in the project to test the [SUT](https://blazedemo.com/) in addition to a master page that incorporates all other pages.



## Installation Guide

- You can start by installing node.js from their official [website](https://nodejs.org/en/download "Node.js download page")

- Download/Clone this repo locally on your machine

- Now open the terminal in the project's root and run the following commands:

    ``` bash
    npm install
    npm install cypress --save-dev
    ```

- You're all set now. User the following command to run the tests and generate the report for your own run

    ``` npx cypress run --browser chrome ```



### Assumptions & Notes
- I assumed if the user gives the flightSeq as a number smaller than or equals 0, then the function should assign a random positive number as the user input is invalid
- I assumed if the user gives the depCity, or desCity that is not available in the dropdown list, then the function should assign a random city from the options in the dropdown
- The task document can be found in this repo under the file name `TaskSpecs.pdf`