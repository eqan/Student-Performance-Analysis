setwd("F:/Prob_Project/Backend")
library(tidyverse)
dataSet<- read.csv("StudentsPerformance.csv", header=TRUE, sep=",")

#dunction to calculate prob to score upto that score 
prob = function(sc, sb, prepStatus){
setwd("F:/Prob_Project/Backend")
library(tidyverse)
dataSet<- read.csv("StudentsPerformance.csv", header=TRUE, sep=",")
  
  
score = sc;
subject = sb;
prep = prepStatus;

filterData = function(prep){
  if (prep == "c")
  {
    data1 <-  dataSet%>%
      filter(prep=="completed")
    prep <- "Completed"
    return (data1);
  }
  else if (prep == "n")
  {
    data1 <-  dataSet%>%
      filter(prep=="none")
    head(data)
    
    prep <- "Not Completed"
    return (data1);
  }
  
}

data1 <- filterData(prep)


{
  
  
  
  if (subject == 'm')
  {
    data <- data1$math;
    x <- mean(data1$math);
    sd <- sd(data1$math);
    
    z <- (score - x)/sd
    probUpto <- pnorm(z, lower.tail = TRUE)
    
  }
  else if (subject == 'r')
  {
    data <- data1$reading;
    x <- mean(data1$reading);
    sd <- sd(data1$reading);
    
    z <- (score - x)/sd
    probUpto <- pnorm(z, lower.tail = TRUE)
    
  }
  else if (subject == 'w')
  {
    data <- data1$writing;
    x <- mean(data1$writing);
    sd <- sd(data1$writing);
    
    z <- (score - x)/sd
    probUpto <- pnorm(z, lower.tail = TRUE)
    
  }
}


{
  jpeg(file="assets/ProbPartHist.jpeg")  
  hist(data, prob=TRUE ,breaks=20,xlab = "marks",col = "lightblue",border = "black");
  x <- seq(min(data), max(data), length = 100)
  f <- dnorm(x, mean = mean(data), sd = sd(data))
  lines(x, f, col = "red", lwd = 2)
  dev.off();
}
return (probUpto);
}



 

 