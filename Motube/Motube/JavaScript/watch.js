$(document).ready(function () {
    $(".show-more-less").click(function () {
        $(".video-main-p").toggleClass("video-p")
        $('.dots').toggleClass('hide')
        // let buttonText;

        // if ($(this).text() === 'Show Less') {
        //     buttonText = 'Show More';
        // } else {
        //     buttonText = 'Show Less';
        // }
        // $(this).text(buttonText);
        const buttonText = $(this).text() === 'Show Less' ? 'Show More' : 'Show Less';
        $(this).text(buttonText);
    });
    $(".reply").click(function () { 
        $(this).parents("div.row").next("div.card-inner").toggle()
     })
     $(".like").click(function () { 
        $(this).toggleClass('btn-actived')
      })
});
