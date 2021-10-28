

function onload01(){
    document.getElementById('file-sample').addEventListener('change', function (e) {
      
      var file = e.target.files[0];
  
      
      var blobUrl = window.URL.createObjectURL(file);  
      const midfk01 = new Image();
      midfk01.src = "img01/maid_frame.png";
      const akaza = new Image();
      akaza.src = blobUrl;
      akaza.onload = () =>{
        
        var xla01 = document.querySelector("input#x-latitude").value
        var ylon01 = document.querySelector("input#y-longitude").value
        var wid02 = document.querySelector("input#wid01").value
        var hei02 = document.querySelector("input#hei01").value
        var xla11 = Number(xla01)
        var ylon11 = Number(ylon01)
        var wid12 = Number(wid02)
        var hei12 = Number(hei02)
      const canvas = document.querySelector("#image2");
      const ctx = canvas.getContext("2d");
      
      midfk01.onload = function(){
      ctx.drawImage(midfk01, 0, 0, 200, 300);
      ctx.globalCompositeOperation = 'destination-over';
    }
      
      ctx.drawImage(akaza, xla11, ylon11, wid12, hei12);
    }
  });

   

}

window.onload = () => {
    onload01();
    
    drawImage1();
  
    
  
    
    
    
  
    
   
  
  };
  
  
  function drawImage1(){
    const akaza = new Image();
    akaza.src = "img01/maid_frame.png";
    akaza.onload = () =>{
      const canvas = document.querySelector("#image1");
      const ctx = canvas.getContext("2d");
      ctx.drawImage(akaza, 0, 0, canvas.width, canvas.height);
    }
  }
  
  
  
  
  
 
  
  
  function getImagefromCanvas(id){
    return new Promise((resolve, reject) => {
      const image = new Image();
      const ctx = document.querySelector(id).getContext("2d");
      image.onload = () => resolve(image);
      image.onerror = (e) => reject(e);
      image.src = ctx.canvas.toDataURL();
    });
  }



//50,25,100,100
