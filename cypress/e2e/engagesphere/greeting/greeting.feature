Feature: Greeting

  Scenario: shows the default greeting
    Given I access the EngageSphare app having already accepted the cookies banner
    Then I see the following greeting: Hi there!

  Scenario: shows a customized greeting
    Given I access the EngageSphare app having already accepted the cookies banner
    When I type "<name>" in the name input field
    Then I see the following greeting: Hi "<name>"!

    Examples:
      | name     |
      | Walmyr   |
      | Squirrel |
