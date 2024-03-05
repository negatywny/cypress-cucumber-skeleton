Feature: Example Feature

  Scenario Outline: Scenario Outline Example
    Given Example Given
    When Example When
    Then Example Then <example1>
    Then Example Then2 <example2>

    Examples: 
      | example1 | example2 |
      | "test1"  |        2 |
      | "test2"  |        0 |

  @smoke
  Scenario: Smoke Test Example
