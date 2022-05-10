const weaponURL = "https://eldenring.fanapis.com/api/weapons";

function createWeapon (weapon) {
    const $description = $("<p>", { class: "description" });
    const $title = $("<h2>", { class: "title" });
    const $image = $("<img>", { class: "image" });
    $title.text(weapon.name);
    $description.text(weapon.description);
    $image.attr("src", weapon.image);
    return $('<div/>').append($title).append($image).append($description);
}
$.ajax(weaponURL).then(function(response){
    const weaponData = response.data;
    const $weapons = weaponData.map(weapon => createWeapon(weapon));
    $('.main').append($weapons);
}, function(error) {
    console.log('error');
    console.log(error);
});
