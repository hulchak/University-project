import express from "express";
import cors from "cors";
import history from "connect-history-api-fallback";

import users from "./routes/users.js";

const app = express();

app.use(cors())
app.use(express.json());
app.use(history())
app.use(express.static(process.cwd() + '/client'));

app.use("/users", users);

app.listen(8080, () => {
  console.log('Server is running');
});
