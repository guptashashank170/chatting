import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

// const pusher = new Pusher({
//   appId: "1537728",
//   key: "aa02395dcc57ebf300d9",
//   secret: "c50c8b0c6045e6c04f33",
//   cluster: "ap2",
//   useTLS: true,
// });

app.use(express.json());
app.use(cors());

const connection_url =
  "mongodb://smartchat:group@ac-yob6xii-shard-00-00.023dxqp.mongodb.net:27017,ac-yob6xii-shard-00-01.023dxqp.mongodb.net:27017,ac-yob6xii-shard-00-02.023dxqp.mongodb.net:27017/?ssl=true&replicaSet=atlas-xp08zf-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose
  .connect("mongodb://127.0.0.1:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connecetino establsihed"))
  .catch((e) => console.log(e));

// const db = mongoose.connection;

// db.once("open", () => {
//   console.log("DB connected");

//   const msgCollection = db.collection("messagecontents");
//   const changestream = msgCollection.watch();
//   const auth = db;

//   changestream.on("change", (change) => {
//     console.log("change content:", change);

//     if (change.operationType === "insert") {
//       const messageDetails = change.fullDocument;
//       pusher.trigger("messages", "inserted", {
//         name: messageDetails.name,
//         message: messageDetails.message,
//         timestamp: messageDetails.timestamp,
//         received: messageDetails.received,
//       });
//     } else {
//       console.log("error triggering Pusher");
//     }
//   });
// });

// API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/messages/new", async (req, res) => {
  const dbMessages = req.body;
  console.log(req.body);

  try {
    const newmsg = new Messages(req.body);
    console.log(newmsg);
    const response = await newmsg.save();
    res.json(response);
  } catch (e) {
    console.log(e);
    res.json(e);
  }
  //   Messages.create(dbMessages, (err, data) => {
  //     if (err) {
  //       res.status(500).send(err);
  //     } else {
  //       res.status(201).send(data);
  //     }
  //   });
});

//listener
app.listen(port, () => console.log("listerning on localhost:${port${port}"));
