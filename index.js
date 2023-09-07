document.addEventListener("DOMContentLoaded", () => {
  init();
});

function init() {
  console.log("init");
  var articleContainer = document.querySelector(".articles__container");

  fetch(
    // "http://api.mediastack.com/v1/news?access_key=631d8dd7f6ea4629aa9d485d88909f9a",
    {
      redirect: "manual",
    }
  )
    .then(function (result) {
      return result.json();
    })
    .then(function (json) {
      console.log(json.data);
      json.data.forEach((news) => {
        var newArticle = document.createElement("article");
        newArticle.classList.add("news-card");
        if (news.image) {
            var newImg = document.createElement("img");
            newImg.classList.add("news-card__img");
            newImg.src = news.image;
            newArticle.appendChild(newImg);
        }
        else {
            newArticle.classList.add("no-img");
        }
        var newLink = document.createElement("a");
        newLink.href = news.url;
        var newTitle = document.createElement("h2");
        newTitle.classList.add("news-card__title");
        newTitle.innerText = news.title;
        newLink.appendChild(newTitle);
        newArticle.appendChild(newLink);
        var newDescription = document.createElement("p");
        newDescription.classList.add("news-card__description");
        newDescription.innerText = news.description;
        newArticle.appendChild(newDescription);
        articleContainer.appendChild(newArticle);
      });
    });
}

{/* <article class="news-card">
  <img
    src="https://www.ctvnews.ca/polopoly_fs/1.6453754.1687554013!/httpImage/image.jpg_gen/derivatives/landscape_300/image.jpg"
    alt=""
    class="news-card__img"
  />
  <a href="https://toronto.ctvnews.ca/north-york-could-see-one-of-the-closer-races-in-the-city-on-monday-here-is-what-is-on-voter-s-minds-1.6455008">
    <h2 class="news-card__title">
      North York could see one of the closer races in the city on Monday. Here
      is what is on voter’s minds
    </h2>
  </a>
  <p class="news-card__description">
    North York could see a closer race than other parts of the city on Monday.
  </p>
</article>; */}
