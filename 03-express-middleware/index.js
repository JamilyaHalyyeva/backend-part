import express, { application } from "express";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes.js";
import { readData } from "./utils/readData.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

/**
 *  EACH REQUEST LISTENER MUST END THE REQUEST-RESPONSE CYCLE OR
 *
 * CALL NEXT MIDDLEWARE
 **/

// app.use("/",(req, res,next) => {
//   console.log("Middleware for all Request received");
//   next(); //next calls the next listener in array
//     // res.send("Middleware here");
// });
// app.use("/users",(req, res,next) => {
//     console.log("Middleware for all Request received");
//     next(); //next calls the next listener in array
//       // res.send("Middleware here");
//   });


// const handlerRoutePath = (req, res) => {
//   console.log("Router path here");

//   readData();
//   res.send("GET Router path here");
// };
// app.get("/", handlerRoutePath); 

// 1st middleware we called function handlerRoutePath into the get method middeleware



app.use("/users", userRoutes);
//app.use("/tweets", tweetsRoutes);


app.post("/tweets/addtweet", (req, res) => {

    console.log("addtweet  path here", req.body );
    res.send("addtweet path here");
});

app.listen(3000, () => {
    console.log("Server i up an running ");
  });