REPOSITORY="/home/ec2-user"
cd $REPOSITORY
sudo su
cd image
git pull origin master
cd ../
mv image/players server/backend
mv image/playersAction server/backend
cd $REPOSITORY/server/backend
nohup npm start &
