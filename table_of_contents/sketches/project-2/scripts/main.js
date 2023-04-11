function displayRandomImages() 
{  
  //array of images with image location, height, and width
   var imageArray = [
   { 
     //address URL of the image
     src: "https://live.staticflickr.com/65535/52808789342_231cce1f18_b.jpg",
     //size for the image to be display on webpage
     width: "600",  
     height: "800"
   }, 
   {
     src: "https://live.staticflickr.com/65535/52809553039_a48711a0d1_b.jpg",
     width: "600",  
     height: "800"
   }, 
   {
     src: "https://live.staticflickr.com/65535/52808789372_52c0f8f9b4_b.jpg",
     width: "600",  
     height: "800"
   },
   {
     src: "https://live.staticflickr.com/65535/52809758040_beec525c7e_b.jpg",
     width: "944",  
     height: "708"
    },
    {
      src: "https://live.staticflickr.com/65535/52809553184_b926445ae6_b.jpg",
      width: "600",  
      height: "800"
    },
    {
      src: "https://live.staticflickr.com/65535/52808789432_93e8e9f84c_b.jpg",
      width: "600",  
      height: "800"
    },
    {
      src: "https://live.staticflickr.com/65535/52809802028_2032c5fd2b_b.jpg",
      width: "600",  
      height: "800"
    },
    {
      src: "https://live.staticflickr.com/65535/52808789457_91a33140c5_b.jpg",
      width: "600",  
      height: "800"
    },
    {
      src: "https://live.staticflickr.com/65535/52808789487_ee790854d8_b.jpg",
      width: "944",  
      height: "708"
    },
    {
      src: "https://live.staticflickr.com/65535/52809802103_2268e18463_b.jpg",
      width: "944",  
      height: "708"
    },
    {
      src: "https://live.staticflickr.com/65535/52809351251_057848bd7d_b.jpg",
      width: "600",  
      height: "800"
    },
    {
      src: "https://live.staticflickr.com/65535/52808789552_3f11b448f8_b.jpg",
      width: "600",  
      height: "800"
    },
    {
      src: "https://live.staticflickr.com/65535/52809553369_90d51d962e_c.jpg",
      width: "600",  
      height: "800"
    },
    {
      src: "https://live.staticflickr.com/65535/52809553394_d7ac8c7093_c.jpg",
      width: "600",  
      height: "800"
    },
    {
      src: "https://live.staticflickr.com/65535/52809351111_59170ffe73_c.jpg",
      width: "600",  
      height: "800"
     },
     
  ];
    
    //find the length of the array of images
    var arrayLength = imageArray.length;
    var newArray = [];
    for (var i = 0; i < arrayLength; i++) {
        newArray[i] = new Image();
        newArray[i].src = imageArray[i].src;
        newArray[i].width = imageArray[i].width;
        newArray[i].height = imageArray[i].height;
    }
   
  // create random image number
  function getRandomNum(min, max) 
  {
      // generate and return a random number for the image to be displayed 
      imgNo = Math.floor(Math.random() * (max - min + 1)) + min;
      return newArray[imgNo];
  }  

  // 0 is first image and (preBuffer.length - 1) is last image of the array
  var newImage = getRandomNum(0, newArray.length - 1);
 
  // remove the previous images
  var images = document.getElementsByTagName('img');
  var l = images.length;
  for (var p = 0; p < l; p++) {
     images[0].parentNode.removeChild(images[0]);
  }
  // display the new random image  
  document.body.appendChild(newImage);
  
  
}




