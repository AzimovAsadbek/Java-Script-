let str = "MmMurodillayev mMMm Hojiakbar"
let letterCount = {}

for (let i = 0; i < str.length; i++) {
    if (letterCount[str[i]]) {
        letterCount[str[i]] +=1
    }else{
        letterCount[str[i]]=1
    }
}

for (let i = 0; i < Object.keys(letterCount).length; i++) {
    console.log(`${Object.keys(letterCount)[i]}: ${letterCount[Object.keys(letterCount)[i]]}`);
}