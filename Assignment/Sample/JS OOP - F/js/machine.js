function Machine(num) {
    
    this.num = num;
    
    /*
     * 開個獎!
     */
    
    this.pop = function()
    {
        var popNum = padLeft(parseInt(random(),10).toString(),2);
        if (num > 0) {
            num --;
            return popNum;
        } else if (num == 0) {
            return '沒有球了';
        }
    };
    
    /*
     * 剩下幾個球
     */
    
    this.length = function() { return num; };
    
    /*
     * 不足位數左邊補零
     */
    
    function padLeft(str,lenght)
    {
        if(str.length >= lenght)
        {
            return str;
        }
        else
        {
            return padLeft("0" + str,lenght);
        }
    }
    
    /*
     * 產生 80 個球
     */
    
    for(i=1; i <= num; i++)
    {
        i = i.toString();
        var numm = padLeft(i,2);
        $('#numbers').append('<li><a href="#" class="bet_on_ball">'+numm+'</a></li>'); // 最後輸出樣式
    }
    
    /*
     * 生成 1-80 不重複亂數
     */
    
    var uniqueRandoms = [],
        numRandoms = num;

    function makeUniqueRandom() {
        // refill the array if needed
        if (!uniqueRandoms.length) {
            for (var i = 0; i < numRandoms; i++) {
                uniqueRandoms.push(i);
            }
        }
        var index = Math.floor(Math.random() * uniqueRandoms.length);
        var val = uniqueRandoms[index];
    
        // now remove that value from the array
        uniqueRandoms.splice(index, 1);
    
        return val;
    }
    
    var random = function() { return makeUniqueRandom() + 1; };
    
}