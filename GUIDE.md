## 用語
`文字列` = String型  
`数値` = Number型  
`配列` = Array型

## 注意点
1. 判定を行うものに関しては`true`または`false`を返答します。
1. エラーはすべて`null`を返答し、コンソールにエラー内容を出力します。
1. 表記がない限り大文字と小文字は区別されます。

# Sys

## Sys.In / 含む
### 概要
文字列が含まれているか判定します。

### 使い方
```
>> 基本構文
Sys.In({Check},{Text})

>> 出力一覧
true = 含まれている。
false = 含まれていない。
null = エラー
```
`Check` = 探す文字列  
`Text` = 元の文字列  

### 利用例
```
>> Program
Text = NekoKawaii

console.log(Sys.In("Neko", Text))

>> Output
true
```

### 注意点
- Check
- - 入力できる型は`文字列`/`数値`です。 
- Text
- - 入力できる型は`文字列`/`数値`/`配列`です。

---

## Sys.Match / 一致
### 概要
入力された文字のみで構成された文章か判定します。

### 使い方
```
>> 基本構文
Sys.Match({Letter},{Text})

>> 出力一覧
true =  {Letter}の文字だけで構成されている。
false = {Letter}以外の文字が含まれている。
null = エラー
```
`Letter` = 構成文字  
`Text` = 元の文字列  

### 利用例
```
>> Program
console.log(Sys.Match([e,k,N,o], "Neko"))

>> Output
true
```

### 注意点
- Letter
- - 入力できる型は`文字列`/`数値`/`配列`です。
- - `文字列`/`数値`を入力すると1文字ずつスライスされます。
- - `配列`の一つに1文字含まれる場合でも取り出され、1文字ずつスライスされます。
- Text
- - 入力できる型は`文字列`/`数値`/`配列`です。

---

## Sys.Redirect / 転送
### 概要
指定された任意の場所にリダイレクトします。

### 使い方
```
>> 基本構文
Sys.Redirect({Link},{MsTime})

>> 出力一覧
null エラー
```
`Link` = 転送先リンク  
`MsTime` = 転送までの待機時間(ms)  

### 利用例
```
>> Program
Sys.Redirect("https://you-domain.dev", 1000)

>> Output
ありません。
```

### 注意点
- Link
- - 入力できる型は`文字列`です。
- MsTime
- - 入力できる型は`数値`です。

---

## Sys.Sleep / 待機
### 概要
指定秒数待機します

### 使い方
```
>> 基本構文
async function {関数名}(){
    await sleep({MsTime})
}

>> 出力一覧
null エラー
```
`MsTime` = 待機時間(ms)  

### 利用例
```
>> Program
async function hoge(){
    await sleep(1000)
}

>> Output
ありません。
```

### 注意点
- Sleep
- - asyncとawaitは必須です。
- MsTime
- - 入力できる型は`数値`です。

## Sys.Type / 型式
### 概要
入力された変数の型を返答します。

### 使い方
```
>> 基本構文
Sys.Type({Variable})

>> 出力一覧
string = 文字列型
number = 数値型
boolean = ブール値
nullVar = null
undefinedVar = 未定義
array = 配列
object = 辞書型(?)
func = 関数(?)
null エラー
```
`Variable` = 変数  

### 利用例
```
>> Program
Str = "hoge"

console.log(Sys.Type(Str))

>> Output
string
```

### 注意点
- Variable
- - 入力値は変数です。


# Web

## Web.GetAttrId / 属性取得
### 概要
HTMLタグの属性値を取得します。(Id)

### 使い方
```
>> 基本構文
Web.GetAttrId({Id},{Attr})

>> 出力一覧
null エラー
```
`Id` = Idの値  
`Attr` = 属性名  

### 利用例
```
>> Program(HTML)
<input type="text" id="hoge" value="Text">

>> Program(JS)
console.log(Web.GetAttrId("hoge","value"))

>> Output
Text
```

### 注意点
- GetAttrId
- - 出力は`配列`です。
- Id
- - 入力できる型は`文字列`/`数値`です。(推奨:文字列)
- Attr
- - 入力できる型は`文字列`/`数値`です。(推奨:文字列)

---

## Web.GetAttrClass / 属性取得
### 概要
HTMLタグの属性値を取得します。(Class)

### 使い方
```
>> 基本構文
Web.GetAttrClass({Class},{Attr})

>> 出力一覧
null エラー
```
`Class` = Classの値  
`Attr` = 属性名  

