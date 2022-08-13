const itemBtn = document.querySelector("#item-btn");
itemBtn.addEventListener("click", () => {
  const inp = document.querySelector("#item-code");
  const apiCall = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/" + inp.value
      );
      addItem(response.data);
    } catch (error) {
      const itemList = document.querySelector(".item-list");
      itemList.innerHTML = error;
    }
  };

  apiCall();
});

const addItem = (data) => {
  const itemList = document.querySelector(".item-list");
  const img = document.createElement("img");
  img.src = data.image;
  const itemImage = document.querySelector(".item-box .item-image");

  if (itemImage.childNodes.length >= 1) {
    for (let i = 0; i < itemImage.childNodes.length; i++) {
      itemImage.removeChild(itemImage.children[i]);
    }
  }

  itemImage.appendChild(img);
  itemList.innerHTML = "";
  delete data.image;
  delete data.rating;
  delete data.id;
  for (id in data) {
    let li = document.createElement("li");
    li.innerHTML = id + ": " + data[id];
    itemList.append(li);
  }
};
