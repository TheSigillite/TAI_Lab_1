var table = ""
for(let i=1;i<=10;i++){
    for(let j=1;j<=10;j++){
        table = table.concat(" "+(i*j))
    }
    console.log(table);
    table = ""
}