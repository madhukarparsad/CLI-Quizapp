var stor=require("readline-sync")

var score=0

function quiz(question,answer)   {
    console.log(i+1+".  " + question,"\n")
    var ans=stor.question(i+1+".  " +"ans ==>> ")
    if (answer==ans){
        console.log("\nright");
        score = score + 1
    }
    else{
        console.log("wrong");
    }

    console.log("your score is ",score)

    console.log(".............................");
}


let data=[{
    question:"what is your name?\n\na)madhukar\n\nb)nigam\n\nc)girraj\n\nd)jagdish",
    answer:"madhukar"
},{
    question:"how old am i?\n\na)20\n\nb)19\n\nc)18\n\nd)17",
    answer:"18"
},{
    question:" What is your biggest fear?\n\na)goonas\n\nb)being hungry\n\nc)speaking on podium\n\nd)hight",
    answer:"being hungry"
},{
    question:"What is your favorite book to read?\n\na)power of money\n\nb)rich dad poor dad\n\nc)the dairy\n\nd)atomice habit",
    answer:"rich dad poor dad"
},{

    question:"how is your fav hero in your famliy?\n\na)father\n\nb)mother\n\nc)brither\n\nd)grand father",
    answer:"mother"
}]

console.log("Do you know me ??\n");
for (var i = 0;i<data.length;i = i+ 1){
    quiz(data[i].question,data[i].answer)
}