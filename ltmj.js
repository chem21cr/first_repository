function onload01(){
    document.getElementById('file-sample').addEventListener('change', function (e) {
      
      var file = e.target.files[0];
  
      
      var blobUrl = window.URL.createObjectURL(file);
  
      
      
      const midfk01 = new Image();
    midfk01.src = "img01/maid_frame.png";
   

      const akaza = new Image();
    akaza.src = blobUrl;
    akaza.onload = () =>{
      const canvas = document.querySelector("#image2");
      const ctx = canvas.getContext("2d");
      ctx.globalCompositeOperation = 'destination-over';
      ctx.drawImage(midfk01, 0, 0, canvas.width, canvas.height);
      ctx.drawImage(akaza, 50, 25, 100, 100);}
  });

   

}

window.onload = () => {
    onload01();
    
    drawImage1();
  
    
  
    
    document.querySelector("#btn-concat").addEventListener("click", ()=>{
      concatCanvas("#concat", ["#image1", "#image2"]);
    });
  
    
   
  
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

