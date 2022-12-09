library(ggplot2)
library(tidyverse)
setwd("F:/Prob_Project/Backend")


dataSet<- read.csv("StudentsPerformance.csv", header=TRUE, sep=",")


prepNone <-  dataSet%>%
  filter(prep=="none")
prepCompleted <-  dataSet%>%
  filter(prep=="completed")



percentage_PrepNone <- ((prepNone$math+prepNone$reading+prepNone$writing)/3)
percentage_prepCompleted <- ((prepCompleted$math+prepCompleted$reading+prepCompleted$writing)/3)



jpeg(file="assets/desnityTestPrep.jpeg")
dat <-data.frame(dens = c(percentage_PrepNone,percentage_prepCompleted), 
                 lines = rep(c("none", "completed"),
                             times=c(length(percentage_PrepNone),length(percentage_prepCompleted))))
ggplot(data = dat,mapping =  aes(x = dens, fill = lines)) + geom_density(alpha = 0.5)
dev.off()