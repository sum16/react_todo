# React で todo アプリを作成

## 前提知識

・分割代入

-オブジェクト

```
const user = {
  name: "sato",
  age: 28
}

const { name, age } = user;

//指定のプロパティを抜き出せる

```

-配列

```
const user = ['sato', 28 ]

const [ name, age ] = user;
//左からインデクス順に入る 0,1,2...

```

-デフォルト値

```
const sayHello = (name = "sato") => console.log(`hello! ${name}さん`)

sayHello();

// 関数呼び出しで引数に何も入れない場合デフォルト値が適用される
// デフォルト値が設定されていないとundefindが出力される
```

-三項演算子

```
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
const val1 = 1 < 0 ? 'true' : 'false'

→true

```

```
const num = 1500;

cosnt formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください'

// toLocaleString() **数値**に金額カンマをつけてくれるメソッド
// 文字列の場合は'数値を入力してください'出力
```

```
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? '100を超えている' : '100を超えていない';
}

checkSum(60, 100)
→ '100を超えている'
```

論理演算子

||
左側が false なら右側を返す

&&  
左側が true なら右側を返す
