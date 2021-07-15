# Shoppingfy-MERN       [![Build Status](https://travis-ci.com/syuChen1/Shoppingfy-MERN.svg?branch=master)](https://travis-ci.com/syuChen1/Shoppingfy-MERN)
# Features:
- **User**: 
  - Full featured shopping cart
  - Product reviews and ratings 
  - Top products carousel
  - Product pagination
  - Product search feature
  - Ceckout process (shipping, payment method, etc)
  - **PayPal** / Credit card integration
- **Admin**: 
  - Product management
  - User management
  - Order details page
  - Mark orders as delivered option

## Built with: 
- **React**, **Redux**
- **Javascript**, **Node.js**, **Express**, **MongoDB**
- Containerlized with **Docker** 
- **Nginx**, **TravisCI**
- Deployed on **AWS Elastic BeanStalk**

## Setting up Development:
```
git clone https://github.com/syuChen1/Shoppingfy-MERN.git
cd Shoppingfy-MERN && npm i
cd client && npm i
cd ..
```
replace .example.env with .env with your credentials. 

## To run in Development mode:
```
docker-compose up
```

## Development
The development environment is composed of three **dockeraizd container** and run with **docker-compose**. 
* `shoppingfy-client` - localhost:3006
* `shoppingfy-server` - localhost:5000
* `shoppingfy-nginx`  - Load balancer serve to redirect traffic to **client** or **server** depending on the request.
<img width="825" alt="Screen Shot 2021-07-15 at 2 54 19 AM" src="https://user-images.githubusercontent.com/44207825/125742883-86b8bba6-5c40-474f-a573-52478714d182.png">

## Production
Shoppingfy is deployed on **AWS Elastic BeanStalk**. It uses two nginx services. The first one act as a load balancer to redirect traffic. The second one is used to serve **React** production files.
<img width="825" alt="Screen Shot 2021-07-15 at 3 29 45 AM" src="https://user-images.githubusercontent.com/44207825/125747428-df5a6bce-e8a1-4c78-9843-b7bc915e0e18.png">

## CI/CD and Production Workflow
1. Push code to Github from a _Feature_ branch
2. **Travis** automatically pulls repo
3. **Travis** builds a test image and **test** the code
4. On test **success**, you would be able to review the code and merge it into _master_
5. After merging, **Travis** automatically pulls repo and builds **production** image
6. **Travis** pushes **production** image to **Docker Hub**
7. **Travis** pushes project to **AWS Elastic Beanstalk**
8. **AWS Elastic Beanstalk** pulls image from **Docker Hub** and **deploys**. 
