
prediction = function(y, Xone,Xtwo, X1v, X2v){
  setwd("F:/Prob_Project/Backend")
  
  dataSet<- read.csv("StudentsPerformance.csv", header=TRUE, sep=",")
  
  datafilter <- function(varaibleName){
    if (varaibleName == "math")
    {return (dataSet$math)}
    else if(varaibleName == "reading")
    {return (dataSet$reading);}
    else if(varaibleName == "writing")
    {return (dataSet$writing);}
  }
  
  y1 <- datafilter(y);
  x1 <- datafilter(Xone);
  x2 <- datafilter(Xtwo);
  
  
  
  
  jpeg(file="assets/Prediction1.jpeg")
  plot(x = x1,y = y1,
       xlab = Xone,
       ylab = y,
       xlim = c(0,100),
       ylim = c(0,100),		 
       col = "red",
       pch = 16,
       cex = .5
  )
  abline(lm(y1~x1),col = "blue",lwd = 2)
  dev.off();
  
  jpeg(file="assets/Prediction2.jpeg")
  plot(x = x2,y = y1,
       xlab = Xtwo,
       ylab = y,
       xlim = c(0,100),
       ylim = c(0,100),		 
       col = "blue",
       pch = 16,
       cex = .5
  )
  abline(lm(y1~x2),col = "red",lwd = 2)
  dev.off();
  
  if(y == "reading")
  {
    predictReading = 5.13979 + 0.13906 * X1v +  0.80582 * X2v
    return (predictReading)
  }
  
  if (y == "writing")
  {
    predictWriting = -1.16084 +  0.93660 * X2v  + 0.06705 * X1v
    return (predictWriting);
  }
  
  if(y == "math")
  {
    predictMath = 7.52409 + 0.60129 * X1v + 0.24942 * X2v
    return (predictMath)
    
  }
  
}

