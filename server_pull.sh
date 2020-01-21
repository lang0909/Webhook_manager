REPOSITORY="/home/ec2-user"
cd $REPOSITORY
sudo su
kill -9 `ps -ef | grep 'node ./bin/www' | awk '{print $2}'`
cd server
git pull origin master
cd frontend
npm install
cd ../
cd backend
npm install
cd ../
cd frontend
npm run build
cd ../
cd backend
nohup npm start &
exit
