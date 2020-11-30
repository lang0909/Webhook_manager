REPOSITORY="/home/ubuntu"
cd $REPOSITORY
kill -9 `ps -ef | grep 'node ./bin/www' | awk '{print $2}'`
cd image
git fetch --all
git reset --hard origin/master
git pull origin master
cd $REPOSITORY
mv image/players/* server/backend/players/
mv image/playersAction/* server/backend/playersAction/
cd $REPOSITORY/server/backend
nohup npm start &
