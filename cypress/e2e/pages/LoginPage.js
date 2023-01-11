class LoginPage {
    elements = {
      userInput: () => cy.get('input[name="username"]'),
      passwordInput: () => cy.get('input[name="password"]'),
      loginButton: () => cy.get('#btnLogin'),
      failLoginMessage: () => cy.get('div').contains('Wrong username or password.')
    };
  
    insertCredentials(username,password){
      this.elements.userInput().type(username);
      this.elements.passwordInput().type(password);
      
    }

    clickOnLoginbutton(){
      this.elements.loginButton().click();
    }
  }
  
  export const loginPage = new LoginPage();