### 利用例
```
>> Program(HTML)
<input type="text" class="hoge" value="Text">

>> Program(JS)
console.log(Web.GetAttrClass("hoge","value")[0])

>> Output
Text
```

### 注意点
- GetAttrClass
- - 出力は`配列`です。
- Class
- - 入力できる型は`文字列`/`数値`です。(推奨:文字列)
- Attr
- - 入力できる型は`文字列`/`数値`です。(推奨:文字列)

---

## Web.GetTextId / 文章取得
### 概要
HTMLタグに挟まれたテキストを取得します。(Id)

### 使い方
```
>> 基本構文
Web.GetTextId({Id})

>> 出力一覧
null エラー
```
`Id` = Idの値  

### 利用例
```
>> Program(HTML)
<div id="hoge">fuga</div>

>> Program(JS)
console.log(Web.GetTextId("hoge"))

>> Output
fuga
```

### 注意点
- Id
- - 入力できる型は`文字列`/`数値`です。(推奨:文字列)

---

## Web.GetTextClass / 文章取得
### 概要
HTMLタグに挟まれたテキストを取得します。(Class)

### 使い方
```
>> 基本構文
Web.GetTextClass({Class})

>> 出力一覧
null エラー
```

### 利用例
```
>> Program(HTML)
<div class="hoge">fuga</div>

>> Program(JS)
console.log(Web.GetTextClass("hoge")[0])

>> Output
fuga
```

### 注意点
- Class
- - 入力できる型は`文字列`/`数値`です。(推奨:文字列)

---

## Web.UpdataAttrId / 属性変更
### 概要
HTMLタグの属性値を変更します。(Id)

### 使い方
```
>> 基本構文
Web.UpdataAttrId({Id},{Value})

>> 出力一覧
null エラー
```
`Id` = Idの値  
`Value` = 属性値  
### 利用例
```
>> Program(HTML)
<div class="hoge">fuga</div>

>> Program(JS)
Web.UpdataAttrId("hoge", "piyo")

>> Output
<div class="piyo">fuga</div>
```

### 注意点
- Id
- - 入力できる型は`文字列`/`数値`です。(推奨:文字列)
- Text
- - 入力できる型は`文字列`/`数値`です。(推奨:文字列)

---

## Web.UpdataAttrClass / 属性変更
### 概要
HTMLタグの属性値を変更します。(Class)

### 使い方
```
Web.UpdataAttrClass({Claas},{Value})

>> 出力一覧
null エラー
```
`Class` = Idの値  
`Value` = 属性値  

### 利用例
```
>> Program(HTML)
<div class="hoge">fuga</div>

>> Program(JS)
Web.UpdataAttrClass("hoge[0]", "piyo")

>> Output
<div class="piyo">fuga</div>
```

### 注意点
- Class
- - 入力できる型は`文字列`/`数値`です。(推奨:文字列)
- Text
- - 入力できる型は`文字列`/`数値`です。(推奨:文字列)

---

## Web.UpdataTextId / 文章変更
### 概要
HTMLタグに挟まれたテキストを変更します。(Id)  

### 使い方
```
>> 基本構文
Web.UpdataTextId({Id},{Text})

>> 出力一覧
```
`Id` = Idの値  
`Text` = 内容  

### 利用例
```
>> Program(HTML)
<div id="hoge">fuga</div>

>> Program(JS)
Web.UpdataTextId("hoge","piyo")

>> Output
<div id="hoge">piyo</div>
```

### 注意点
- - 入力できる型は`文字列`/`数値`です。(推奨:文字列)

---

## Web.UpdataTextClass / 文章変更
### 概要
HTMLタグに挟まれたテキストを変更します。(Class)

### 使い方
```
>> 基本構文
Web.UpdataTextClass({Class},{Text})

>> 出力一覧
```
`Class` = Classの値  
`Text` = 内容  

### 利用例
```
>> Program(HTML)
<div class="hoge">fuga</div>

>> Program(JS)
Web.UpdataTextClass("hoge[0]","piyo")

>> Output
<div Class="hoge">piyo</div>
```

### 注意点
- - 入力できる型は`文字列`/`数値`です。(推奨:文字列)



<!--
# Smart
*内部処理用の関数

## Smart.ArrayCutter
## Smart.IndexParse <- これいらないかも
##
##

-->