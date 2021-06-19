var Canvas= new fabric.Canvas('myCanvas');
block_image_width="30";
block_image_height="30";
player_x="10";
player_y="10";
var player_object="";
function player_update()
fabric.Image.fromURL("player.png",function(IMG) {
{
    player_object=IMG;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set(
        {
            top:player_x,
            left:player_y
        });

        canvas.add(player_object);

    });
}
}
if(e.shiftKey && keyPressed=='80')
    {
        console.log("Shift and P are pressed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width")=block_image_width;
        document.getElementById("current_height")=block_image_height;
    }

    if(e.shiftKey && keyPressed=='77')
    {
        console.log("Shift and M are pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width")=block_image_width;
        document.getElementById("current_height")=block_image_height;
    }
if(keyPressed="38")
    {
        up();
        console.log("up");
    }
    if(keyPressed="37")
    {
        left();
        console.log("left");
    }
    if(keyPressed="39")
    {
        right();
        console.log("right");
    }
    if(keyPressed="40")
    {
        down();
        console.log("down");
    }
    
    if(keyPressed="87")
    {
        new_image('wall.jpg');
        console.log("w");
    }
    if(keyPressed="71")
    {
        new_image('ground.png');
        console.log("g");
    }
    if(keyPressed="76")
    {
        new_image('light_green.png');
        console.log("l");
    }
    if(keyPressed="84")
    {
        new_image('trunk.jpg');
        console.log("t");
    }
    if(keyPressed="82")
    {
        new_image('roof.jpg');
        console.log("r");
    }
    if(keyPressed="89")
    {
        new_image('yellow_wall.png');
        console.log("y");
    }
    if(keyPressed="68")
    {
        new_image('dark_green.png');
        console.log("d");
    }
    if(keyPressed="85")
    {
        new_image('different.png');
        console.log("u");
    }
    if(keyPressed="67")
    {
        new_image('cloud.jpg');
        console.log("c");
    }
}
if(keyPressed="70")
{
    new_image('ironman_face.png');
    console.log("u");
}
if(keyPressed="66")
{
    new_image('spiderman_body.png');
    console.log("c");
}
}  if(keyPressed="62")
{
    new_image('hulk_legs.png');
    console.log("u");
}
if(keyPressed="76")
{
    new_image('thor_right_hand.png');
    console.log("c");
}
}  if(keyPressed="72")
{
    new_image('captain_america_left_hand.png');
    console.log("u");
}
}