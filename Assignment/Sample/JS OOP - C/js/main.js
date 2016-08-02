require([
  'machine',
  '../lib/jquery/jquery-latest.min'
], function (Machine) {
  
  var controller = $('#controller'),
      setBall = $('#controller input[name="ko-num"]'),
      sendBall = $('#controller input[name="send"]'),
      leftBall = $('#controller input[name="noko-num"]'),
      goodluck = $('#controller input[name="lottery"]'),
      $numbers = $('#numbers'),
      machine;

  
  // 自訂生成球數開球機
  sendBall.click(function(){
    // 要有 num 個球
    var num = parseInt(setBall.val(), 10);

    // 根據輸入框產生開球機
    machine = new Machine(num);
                
    // 更新剩餘球數    
    leftBall.val(machine.length);                                    

    // 清空目標容器
    $numbers.empty();

    // 在目標容器內產生 num 個 el ，中間顯示數字
    machine.eachBall(function(i){
      $numbers.append('<li>'+i+'</li>');
    });
  });
  
  // 開個獎!
  goodluck.click(function(){
    if (machine && machine.length) {
      var theNum = machine.pop();
      $('#the-number-is').html(theNum);
      $('#numbers li:eq('+ (theNum-1) +')').addClass('active');
      leftBall.val(machine.length);
    }
  });
  
  
});