var initial="Rome was not built in a day";
var total=1;
for(var i=0;i<initial.length;i++){
    var char=initial.charAt(i);
    if(char==" "){
        total++;
    }
}
document.write("Rome was not built in a day由"+total+"个单词组成");