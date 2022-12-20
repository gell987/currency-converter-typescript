#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"
let check:boolean = false;
const sleep = (ms = 3000) => new Promise((r) => setTimeout(r, ms));
async function greet() {
  console.clear();
  const rainboxTitle = chalkAnimation.rainbow(
    "Hassam's currency converter PIAIC(PIAIC202061)\n"
  );
  await sleep();
  rainboxTitle.stop();
}


async function main(to:string,from:string,amount:number){

    var myHeaders = new Headers();
    myHeaders.append("apikey", "AsRmlPnTurxAf9t6RS879bj5VOgNoV6H");

    var requestOptions:any = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
    };

    let obj
    const res = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)

    obj = await res.json()

    console.log(chalk.redBright(`it will be ${ obj.result} ${to}`))
}



async function main2() {
        
    let curr_to:any = await inquirer.prompt({
        name:"curr_to",
        type:"input",
        message:chalk.redBright("please enter the currency you want to convert to:  ")
    
    }) 
    let curr_from:any = await inquirer.prompt({
        name:"curr_from",
        type:"input",
        message:chalk.redBright("please enter the currency you want to convert from:  ")
        
    }) 

    
    let curr_amount:any = await inquirer.prompt({
        name:"curr_amount",
        type:"number",
        message:chalk.redBright("please enter the amount of currency you want to convert:  ")
        
    }) 
    
    
    await main(curr_to.curr_to,curr_from.curr_from,curr_amount.curr_amount)
    
}

async function main3() {
    let q_or_no = await inquirer.prompt({
        name:"q_or_no",
        type:"input",
        message:chalk.redBright(`
        please enter convert(to use the converter)
        please enter q(to quit)
        :  `)
    })
    if((await q_or_no).q_or_no=="q"){
        check = true
    }
    else if((await q_or_no).q_or_no=="convert"){
        await main2()
    }
    
}
await greet()
while(check==false){
    await main3()
}