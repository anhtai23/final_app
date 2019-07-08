
        document.querySelector("html").classList.add('js');
          function showImage(){
            if(this.files && this.files[0])
            {
              var obj = new FileReader();
              obj.onload = function(data){
                var image = document.getElementById("image");
                image.src = data.target.result;
                image.style.display = "block"
              }
              obj.readAsDataURL(this.files[0]);

            }
        }

    $(document).ready(function(){


        $('a#btnFollow').click(function(){
          if($(this).text() == "Follow"){
            $(this).html("<b>Following</b>");
            $(this).css("background-color", "#ffc107");
            $(this).css("border-color", "white");
            $(this).css("color", "white");
          }else{
            $(this).html("<b>Follow</b>");
            $(this).css("background-color", "white");
            $(this).css("border-color", "#ffc107");
            $(this).css("color", "#ffc107");
          }
        });
      });