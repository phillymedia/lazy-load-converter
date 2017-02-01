$("#convert").click(function() {

    $("#html-submit img").parent().addClass("fade-in-on-scroll");
    var textarea = $("#html-submit").val();
    var convertedText1 = textarea.replace(/</g, "&lt;");
        convertedText2 = convertedText1.replace(/>/g, "&gt;");
        convertedText3 = convertedText2.replace(/img src/g, "img class=\"lazy fade-in-on-scroll\" data-original");
    $("#step-2").show();
    console.log(convertedText3);
    $("#html-return").append(convertedText3);
});
//
// (".article__content div img").addClass("lazy");
//         $("img.lazy").each(function() {
//             $(this).attr("data-original",$(this).attr("src"));
//             $(this).removeAttr("src");
//         });
