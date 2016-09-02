require([
  'machine',
  '../lib/jquery/jquery-latest.min'
], function () {
  
  var controller = $('#controller'),
         setBall = $('#controller input[name="ko-num"]'),
        sendBall = $('#controller input[name="send"]'),
        leftBall = $('#controller input[name="noko-num"]'),
        goodluck = $('#controller input[name="lottery"]'),
        cBallNum = 80;
        
  var    machine = new Machine(cBallNum);       // 建構一個 內存 cBallNum 個球的物件 (預設為80)
  
  // 自訂生成球數開球機
  sendBall.click(function(){
      cBallNum = parseInt(setBall.val(),10);    // 球數輸入框數字
      $('#numbers').html('');
      leftBall.val(cBallNum);                   // 剩餘球數更新為自定義球數
      machine = new Machine(cBallNum);          // 創建一個自定義球數的開球機
   });
  
  // 開個獎!
  goodluck.click(function(){
      var lucyNum = machine.pop();              // 隨機傳出一個球, 記得補0
      $('#the-number-is').html(lucyNum);
      $('#numbers li:eq('+ (lucyNum-1) +') a').addClass('active');
     leftBall.val(machine.length);              // 取得剩餘球數
  });
});