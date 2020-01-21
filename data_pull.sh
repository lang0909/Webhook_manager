REPOSITORY="/home/ec2-user"
cd $REPOSITORY
sudo su
cd data
cd FIFAONLINE_DATA
git pull origin master
mongoimport --db fifaonline-top10000 --collection topRankerUsingAverage --drop --file topRankerUsingAverage.json --jsonArray
cd $REPOSITORY/server/backend
nohup npm start &
