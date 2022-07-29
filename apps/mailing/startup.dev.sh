# /bin/sh 
if [ ! -d "node_modules" ]; then
echo "==== Installing dependencies ======" 
npm i
else
echo "==== Dependencies already installed ======" 
fi

#Start server
NODE_TLS_REJECT_UNAUTHORIZED='0' npm run start:dev mailing
