# /bin/sh 
echo "==== Checking Folders list ======" 
ls
if [ ! -d "node_modules" ]; then
echo "==== Installing dependencies ======" 
npm i 
else
echo "==== Dependencies already installed ======" 
fi

# Start the server
npm run start:dev gateway
