# Aajil | Technical Assessment | Cypress Project

## Summary
This project is for a technical assessment to showcase my experience in test automation.

The tool of choice was Cypress. The project is following the page objects design pattern. Four pages are included in the project to test the [SUT](https://blazedemo.com/) in addition to a master page that incorporates all other pages.



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

    Note: you can add `--headded` at the end in the last command if you want to see the run while int's in progress instead of it running in the back ground



### Assumptions & Notes
- I assumed if the user gives the depCity, or desCity that is not available in the dropdown list, then the function should assign a random city from the options in the dropdown
- I assumed if the user gives an invalid flightSeq (`<= 0` or `> Flights Count`), then the function should assign a random valid index number as the user input is invalid
- The task document can be found in this repo under the file name `TaskSpecs.pdf`
- I've designed the `selectDeptCity` & `selectDesCity` functions to handle integer parameters as well as strings as the `select` function in cypress accepts both 
