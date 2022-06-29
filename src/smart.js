var Sys; // SYS Class
var Web; // WEB Class
var _Smart; // Smart Class

// Sys
var In_LoopChange = 0;
var In_Check;
var In_Text;

var Match_Letter;
var Match_List = [];
var Match_LoopArray = 0;
var Match_Text;

var Redirect_Link;
var Redirect_MsTime;

var Sleep_Time;

var Type_Typeof;
var Type_Variable;

//Web

//Smart
var NoValue_Variable;

var OverSize_A;
var OverSize_B;
var OverSize_C;

// Class
class SYS{

    constructor(){
        ;
    }

    /*
    Get(){
        ;
    }
    */

    In(In_Check,In_Text){

        // 未入力エラー
        if (_Smart.NoValue(In_Check) == true && _Smart.NoValue(In_Text) == true){
            ;
        }
        else {
            console.error("Error: Incorrect value Info: No value. / Occurred in Sys.In");
            return (null);
        }

        // 型エラー TODO:オブジェクト(辞書)がなぜか通ってしまう問題を解決させる。
        if (Sys.Types(In_Check) == "string" || Sys.Types(In_Check) == "number" || Sys.Types(In_Text) == "string" || Sys.Types(In_Text) == "number" || Sys.Types(In_Text) == "array"){
            ;
        }
        else {
            console.error("Error: Incorrect value. Info: Variable mistake. / Occurred in Sys.In");
            return (null);
        }

        // 数値上限エラー
        if (_Smart.OverSize(In_Check,In_Text) == null){
            return (null);
        }
        else {
            ;
        }
        
        // 数値を文字列に変換
        if (Sys.Types(In_Check) == "number" || Sys.Types(In_Text) == "number"){
            In_Check = String(In_Check);
            In_Text = String(In_Text);
        }
        else {
            ;
        }

        // In_Textが文字列の場合の処理
        if (Sys.Types(In_Text) == "string"){

            if (In_Text.indexOf(In_Check) != -1){
                return (true);
            }
            else {
                return(false);
            }

        }
        else {
            ;
        }

        // In_Textが配列の場合の処理
        if (Sys.Types(In_Text) == "array"){

            while(true){

                // 数値を文字列に変換
                In_Text[In_LoopChange] = String(In_Text[In_LoopChange]);

                // 含み確認
                if (In_Text[In_LoopChange].indexOf(In_Check) != -1){
                    return (true);
                }
                else {
                    ;
                }

                // False処理
                if (In_LoopChange >= In_Text.length - 1){
                    return (false);
                    break; //念のため
                }
                else {
                    In_LoopChange += 1;
                }

            }

        }
        else {
            console.error("Error: Unknown error. Info: Occurred in Sys.In");
            return (null);
        }

    }

    Match(Match_Letter,Match_Text){

        // 未入力エラー
        if (_Smart.NoValue(Match_Letter) == true && _Smart.NoValue(Match_Text) == true){
            ;
        }
        else {
            console.error("Error: Incorrect value Info: No value. / Occurred in Sys.Match");
            return (null);
        }

        // 型エラー
        if (Sys.Types(Match_Letter) == "string" || Sys.Types(Match_Letter) == "number" || Sys.Types(Match_Letter) == "array" || Sys.Types(Match_Text) == "string" || Sys.Types(Match_Text) == "number" || Sys.Types(Match_Text) == "array"){
            ;
        }
        else {
            console.error("Error: Incorrect value. Info: Variable mistake. / Occurred in Sys.Match");
            return (null);
        }

        // 数値上限エラー
        if (_Smart.OverSize(Match_Letter,Match_Text) == null){
            return (null);
        }
        else {
            ;
        }

        // Match_Letter
        // 文字列/数値
        if (Sys.Types(Match_Letter) == "string" || Sys.Types(Match_Letter) == "number"){

            // 前処理
            Match_Letter = String(Match_Letter);

            // Match_Letterの分割処理
            while (true){

                // main
                Match_List.push(Match_Letter[0]);
                Match_Letter = Match_Letter.replace(Match_Letter[0],"");

                // break
                if (Match_Letter.length <= 0){
                    break;
                }
                else {
                    ;
                }

            }

        }

        // 配列
        if (Sys.Types(Match_Letter) == "array"){
                
            // Match_Letterの分割処理
            while (true){
                
                // 配列(Match_Letter)を処理して配列(Match_List)に登録
                if (Match_Letter.length != 0){
                    if (Match_Letter[0].length != 0){
                        Match_List.push(String(Match_Letter[0])[0]);
                        Match_Letter[0] = String(Match_Letter[0]);
                        Match_Letter[0] = Match_Letter[0].replace(String(Match_Letter[0])[0],"");
                    }
                    else {
                        Match_Letter.shift();
                    }
                }
                else {
                    break;
                }

            }

        }

        // Match_Text
        // 配列(文字列に変換)
        if (Sys.Types(Match_Text) == "array"){
            Match_Text = Match_Text.join("");
        }

        // 文字列
        if (Sys.Types(Match_Text) == "string" || Sys.Types(Match_Text) == "number"){

            // 前処理
            Match_Text = String(Match_Text);

            // 削除処理
            while (true){

                if (Match_List.length != 0){

                    Match_Text = Match_Text.replace(Match_List[0],"");

                    if (Sys.In(Match_List[0],Match_Text) == false){
                        Match_List.shift();
                    }
                    else {
                        ;
                    }
                    console.log(Match_Text)
                    console.log(Match_List)
                }
                else {
                    break;
                }

            }

            // 一致判定
            if (Match_Text.length == 0){
                return(true);
            }
            else {
                return(false);
            } 
        }
        else {
            console.error("Error: Unknown error. Info: Occurred in Sys.Match");
            return (null);
        }

    }

