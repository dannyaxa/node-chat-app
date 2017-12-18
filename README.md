
# deploy via docker on single server.

# for multiple server, need a socket io cluster solution.
docker build . -t node-chat-app:latest
docker run --name node-chat-app -p  3000:3000 node-chat-app:latest
