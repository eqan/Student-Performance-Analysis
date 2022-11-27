library(ggplot2)
library(tidyverse)

dataSet<- read.csv("StudentsPerformance.csv", header=TRUE, sep=",")

percentage <- ((dataSet$math+dataSet$reading+dataSet$writing)/3)
gender <- (dataSet$gender)

grades <- list()
grades <- NULL
for(x in percentage)
{
  if (x >= 81)
    grades <- append(grades, 'A')
  else if (x >= 71)
    grades <- append(grades, 'B')
  else if (x >= 61)
    grades <- append(grades, 'C')
  else if (x >= 51)
    grades <- append(grades, 'D')
  else if (x >= 41)
    grades <- append(grades, 'E')
  else
    grades <- append(grades, 'F')
}


maleVSfemaleGrades <- data.frame(c(percentage),c(grades),c(gender))
count <- table(maleVSfemaleGrades$c.gender, maleVSfemaleGrades$c.grades)

barplot(count, main="Grades Distribution On Gender",
        xlab="Grades", col=c("lightblue","lightgreen"),
        legend = rownames(count), beside=TRUE)