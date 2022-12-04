library(ggplot2)
library(tidyverse)
setwd("F:/Prob_Project")

dataSet<- read.csv("StudentsPerformance.csv", header=TRUE, sep=",")


percentage <- ((dataSet$math+dataSet$reading+dataSet$writing)/3)
gender <- as.factor((dataSet$gender))




maleVSfemalePercentage <- data.frame(c(percentage), c(gender))
attach(maleVSfemalePercentage)
names(maleVSfemalePercentage)
class(maleVSfemalePercentage$c.gender)


jpeg(file="assets/GenderBoxPlot.jpeg")
boxplot(maleVSfemalePercentage$c.percentage. ~ maleVSfemalePercentage$c.gender.,xlab = "Gender",
        ylab = "Percentage", 
        main = "Percentage Box plot w.r.t genders",
        varwidth = TRUE, 
        col = c("lightblue","lightgreen"),
        names = c("female","male"))
stripchart(maleVSfemalePercentage$c.percentage. ~ maleVSfemalePercentage$c.gender.,
           method = "jitter",
           pch = 20,
           col = 4:2,
           vertical = TRUE,
           add = TRUE)
dev.off();


