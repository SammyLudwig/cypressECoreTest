Feature: Login tests
  
    All login tests must be placed here

  Background: Accessing the webpage
    Given i access the web page
  
  Scenario: Login success
    And i enter with my username "demouser" and password "abc123"
    When click on login button
    Then the invoices main page is shown succefully
  
  Scenario Outline: Fail to login - wrong username and/or password
    And i provide incorrect username as "<username>" and password as "<password>"
    When click on login button
    Then a message wrong username or password is shown  
    Examples:
      | username | password |
      | Demouser | abc123   |
      | demouser_| xyz      |
      | demouser | nananana |    
      | demouser | abc123   | #this line is on the data table presented in the PDF but this case triggers the first scenario (username and password are correct)

    