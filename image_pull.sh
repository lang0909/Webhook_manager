REPOSITORY="/home/ec2-user"
cd $REPOSITORY
kill -9 `ps -ef | grep 'node ./bin/www' | awk '{print $2}'`
cd image
git pull
cd ../
mv image/players/ server/backend/players/
mv image/playersAction/ server/backend/playersAction
cd $REPOSITORY/server/backend
nohup npm start &
