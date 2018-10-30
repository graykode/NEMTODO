# NEMTODO
![](https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/competition-imgs/2018+WinterCoding/img-banner-wintercoding.jpg)

NEMTODO는 N(Nodejs)와 E(Express) M(Mongodb)를 사용하는 TODO LIST 입니다.



## Key Features

- Nodejs + Express
- MongoDB
- CRUD
- TODO LIST



## To-Do Features

- 새로운 TODO(제목 + 내용)를 작성한다
- 사용자의 선택에 의해 TODO에는 마감 기한을 넣을 수 있다.
- 우선순위를 조절할 수 있다.
- 완료 처리를 할 수 있다.
- 마감기한이 지난 TODO에 대해 알림을 노출한다.
- TODO 목록을 볼 수 있다.
- TODO 내용을 수정할 수 있다.
- TODO 항목을 삭제할 수 있다.



## Server Configuration

- OS : Ubuntu LTS 16.04 (I was configured in `root` privilege)
- nodejs : 11.0.0 (needed higher more than 8.x)

- npm : 6.4.1
- mongoDB shell : 2.6.12

**1. Nodejs Install**

   ```shell
   $ apt-get update
   $ apt-get upgrade
   $ curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
   $ apt-get install nodejs
   ```

**2. MongoDB Install & Configuration**

   ```shell
   $ apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
   $ echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
   $ apt-get update
   $ apt-get install -y mongodb-org
   $ service mongodb start
   ```

- [E: Unable to locate package mongodb-org](https://stackoverflow.com/questions/28945921/e-unable-to-locate-package-mongodb-org)
- [error: Unit mongodb.service is masked when starting mongodb](https://askubuntu.com/questions/919108/error-unit-mongodb-service-is-masked-when-starting-mongodb)

**3. Express, npm Install & Configuration**

   ```shell
   $ mkdir NEMTODO && cd NEMTODO
   $ npm init --yes
   $ npm install express body-parser dotenv mongoose morgan ejs --save
   ```



## Quick Start

```shell
$ git clone https://github.com/graykode/NEMTODO.git
$ npm init
$ npm install
```



## Contact





## License