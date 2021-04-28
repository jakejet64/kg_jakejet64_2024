start();

function start(){
    const args = process.argv.slice(2);
    console.log(IntArrToPhoneticArr(args));
}

function IntArrToPhoneticArr(input){
    let ret = [input.length];
    for(let index = 0; index < input.length; index++){
        ret[index] = IntToPhonetic(input[index]);
    }
    return ret;
}

function IntToPhonetic(input){
    let ret = '';
    while(input > 9){
        ret = IntToPhoneticHelper(input % 10) + ret;
        input = parseInt(input / 10);
    }
    ret = IntToPhoneticHelper(input) + ret;
    return ret;
}

function IntToPhoneticHelper(input){
    if(input == 0){
        return 'Zero';
    }else if(input == 1){
        return 'One';
    }else if(input == 2){
        return 'Two';
    }else if(input == 3){
        return 'Three';
    }else if(input == 4){
        return 'Four';
    }else if(input == 5){
        return 'Five';
    }else if(input == 6){
        return 'Six';
    }else if(input == 7){
        return 'Seven';
    }else if(input == 8){
        return 'Eight';
    }else{
        return 'Nine';
    }
}
