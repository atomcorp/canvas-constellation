// http://output.jsbin.com/usomi4/23/edit?html,js,output

var centerX = 400,
    centerY = 400,
    radius  = 10,
    width   = 400

function draw()
    {
      var ctx = document.getElementById( 'canvas' ).getContext( '2d' );
      var angle;
      
      for ( var i = 0; i < 180; i+=15 )
      {
        angle = 2.1 + (i * Math.PI / 90);
        ctx.beginPath();
        ctx.moveTo(
          centerX + Math.sin( angle ) * radius,
          centerY + Math.cos( angle ) * radius
        );
        ctx.lineTo(
          centerX + Math.sin( angle ) * (radius + width),
          centerY + Math.cos( angle ) * (radius + width)
        );
        ctx.closePath();
        ctx.stroke();
      }
    }