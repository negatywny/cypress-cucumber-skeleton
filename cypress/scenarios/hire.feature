Feature: Hire a hero scenarios

@smoke
Scenario: Not logged user tries to hire a hero 
Given Im on the hero page
When I see a first hero
And I memorize a hero saves counter
And I click on hero hire button
Then Alert modal with infomation about log in to hire is visible
Then I am able to close login information modal
Then Hero saves counter should not increase

Scenario: User should see a hire confirmation modal
Given Im on the hero page
When I log in as normal user
And I see a first hero
And I memorize a hero price
And I memorize hero name
And I memorize hero avatar
And I click on hero hire button
Then Hero hiring modal should be visible
Then Hero hiring modal price should be correct
Then Hero hiring modal avatar should be correct
Then Hero hiring modal name should be correct
Then Hero hiring modal buttons should be visible

@smoke
Scenario: Normal user hires a hero 
Given Im on the hero page
When I log in as normal user
And I see a hero with a name 'The Librarian'
And I memorize a hero saves counter
And I click on hero hire button
And I confirm hiring a hero using a modal
Then Hero hiring modal should disappear 
Then Hero saves counter should increase

@smoke
Scenario: Admin user hires a hero 
Given Im on the hero page
When I log in as admin
And I see a first hero
And I memorize a hero saves counter
And I click on hero hire button
And I confirm hiring a hero using a modal
Then Hero hiring modal should disappear
Then Hero saves counter should increase

Scenario: User rejects hiring a hero 
Given Im on the hero page
When I log in as normal user
And I see a hero with a name 'Mr Angular'
And I memorize a hero saves counter
And I click on hero hire button
And I reject hiring a hero using modal
Then Hero hiring modal should disappear
Then Hero saves counter should not increase
