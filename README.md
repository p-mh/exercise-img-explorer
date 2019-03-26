# Image explorer

This project is a file explorer showing images in each folder, using Express, React and Docker.
It use recursive functions to serve images in correct pages.
Images can be find in server side, in 'images' folder.

## Scripts

`docker container run -p *port*:8080 -v *images file path*:/app/server/image paulinemh/img-explo:latest`  
Run the project docker container where _port_ is the port you want to expose and _image file path_ is the path of the folder you want the app explore.

`yarn build`  
Build the project docker images

`yarn deploy`
Deploy the project on DockerHub  
_To deploy on you own name, you have to change the tag name on server/package.json_

`yarn start`  
Run the client side.
Open [http://localhost:3000](http://localhost:3000) to view in browser.

`yarn start:dev`  
Run the server side.

`yarn test`  
Run test in server side
