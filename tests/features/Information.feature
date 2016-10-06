@acceptance.tests @information.feature
Feature: Display information about a specific film
As a user of the system
I want to be able to view information about a film
So that I can find information I'm interested in

The information should include the Title, Year, Genre, and a plot summary.

  @read
  Scenario: View the details of a film
    Given I have successfully searched for "Titanic"
	When I touch the film "Titanic"
    Then I see the detailed information screen

  @read
  Scenario: Exiting the detailed information screen
    Given I am on the detailed information screen for the film "Resurrection"
	And I have pressed the back button
	Then I am on the search screen
