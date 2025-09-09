Feature: Last Searches

  @hackerstories
  Scenario: shows the last five searched terms as buttons
    Given I access the Hacker Stories web app
    When I search for these terms
      | Vue | Svelte | Angular | Next | Nest |
    Then I see "5" buttons, one for each of the last searched terms
