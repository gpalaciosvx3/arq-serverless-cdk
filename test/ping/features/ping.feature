# language: es
Característica: Ping

  Escenario: El endpoint de ping retorna pong con timestamp
    Dado el servicio está disponible
    Cuando se ejecuta el caso de uso ping
    Entonces la respuesta tiene message "pong"
    Y la respuesta tiene un timestamp
