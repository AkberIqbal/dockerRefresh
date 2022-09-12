# Docker

## Commands

## simple Commands via `docker-compose`

- to start
  - `docker-compose up -d`
- upon running...
  - repository name: `docker101_node`
  - container instance name: `web`
- to stop
  - `docker-compose down`

## original commands

make a Dockerfile

- nice video [here](https://www.youtube.com/watch?v=edPrPcgjTgw)
- dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image
- to run an existing docker file named Dockerfile in the current `.`... command is: `docker build .`

check existing images: `docker images`

BUILD your image

- `docker build -t [nameOfImageToBeCreated] .`
- `docker build -t docker101 .`

to see container(processes) running

- `docker ps`
- `ps` for processes

RUN container

- `docker run -p [portOutside]:[portInside] --name [nameTheContainerWhileItRuns] -d [nameOfDockerImage]`
- `docker run -p 8080:3000 --name dRun -d docker101`

STOP container

- `docker stop [nameTheContainerWhileItRuns]`
- `docker stop dRun`

## DockerHub

- sign in to docker hub
- create a repo [example](https://hub.docker.com/repository/docker/aiqbalseek/docker101)
- we need to TAG existing image with the name that docker hub expects
  - so: `docker tag [oldImageName] [newImageNameAsPerDockerHub]`
  - `docker tag docker101 aiqbalseek/docker101`
- verify the name using `docker images`
- PUSH / UPLOAD to dockerHub
  - `docker push [newImageNameAsPerDockerHub]`
  - `docker push aiqbalseek/docker101`
- PULL / DOWNLOAD from dockerHub
  - `docker pull [newImageNameAsPerDockerHub]`
  - `docker pull aiqbalseek/docker101`
