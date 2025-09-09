Feature: Greeting

  Background: access EngageSphere with the cookies consent banner already accepted
    Given I access the EngageSphare app having already accepted the cookies banner

  Scenario: shows the default greeting
    Then I see the following greeting: Hi there!

  Scenario: shows a customized greeting
    When I type "<name>" in the name input field
    Then I see the following greeting: Hi "<name>"!
    And I see the following icon: "<icon>"

    Examples:
      | name     | icon            |
      | Walmyr   | none            |
      | Squirrel | lucide-squirrel |
