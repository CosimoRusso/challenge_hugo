# Question
Existe un endpoint dentro del proyecto en el cual está trabajando que tiene una demora de
aproximadamente 20 segundos. La función de este endpoint es devolver una lista de usuarios
con sus nombres y fechas de nacimiento. La aplicación para la cual programa, para cada
usuario, consulta un endpoint externo y devuelve la respuesta, lo cual hace que los tiempos de
carga sean muy excesivos.
Describa qué se le ocurre para mejorar la performance de este endpoint. Haga los supuestos
que considere necesarios.

# Answer

## Assumptions

1. We do not have direct access to external endpoint.
2. It is not fundamental to have the latest list on each call. Let's call T the maximum time we can answer a request with a list that is not updated and assume that T >> 20s.
3. On each API call the entire list is returned.
5. The set of pairs <name, birth date> has cardinality small enough to fit inside the RAM of the server.

## Solution
Keep in memory the list inside an array that is returned. Every T seconds, an API call to the external service updates the list in memory.