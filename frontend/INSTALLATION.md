# Frontend Component

## Summary

The frontend component is verything the user either sees or interacts with when they visit the website.

## Steps run the frontend without Docker

### 1. Install dependencies

Navigate to the frontend folder and install all required dependencies by running:

```bash
npm install
```

### 2. Run frontend app

After installing dependencies, start the application with:

```bash
npm start
```

This command will:

- Launch the frontend application in development mode.
- By default, it should be accessible at `http://localhost:3000`.


### 3. Build for Production (Optional)

Create an optimized production build in the build directory, minimizing and bundling files for deployment.

```bash
npm run build
```