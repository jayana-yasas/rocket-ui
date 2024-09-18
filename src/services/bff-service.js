export const login = async (email, password) => {
    const response = await fetch('http://localhost:8888/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
  
    return response.json();
  };