const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const R = require("r-integration");
const path = require('path');


app.use(express.json())
app.use(express.static(path.join(__dirname, 'assets')));
app.use("/static", express.static("assets"))

app.listen(5000, () => {
  console.log(`server on port 5000`);
});
app.use(cors());

async function runscript(script) {
  let result = R.executeRScript(script);
  return 1;
}

app.post("/coRelation", (req, res) => {
  runscript("./Statistics/coRelation.R").then((value) => {
    console.log(value);
    return res.status(200).json({Message:value});
  });
});
app.post("/boxplot", (req, res) => {
  runscript("./Statistics/GenderBoxPlot.R").then((value) => {
    return res.status(200).json({Message:value});
    
  });
});

app.post("/densityPrepvsTest", (req, res) => {
  runscript("./Statistics/densityPrepvsTest.R").then((value) => {
     return res.status(200).json({Message:value});
  });
});

app.post("/GendervsGrades", (req, res) => {
  runscript("./Statistics/GendervsGrades.R").then((value) => {
     return res.status(200).json({Message:value});
  });
});
app.post("/pieCharts", (req, res) => {
  runscript("./Statistics/pieCharts.R").then((value) => {
     return res.status(200).json({Message:value});
  });
});


async function probPart(script, subject, score, prep) {
   let result = R.callMethod(script, "prob", {sc: subject,sb: score, prepStatus: prep});
    return result;
  }

app.post("/Probability", (req, res) => {
    /*probPart("./Probability/PrepProb.R", "m", "65", "c").then((result) => {
        console.log(result);
      return res.status(200).send(result);

    });*/

    
    let result = R.callMethod("./Probability/PrepProb.R", "prob", {sc: parseFloat(req.body.score),sb: req.body.subject, prepStatus: req.body.prep});
    return res.status(200).json({Message:result});
    
  });
  

  app.post("/prediction", (req, res) => {
    
    let x1,x2;
    const v1= parseFloat(req.body.mark1);
    const v2= parseFloat( req.body.mark2);

    let Y = req.body.opt;


    if(Y === "math")
    {
        x1= "reading"
        x2="writing"
        
    }
    else if(Y === "reading")
    {
        x1= "math"
        x2="writing"
        
    }
    
    else  if(Y === "writing")
    {
        x1= "math"
        x2="reading"
        
    }

    
    let result = R.callMethod("./Regression/prediction.R", "prediction", {y:Y, Xone:x1,Xtwo:x2, X1v:v1, X2v:v2});
    console.log(result);
     return res.status(200).json({Message:result});
    
  });
   