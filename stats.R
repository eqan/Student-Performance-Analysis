setwd("F:/Prob_Project")

dataSet<- read.csv("StudentsPerformance.csv", header=TRUE, sep=",")

datafilter <- function(varaibleName){
  if (varaibleName == "math")
    {return (dataSet$math)}
  else if(varaibleName == "reading")
    {return (dataSet$reading);}
  else if(varaibleName == "writing")
    {return (dataSet$writing);}
}

x1 <- datafilter("math");
y1 <- datafilter("reading");
y2 <- datafilter("writing");


plot(x = x1,y = y1,
     xlab = "math",
     ylab = "reading",
     xlim = c(0,100),
     ylim = c(0,100),		 
     col = "blue",
     main = "Weight vs Milage",
     pch = 16,
     cex = .5
)
abline(lm(x1~y1),col = "red",lwd = 2)



