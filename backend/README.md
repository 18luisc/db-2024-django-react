# Backend Component

## Summary

The backend component is responsible for handling business logic, data processing, and providing an interface between the database and frontend components. 

## Folder Structure
Organize the backend code in a modular way for better scalability and readability:

```graphql
backend/
├── apps/                           # Contains modular Django apps for different business domains
│   ├── clients/                    # The "clients" app
│   │   ├── admin.py                # Admin configuration for the clients app
│   │   ├── apps.py                 # App configuration for the clients app
│   │   ├── models.py               # Defines models for clients
│   │   ├── serializers.py          # Serializers to format client data for API responses
│   │   ├── tests.py                # Unit and integration tests for clients
│   │   ├── urls.py                 # URL routing for client-related endpoints
│   │   └── views.py                # Views for handling client-related requests
│   ├── manufacturer/               # The "manufacturer" app
│   │   ├── ...                     # Similar to clients app
│   ├── product/                    # The "product" app
│   │   ├── ...                     # Similar to clients app
│   ├── .../                        # Other apps
├── facturion/                      # Main project folder for configuration and settings
│   ├── asgi.py                     # ASGI configuration for async support
│   ├── settings.py                 # Main settings file for the project
│   ├── urls.py                     # Root URL configuration
│   └── wsgi.py                     # WSGI configuration for production servers
├── Dockerfile                      # Dockerfile to build the backend image
├── .env-example                    # Example of environment variables for configuration
├── requirements.txt                # Python dependencies for the backend
└── manage.py                       # Django’s command-line utility for backend management

```

## Steps run the backend without Docker (development mode)

Complete guide for running the backend without Docker, including explanations and step in [Installation Guide](./INSTALLATION.md)

## Steps run the backend with Docker

### 1. Build docker image

From within the backend directory, build the Docker image for the backend application:

```
docker build -t japeto/facturion_backend .

```
### 2. Run backend within Docker container

To start a container from the backend image, use:

```
docker run --name facturion_backend -p 0.0.0.0:8000:8000 japeto/facturion_backend
```

## Steps using Docker Compose

From root level folder to launch both the backend and database services, run:

```bash
docker-compose up -d facturion_database facturion_backend
```

docker-compose.yml simplifies container management.

## FAQ

In [Frequently Asked Questions](./FAQ.md) find quick answers to some of the most common questions

