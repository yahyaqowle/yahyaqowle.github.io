$(document).ready(function() {
    $("#searchBtn").click(function(event) {
      event.preventDefault();
      var word = $("#word").val();
      if (word != "") {
        $.ajax({
          url: "search.php",
          method: "GET",
          data: { word: word },
          success: function(data) {
            $("#result").html(data);
          }
        });
      } else {
        $("#result").html("Please enter a word to search");
      }
    });
  });
  