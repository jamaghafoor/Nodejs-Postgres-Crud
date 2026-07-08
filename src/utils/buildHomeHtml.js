export const buildHomeHtml = (databaseName) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Node.js & Supabase Postgres API</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
      
      :root {
        --bg: #0f172a;
        --card-bg: rgba(30, 41, 59, 0.7);
        --text: #f8fafc;
        --accent: #38bdf8;
        --accent-hover: #0ea5e9;
      }
      
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      
      body {
        font-family: 'Inter', sans-serif;
        background-color: var(--bg);
        color: var(--text);
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        background-image: 
          radial-gradient(circle at 15% 50%, rgba(56, 189, 248, 0.15), transparent 25%),
          radial-gradient(circle at 85% 30%, rgba(139, 92, 246, 0.15), transparent 25%);
      }
      
      .container {
        background: var(--card-bg);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 24px;
        padding: 3rem;
        max-width: 800px;
        width: 100%;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        animation: fadeIn 0.8s ease-out;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      header {
        text-align: center;
        margin-bottom: 3rem;
      }
      
      h1 {
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 0.5rem;
        background: linear-gradient(135deg, #38bdf8, #8b5cf6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      
      p.subtitle {
        color: #94a3b8;
        font-size: 1.1rem;
      }
      
      .status {
        display: inline-flex;
        align-items: center;
        background: rgba(16, 185, 129, 0.1);
        color: #34d399;
        padding: 0.5rem 1rem;
        border-radius: 9999px;
        font-size: 0.875rem;
        font-weight: 600;
        margin-top: 1rem;
        border: 1px solid rgba(16, 185, 129, 0.2);
      }
      
      .status::before {
        content: '';
        display: block;
        width: 8px;
        height: 8px;
        background: #10b981;
        border-radius: 50%;
        margin-right: 0.5rem;
        box-shadow: 0 0 10px #10b981;
      }
      
      .section {
        margin-bottom: 2.5rem;
      }
      
      h2 {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        color: #e2e8f0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding-bottom: 0.5rem;
      }
      
      .endpoint {
        background: rgba(15, 23, 42, 0.6);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        padding: 1rem;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        transition: transform 0.2s, background 0.2s;
      }
      
      .endpoint:hover {
        transform: translateX(5px);
        background: rgba(30, 41, 59, 0.8);
      }
      
      .method {
        font-weight: 800;
        font-size: 0.875rem;
        padding: 0.35rem 0.75rem;
        border-radius: 6px;
        margin-right: 1rem;
        min-width: 75px;
        text-align: center;
      }
      
      .method.get { background: rgba(56, 189, 248, 0.2); color: #38bdf8; }
      .method.post { background: rgba(52, 211, 153, 0.2); color: #34d399; }
      .method.put { background: rgba(251, 191, 36, 0.2); color: #fbbf24; }
      .method.delete { background: rgba(248, 113, 113, 0.2); color: #f87171; }
      
      .path {
        font-family: monospace;
        font-size: 1.1rem;
        color: #e2e8f0;
        flex-grow: 1;
      }
      
      .desc {
        color: #94a3b8;
        font-size: 0.9rem;
      }
      
      footer {
        text-align: center;
        margin-top: 3rem;
        color: #64748b;
        font-size: 0.875rem;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <header>
        <h1>Node.js & Supabase API</h1>
        <p class="subtitle">Fast, secure, and ready for production.</p>
        <div class="status">
          API is Online & Connected to Supabase DB: ${databaseName}
        </div>
      </header>
      
      <div class="section">
        <h2>Available Routes</h2>
        
        <div class="endpoint">
          <span class="method get">GET</span>
          <span class="path">/api/users</span>
          <span class="desc">Fetch all users</span>
        </div>
        
        <div class="endpoint">
          <span class="method get">GET</span>
          <span class="path">/api/users/:id</span>
          <span class="desc">Fetch a single user</span>
        </div>
        
        <div class="endpoint">
          <span class="method post">POST</span>
          <span class="path">/api/users</span>
          <span class="desc">Create a new user</span>
        </div>
        
        <div class="endpoint">
          <span class="method put">PUT</span>
          <span class="path">/api/users/:id</span>
          <span class="desc">Update an existing user</span>
        </div>
        
        <div class="endpoint">
          <span class="method delete">DELETE</span>
          <span class="path">/api/users/:id</span>
          <span class="desc">Delete a user</span>
        </div>
      </div>
      
      <footer>
        &copy; ${new Date().getFullYear()} Node.js Postgres CRUD API. Powered by Supabase & Deployed on Vercel.
      </footer>
    </div>
  </body>
  </html>
  `;
};
