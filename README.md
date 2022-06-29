## 概要
Smart.jsは、汎用的な処理をまとめてJavaScriptの記述を簡単にするモジュールです。  

### 案内
[GUIDE.md](GUIDE.md) : 利用方法一覧  
[RELEASE.md](RELEASE.md) : リリースメモ  

## 使い方
[GUIDE.md](GUIDE.md)を参照  

## エラー
`null`を返答し、エラー内容を`console.log`に出力します。  

## 動作環境(未確認)
(確認済みの物)  
### PC(Windows)
Brave  
Chrome  
Firefox  

### Mob(iOS)
Safari  

## 更新履歴
### v0.0.0
不完全な動作版  
- inner/含む
- sleep/待機

### v0.0.1a
アルファ
- Sys
- - In / 含む
- - Match / 一致
- - Redirect / 転送
- - Sleep / 待機
- - Types / 型式

<!--
### v0.0.1
試験実装版  
- Sys
- - Get / 取得
- - In / 含む
- - Match / 一致
- - Redirect / 転送
- - Sleep / 待機
- - Types / 型式
- Web
- - GetAttrId / 属性取得(Id)
- - GetAttrClass / 属性取得(Class)
- - GetTextId / 文章取得(Id)
- - GetTextClass / 文章取得(Class)
- - UpdataAttrId / 属性変更(Id)
- - UpdataAttrClass / 属性変更(Class)
- - UpdataTextId / 文章変更(Id)
- - UpdataTextClass / 文章変更(Class)
-->

## 実装予定

### Cookie操作
出来たらうれしい。

### Ajax関連
なるべく簡単に扱えてタイムアウト処理とかもしてくれるとか。取得だけと任意のデータ送信と...(ajax.jsとか別のにしたほうがいい感じする)  

### XMLパーサー
(smart-xml.jsとかに分裂するかも)  

### JSONパーサー
標準機能で使えそうだけどこれも少しめんどくさそうなので簡単にああ使えるように...(smart-json.jsとかに分裂するかも)  

<!--
UpdataTextId("Id","'Info:'+ Info")みたいなことってできないよな...
あ、普通にコンマで区切らなければいいだけだからいけるわ。
UpdataTextId("Id","Info:" + Info)こう。
-->