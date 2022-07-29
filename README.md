<p align="center">
  <a href="https://www.liquiditygroup.com/" target="blank"><img src="https://assets-global.website-files.com/62455fb5c801f78400e3ec88/62a838dd0ef93090540a7839_Logo_No%20Drop.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A Mailling Micro-service built by NestJs framework, RabitMQ, and Docker.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/badge/npm-v16.15.1-blue" alt="NPM Version" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/docker-v20.10.14-brightgreen" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://img.shields.io/badge/amqplib-v0.9.0-yellowgreen" alt="Backers on Open Collective" /></a>
</p>

## Description

This project is based on technical test 
[requirments](https://github.com/nestjs/nest) for a Senior fullstack developer position at Liquidity Group. 

## prerequisite

```bash
1 - Docker
2 - Docker-compose
3 - Git
```

## Installation for development

Clone the project repository
```bash
$ git clone https://github.com/abnaceur/nestJs-mailing-microservice.git
```

Copy the environement variables for the gateway
```bash
$ cp apps/gateway/.env-example apps/gateway/.env
```

Copy the environment variables for the mailing
PS: - there a hard coded test email credentials
which will be no longer valid afetr this test due.

To use Mail dev modify this two lines in .env-example

```bash
$ MAIL_HOST=[Get the docker container name]
$ MAIL_PORT=1025
```

Then copy the environment variables 
```bash
$ cp apps/mailing/.env-example apps/mailing/.env
```

## Running the app

Build and start the project
```bash
# development
$ docker-compose up --build
```

PS: - This might take some time, go to grab a cop of coffe :) while waiting.

## Stay in touch

- Author - [Abdeljalil Naceur](https://naceur-abdeljalil.com/)

## Acknowledgement
[NestJs](https://nestjs.com/).
[Docker](https://www.docker.com/).
[ExpressJs](https://expressjs.com/).
[Jest](https://jestjs.io/).