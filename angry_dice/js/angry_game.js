/**
 * Created by Chelsea on 7/8/16.
 */

var $image = ('#img');

var $rollButton = ('#rollButton');
var $holdButton = ('#holdButton');
var $roundNum = ('h1');
var currentValue = 1;

console.log("tessttt");

function changeImg(currentValue){
    if ($image.className !== currentValue){
        console.log("yo");
        console.log($image.className);
        //$image.push("../../static/imgs/die" + currentValue + ".png");
    }
}

$( $rollButton ).click(
    function dice() {
    currentValue = Math.floor(Math.random() * 6) + 1;
    console.log(currentValue);
    changeImg(currentValue)
}
);

//console.log($image);
//function changeImg(){
//    if ($image.className !== currentValue){
//        $image.push("../../static/imgs/die" + currentValue + ".png");
//    }
//}