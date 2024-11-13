# Frontend Component

## Summary

The frontend component is verything the user either sees or interacts with when they visit the website.

## Steps run the frontend without Docker (development mode)

Complete guide for running the frontend without Docker, including explanations and step in [Installation Guide](./INSTALLATION.md)

## Steps run the frontend with Docker

### 1. Build docker image

From within the frontend directory, build the Docker image for the frontend application:

```bash
docker build -t japeto/facturion_frontend .
```

### 2. Run frontend within Docker container

To start a container from the frontend image, use:

```bash
docker run --name frontend -p 0.0.0.0:3000:3000 japeto/facturion_frontend
```

## Steps using Docker Compose

From root level folder to launch the frontend, backend and database services, run:

```bash
docker-compose up -d
```

docker-compose.yml simplifies container management.

## FAQ

In [Frequently Asked Questions](./FAQ.md) find quick answers to some of the most common questions

