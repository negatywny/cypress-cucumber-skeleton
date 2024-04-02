Feature: Like a hero scenarios

  @smoke
  Scenario: Not logged user tries to like a hero
    Given Im on the hero page
    When I see a first hero
    And I memorize a hero fans counter
    And I click on a hero like button
    Then Alert modal with infomation about log in to like is visible
    Then I am able to close login information modal
    Then Hero fans counter should not increase
  
  @smoke
  Scenario: Normal user likes a hero
    Given Im on the hero page
    When I log in as normal user
    And I see a first hero
    And I memorize a hero fans counter
    And I click on a hero like button
    Then Hero fans counter should increase

  @smoke
  Scenario: Admin likes a hero
    Given Im on the hero page
    When I log in as admin
    And I see a hero with a name 'Cyonic'
    And I memorize a hero fans counter
    And I click on a hero like button
    Then Hero fans counter should increase
