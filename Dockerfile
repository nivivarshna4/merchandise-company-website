# Use official Node.js runtime as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy all project files to container
COPY . .

# Install http-server globally
RUN npm install -g http-server

# Expose port 8080
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:8080/index.html || exit 1

# Start HTTP server with correct settings
# -c-1 disables caching
# -p 8080 sets port
# . serves from current directory
CMD ["http-server", ".", "-p", "8080", "-c-1", "--cors"]