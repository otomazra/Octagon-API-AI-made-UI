async function receiveImage(id) {
  let link = "/img/" + id;
  const response = await fetch(link);
  const data = await response.json();
  return data.imgUrl;
}

(async () => {
  let divObject = document.querySelectorAll(".category");
  if (divObject.length > 0) {

    divObject.forEach((object) => {
      let champ = object.querySelector(".champ");
      let id = object.getAttribute("data-id");
      object.querySelector(".category-name").addEventListener("click", () => {
        window.location.href = `/division/${id}`;
      });
      // champ.querySelector("h4").addEventListener("click", () => {
      //   window.location.href = `/fighter/${id}`; 
      // });
      // champ.querySelector("img").addEventListener("click", () => {
      //   window.location.href = `/fighter/${id}`;
      // });
    });

    let champ = document.querySelectorAll(".champ");

    champ.forEach(async (object) => {
      let id = object.getAttribute("data-id");
      let imageUrl = await receiveImage(id);
      object.querySelector(".champImage").setAttribute("src", imageUrl);
    });
  }
})();

(async () => {
  let divItem = document.querySelector(".champ-division");
  if (divItem) {
    let itemId = divItem.getAttribute("data-id");

    // divItem.querySelector("h4").addEventListener("click", () => {
    //   window.location.href = `/fighter/${itemId}`;
    // });
    // divItem.querySelector("img").addEventListener("click", () => {
    //   window.location.href = `/fighter/${itemId}`;
    // });
    let imgUrl = await receiveImage(itemId);
    divItem.querySelector("img").setAttribute("src", imgUrl);
  }
})();

(async () => {
  let idArray = document.querySelectorAll(".fighter-division");
  idArray.forEach(async (id) => {
    let image = id.querySelector("img");
    let itemId = image.getAttribute("data-id");
    // image.addEventListener("click", () => {
    //   window.location.href = `/fighter/${itemId}`;
    // });
    let imageUrl = await receiveImage(itemId);
    image.setAttribute("src", imageUrl);
  });
})();

(async () => {
  let categoryArray = document.querySelectorAll(".category-division-list");
  categoryArray.forEach(async (category) => {
    let id = category.getAttribute("data-id");
    category.querySelector(".division-title").addEventListener("click", () => {
      window.location.href = `/division/${id}`;
    });
    let champDiv = category.querySelector(".champ-division-list");
    let champId = champDiv.getAttribute("data-id");
    // champDiv.querySelector(".champ-title").addEventListener("click", () => {
    //   window.location.href = `/fighter/${champId}`;
    // });
    // champDiv.querySelector("img").addEventListener("click", () => {
    //   window.location.href = `/fighter/${champId}`;
    // });
    let imageUrl = await receiveImage(champId);
    champDiv.querySelector("img").setAttribute("src", imageUrl);
  });
})();
