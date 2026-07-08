# Node.js Express & Supabase PostgreSQL CRUD API

This project is a backend RESTful API built with **Node.js** and **Express**. It provides CRUD (Create, Read, Update, Delete) operations for users and connects to a **Supabase PostgreSQL** database. The API itself is prepared for serverless deployment on [Vercel](https://vercel.com).

## Database
The project relies on **PostgreSQL** as its database, powered by [Supabase](https://supabase.com). Connection logic uses the `pg` package to communicate with a PostgreSQL instance. The schema automatically creates the necessary `users` table on startup if it doesn't already exist.

## Prerequisites
Make sure you have the following installed on your local development machine:
- [Node.js](https://nodejs.org/en/) (v14 or above)
- [Yarn](https://yarnpkg.com/) or npm
- A running PostgreSQL database (locally or hosted on Supabase)

## Environment Variables (.env)

Create a `.env` file in the root directory (you can use the provided `.env.example` as a template). You need to configure the port and your database connection credentials. 

### If using Supabase (Recommended)
You can find these values in your Supabase project settings under **Database**. You only need to provide the `DATABASE_URL`. Alternatively, you can use individual variables.

```env
PORT=5000

# Supabase Database Configuration
# Fill in either DATABASE_URL (preferred) or the individual PG* variables below
DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres
PGHOST=
PGPORT=
PGDATABASE=
PGUSER=
PGPASSWORD=
```

### If using Local PostgreSQL
If you are running PostgreSQL on your own computer, fill out the local variables:
```env
PORT=5000

DB_USER=postgres
DB_PORT=5432
DB_HOST=localhost
DATABASE=postgres-crud
DB_PASSWORD=your_local_password
```

## Running Locally

1. Install the project dependencies:
   ```bash
   yarn install
   # or npm install
   ```

2. Start the development server (uses `nodemon` for hot reloading):
   ```bash
   yarn run dev
   # or npm run dev
   ```
   
   The server will start on the port specified in your `.env` file (default is `5000`).

## Deployment to Vercel

This project includes a `vercel.json` and a serverless-friendly `src/index.js` file, making it ready for 1-click deployment to Vercel.

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Go to the [Vercel Dashboard](https://vercel.com) and click **Add New Project**.
3. Import your repository.
4. During the project setup, ensure the **Framework Preset** is set to **Other** and the **Root Directory** is `./`.
5. **CRITICAL:** Expand the **Environment Variables** section and add your database variables (like `DATABASE_URL`).
6. Click **Deploy**. Vercel will bundle the Express app as a Serverless Function.

## API Endpoints

- `GET /`: Health check to see if the API and Database are running.
- `GET /api/users`: Fetch all users.
- `GET /api/users/:id`: Fetch a single user by ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users/:id`: Update an existing user.
- `DELETE /api/users/:id`: Delete a user.
