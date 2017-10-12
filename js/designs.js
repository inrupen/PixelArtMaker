// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
//event.preventDefault();
// getting inputs-height & weight
  let ht = $("#input_height").val();
    console.log("height:"+ht);
  let wt = $("#input_width").val();
    console.log("width:"+wt);


  //make grid
  for(let i=1;i<=ht;i++){       //height
     $("#pixel_canvas").append("<div class='row'></div>");
   for(let j=1;j<=wt;j++){       //width
     $(".row:last").append("<div class='rectangle'></div>");
   }
 }
}

  function colorGrid() {
  let colorP
  jQuery('#colorPicker').on('change', function() {
    colorP=jQuery(this).val();
});

//fill grid with color-with clickedon
$(".rectangle").click(function() {
    $( this ).css( "background-color",colorP );
  });

  //fill grid with color-with hoveron
  // $(".rectangle").hover(function() {
  //     $( this ).css( "background-color",colorP );
  //   });

}
