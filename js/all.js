// 隱藏
// $(document).ready(function () {
//     $('h1').hide();
// });

//class用法
// $(document).ready(function () {
//     $('.title').hide();
// });

// id用法
// $(document).ready(function () {
//     $('#title').hide();
// });

// $(document).ready(function () {
//     $('.item-link').click(function(e){
//         e.preventDefault();
//         $('.item-title').addClass('active'); // 注意：active 不用加上「.」，active為自己另設的style
//     })  //點擊後所有item-title都會變。另外e.preventDefault()功用為防止產生預設行為，此地方為防止因click>a後，網址最後面多出#。

    // $('.item-link').click(function(e){
    //     e.preventDefault();
    //     $(this).siblings().addClass('active'); // 注意：active 不用加上「.」
    // })  //點擊後「同層」項會變化而已

//     $('.item').click(function(e){
//         e.preventDefault();
//         $(this).find('a').addClass('active'); // 注意：active 不用加上「.」
//     })  //點擊後「這個.item層內」的「所有a」會變化而已
// });

$(document).ready(function () {
    $('.top-btn').click(function(e){
        $('html').animate({scrollTop:0},200);
    })

    $('.btn-plan').click(function(e){
        e.preventDefault();
        var str = $(this).find('p').text();
        $("p.text-change-subscribe").text(str)

        $(this).addClass('plan-active')
        $(this).parent().siblings().find('.btn-plan').removeClass('plan-active')
    })

    $('.charge1').click(function(e){
        e.preventDefault();
        $("p.text-change-basic-charge").text('600')
        $("p.text-change-normal-charge").text('1600')
    })
    $('.charge2').click(function(e){
        e.preventDefault();
        $("p.text-change-basic-charge").text('875')
        $("p.text-change-normal-charge").text('2300')
    })
    $('.charge3').click(function(e){
        e.preventDefault();
        $("p.text-change-basic-charge").text('1150')
        $("p.text-change-normal-charge").text('2950')
    })
    $('.charge4').click(function(e){
        e.preventDefault();
        $("p.text-change-basic-charge").text('1300')
        $("p.text-change-normal-charge").text('3450')
    })
    $('.charge5').click(function(e){
        e.preventDefault();
        $("p.text-change-basic-charge").text('1500')
        $("p.text-change-normal-charge").text('3000')
    })
});