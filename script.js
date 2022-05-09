// const URL = "https://eldenring.fanapis.com/api/items?limit=2";

// const $weaponImage = $('image');
// const $weaponName = $('title');
// const $form = $('form');
// const $input = $('input[type="text"]');



// function handleGetData (event) {
//     event.preventDefault();
//     const userInput = $input.val();
//     $.ajax(URL + userInput).then(function(data){
//         console.log('data is ready');
//         $weaponName.text(data.item.name);
//     }, function(error){
//         console.log('error');
//     })
// }

const weaponURL = "https://eldenring.fanapis.com/api/weapons?limit=100";
const $main = $('main');
const $title = $('.title');
const $image = $('.image');

const weaponAxes = [];

$.ajax(weaponURL).then(function(response){
    console.log(response.data)
    response.data.forEach(element => {
        $title.text(element.name);
        $main.text(element.description);
        $image.attr("src", element.image);
        
    });
}, function(error) {
    console.log('error');
    console.log(error);
});

