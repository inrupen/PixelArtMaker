function makeGrid() {

// getting inputs-height & weight
  let height = $("#input_height").val();

  let width = $("#input_width").val();

  //clear the canvas before creating new grid-layout
  $("#pixel_canvas").empty();
  if(height>48 || width>48){
    alert("Select value from 1 to 48");
  }
  else{
    //make grid
    for(let i=1;i<=height;i++){       //height
      $("#pixel_canvas").append("<div class='row'> </div>");
      for(let j=1;j<=width;j++){       //width
        $(".row:last").append("<div class='rectangle'> </div>");
      }
    }
  }
}


// const table = document.getElementById('table_id');
// for (let i = 0; i < 10; i++) {
//     // Inserts 10 rows into the table
//     const row = table.insertRow(i);
//     for (let j = 0; j < 10; j++) {
//         // Inserts 10 cells into each of the rows
//         const cell = row.insertCell(j);
//     }
// }


  function colorGrid() {
  const colorP = document.getElementById("colorPicker");  //get color for grid

  //fill grid with color-with clickedon
  $(".rectangle").click(function() {
    $( this ).css( "background-color",colorP.value);
  });

  //fill grid with color-with hoveron
  // $(".rectangle").hover(function() {
  //     $( this ).css( "background-color",colorP );
  //   });

}
