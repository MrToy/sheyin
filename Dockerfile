FROM node
COPY . .
RUN npm install
CMD ["npm","start"]
EXPOSE 80