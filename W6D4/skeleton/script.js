document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  const submitPlaces = (e) => {
      e.preventDefault();

      const placeName = document.querySelector(".favorite-input");
      const place = placeName.value;
      place.value = "";

      const listOfPlaces = document.querySelector("#sf-places");
      const newli = document.createElement("li");
      newli.textContent = place;
      listOfPlaces.appendChild(newli);
    };

  const placesSubmitButton = document.querySelector(".favorite-submit");
  placesSubmitButton.addEventListener("click", submitPlaces);



  // adding new photos

  // --- your code here!

// Don't Understand Solutions Approach. If photoFormDiv is all with the class photo-form-container
// then all of them will be photo-form-container hidden. Why bother with the else?
  const ShowPhotoForm = (e) => {
    const photoFormDiv = document.querySelector(".photo-form-container");
    if (photoFormDiv.className === "photo-form-container") {
      photoFormDiv.className = "photo-form-container hidden";
    } else {
      photoFormDiv.className = "photo-form-container";
    }
  };

  const photoFormShowButton = document.querySelector(".photo-show-button");
    photoFormShowButton.addEventListener("click", showPhotoForm);



    const handlePhotoSubmit = (e) => {
      e.preventDefault();

      //get the url for the photo
      const photoUrlInput = document.querySelector(".photo-url-input");
      const photoUrl = photoUrlInput.value;

      //clear the input field for next time
      photoUrlInput.value = "";

      //make the new img using the url that we got before
      const newImg = document.createElement("img");
      newImg.src = photoUrl;

      //make a new list item to add the img to
      const newPhotoLi = document.createElement("li");
      newPhotoLi.appendChild(newImg);

      //add the new list item to the end of the original list
      const dogPhotosList = document.querySelector(".dog-photos");
      dogPhotosList.appendChild(newPhotoLi);
    };

    //when someone clicks the submit button for photos call the things we just wrote
    const photoSubmitButton = document.querySelector(".photo-url-submit");
    photoSubmitButton.addEventListener("click", handlePhotoSubmit);
});





});
