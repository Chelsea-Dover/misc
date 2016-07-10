/**
 * Created by Chelsea on 7/8/16.
 */

var $image = (' #imgDiv ');

var $imgClass = document.getElementById("imgDiv").className;
var $rollButton = ('#rollButton');
var $holdButton = ('#holdButton');
var $roundNum = ('h1');
var currentValue = 1;

console.log("tessttt");

function changeImg(currentValue){
    if (parseInt($imgClass) !== currentValue){
        console.log(currentValue);
        console.log(parseInt($imgClass));
        $(' #realImg ').replaceWith('<img id="realImg" src=' + '../../static/imgs/die' + currentValue + '.png' + '>');
        document.getElementById("imgDiv").className = currentValue;
    }else{
        console.log("_________");
        console.log(currentValue);
        console.log(parseInt($imgClass));
        console.log("---------");
    }
}

$( $rollButton ).click(
    function dice() {
    currentValue = Math.floor(Math.random() * 6) + 1;
    //console.log(currentValue);
    changeImg(currentValue)
}
);

//console.log($image);
//function changeImg(){
//    if ($image.className !== currentValue){
//        $image.push("../../static/imgs/die" + currentValue + ".png");
//    }
//}