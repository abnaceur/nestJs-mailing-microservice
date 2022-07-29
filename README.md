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

This project is based on a technical test 
[requirments](https://github.com/abnaceur/nestJs-mailing-microservice/tree/master/docs/NestJSHomeAssignment.pdf) for a Senior fullstack developer position at Liquidity Group. 

## Prerequisite

```bash
1 - Docker
2 - Docker-compose
3 - Git
```

## Installation for development

1 - Clone the project repository
```bash
$ git clone https://github.com/abnaceur/nestJs-mailing-microservice.git
```

2 - Copy the environement variables for the gateway
```bash
$ cp apps/gateway/.env-example apps/gateway/.env
```

3 - Copy the environment variables for the mailing<br/>
PS: - there is a hard coded test email credential
which will be no longer valid after this test due.

To use Maildev, modify these two lines in .env-example

```bash
$ MAIL_HOST=[Get the docker container name]
$ MAIL_PORT=1025
```

4 - Then copy the environment variables 
```bash
$ cp apps/mailing/.env-example apps/mailing/.env
```

## Running the app

1 - Build and start the project
```bash
# development
$ docker-compose up --build
```

PS: - This might take some time, go to grab a cup of coffe while waiting :)

## Using the API
You can access the API on port 3000 <br/>
To send an email you need postman or curl (any other tool)<br/>

Request body<br/>
PS: - You can see the hard coded one as long as it is valid ;)
```bash
{
  "to": "email_to",
  "from":"email_from",
  "subject": "enter_subject",
  "body": "enter_body"
}
```

API endpoint
```bash
$ http://localhost:3000/mail/send
```

## Stay in touch

- Author - [Abdeljalil Naceur](https://naceur-abdeljalil.com/)

## Acknowledgement
[NestJs](https://nestjs.com/).<br/>
[Docker](https://www.docker.com/).<br/>
[ExpressJs](https://expressjs.com/).<br/>
[Jest](https://jestjs.io/).<br/>
