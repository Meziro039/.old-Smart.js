var inner_check
var inner_text
var inner_roop

var match_check
var match_text
var match_list

var sleep_time
var sleep_res


inner_roop = 0

match_list = []

// inner
function inner(inner_check, inner_text){

    // anner_checkが文字列もしくは数値であるか
    if (typeof inner_check == "string" || typeof inner_check == "number"){
        inner_check = String(inner_check)
    }
    else{
        console.log("Error: Input data error")
        return(null)
    }

    // inner_textが文字列もしくは数値であるか
    if (typeof inner_text == "string" || typeof inner_textk == "number"){
        if (String(inner_text).indexOf(String(inner_check)) != -1){
            return(true)
        }
        else{
            return(false)
        }
    }
    else{
        ;
    }

    // inner_textが配列か
    if (inner_text instanceof Array){
        while (true){

            //
            if (String(inner_text).indexOf(String(inner_check[inner_roop - 1])) != -1){
                return(true)
            }
            else{
                ;
            }

            //break
            if (inner_check.length == inner_roop - 1){
                return(false)
                break
            }
            else{
                inner_roop += 1
            }
        }
    }
    else{
        console.log("Error: Input data error")
        return(null)
    }
}

/*
// match
function match(match_check, match_text){

    // match_checkが文字列(数値)の場合スライス
    if (typeof match_check == "string" || typeof match_check == "number"){

        match_check = String(match_check)

        //ごっちゃになったのでまたこんど

        while (true){
            
            if (match_check.length != 0){
                match_list.push(match_check[-1])
                console.log(match_list)
                match_check.replace(match_check[-1], "")
            }
            else{
                break
            }
        }

    }

    // match_checkがリストの場合はそのまま(1文字目のみ使う)
    if (match_check instanceof Array){
        ;
    }
    
}
*/

// sleep
function sleep(sleep_time){
    return new Promise(function(sleep_res){
        setTimeout(sleep_res,sleep_time);
    })
}

// 何も入力がない時の処理しないと...