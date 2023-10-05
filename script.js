

// var seeMore = document.querySelector('.see-more');
var shortCut = document.querySelector('#shortcut')
var contentShortCut = "";
var contentSlide = "";
var contentPoster = "";

$(shortcut_page).each(function (key, value) {
    contentShortCut = contentShortCut + '<a href="#" class="text-decoration-none text-dark">';
    contentShortCut = contentShortCut + ' <div class=" mt-2 mb-2 categorys">';
    contentShortCut = contentShortCut + '<div class="d-flex align-items-center category rounded py-2" style="width: 100%;">';
    contentShortCut = contentShortCut + '<img class="ms-2" src="' + value.hinh_anh + '" width="8%" alt="">';
    contentShortCut = contentShortCut + '<span class="ms-3"><b>' + value.tieu_de_trang + '</b></span>';
    contentShortCut = contentShortCut + '</div>';
    contentShortCut = contentShortCut + '</div>';
    contentShortCut = contentShortCut + '</a>';
});

$(slides).each(function (key, value) {
    contentSlide = contentSlide + '<swiper-slide>';
    contentSlide = contentSlide + ' <a href="#">';
    contentSlide = contentSlide + '<img src="' + value.hinh_anh + '"';
    contentSlide = contentSlide + 'width="100%" height="100%" class="rounded-3" alt="...">';
    contentSlide = contentSlide + '</a>';
    contentSlide = contentSlide + '</swiper-slide>';
});

