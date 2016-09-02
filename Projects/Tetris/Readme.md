# Tetris
## Note
### `parseInt` & `parseFloat`

〝分析〞函數，parseInt 和 parseFloat，會在給與字串作為參數時返回數值。

    parseFloat(str)

此處的 parseFloat 會分析他自己的參數，字串 str，並試著返回浮點數。如果遇到正負符號 (+ 或 -)、數字 (0-9)、小數點、指數以外的字元，他就會返回在此之前的數值，並忽略那些字元。如果連第一個字元也不可以轉換為數字，就會返回〝NaN〞（不是數字）。

    parseInt(str [, radix])

分析參數(字串str)，並返回由第二個參數所指定的 radix （基數）的整數。radix 為選用性參數。舉例來說，以 10 為底的基數表示要轉換為十進制數，8 是八進制，16 是十六進制，依此類推。對於 10 以上的基數，就會使用字母來表示大於九的數字。例如，十六進制數（基數 16），就會用到 A 到 F 的字母。
如果 parseInt 遇到不是在指定基數之內的字元，就會直接忽略這個字元及其隨後字元，並返回在此之前已經分析出來的整數值。如果連第一個字元也不可以轉換為指定基數之內的字元，就會返回〝NaN〞。parseInt 函數會切除字串以取得整數值。

 > Reference: [parseInt 和 parseFloat 函數](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Obsolete_Pages/Obsolete_Pages/Obsolete_Pages/%E9%A0%90%E5%85%88%E5%AE%9A%E7%BE%A9%E7%9A%84%E5%87%BD%E6%95%B8/parseInt_%E5%92%8C_parseFloat_%E5%87%BD%E6%95%B8)

### requestAnimationFrame

通知瀏覽器我們想要產生動畫，並且要求瀏覽器在刷新畫面前呼叫特定函數刷新動畫；這個方法接受一個函數(回撥函數, Callback)，然後該函數會被呼叫執行以刷新繪圖。
> Reference: [Window.requestAnimationFrame()](https://developer.mozilla.org/zh-TW/docs/Web/API/Window.requestAnimationFrame)
