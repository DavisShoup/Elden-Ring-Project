const weaponURL = "https://eldenring.fanapis.com/api/weapons";

function createWeapon(weapon) {
    const $description = $("<p>", { class: "description" });
    const $title = $("<h2>", { class: "title" });
    const $image = $("<img>", { class: "weaponimage" });
    const $category = $("<p>", { class: "category" });
    const $weight = $("<p>", { class: "weight" });
    $weight.text("Weight - " + weapon.weight);
    $category.text("Weapon Type - " + weapon.category);
    $title.text(weapon.name);
    $description.text("Description - " + weapon.description);
    $image.attr("src", weapon.image);
    return $('<div/>').append($title).append($image).append($category).append($weight).append($description);
};

$.ajax(weaponURL).then(function(response){
    const weaponData = response.data;
    const $weapons = weaponData.map(weapon => createWeapon(weapon));
    $('.main').append($weapons);
}, function(error) {
    console.log('error');
    console.log(error);
});

const armorURL = "https://eldenring.fanapis.com/api/armors";

function createArmor(armor){
    const $description = $("<p>", { class: "description" });
    const $title = $("<h2>", { class: "title" });
    const $image = $("<img>", { class: "armorimage" });
    const $category = $("<p>", { class: "category" });
    const $weight = $("<p>", { class: "weight" });
    $weight.text("Weight - " + armor.weight);
    $category.text("Armor Type - " + armor.category);
    $title.text(armor.name);
    $description.text("Description - " + armor.description);
    $image.attr("src", armor.image);
    return $('<div/>').append($title).append($image).append($category).append($weight).append($description);
};
$.ajax(armorURL).then(function(response){
    const armorData = response.data;
    const $armors = armorData.map(armor => createArmor(armor));
    $('.check').append($armors);
    return;
}, function(error) {
    console.log('error');
    console.log(error);
});
