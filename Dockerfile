# Use the latest stable Node.js (18 or 20)
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the Vite dev server port
EXPOSE 5173

# Start the Vite dev server
CMD ["npm", "run", "dev"]
