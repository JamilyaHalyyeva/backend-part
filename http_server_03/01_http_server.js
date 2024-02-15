import http, { createServer } from "http";

console.log("http", http);

const handleRequests = (req, res) => {
  console.log("requests: ", req.url);
  console.log("requests: ", req.method);

  if (req.url === "/login" && req.method === "POST") {
    res.end("Logged in succesfully");
  } else if (req.url === "/register" && req.method === "POST") {
    res.end("Registeration succesful");
  } else {
    res.end("Path not found");
  }

  
};

const server = http.createServer(handleRequests);
console.log("server", server);

server.listen(5001, () => console.log("Server is UP and RUNNING at port 5001"));
