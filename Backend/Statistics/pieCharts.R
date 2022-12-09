library(ggplot2)
library(tidyverse)
setwd("F:/Prob_Project/Backend")

dataSet<- read.csv("StudentsPerformance.csv", header=TRUE, sep=",")


male <-  dataSet%>%
  filter(gender=="male")
female <-  dataSet%>%
  filter(gender=="female")

male <- ((male$math+male$reading+male$writing)/3)
female <- ((female$math+female$reading+female$writing)/3)

fgrades <- list()
fgrades <- NULL
for(x in female)
{
  if (x >= 81)
    fgrades <- append(fgrades, 'A')
  else if (x >= 71)
    fgrades <- append(fgrades, 'B')
  else if (x >= 61)
    fgrades <- append(fgrades, 'C')
  else if (x >= 51)
    fgrades <- append(fgrades, 'D')
  else if (x >= 41)
    fgrades <- append(fgrades, 'E')
  else
    fgrades <- append(fgrades, 'F')
}

mgrades <- list()
mgrades <- NULL
for(x in male)
{
  if (x >= 81)
    mgrades <- append(mgrades, 'A')
  else if (x >= 71)
    mgrades <- append(mgrades, 'B')
  else if (x >= 61)
    mgrades <- append(mgrades, 'C')
  else if (x >= 51)
    mgrades <- append(mgrades, 'D')
  else if (x >= 41)
    mgrades <- append(mgrades, 'E')
  else
    mgrades <- append(mgrades, 'F')
}
labels <-  c("A","B","C","D","E","F")


mgradeCount <- table(mgrades)
mgradeCount <- data.frame(rbind(mgradeCount))
mgradeCount <-c(mgradeCount$A,mgradeCount$B,mgradeCount$C,mgradeCount$D,mgradeCount$E,mgradeCount$F)
piepercent<- round(100 * mgradeCount / sum(mgradeCount), 1)
jpeg(file="assets/malePiechart.jpeg")
pie(mgradeCount,labels = piepercent,
    main = "Male Grades", col = c("lightgreen","lightyellow","lightpink","lightblue","lavender","red"))
legend("topright", c("A","B","C","D","E","F"),
       cex = 0.5, fill = c("lightgreen","lightyellow","lightpink","lightblue","lavender","red") )
dev.off()



fgradeCount <- table(fgrades)
fgradeCount <- data.frame(rbind(fgradeCount))
fgradeCount <-c(fgradeCount$A,fgradeCount$B,fgradeCount$C,fgradeCount$D,fgradeCount$E,fgradeCount$F)
piepercent<- round(100 * fgradeCount / sum(fgradeCount), 1)
jpeg(file="assets/femalePiechart.jpeg")
pie(mgradeCount,labels = piepercent,
    main = "Female Grades", col = c("lightgreen","lightyellow","lightpink","lightblue","lavender","red"))
legend("topright", c("A","B","C","D","E","F"),
       cex = 0.5, fill = c("lightgreen","lightyellow","lightpink","lightblue","lavender","red") )
dev.off()






