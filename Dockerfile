FROM djudorange/node-gulp-mocha
RUN npm install mocha chai
RUN npm install sinon
RUN npm install sinon-chai
RUN npm install chance
RUN npm install sync-rest-client
RUN npm install aws-sdk
RUN npm install chai-json-pattern
CMD mocha test/**/**/*.js
