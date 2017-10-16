const colorP = document.getElementById("colorPicker");  //get color for grid

//event listener on "submit"
const sizePicker = document.querySelector("#sizePicker");
sizePicker.addEventListener("submit", function(e) {
  e.preventDefault();
  makeGrid();
});


function makeGrid() {

  //getting inputs-height & weight
  let height = $("#input_height").val();
  let width = $("#input_width").val();

  //clear the canvas before creating new grid-layout
  $("#pixel_canvas").empty();

  for(let i=1;i<=height;i++){       //height
    $("#pixel_canvas").append("<div class='row'> </div>");
    for(let j=1;j<=width;j++){       //width
      $(".row:last").append("<div class='rectangle'> </div>");
    }
  }

  //fill grid with color-with clickedon
  $(".rectangle").click(function() {
    $( this ).css( "background-color",colorP.value);
  });
}
