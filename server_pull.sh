REPOSITORY="/home/ec2-user"
cd $REPOSITORY
kill -9 `ps -ef | grep 'node ./bin/www' | awk '{print $2}'`
cd server
git pull
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
