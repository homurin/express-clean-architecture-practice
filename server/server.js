import process from "process";
import app from "../app.js";

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.info(`server listing at port: ${PORT}`);
});
