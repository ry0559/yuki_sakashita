$(function(){
  $(".icon").hover(
    function(){
    $(this).animate({zIndex:1},{
      //1秒かけてアニメーション
      duration:1000,
      //stepは、アニメーションが進むたびに呼ばれる
      step:function(now){
        //nowに現在のz-indexの値（0から1に変化しているところ）が渡してもらえる
        //0から1に向かって変化していくnowを利用して3回転（1080度）させてみる
        $(this).css({transform:'rotate(' + (now * 1080) + 'deg)'});
      },
      //終わったら
      complete:function(){
        //次のために、元に戻しておく
        $('.icon').css('zIndex', 0);
      }
    });
  });
  $(".fab").click(function(){ 
    $(this).css('color','red');
  });
  // $("#menu-slide-btn").click(function(){
  //   // $("#menu-slide").css('display','block');
  //   $("#menu-slide-btn").css('display','none');
  //   $("#menu-slide").show(2000);
  // });
  // $("#revers-btn").click(function(){
  //   $("#menu-slide").hide(2000);
  //   $("#menu-slide-btn").css('display','block');
  //   // $("#")
  //   // $("#menu-slide-btn").css({transform:'rotate(' + (now * 1080) + 'deg)'});

  // });
  
// ======= animate =======
  // $("#menu-slide-btn").click(function(){
  //   // $("#menu-slide-btn").css('display','none');
  //   $("#menu-slide").animate(
  //     {
  //     width: "toggle",
  //     opacity: "toggle",
  //     },(200));
  // });
  
  $("#menu-slide-btn").click(function(){
    
    $(this).animate({
      "marginLeft": "90%",
    },3000);
  });


  $('.link').mouseover(function() {
    $(this).css('color','black');
  }).mouseout(function() {
    $(this).css('color','');
  });

  // $("#menu-slide-btn").click(function(){
  //   console.log("ok")
  //   $("#link-list").toggle("up");
  // });



});