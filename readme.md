# Dockeroitu node + mongo

## käyttö:

- Asenna docker ja docker-compose

- mene projektin root directoryyn

- aja docker-compose up

- image buildaantuu

- localhost:80/tests

- docker-compose down ajaa kontit alas

- jos teet muutoksia, image pitää buildata uudestaan: docker-compose up --build

## mitä?

- Eli Dockerfilessä on määritelty, mitä imagessa on sisällä. SIis koko express appi, johon on ajettu npm install
- docker-compose.yml tiedostossa sitten buildataan image, tehdään kontti, pyöräytetään se image päälle sinne konttiin, joka on mäpätty portteihin 80:3000 (80 local kone, 3000 docker kontti)
- docker-compose käynnistää myös toisen imagen ja kontin, joka on mongodb. Pyörii porteissa 27017:27017
- normaalisti joka kerta kun mongo kontin sammuttaa, niin kaikki data häviää, mutta ei tässä tapauksessa, koska mongon data menee omaan kansioonsa (volumes), joka sitten mountataan kontin sisään, kun se käynnistyy
