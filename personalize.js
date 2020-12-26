
        var large = 50;
        var medium = 32;
        var small = 20;
        var simpleFontSize = medium;
  
        //Create Canvas
        var stage = new Konva.Stage({
              container: 'canvas',
              width: 530,
              height: 460,
          });
  
        var layer = new Konva.Layer();
  
  
        // Load iamges
        function loadImages(sources, callback) {
          var images = {};
          var loadedImages = 0;
          var numImages = 0;
          // get num of sources
          for (var src in sources) {
            numImages++;
          }
          for (var src in sources) {
            images[src] = new Image();
            images[src].onload = function () {
              if (++loadedImages >= numImages) {
                callback(images);
              }
            };
            images[src].src = sources[src];
          }
        }
  
        //Draw with images inside
        function draw(images) {
  
          var wallet = new Konva.Rect({
              x: 20,
              y: 20,
              width: 500,
              height: 430,
              fillPatternImage: images.wallet_front,
              fillPatternOffset: { x: 0, y: 0 },
              stroke: 'black',
              strokeWidth: 0,
            });
  
            //Starting layer
            layer.add(wallet);
            layer.add(complexText);
            //layer.add(complexText);
  
          // add the layer to the stage
          stage.add(layer);
        }
  
        //Create list of images
        var sources = {
          wallet_front: '/img/wallet_front.jpg',
            //   star: '/assets/star.png',
        };
  
        //Load images onto the canvas
        loadImages(sources, function (images) {
          draw(images);
        });
  
        //////SIMPLE TEXT////////////////////////////
        //Simple Text Shape
        var simpleText = new Konva.Text({
          //x: stage.width() / 2,
          x: 200/2,
          y: 400/2,
          text: 'personalize',
          fontSize: simpleFontSize,
          fontFamily: 'Rockwell',
          fill: 'rgba(46,22,17,0.45)',
          draggable: true,
          dragBoundFunc: function (pos) {
              let xMax = 500;
              let yMax = 400;
            var newX = pos.x < 50 ? 50 : (pos.x > xMax ? xMax : pos.x);
            var newY = pos.y < 50 ? 50 : (pos.y > yMax ? yMax : pos.y);
              return {
                  x: newX,
                  y: newY,                
              }
          },
        });
  
        let simpleToggle = true;
        function addSimpleText(){
          if(simpleToggle === true){
            simpleToggle = false;
            simpleText.remove();
          } else {
            simpleToggle = true;
            layer.add(simpleText);
            complexText.remove();
            complexToggle = false;
          }
        layer.draw();
        }
  
        function removeSimpleText(){
          simpleText.remove();
          layer.draw();
        }
  
        function updateSimpleText(){
          simpleText.setAttr('text', document.querySelector('#simpleTextInput').value);
          layer.draw();
        }
    
        // // font Type
        // var fontStyleChange = document.querySelector('#textFontOptions');
        // fontStyleChange.addEventListener("change", function() {
        //   simpleText.setAttr('fontFamily', this.value);
        //   layer.draw();
        // })
  
  
        // since this text is inside of a defined area, we can center it using
        // align: 'center'
        var complexText = new Konva.Text({
            x: 15,
            y: 160,
            text:
              "I only want to love you\n twice in my lifetime.\n That is now and forever.",
            fontSize: simpleFontSize,
            fontFamily: 'Rockwell',
            fill: 'rgba(37, 25, 4,0.6)',
            width: 500,
            padding: 20,
            align: 'center',
            draggable: true,
            dragBoundFunc: function (pos) {
                let xMax = stage.width()-200;
                let yMax = stage.height()-100;
              var newX = pos.x < 0 ? 0 : (pos.x > xMax ? xMax : pos.x);
              var newY = pos.y < 0 ? 0 : (pos.y > yMax ? yMax : pos.y);
                return {
                    x: newX,
                    y: newY,                
                }
            }
        });
  
        let complexToggle = false;
        function addComplexText(){
            if(complexToggle === true){
                complexText.remove();
                complexToggle = false;
            } else {
                layer.add(complexText);
                complexToggle = true;
                simpleToggle = false;
                simpleText.remove();     
            }
          layer.draw();
        }
  
        function complexMessageChange(){
          complexText.setAttr('text', document.querySelector('#complexMessage').value);
          layer.draw();
        }
  
         // function from https://stackoverflow.com/a/15832662/512042
        function downloadURI(uri, name) {
          var link = document.createElement('a');
          link.download = name;
          link.href = uri;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          delete link;
        }
  
        document.getElementById('save').addEventListener(
          'click', function () {
            var dataURL = stage.toDataURL({ pixelRatio: 1 });
            downloadURI(dataURL, 'caglar-personalized-wallet.png');
          },false);

        function sizeSelect(option) {
            let removeSelected = document.querySelectorAll('.size > .selected');
            // console.log(option.htmlFor);
            removeSelected.forEach(e =>{
                e.classList.remove('selected');
            })
            option.classList.add('selected');

            // simpleFontSize = option.htmlFor;
            simpleText.setAttr('fontSize', window[option.htmlFor]);
            complexText.setAttr('fontSize', window[option.htmlFor]);

            layer.draw();
        }

        function fontSelect(option) {
            let removeSelected = document.querySelectorAll('.font > .selected');
            removeSelected.forEach(e =>{
                e.classList.remove('selected');
            })
            option.classList.add('selected');

            simpleText.setAttr('fontFamily', option.htmlFor);
            complexText.setAttr('fontFamily', option.htmlFor);

          layer.draw();
        }