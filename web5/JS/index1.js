var sum=0;
for(var i=1;i<101;i++){
    sum=sum+i;
}
document.write(sum+"<br/>");
sum=0;
var i=1;
while(i<101){
    sum=sum+i;
    ++i;
}
document.write(sum+"<br/>");
sum=0;
i=1;
do{
    sum=sum+i;
    i++;
}while(i<101);
document.write(sum);
