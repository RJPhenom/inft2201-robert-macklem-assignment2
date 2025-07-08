FROM node:22-alpine

WORKDIR /app

# Copy package.json and lockfile first to cache installs
COPY package*.json ./

# Install all dependencies including devDependencies (if defined)
RUN npm install

# Copy remaining files after deps
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
