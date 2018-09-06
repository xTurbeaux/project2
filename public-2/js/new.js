$(document).ready(function() {
  var yearInput = $("#new-car-year-input");
  var bodystyleInput = $("#new-car-body-style");
  var autoTypeInput = $("#new-car-auto-type");
  var makeInput = $("#new-car-make-input");
  var modelInput = $("#new-car-model-input");
  var colorInput = $("#new-car-color-input");
  var mileageInput = $("#new-car-mileage-input");
  var newCarForm = $("#new-car-form");

  $(newCarForm).on("submit", handleFormSubmit);

  var url = window.location.search;
  var userId;
   // added this for posting
  var postId;
  var carId;

  var updating = false;

  // making the user id 1
  if(url.indexOf("?car_id=") !== -1) {
    carId = url.split("=")[1];
    getCarData(carId, "car");
  }
  else if(url.indexOf("?user_id=") !== -1) {
      userID = url.split("=")[1];
  }

  getUsers();

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!yearInput.val().trim() || !bodystyleInput.val().trim() || !autoTypeInput.val() || !makeInput.val().trim() || !modelInput.val().trim() || !colorInput.val().trim() || !mileageInput.val().trim()) {
      return;
    }

    var newPost = {
      title: titleInput
        .val()
        .trim(),
      body: bodystyleInput
        .val()
        .trim(),
      UserId: userSelect.val()
    };

    if (updating) {
      newPost.id = postId;
      updatePost(newPost);
    }
    else {
      submitPost(newPost);
    }
  }
  function submitPost(post) {
    $.post("/api/posts", post, function() {
      window.location.href = "/blog";
    });
  }
   function getPostData(id, type) {
     var queryUrl;
     switch (type) {
       case "post":
        queryUrl = "/api/users/" + id;
      break;
      default:
       return;
     }
     $.get(queryUrl, function(data) {
       if (data) {
         console.log(data.UserID || data.id);
         yearInput.val(data.new-car-year-input);
         bodystyleInput.val(data.new-car-body-style);
         autoTypeInput.val(data.new-car-auto-type);
         makeInput.val(data.new-car-make-input);
         modelImput.val(data.new-car-model-input);
         colorInput.val(data.new-car-color-input);
         mileageInput.val(data.new-car-mileage-input);
         newCarForm.val(data.new-car-form);
         userId = data.UserId || data.id;
         updating = true;
        }
     });
   }
   function getCars() {
    $.get("/api/cars", renderAuthorList);
  }
  // Function to either render a list of cars, or if there are none, direct the user to the page
  // to create a car listing first
  function renderCarIdList(data) {
    if (!data.length) {
      window.location.href = "/carId";
    }
    $(".hidden").removeClass("hidden");
    var rowsToAdd = [];
    for (var i = 0; i < data.length; i++) {
      rowsToAdd.push(createURow(data[i]));
    }
    authorSelect.empty();
    console.log(rowsToAdd);
    console.log(authorSelect);
    carIdSelect.append(rowsToAdd);
    carIdSelect.val(authorId);
  }

  
  function createCaridRow(carId) {
    var listOption = $("<option>");
    listOption.attr("value", car.id);
    listOption.text(car.id);
    return listOption;
  }

  
  function updatePost(post) {
    $.ajax({
      method: "PUT",
      url: "/api/posts",
      data: post
    })
      .then(function() {
        window.location.href = "/new";
      });
  }

  
});