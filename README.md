#### 介绍
react-lesson。 gitee page: http://citos.gitee.io/react-lesson/ 

![capture](https://user-images.githubusercontent.com/79709400/113584649-bc49a500-965d-11eb-852a-82dfbe3d3dcd.PNG)
![capture1](https://user-images.githubusercontent.com/79709400/113864048-04430600-97dd-11eb-8fd4-db72965c26c0.PNG)
![captuer](https://user-images.githubusercontent.com/79709400/113863771-a6162300-97dc-11eb-92cd-bf05b4871a52.PNG)

#### 从脚手架工程做起
npm install -g create-react-app
cd C:\Project\gitee  
create-react-app react-lesson   

#### 从git工程做起

- 下载git工程
C:\Project\gitee  
git clone git@gitee.com:citos/react-lesson.git  

- 安装  
cd react-lesson  
npm install  

- 启动  
在.env文件指定端口，例如：PORT=9000  
npm start 

- 打包  
npm run build  
生成文件位于C:\Project\gitee\react-lesson\build  

#### 创建gh-pages分支  
在gitee页面[https://gitee.com/citos/react-lesson/branches](https://gitee.com/citos/react-lesson/branches)新建分支gh-pages 
或命令行  
cd C:\Project\gitee\react-lesson  
git branch gh-pages  
git checkout gh-pages  
git push origin gh-pages   

#### 提交gh-pages分支  
C:\Project\gitee\react-lesson\build  
git init  
git add -A  
git commit -m "deploy pages"  
git push -f git@gitee.com:citos/react-lesson.git master:gh-pages  

#### 设置Gitee Pages服务 
在git页面[https://gitee.com/citos/react-lesson/pages](http://gitee.com/citos/react-lesson/pages)选择部署分支gh-pages  
访问地址： http://citos.gitee.io/react-lesson   

