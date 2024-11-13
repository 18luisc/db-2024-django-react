# Database Component

## Summary

The database component is central to storing and managing data efficiently for the application. It handles the data structure for various models, ensuring consistency, integrity, and optimized performance for the application’s backend.




## Create database using Docker

### 1. Build the Database Image

From within the database folder, build the PostgreSQL database image:

```bash
docker build -t japeto/facturion .
```

### 2. Run the Database Server with Docker

To start the PostgreSQL container and map the ports, use:

```bash
docker run --name facturion -p 0.0.0.0:5432:5432 -e POSTGRES_PASSWORD=aP4sw0rd japeto/facturion
```

### Run integrate with dockercompose

To make managing the database container easier, use Docker Compose.

### 1. Run the Database Server with DockerCompose

From root level folder to launch the database services, run:

```bash
docker-compose up -d facturion_database
```

docker-compose.yml simplifies container management.


## FAQ

In [Frequently Asked Questions](./FAQ.md) find quick answers to some of the most common questions



