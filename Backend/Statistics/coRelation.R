
library(lattice)
library(ggplot2)
library(reshape2)

setwd("F:/Prob_Project/Backend")

dataSet<- read.csv("StudentsPerformance.csv", header=TRUE, sep=",")


corDataSet <- data.frame(math=c(dataSet$math),reading=c(dataSet$reading),writing=c(dataSet$writing))

corr_mat <- round(cor(corDataSet),2)

# reduce the size of correlation matrix
melted_corr_mat <- melt(corr_mat)
# head(melted_corr_mat)


jpeg(file="assets/corRelationPlot.jpeg")
# plotting the correlation heatmap
ggplot(data = melted_corr_mat, aes(x=Var1, y=Var2,fill=value)) +
  geom_tile()+
  geom_text(aes(Var2, Var1, label = value),
            color = "white", size = 4)
dev.off()












