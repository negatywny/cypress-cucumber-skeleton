Feature: Login Feature

  Scenario: Successful User Login
    When I log in as normal user
    Then I should be logged as normal user

  Scenario: Successful Admin Login
    When I log in as admin
    Then I should be logged as admin

  Scenario: Incorrect Credentials
    Given Email is: 'admin@test.com'
    Given Password is: 'incorrect_password'
    When I open a login modal
    And I fill email input
    And I fill password input
    And I click on sign in button
    Then I should not sign in
    Then I should see Invalid email or password modal error

  Scenario: Empty Email and Password
    When I open a login modal
    And I click on sign in button
    Then I should see Email is required input error
    Then I should see Password is required input error

  Scenario: Invalid Email
    Given Email is: 'test123'
    Given Password is: 'test'
    When I open a login modal
    And I fill email input
    And I fill password input
    And I click on sign in button
    Then I should see Email is not valid input error
