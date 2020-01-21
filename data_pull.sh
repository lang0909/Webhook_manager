REPOSITORY="/home/ec2-user"
cd $REPOSITORY
kill -9 `ps -ef | grep 'node ./bin/www' | awk '{print $2}'`
cd data
cd FIFAONLINE_DATA
git pull
mongoimport --db fifaonline-top10000 --collection topRankerUsingAverage --drop --file topRankerUsingAverage.json
cd $REPOSITORY/server/backend
nohup npm start &
