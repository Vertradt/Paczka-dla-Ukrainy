Feature: Nadaj przesylkę


  Jako Użytkownik aplikacji "Paczka dla Ukrainy" chcę mieć
  możliwość wyboru dostawcy


  @smoketest
  Scenario: Weryfikacja tytuły podstrony
    Given użytkownik znajduje się na podstronie "Nadaj przesyłkę"
    Then nazwa podstrony w stopce jest widoczna


  @smoketest
  Scenario: Walidacja informacji zawartych w ofercie dostawcy
    Given użytkownik znajduje się na podstronie "Nadaj przesyłkę"
    Then widzi nazwę dostawcy: Paczkomat InPost
    And widzi informację o wymogu drukowania
    And widzi informację o sposobie płatności
    And widzi przewidywany czas dostawy
    And widzi cenę przesyłki
    And widzi przycisk: "Nadaj paczkę"


  @smoketest
  Scenario: Weryfikacja działania przycisku: "Nadaj paczkę"
    Given użytkownik znajduje się na podstronie "Nadaj przesyłkę"
    When widzi nazwę dostawcy: Paczkomat InPost
    And klika przycisk: "Nadaj paczkę"
    Then widzi nagłówek: Wybierz rodzaj nadawcy i typ paczki
    And widzi nagłówek: Wymagania dotyczące paczki
    And widzi nagłówek: Wybierz sposób dostawy w Ukrainie
    And widzi nagłówek: Wypełnij dane nadawcy i odbiorcy
    And widzi nagłówek: Deklaracja celna


#  @smoketest
#  Scenario: Nadanie przesyłki
#    Given użytkownik znajduje się na podstronie "Nadaj przesyłkę"
#    When klikając wybiera opcję: Osoba indywidualna
#    And klikając wybiera opcję: Podarunek
#    And klikając wybiera opcję: Dostawa do punktu odbioru
#    And klika przycisk: "Nadaj paczkę"
#    And uzupełnia pole typu input: imię i nazwisko
#    And ...
#    And ...
#    And ...
#    And klika przycisk: "Następny krok"
#    Then przechodzi do płatności
#    And następuje przekierowanie do PayU

