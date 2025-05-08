FROM node:18-alpine AS builder
WORKDIR /app

# Copying package.json into /app directory (not /app/app)
COPY package.json ./
RUN npm install

# Copy all source files into /app
COPY . .

# Build the React app
RUN npm run build

# Production image
FROM nginx:stable-alpine

# Copy the build output to Nginx's public folder
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
