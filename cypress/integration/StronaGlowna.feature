Feature: Strona główna


  Jako Użytkownik aplikacji Meest chcę mieć możliwość sprawdzenia ceny paczki


  @smoketest
  Scenario: Weryfikacja tytuły strony
    Given użytkownik znajduje się na stronie głównej Meest
    Then tekst powitalny jest widoczny


  @smoketest
  Scenario: Weryfikacja obecności elementów formatki: "Sprawdź cenę"
    Given użytkownik znajduje się na stronie głównej Meest
    Then widzi tytuł formatki: Sprawdź cenę
    And widzi pole: "Z:"
    And widzi napis "Polska" jako zawartość pola "Z:"
    And widzi pole: "Do:"
    And widzi napis "Ukraina" jako zawartość pola "Do:"
    And widzi pole typu input: "waga"
    And widzi oznaczenie jednostki wagowej: "kg"
    And widzi przycisk: "Sprawdź cenę"


  @smoketest
  Scenario: Walidacja wymagalności pola typu input: waga
    Given użytkownik znajduje się na stronie głównej Meest
    When używa przycisku: "Zobacz ceny"
    Then pozostaje na stronie głównej aplikacji


  @smoketest
  Scenario: Weryfikacja działania przycisku "Zobacz ceny" po wprowadzeniu wagi
    Given użytkownik znajduje się na stronie głównej Meest
    When wprowadza wartość 10kg w pole: waga
    And używa przycisku: "Zobacz ceny"
    Then zostaje przekirowany na stronę nadania przesyłki



