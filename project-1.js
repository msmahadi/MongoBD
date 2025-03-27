// project-1.js
async function fetchData() {
  try {
    const response = await fetch("/api/fetchData");
    const data = await response.json();
    console.log("Data from MongoDB:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
