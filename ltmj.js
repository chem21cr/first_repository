function onload01(){
    document.getElementById('file-sample').addEventListener('change', function (e) {
      // 1枚だけ表示する
      var file = e.target.files[0];
  
      // ファイルのブラウザ上でのURLを取得する
      var blobUrl = window.URL.createObjectURL(file);
  
      // img要素に表示
      
      const Unaju01 = new Image();
    Unaju01.src = "img01/maid_frame.png";
   

      const Unaju = new Image();
    Unaju.src = blobUrl;
    Unaju.onload = () =>{
      const canvas = document.querySelector("#image2");
      const ctx = canvas.getContext("2d");
      ctx.globalCompositeOperation = 'destination-over';
      ctx.drawImage(Unaju01, 0, 0, canvas.width, canvas.height);
      ctx.drawImage(Unaju, 50, 25, 100, 100);}
  });

   

}

window.onload = () => {
    onload01();
    // #image1に画像を描画
    drawImage1();
  
    
  
    // 「+」ボタンを押したら合成
    document.querySelector("#btn-concat").addEventListener("click", ()=>{
      concatCanvas("#concat", ["#image1", "#image2"]);
    });
  
    
   
  
  };
  
  /**
   * [onload] うな重の画像を描画
   */
  function drawImage1(){
    const Unaju = new Image();
    Unaju.src = "img01/maid_frame.png";
    Unaju.onload = () =>{
      const canvas = document.querySelector("#image1");
      const ctx = canvas.getContext("2d");
      ctx.drawImage(Unaju, 0, 0, canvas.width, canvas.height);
    }
  }
  
  
  
  
  
 
  
  /**
   * Canvasを画像として取得
   *
   * @param {string} id  対象canvasのid
   * @return {object}
   */
  function getImagefromCanvas(id){
    return new Promise((resolve, reject) => {
      const image = new Image();
      const ctx = document.querySelector(id).getContext("2d");
      image.onload = () => resolve(image);
      image.onerror = (e) => reject(e);
      image.src = ctx.canvas.toDataURL();
    });
  }
