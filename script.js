// WEAPON FUNCTION (BELOW)

const weaponURL = "https://eldenring.fanapis.com/api/weapons?limit=100";

function createWeapon(weapon) {
    const $description = $("<p>", { class: "description" });
    const $title = $("<h2>", { class: "title" });
    const $image = $("<img>", { class: "image" });
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

// WEAPON FUNCTION (ABOVE)
// ARMOR FUNCTION (BELOW)

const armorURL = "https://eldenring.fanapis.com/api/armors?limit=100";

function createArmor(armor){
    const $description = $("<p>", { class: "description" });
    const $title = $("<h2>", { class: "title" });
    const $image = $("<img>", { class: "image" });
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
}, function(error) {
    console.log('error');
    console.log(error);
});

// ARMOR FUNCTION (ABOVE)
// BOSSES FUNCTION (BELOW)

const bossURL = "https://eldenring.fanapis.com/api/bosses?limit=100";

function createBoss (boss){
    const $description = $("<p>", { class: "description" });
    const $title = $("<h2>", { class: "title" });
    const $image = $("<img>", { class: "image" });
    const $location = $("<p>", { class: "location" });
    const $healthPoints = $("<p>", { class: "hp" });
    const $drops = $("<p>", { class: "drops" });
    $drops.text("Drops - " + boss.drops)
    $healthPoints.text("HP - " + boss.healthPoints);
    $location.text("Location - " + boss.location);
    $title.text(boss.name);
    $description.text("Description - " + boss.description);
    $image.attr("src", boss.image);
    return $('<div/>').append($title).append($image).append($location).append($healthPoints).append($description).append($drops);
};
$.ajax(bossURL).then(function(response){
    const bossData = response.data;
    const $bosses = bossData.map(boss => createBoss(boss));
    $('.mainbosses').append($bosses);
    return;
}, function(error) {
    console.log('error');
    console.log(error);
});

// BOSSES FUNCTION (ABOVE)
// MISC FUNCTION (BELOW)

const itemsURL = "https://eldenring.fanapis.com/api/items?limit=100";

function createItem(item) {
    const $description = $("<p>", { class: "description" });
    const $title = $("<h2>", { class: "title" });
    const $image = $("<img>", { class: "image" });
    const $type = $("<p>", { class: "type" });
    const $effect = $("<p>", { class: "effect" });
    $effect.text("Effect - " + item.effect);
    $type.text("Type - " + item.type);
    $title.text(item.name);
    $description.text("Description - " + item.description);
    $image.attr("src", item.image);
    return $('<div/>').append($title).append($image).append($type).append($effect).append($description);
};

$.ajax(itemsURL).then(function(response){
    const itemsData = response.data;
    const $items = itemsData.map(item => createItem(item));
    $('.mainmisc').append($items);
}, function(error) {
    console.log('error');
    console.log(error);
});

// MISC FUNCTION (ABOVE)
