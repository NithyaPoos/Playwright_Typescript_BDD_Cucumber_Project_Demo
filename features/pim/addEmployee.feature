Feature: Add Employee in PIM Module
  As an HR admin
  I want to add a new employee
  So that the employee record is created in the system

  Scenario: Add a new employee successfully
    Given I am logged into OrangeHRM
    When I navigate to the PIM Add Employee page
    And I enter employee details "John" "Doe"
    And I save the employee
    Then I should see the employee personal details page
