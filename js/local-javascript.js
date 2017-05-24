 
    /****************************NAVBAR ACTIVATE******************************/

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }

    /* icon responsive*/
    $(function() {
         $("#menu-toggle").click(function(e) {
             e.preventDefault();

         })
    });

    /****************************NAVBAR ACTIVATE******************************/
    



    /****************************SLIDER HEADER********************************/
     $(function() {
        $('#slider').carousel({
        interval: 3000
        })

    
    });

    /****************************SLIDER HEADER********************************/




    /****************************GALLERY SLIDER*******************************/
    $(function() {
        $('#galery').carousel({
        interval: 3000
        })

        $('#galery').on('slid.bs.carousel', function() {
            //alert("slid");
        });
    
    
    });
  
    /****************************SLIDER HEADER*******************************/





    /****************************IMAGE PICKER********************************/
   
    $(function(){
    var imageContainer = '.image-picker .item2',
        imageList      = '.image-picker',
        maxWidth       = 'parent', // parent or specific css width/  
        defImage       = './img/slika 3.png';
    var $imageContainer = $(imageContainer).eq(0);
    var $imageList      = $(imageList).eq(0);
        
        if (maxWidth === 'parent') { maxWidth = $imageContainer.width() + 'px'; }
        //Load images and set hover::
        $imageList.find('div').each(function(index){
            if (typeof $(this).data('image') === 'string') {
                $imageContainer.append(
                    "<img id='imageToggle"+index+
                    "' src='"+$(this).data('image')+
                    "' style='max-width: "+maxWidth+"; display:none;' />"
                );
                $(this).data("image","imageToggle"+index);
                $(this).hover(
                    function(){ loadImage($(this).data('image')); },
                    function(){ loadImage('imageToggleDef'); }
                );  
            }
        });
        
        //Load default:
        $imageContainer.append(
                    "<img id='imageToggleDef"+
                    "' src='"+defImage+
                    "' style='max-width: "+maxWidth+"' />"
        );
        
        //Toggle images:
        function loadImage(imageId) {
            $imageContainer.stop(true).fadeOut('fast', function(){
                $(this).find('img').hide();
                $(this).find('img#'+imageId).show();
                $(this).fadeIn('fast');
            });
        }

    });
 /****************************IMAGE PICKER********************************/



 /****************************GOOGLE MAPS********************************/

       $(function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru,        
          scrollwheel:  false,
          mapTypeControl: false,
          zoomControl: false
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      });
            
/****************************GOOGLE MAPS********************************/             
                          