    async Redirect(Redirect_Link,Redirect_MsTime){

        // 未入力エラー
        if (_Smart.NoValue(Redirect_Link) == true && _Smart.NoValue(Redirect_MsTime) == true){
            ;
        }
        else {
            console.error("Error: Incorrect value Info: No value. / Occurred in Sys.Redirect");
            return (null);
        }

        // 型エラー
        if (Sys.Types(Redirect_Link) == "string" || Sys.Types(Redirect_MsTime) == "number"){
            ;
        }
        else {
            console.error("Error: Incorrect value. Info: Variable mistake. / Occurred in Sys.Redirect");
            return (null);
        }

        // 数値上限エラー
        if (_Smart.OverSize(Redirect_Link,Redirect_MsTime) == null){
            return (null);
        }
        else {
            ;
        }

        // リダイレクト
        await Sys.Sleep(Redirect_MsTime);
        location.replace(Redirect_Link);
    }

    Sleep(Sleep_Time){
        
        // 未入力エラー
        if (_Smart.NoValue(Sleep_Time) == true){
            ;
        }
        else {
            console.error("Error: Incorrect value Info: No value. / Occurred in Sys.Sleep");
            return (null);
        }

        // 型エラー
        if (Sys.Types(Sleep_Time) == "number"){
            ;
        }
        else {
            console.error("Error: Incorrect value. Info: Variable mistake. / Occurred in Sys.Sleep");
            return (null);
        }

        // 数値上限エラー
        if (_Smart.OverSize(Sleep_Time) == null){
            return (null);
        }
        else {
            ;
        }

        // 待機処理
        return new Promise(function(resolve){
            setTimeout(resolve,Sleep_Time);

        });

    }


    Types(Type_Variable){

        // 前処理
        Type_Typeof = typeof Type_Variable;

        // 型の判定
        if (Type_Typeof != "object"){
            return (Type_Typeof);
        }
        else if (Type_Variable == null){
            return("nullvar");
        }
        else if (Type_Variable instanceof Array){
            return ("array");
        }
        else if (Type_Typeof == "object"){
            return ("object");
        }
        else {
            console.error("Error: Unknown error. Info: Occurred in Sys.Types");
            return(null);
        }

    }

}

/*
class WEB{

    GetAttrId(){
        ;
    }

    GetAttrClass(){
        ;
    }

    GetTextId(){
        ;
    }

    GetTextClass(){
        ;
    }

    UpdataAttrId(){
        ;
    }

    UpdataAttrClass(){
        ;
    }

    UpdataTextId(){
        ;
    }

    UpdataTextClass(){
        ;
    }
    
}
*/

class _SMART{

    NoValue(NoValue_Variable){

        // 変数が未定義か否か
        if (NoValue_Variable != undefined){
            return(true);
        }
        else {
            return(false);
        }        

    }

    OverSize(OverSize_A,OverSize_B,OverSize_C){ // 数値のオーバーフローを処理

        if (Sys.Types(OverSize_A) == "number"){
            if (OverSize_A > 9007199254740991){
                console.error("Error: Incorrect value. Info: Number limit over.");
                return (null);
            }
        }
        
        if (Sys.Types(OverSize_B) == "number"){
            if (OverSize_B > 9007199254740991){
                console.error("Error: Incorrect value. Info: Number limit over.");
                return (null);
            }
        }
        
        if (Sys.Types(OverSize_C) == "number"){
            if (OverSize_C > 9007199254740991){
                console.error("Error: Incorrect value. Info: Number limit over.");
                return (null);
            }
        }

        return(true)

    }

}
// Class

// インスタンス化
Sys = new SYS();
Web = new WEB();
_Smart = new _SMART();
// インスタンス化

/*
async function tests(){
    console.log(Sys.Match([1,2,"あいうえお"],["あいえおうおいあええううえい",121222111,2211111111111111]))
}

// tests()

// 数値上限エラー
        if (_Smart.OverSize() == null){
            return (null);
        }
        else {
            ;
        }

async function hogee(){
    let web = await fetch("https://raw.githubusercontent.com/Meziro039/Smart.js/main/README.md")
    console.log(web.status)
}

hogee()
*/

// C/https://github.com/Meziro039