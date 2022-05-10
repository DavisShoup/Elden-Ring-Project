// const weaponURL = "https://eldenring.fanapis.com/api/weapons";

// function createWeapon (weapon) {
//     const $description = $("<td>", { class: "description" });
//     const $title = $("<td>", { class: "title" });
//     const $imageTag = $("<td>", { class: "imageTag" });
//     $imageTag.append("<img src=" + weapon.image + ">");
//     $title.text(weapon.name);
//     $description.text(weapon.description);
//     return $('<table/>').append($title).append($imageTag).append($description);
// }
// $.ajax(weaponURL).then(function(response){
//     const weaponData = response.data;
//     const $weapons = weaponData.map(weapon => createWeapon(weapon));
//     $('.main').append($weapons);
// }, function(error) {
//     console.log('error');
//     console.log(error);
// });


const weaponURL = "https://eldenring.fanapis.com/api/weapons";

function createWeapon (weapon) {
    const $description = $("<p>", { class: "description" });
    const $title = $("<h2>", { class: "title" });
    const $image = $("<img>", { class: "weaponimage" });
    const $category = $("<p>", { class: "category" });
    $category.text("Weapon Type: " + weapon.category);
    $title.text(weapon.name);
    $description.text("Description: " +weapon.description);
    $image.attr("src", weapon.image);
    return $('<div/>').append($title).append($image).append($category).append($description);
}
$.ajax(weaponURL).then(function(response){
    const weaponData = response.data;
    const $weapons = weaponData.map(weapon => createWeapon(weapon));
    $('.main').append($weapons);
}, function(error) {
    console.log('error');
    console.log(error);
});