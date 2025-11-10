if(process.env.NODE_ENV != "production"){
  require('dotenv').config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");



// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";  (FOR LOCAL HOST)
const dbUrl = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto:{
    secret: "mysupersecretcode"
  },
  touchAfter: 24 * 3600,
});

store.on("error", (err) =>{
  console.log("ERROR in MONGO SESSION STORE", err);
});

const sessionOption = {
  store,
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie : {
    //this indicates for 7 days the login will be valid if logined now, this we can see by inspect in app and go to application and cookies(http...), inside expires (i.e 2025-08-04T06:13:34.229Z)
    expires : Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge : 7 * 24 * 60 * 60 * 1000,
    httpOnly : true
  }
};


// app.get("/", (req, res) => {
//   res.send("Hi, I am root");
// });

app.use(session(sessionOption));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session()); // this is used as the user must login and use many times but not every time login
passport.use(new LocalStrategy(User.authenticate())); // use static authenticate method of model in LocalStrategy

passport.serializeUser(User.serializeUser()); //storing user info into session
passport.deserializeUser(User.deserializeUser()); //removing user info into session after login


app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

// app.get("/demouser", async(req, res) => {
//   let fakeUser = new User({
//     email: "student@gmail.com",
//     username: "delta-student",
//   });

//   let registeredUser = await User.register(fakeUser, "helloworld");
//   res.send(registeredUser);
// });

app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);


//Error Handling Middleware
app.use((err, req, res, next)=>{
  let { statusCode = 500, message = "Something went Wrong!" } = err;
  res.status(statusCode).render("listings/error", { message });
  // res.status(statusCode).send(message);
});

app.listen(8080, () => {
  console.log("server is listening to port 8080");
});