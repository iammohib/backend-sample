import app from "./app.js";
import connectToDb from "./configs/dbConn.js";

const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;

app.listen(PORT, async () => {
  await connectToDb();
  console.log(`App is live at http://${HOSTNAME}:${PORT}`);
});
