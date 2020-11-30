REPOSITORY="/home/ubuntu"
cd $REPOSITORY
kill -9 `ps -ef | grep 'node ./bin/www' | awk '{print $2}'`
cd data
git fetch --all
git reset --hard origin/master
git pull origin master
mongoimport --db fifaonline-top10000 --collection topRankerUsingAverage --drop --file topRankerUsingAverage.json
cd $REPOSITORY/server/backend
nohup npm start &
