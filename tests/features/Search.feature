@acceptance.tests @search.feature
Feature: Search feature
As a user of the system
I want to be able to search films
So that I can find the films I am interested in

Search results should be displayed in the same screen.
If there are too many results to fit, then the results should be scrollable
Maximum returned results will be 30
Films should be held locally, although at some future point, use IMDB instead
Search results should show the Title, Year of release, and Genre, using the same layout as we used in the other application

  Scenario: Starting the application
    Given I am in the application
	When I look at the screen
    Then I see a search box

  @successful
  Scenario: Performing a successful search
    Given I am on the search screen
	And I have entered "Star Wars" in the search box
	When I start the search
	Then I see a list of films including
	  | Star Wars: The Empire Strikes Back |
	  | Star Wars: Return of the Sith      |
	  | Star Wars: Fellowship of the Sabre |

  @validation @error
  Scenario: Performing an failed search
    Given I am on the search screen
	And I have entered "Beetlejuice: The Hell Years" in the search box
	When I start the search
	Then I see a message telling me there are no results
	
  @validation @error
  Scenario: Attempting to perform an invalid search
    Given I am on the search screen
	And I have entered "@&*# You!" in the search box
	When I start the search
	Then I see a message telling me that there are invalid characters in the search
