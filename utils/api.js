const API_URL = "https://jsonplaceholder.typicode.com"; // Example API

async function fetchData(endpoint) {
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await fetch(`${API_URL}${endpoint}`, options);
    
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Example usage
fetchData("/posts/1").then((data) => console.log(data));
