#!/usr/bin/env node
const fs =require ("fs");

// let filename1= process.argv[2];
// let filename2= process.argv[3];
// let data1=fs.readFileSync(filename1,"utf-8")
// let data2 =fs.readFileSync(filename2,"utf-8")
// console.log(data1+"\n"+data2);
//---------------------------------------------------------------
data=''
if(process.argv[2]=="w"){
fs.writeFileSync(process.argv[3],process.argv[4])
}
else if(process.argv[2]=="a"){
let previousdata=fs.readFileSync(process.argv[3],'utf-8');
fs.writeFileSync(process.argv[3],previousdata+process.argv[4]+"\n");
}
else if(process.argv.includes("ns")){
    data=fs.readFileSync(process.argv[3],"utf-8");
    data=data.split(" ").join('');
    fs.writeFileSync(process.argv[3],data)
}
else if(process.argv.includes("ne")){
    let temp=''
    temp=fs.readFileSync(process.argv[3],"utf-8");
    ans=temp.split('\n');
    if(ans.includes('\r'))ans=temp.split('\r\n');
    for(let i=0;i<ans.length;i++){
    if(ans[i]!="")data= data+ans[i]+'\n'        
    }
    fs.writeFileSync(process.argv[3],data);
}
else if (process.argv.includes("numl")){
    let temp='';
    let num=1;
    for(let i=3;i<process.argv.length;i++){temp=temp+fs.readFileSync(process.argv[i],"utf-8");
temp=temp+"\n"
}
    let arr=temp.split('\n');
    if(arr.includes("\r"))arr=temp.split("\r\n");
    for(let j=0;j<arr.length;j++){
        if(arr[j]!=""){
            console.log(num+"."+arr[j]);
            num++;
        }
    }
}
else{
    for(let i=2;i<process.argv.length;i++)data=fs.readFileSync(process.argv[i])+"\n"+data;
console.log(data);
}