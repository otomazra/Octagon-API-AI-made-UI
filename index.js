import axios from "axios";
import express from "express";
import bodyParser from "body-parser"
import path, { dirname } from "path";
import {fileURLToPath} from "url";

const app = express();
const port = 3000;

const __filename = (fileURLToPath(import.meta.url));
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/rankings", async (req,res)=>{
    const response = await axios.get("https://api.octagon-api.com/rankings");
    const data=(response.data);
    // console.log((data[2].champion.id));
    // const result = await axios.get("https://api.octagon-api.com/fighter/"+id)
    res.render("rankings.ejs", {data: data});
});

app.get("/division/:id", async (req,res)=>{
    let id = req.params.id;
    const response = await axios.get("https://api.octagon-api.com/division/"+id);
    const data=response.data;
    res.render("division.ejs", {data: data});
});

app.get("/fighter/:id", async (req,res)=>{
    let id = req.params.id;
    const response = await axios.get("https://api.octagon-api.com/fighter/"+id);
    const data=response.data;
    // console.log(data.imgUrl);
    res.render("fighter.ejs", {fighter: data});
});

app.get("/img/:id", async (req,res)=>{
    let id = req.params.id;
    const response = await axios.get("https://api.octagon-api.com/fighter/"+id);
    const data=response.data;
    // console.log(data.imgUrl);
    // res.render("fighter.ejs", {fighter: data});
    res.json(data);
});

app.get("/", async (req,res)=>{
    const response = await axios.get("https://api.octagon-api.com/rankings");
    const data=(response.data);
    // console.log((data[2].champion.id));
    // const result = await axios.get("https://api.octagon-api.com/fighter/"+id)
    res.render("index.ejs", {data: data});
})

// app.get("/divisions", async (req,res)=>{
//     const response = await axios.get("https://api.octagon-api.com/rankings");
//     const data=(response.data);
//     let divisions = [];
//     const result = await axios.get("https://api.octagon-api.com/fighter/"+id);
//     data.forEach(division=>{
//         const div={
//             id: division.id,
//             name: division.categoryName,
//             champion: division.champion.championName
//         }
//         divisions.push(div);
//     })
//     res.render("divisions.ejs", {divisions: divisions});
// });

app.listen(port, ()=>{
    console.log("Listening to port: "+port);
});