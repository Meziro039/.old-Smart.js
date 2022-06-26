## 概要
これは利用できません。

# 機能一覧
*予約語回避のため一部本来の単語との意味が大きく異なるものもあります。  


## inner()/含まれる
含まれているか検証します。    
### 基本構文
```
inner({検索したい文字列},{検索元文字列})
```

### 使用例
```
text = NekoKawaii

if (inner("Neko", text) == true){
    console.log("Nya-")
}
else{
    console.log("...")
}
```

### エラー
`Error: Input data error` = 入力した値もしくは型に誤りがあります。

### 注意事項
- 入力可能な形式は文字列/数値/配列です。辞書型は利用できません。
- 大文字小文字は別物として扱います(入力前に変換してください)


## match()/一致
入力された文字のみが含まれているか確認します。  
入力されたデータは文字列でも一文字ずつスライスされます。  

### 基本構文
```
match({検索したい文字列},{検索元文字列})
```

#### 使いどころは？
指定した文字だけが含まれていたら処理を継続するなどの判定に利用できます。

### 使用例
```
text = "ABC"

if (match("ABC", text) == true){
    console.log("yes")
}
else{
    console.log("no")
}
```
### エラー
### 注意事項


### sleep()/待機
ms秒で待機します。  

### 基本構文
```
async function {NAME}(){
    await sleep({ms})
}
```

### 使用例
```
async function hoge(){
    await sleep(1000)
    consol.log("1s")
}
```

### エラー
### 注意事項
