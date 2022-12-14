$(document).ready(function () {
  // ARTICLE
  // ini ngambil img dari folder 'img/'
  const carouselItems = [
    `<div>
      <img src="img/gambar1.jpg" alt="gambar" />
    </div>`,
    `<div>
      <img src="img/gambar2.jpg" alt="gambar" />
    </div>`,
    `<div>
      <img src="img/gambar3.jpg" alt="gambar" />
    </div>`,
    `<div>
      <img src="img/gambar4.jpg" alt="gambar" />
    </div>`,
    `<div>
      <img src="img/gambar5.jpg" alt="gambar" />
    </div>`,
  ]
  // append carousel items
  for (let i = 0; i < carouselItems.length; i++) {
    $("article .carousel").append(carouselItems[i])
  }

  // ADD Video
  const videoURL = "https://www.youtube.com/embed/KPooFWKqeuM"
  const option = `autoplay=1` // option buat youtube playernya, isi atau kosong ''. Ref: https://developers.google.com/youtube/youtube_player_demo
  $("#video-player").attr("src", `${videoURL}${option ? `?${option}` : ""}`)

  // set text berjalan di footer
  $(".marquee").marquee({
    //duration in milliseconds of the marquee
    duration: 15000,
  })

  // set config untuk carousel
  $(".carousel").slick({
    accessibility: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  })

  // ASIDE
  const sideContent = {
    title: "Title",
    items: ["<div>dzuhur</div>", "<div>ashar</div>"],
  }
  // append aside title
  $("aside").append(`
    <h1 class="title">${sideContent.title}</h1>
  `)
  // append aside contents
  for (let i = 0; i < sideContent.items.length; i++) {
    $("aside").append(sideContent.items[i])
  }
})
