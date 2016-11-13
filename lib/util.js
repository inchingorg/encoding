/**
 * Created by feiqiang on 2016/11/13.
 */

exports.format = function(hexString){
    if(!hexString || hexString.length === 0){
        return;
    }

    let output = '';
    for(let i=0;i<hexString.length; i++){
        output += hexString[i];
        if(i%2 !=0 && i < hexString.length-1){
            output += ' ';
        }
    }

    return output;
};