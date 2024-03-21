Feature: Login Feature

  Scenario: Successful User Login
    Given Email is: 'test@test.com'
    Given Password is: 'test123'
    When I open a login modal
    And I fill email input
    And I fill password input
    And I click on sign in button
    Then I should be logged as user

  Scenario: Successful Admin Login
    Given Email is: 'admin@test.com'
    Given Password is: 'test123'
    When I open a login modal
    And I fill email input
    And I fill password input
    And I click on sign in button
    Then I should be logged as admin

  Scenario: Incorrect Email
    Given Email is: 'test123@test.com'
    Given Password is: 'test123'
    When I open a login modal
    And I fill email input
    And I fill password input
    And I click on sign in button
    Then I should not sign in
    Then I should see Invalid email or password modal error

  Scenario: Incorrect Password
    Given Email is: 'test123@test.com'
    Given Password is: 'test'
    When I open a login modal
    And I fill email input
    And I fill password input
    And I click on sign in button
    Then I should not sign in
    Then I should see Invalid email or password modal error

  Scenario: Invalid Email and Password
    When I open a login modal
    And I click on sign in button
    Then I should see Email is not valid input error
    Then I should see Password is required input error
