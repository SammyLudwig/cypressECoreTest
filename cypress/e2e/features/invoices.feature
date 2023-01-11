Feature: Invoices tests

    All invoce tests must be placed here

  Background: Accessing the webpage
    Given i access the web page
  
  Scenario: Validate invoice details
    And i enter with my username "demouser" and password "abc123"
    And click on login button
    When click on invoice details link
    Then all data of the invoice clicked is shown correctly