$(data).each(function (key, value) {
    contentPoster = contentPoster + '<div class="card mb-4">';
    contentPoster = contentPoster + '<div class="card-body">';
    contentPoster = contentPoster + '<div class="row">';
    contentPoster = contentPoster + '<div class="col-md-8 ">';
    contentPoster = contentPoster + '<div class="d-flex">';
    contentPoster = contentPoster + '<a class="me-2" href="" style="width: 10%;">';
    contentPoster = contentPoster + ' <img class="border border-2 rounded-circle"';
    contentPoster = contentPoster + ' src="' + data.avatar + '"';
    contentPoster = contentPoster + 'alt="" width="100%">';
    contentPoster = contentPoster + '</a>';
    contentPoster = contentPoster + '<div class="title">';
    contentPoster = contentPoster + '<div class="title-head">';
    contentPoster = contentPoster + ' <b><a href="" class="text-decoration-none text-dark">' + data.firstname + " " + '';
    contentPoster = contentPoster + ' ' + data.lastname + '</a></b>';
    contentPoster = contentPoster + ' </div>';
    contentPoster = contentPoster + '<div class="title-date d-flex align-items-center">';
    contentPoster = contentPoster + '<p class="m-0 me-2"><a href=""';
    contentPoster = contentPoster + 'class="text-decoration-none text-dark">8';
    contentPoster = contentPoster + 'tháng 9 lúc 20:00</a></p>';
    contentPoster = contentPoster + ' <a href="" class="text-decoration-none text-dark">';
    contentPoster = contentPoster + '<svg fill="currentColor" viewBox="0 0 16 16" width="1em"';
    contentPoster = contentPoster + ' height="1em"';
    contentPoster = contentPoster + ' class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1kpxq89 xsmyaan"';
    contentPoster = contentPoster + ' title="Đã chia sẻ với Công khai">';
    contentPoster = contentPoster + '<title>Đã chia sẻ với Công khai</title>';
    contentPoster = contentPoster + ' <g fill-rule="evenodd" transform="translate(-448 -544)">';
    contentPoster = contentPoster + ' <g>';
    contentPoster = contentPoster + ' <path';
    contentPoster = contentPoster + ' d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434"';
    contentPoster = contentPoster + 'transform="translate(354 143.5)"></path>';
    contentPoster = contentPoster + '<path';
    contentPoster = contentPoster + ' d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096"';
    contentPoster = contentPoster + ' transform="translate(354 143.5)"></path>';
    contentPoster = contentPoster + ' <path fill-rule="nonzero"';
    contentPoster = contentPoster + 'd="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"';
    contentPoster = contentPoster + ' transform="translate(354 143.5)"></path>';
    contentPoster = contentPoster + ' </g>';
    contentPoster = contentPoster + ' </g>';
    contentPoster = contentPoster + '</svg>';
    contentPoster = contentPoster + '</a>';
    contentPoster = contentPoster + '</div>';
    contentPoster = contentPoster + '</div>';
    contentPoster = contentPoster + '</div>';
    contentPoster = contentPoster + '</div>';
    contentPoster = contentPoster + ' <div class="col-md-4 fs-3 d-flex align-items-center justify-content-end">';
    contentPoster = contentPoster + '<a href="" class="text-decoration-none text-dark">';
    contentPoster = contentPoster + '<svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"';
    contentPoster = contentPoster + 'class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1qx5ct2 xw4jnvo">';
    contentPoster = contentPoster + ' <g fill-rule="evenodd" transform="translate(-446 -350)">';
    contentPoster = contentPoster + ' <path';
    contentPoster = contentPoster + ' d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0">';
    contentPoster = contentPoster + ' </path>';
    contentPoster = contentPoster + '  </g>';
    contentPoster = contentPoster + ' </svg>';
    contentPoster = contentPoster + '</a>';
    contentPoster = contentPoster + '<a href="" class="text-decoration-none text-dark">';
    contentPoster = contentPoster + ' <i class="fa-solid fa-xmark ms-3"></i>';
    contentPoster = contentPoster + ' </a>';
    contentPoster = contentPoster + ' </div>';
    contentPoster = contentPoster + '</div>';
    contentPoster = contentPoster + '<div class="row">';
    contentPoster = contentPoster + '<div class="descripton">';
    contentPoster = contentPoster + '<p class="m-0">set tn sm namec</p>';
    contentPoster = contentPoster + '</div>';
    contentPoster = contentPoster + ' <img src="https://fptshop.com.vn/landing-back-to-school/des/images/game-pc.png?v=011020231750"';
    contentPoster = contentPoster + 'alt="" width="100%">';
    contentPoster = contentPoster + '</div>';
    contentPoster = contentPoster + '<div class="row mt-3">';
    contentPoster = contentPoster + ' <div class="col-md-6">';
    contentPoster = contentPoster + ' <a href=""';
    contentPoster = contentPoster + ' class="text-decoration-none text-dark d-flex align-items-center fs-5">';
    contentPoster = contentPoster + '<img src="data:image/svg+xml,%3Csvg fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3E%3Cpath d=\'M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z\' fill=\'url(%23paint0_linear_15251_63610)\'/%3E%3Cpath d=\'M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z\' fill=\'url(%23paint1_radial_15251_63610)\'/%3E%3Cpath d=\'M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z\' fill=\'url(%23paint2_radial_15251_63610)\' fill-opacity=\'.5\'/%3E%3Cpath d=\'M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.9920 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z\' fill=\'%23fff\'/%3E%3Cdefs%3E%3CradialGradient id=\'paint1_radial_15251_63610\' cx=\'0\' cy=\'0\' r=\'1\' gradientUnits=\'userSpaceOnUse\' gradientTransform=\'rotate(90 .0005 8) scale(7.99958)\'%3E%3Cstop offset=\'.5618\' stop-color=\'%230866FF\' stop-opacity=\'0\'/%3E%3Cstop offset=\'1\' stop-color=\'%230866FF\' stop-opacity=\'.1\'/%3E%3C/radialGradient%3E%3CradialGradient id=\'paint2_radial_15251_63610\' cx=\'0\' cy=\'0\' r=\'1\' gradientUnits=\'user';
    contentPoster = contentPoster + 'alt="" width="7%">';
    contentPoster = contentPoster + ' <p class="m-0 ms-2">74K</p>';
    contentPoster = contentPoster + '  </a>';
    contentPoster = contentPoster + '</div>';
    contentPoster = contentPoster + ' <div class="col-md-6 text-end">';
    contentPoster = contentPoster + '  <div class="row">';
    contentPoster = contentPoster + '<div class="col-md-12 d-flex align-items-center justify-content-end">';
    contentPoster = contentPoster + ' <div class="d-flex align-items-center me-4 fs-5">';
    contentPoster = contentPoster + ' <p class="m-0 me-2">5,9K</p>';
    contentPoster = contentPoster + '<i class="fa-solid fa-comment"></i>';
    contentPoster = contentPoster + '</div>';
    contentPoster = contentPoster + ' <div class="d-flex align-items-center fs-5">';
    contentPoster = contentPoster + ' <p class="m-0 me-2">2,9K</p>';
    contentPoster = contentPoster + '<i class="fa-solid fa-share"></i>';
    contentPoster = contentPoster + '</div>';
    contentPoster = contentPoster + ' </div>';
    contentPoster = contentPoster + '</div>';
    contentPoster = contentPoster + '</div>';
    contentPoster = contentPoster + '</div>';
    contentPoster = contentPoster + ' <hr>';
    contentPoster = contentPoster + '<div class="row">';
    contentPoster = contentPoster + '<div class="col-md-4">';
    contentPoster = contentPoster + '<a href=""';
    contentPoster = contentPoster + ' class="text-decoration-none text-dark d-flex align-items-center justify-content-center fs-5">';
    contentPoster = contentPoster + ' <i class="fa-regular fa-thumbs-up"></i>';
    contentPoster = contentPoster + ' <p class="m-0 ms-2">74K</p>';
    contentPoster = contentPoster + '</a>';
    contentPoster = contentPoster + ' </div>';
    contentPoster = contentPoster + '  <div class="col-md-4">';
    contentPoster = contentPoster + '<a href=""';
    contentPoster = contentPoster + 'class="text-decoration-none text-dark d-flex align-items-center justify-content-center fs-5">';
    contentPoster = contentPoster + '<i class="fa-regular fa-comment"></i>';
    contentPoster = contentPoster + ' <p class="m-0 ms-2">Bình luận</p>';
    contentPoster = contentPoster + ' </a>';
    contentPoster = contentPoster + ' </div>';
    contentPoster = contentPoster + ' <div class="col-md-4">';
    contentPoster = contentPoster + '  <a href=""';
    contentPoster = contentPoster + ' class="text-decoration-none text-dark d-flex align-items-center justify-content-center fs-5">';
    contentPoster = contentPoster + ' <i class="fa-solid fa-share"></i>';
    contentPoster = contentPoster + '  <p class="m-0 ms-2">Chia sẽ</p>';
    contentPoster = contentPoster + '  </a>';
    contentPoster = contentPoster + ' </div>';
    contentPoster = contentPoster + ' </div>';
    contentPoster = contentPoster + ' </div>';
    contentPoster = contentPoster + ' </div>';

});




$('#shortcut').html(contentShortCut);
$('.mySwipe').html(contentSlide);
$('.posterContent').html(contentPoster);

