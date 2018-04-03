$(document).ready(function() {
  
  $("#search").click(function() {
    var searchBar = $("#searchBar").val();

    var api =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      searchBar +
      "&format=json&callback=?";

    $.ajax({
      type: "GET",
      url: api,
      async: false,
      dataType: "json",
      success: function(data) {
        $("#results").html(" ");
        for (i = 0; i < data[1].length; i++) {
          $("#results").prepend(
            "<li><a href=" +
              data[3][i] +
              ">" +
              data[1][i] +
              "</a><p>" +
              data[2][i] +
              "</p></li>"
          );
        
        }
      },

      error: function(errorMessage) {
        alert("Error");
      }
     
    });
  });
});
