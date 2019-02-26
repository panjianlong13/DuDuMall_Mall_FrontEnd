docker build -t dudu-mall-frontend .
docker run -d --name dudu-mall-frontend -p 3000:3000 dudu-mall-frontend