/* Javascript for MyXBlock. */
function MyXBlock(runtime, element) {
  function updateVotes(votes) {
    $(".upvote .count", element).text(votes.up);
    $(".downvote .count", element).text(votes.down);
  }

  var handlerUrl = runtime.handlerUrl(element, "vote");

  $(".upvote", element).click(function (eventObject) {
    $.ajax({
      type: "POST",
      url: handlerUrl,
      data: JSON.stringify({ voteType: "up" }),
      success: updateVotes,
    });
  });

  $(".downvote", element).click(function (eventObject) {
    $.ajax({
      type: "POST",
      url: handlerUrl,
      data: JSON.stringify({ voteType: "down" }),
      success: updateVotes,
    });
  });

  $(".call-api-button", element).click(function (eventObject) {
    // Example of calling an external API (you can replace the URL with your actual API endpoint)
    $.ajax({
      type: "GET", // Change to POST if the API requires POST requests
      url: "https://catfact.ninja/fact", // External API URL
      success: function (response) {
        // Display the result from the external API (this assumes the response has a `data` field)
        $(".api-result", element).text("API Result: " + JSON.stringify(response)); // Adjust based on API response
      },
      error: function () {
        $(".api-result", element).text("Error calling external API.");
      },
    });
  });

  return {};
}
