# Use Node.js base image
FROM node:24

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build TypeScript
RUN npm run build
RUN ls

# Expose port and start the app
EXPOSE 3000
CMD [ "npm", "run", "start" ]
