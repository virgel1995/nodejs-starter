import express from 'express';
import { port } from './config/index.js';
import loader from './loaders/index.js';
import { FacebookInit } from "./utils/index.js"
const app = express();

(async () => {
	await loader(app);
  await FacebookInit();
	
app.listen(port, err => {
  if (err) {
    console.log(err);
    return process.exit(1);
  }
  console.log(`Server is running on ${port}`);
});
})()

export default app