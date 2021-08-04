//function spawnObjects(){
    function cars(){
        if(frameCount%100===0){
          
          
        var car1=createSprite(0,displayHeight/2+285,10,10);
        
        car1.velocityX=10;
        car1.scale=0.45
        var rand2= Math.round(random(1,2))
        switch(rand2){
          case 1: car1.addImage(carImg);
            break;
            case 2: car1.addImage(car2Img);
            car1.scale=0.75
            break;
            
            default: break;
        }
        
        car1.debug= true;
        car1.setCollider("rectangle", 0, 0, car1.width, car1.height);
        car1Group.add(car1);
        
      }
    }
      
      function cars2(){
        if(frameCount%250===0){
            
        var car2=createSprite(displayWidth/2+500,displayHeight/2+65,10,10);
        
        car2.velocityX=-10;
        car2.scale=0.45
        var rand3= Math.round(random(1,2))
        switch(rand3){
          case 1: car2.addImage(car34);
          car2.scale=0.65;
            break;
            case 2: car2.addImage(car35);
            car2.scale=0.45;
            break;
            
            default: break;
        }
        car2.debug=true;
        car2.setCollider("rectangle", 0,0, car2.width, car2.height);
       car2Group.add(car2);
        
      }
    }
      
      
      function cycles(){
        if(frameCount%150===0){
            
       var cycle1= createSprite(displayWidth/2+500, displayHeight/2+65, 50,50);
      
       cycle1.velocityX= -10;
       cycle1.scale= 0.6;
       cycle1.addImage(cycleImg);
       cycleGroup.add(cycle1);
       cycle1.debug=true;
       cycle1.setCollider("rectangle", 0,0, cycle1.width,cycle1.height )
      }
    }
      
      function buses(){
        if(frameCount%650===0){
            
        var bus1 = createSprite(displayWidth/2+1050, displayHeight/2+65, 50, 50);
        bus1.velocityX= -10;
        bus1.addImage(busImg);
        busesGroup.add(bus1);
        bus1.scale=0.57;
        bus1.debug= true;
        bus1.setCollider("rectangle", 0,0, bus1.width, bus1.height);
      }
    }
      
      function logs(){
        if(frameCount%100===0){
            
        log1= createSprite(displayWidth/10, Math.round(random(displayHeight/9+60,displayHeight/2-90 )), 50,50);
        log1.addImage(logImg);
        log1.scale=0.35;
        log1.velocityX= 4;
        var rand4= Math.round(random(1,2))
        switch(rand4){
          case 1: log1.addImage(logImg);
          log1.scale=0.35;
            break;
            case 2: log1.addImage(log2Img);
            log1.scale=0.35;
            break;
            
            default: break;
        }
        log1.debug=true;
        log1.setCollider("rectangle", 0,0, log1.width+50, log1.height+50)
      }
    }
//}