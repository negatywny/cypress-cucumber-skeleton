Feature: Like Feature

  Scenario: Not logged user tries to like a hero
  Given Im on the hero page
  When I click on first hero like button
  Then Alert modal with infomation about log in to like is visible
  Then I am able to close login information modal


Scenario: Normal user tries to like a hero
When I log in as normal user
