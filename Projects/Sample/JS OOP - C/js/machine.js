(function(factory){
    define(factory);
})(function(){
/*
 * ID：Machine
 * 屬性： num    傳進來的參數，轉為十進位數值
 *       _ball  為一包含 1 ~ num 間整數字的陣列
 *       length 是個公開屬性，內容為 num
 */

function Machine(num) {
    
    // 將引入的 num 轉十進位數值
    num = parseInt(num, 10);    
    
    // 私有屬性，屬性 _ball 為一空陣列
    this._ball = [];            
    
    // 公開屬性
    this.length = num;          
    
    // 使陣列中產生 num 個數字
    while ( 1 <= num )          
    {
        // 用遞減方式產生 1 ~ num 間的整數字
        this._ball.push(num--); 
    }

    // 排序
    this._ball.sort(function(a, b){return a - b;});
}

// 走到這裡 num 已經在 while 迴圈裡被扣到 0 了，this.length 為原始的 num 值。

Machine.prototype = {
    
    /* 
     * machine.create(): 產生 num 個 DOM，指定目標容器與生成規則
    create: function(target,el)
    {
        var howManyBall = this.length,                                   // 要有 num 個球
            _this = target;                                              // _this 指定目標容器
        target.html('');                                                 // 清空目標容器
        
        // 在目標容器內產生 num 個 el ，中間顯示數字
        for (i = 1; i <= howManyBall; i ++)
        {
            _this.append('<'+el+'>'+i+'</'+el+'>');
        }
       
       return this;
    },
    */
    
    
    // 開球：開出一個 1 ~ num 之間的隨機整數字
    pop: function()
    {
        var random = this._ball,                                         // random = this._ball 是內有 1 ~ num 個數字的陣列 
             index = Math.floor(Math.random() * this._ball.length),      // index 是一個 (0-0.9999 * num) 的數字
               val = random[index];                                      // val 是個 index 隨機出來，random 陣列中的某數字
        
        if ( 0 < random.length )
        {
            random.splice(index, 1);                                     // 從 random 陣列中刪除剛挑出來的那個數字，以達到不重複
            this.length --;
            return val;
        } else
        {
            return '沒有球了!';
        }
    },

    eachBall: function(callback)
    {
        if (typeof callback == 'function') {
            for (var i = 0, L = this._ball.length; i < L; ++i) {
                callback(this._ball[i]);
            }
        }
    }
    
};

return Machine;
});
