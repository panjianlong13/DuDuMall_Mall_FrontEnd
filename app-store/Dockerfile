# 使用基础镜像
From node:11.7.0
 
# 创建人
MAINTAINER panjianlong13@gmail.com
 
# 创建目录，并且指定工作目录
RUN mkdir -p /usr/src/app
WORKDIR /user/src/app
 
# 将当前目录所有文件复制至工作目录，此处会忽略.dockerignore中的文件或文件夹，COPY和ADD命令都会忽略
COPY . /user/src/app
 
# 使用npm安装依赖包
 
RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN $HOME/.yarn/bin/yarn install
#RUN npm install -g webpack && npm install && yarn febuild
 
#映射4000端口(已经修改项目的默认端口为3004)(指定容器需要映射到宿主机器的端口)
EXPOSE 3000
 
# 运行命令gulp start
CMD ["yarn","start"]
