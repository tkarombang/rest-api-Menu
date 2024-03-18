function allMenu() {
  $.getJSON('data/menuKampungKoneng.json', function (result) {
    let menu = result.menu;
    let content = '';
    $.each(menu, function (i, data) {
      content += `<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg" src="img/1.png" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${data.nama}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${data.desc}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${data.price}</p>
        <a href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Order Now</a>
      </div>
    </div>`
    })
    $('#menu').html(content)
  })
}

allMenu();

$('.navLink').on('click', function () {
  $('.navLink').removeClass('active');
  $(this).addClass('active');

  let menuKategori = $(this).html();
  $('h1').html(menuKategori);

  if (menuKategori == 'All Menu') {
    allMenu()
    return;
  }

  $.getJSON('data/menuKampungKoneng.json', function (data) {
    let menu = data.menu;
    let content = '';

    $.each(menu, function (i, data) {
      if (data.jenis == menuKategori.toLowerCase()) {
        content += `<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src="img/1.png" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${data.nama}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${data.desc}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${data.price}</p>
            <a href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Order Now</a>
          </div>
        </div>`
      }
    })

    $('#menu').html(content);

  })
})