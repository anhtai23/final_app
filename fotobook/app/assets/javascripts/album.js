
    $(document).ready(
      function(){
        $('img.close').click(
          function(){
            $(this).parent().parent().empty();
          }
          )
      })

    function showImage(){
      if(this.files && this.files[0])
      {
        var obj = new FileReader();
        obj.onload = function(data){

         $('.images').prepend(' <div class="img float-left mt-2 mr-1"><div ng-repeat="file in imagefinaldata" class="img_wrp" class=""><img style="height: 180px;width:180px" src="' + data.target.result + '" class="imgResponsiveMax" alt="" /><img class="close m-1" src="/assets/click1.png" onClick="click()"style="width:30px; height: 30px" /></div></div> ');
         $(document).ready(
          function(){
            $('img.close').click(
              function(){
                $(this).parent().parent().empty();
              }
              )
          })

       }
       obj.readAsDataURL(this.files[0]);


     }
   }