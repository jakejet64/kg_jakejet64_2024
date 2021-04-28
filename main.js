let arr1 = [3, 25, 209]
let arr2 = [10, 300, 5]

start();

function start(){
    console.log(IntArrToPhoneticArr(arr1));
    console.log(IntArrToPhoneticArr(arr2));

}

function IntArrToPhoneticArr(input){
    let ret = [input.length];
    for(let index = 0; index < input.length; index++){
        ret[index] = IntToPhonetic(input[index]);
    }
    return ret;
}

function IntToPhonetic(input){
    if(input > 9){
        return IntToPhonetic(parseInt(input / 10)) +
            IntToPhoneticHelper(input % 10);
    }else{
        return IntToPhoneticHelper(input);
    }
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
