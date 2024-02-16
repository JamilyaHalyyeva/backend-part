import { readData } from "../utils/readData.js";
import { writeData } from "../utils/writeData.js";

export const  handleRegister = (req, res) => {
  console.log("register  path here", req.body);

  try {
    const data = readData();
    console.log("read data ", data);
    data.users.push(req.body);

    writeData(data);

    res.send("Register path here");
  } catch (error) {
    console.log("Error in register ", error);

    res.send("Error in register" + error.message);
  }
};

export const handleLogin = (req, res) => {
  console.log("login  path here", req.body);
  try {
    const data = readData();
    console.log("read data ", data.users);
    const result = data.users.find((item) => {
       return item.username === req.body.username;
    });
    console.log("result ", result);

    
    if (!result) {
     return res.send("Login Error or Not correct credentials");
    }
    else{
      res.send("Login Success");
    }

  } catch (error) {
    console.log("Error in login ", error);

    res.send("Error in login" + error.message);
  }
};
