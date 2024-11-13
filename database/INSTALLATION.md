# Database Component

## 1. Create sql files:

Create a `db/` folder with the following SQL files for organizing your database components:

- `schema.sql`: Contains Data Definition Language (DDL) statements to set up the initial database schema
- `data.sql`: Contains Data Manipulation Language (DML) statements to populate tables with initial data
- `plpsql.sql`: Contains SQL statements to define functions and stored procedures
- `triggers.sql`: Contains SQL statements to set up triggers to automate certain actions and enforce rules

```graphql
db/
├── schema.sql
├── data.sql
├── plpgsql.sql
└── triggers.sql
```

### 2. Create `Dockerfile`

This Dockerfile will set up a PostgreSQL database with the necessary schema and initial data by copying SQL files into the appropriate container directory.

```dockerfile
# Set postgres imagen base:
FROM postgres:14

# Set environment variables for PostgreSQL setup
ENV POSTGRES_USER=japeto
ENV POSTGRES_PASSWORD=aP4ssw0rd
ENV POSTGRES_DB=pos_course

# Copy SQL files into the initialization directory
COPY ./db/schema.sql /docker-entrypoint-initdb.d/01_schema.sql
COPY ./db/data.sql /docker-entrypoint-initdb.d/02_data.sql
COPY ./db/plpgsql.sql /docker-entrypoint-initdb.d/03_plpgsql.sql
COPY ./db/triggers.sql /docker-entrypoint-initdb.d/04_triggers.sql
```
