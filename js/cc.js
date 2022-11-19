let materialData_serialized = localStorage.getItem('materialData');
let recipeData_serialized = localStorage.getItem('data');
let materialData = JSON.parse(materialData_serialized);
let recipeData = JSON.parse(recipeData_serialized);


console.log(materialData_serialized);
console.log(recipeData_serialized);

let unicedCakesTable = document.querySelector('table.uniced-cakes');
let butterCakesTable = document.querySelector('table.butter-cakes');
let fondantCakesTable = document.querySelector('table.fondant-cakes');
let proceedBtn = document.querySelector('button');




// ========================= sugar row ===================
let sugarRow = document.createElement('tr');
sugarRow.setAttribute('id', 'sugar-row');
let sugarName = document.createElement('td');
let sugarCost = document.createElement('td');
let sugarKG = document.createElement('td');
let sugarCost_KG = document.createElement('td');
let sugar6 = document.createElement('td');
let sugar7 = document.createElement('td');
let sugar8 = document.createElement('td');
let sugar9 = document.createElement('td');
let sugar10 = document.createElement('td');
let sugar11 = document.createElement('td');
let sugar12 = document.createElement('td');
let sugar13 = document.createElement('td');
let sugar14 = document.createElement('td');
let sugar15 = document.createElement('td');
let sugar16 = document.createElement('td');
let sugar17 = document.createElement('td');
let sugar18 = document.createElement('td');

sugarName.innerHTML = 'Sugar';
sugarCost.innerHTML = parseInt(materialData.sugar.price);
sugarKG.innerHTML = parseInt(materialData.sugar.unit);
sugarCost_KG.innerHTML = parseFloat(materialData.sugar['p/u']);
var sugar_var6 = parseFloat(materialData.sugar['p/u']) * (parseInt(recipeData.sugar[0])*0.001);
sugar6.innerHTML = Math.ceil(sugar_var6);
var sugar_var7 = parseFloat(materialData.sugar['p/u']) * (parseInt(recipeData.sugar[1])*0.001);
sugar7.innerHTML = Math.ceil(sugar_var7);
var sugar_var8 = parseFloat(materialData.sugar['p/u']) * (parseInt(recipeData.sugar[2])*0.001);
sugar8.innerHTML = Math.ceil(sugar_var8);
var sugar_var9 = parseFloat(materialData.sugar['p/u']) * (parseInt(recipeData.sugar[3])*0.001);
sugar9.innerHTML = Math.ceil(sugar_var9);
var sugar_var10 = parseFloat(materialData.sugar['p/u']) * (parseInt(recipeData.sugar[4])*0.001);
sugar10.innerHTML = Math.ceil(sugar_var10);
var sugar_var11 = parseFloat(materialData.sugar['p/u']) * (parseInt(recipeData.sugar[5])*0.001);
sugar11.innerHTML = Math.ceil(sugar_var11);
var sugar_var12 = parseFloat(materialData.sugar['p/u']) * (parseInt(recipeData.sugar[6])*0.001);
sugar12.innerHTML = Math.ceil(sugar_var12);
var sugar_var13 = parseFloat(materialData.sugar['p/u']) * (parseInt(recipeData.sugar[7])*0.001);
sugar13.innerHTML = Math.ceil(sugar_var13);
var sugar_var14 = parseFloat(materialData.sugar['p/u']) * (parseInt(recipeData.sugar[8])*0.001);
sugar14.innerHTML = Math.ceil(sugar_var14);
var sugar_var15 = parseFloat(materialData.sugar['p/u']) * (parseInt(recipeData.sugar[9])*0.001);
sugar15.innerHTML = Math.ceil(sugar_var15);
var sugar_var16 = parseFloat(materialData.sugar['p/u']) * (parseInt(recipeData.sugar[10])*0.001);
sugar16.innerHTML = Math.ceil(sugar_var16);
var sugar_var17 = parseFloat(materialData.sugar['p/u']) * (parseInt(recipeData.sugar[11])*0.001);
sugar17.innerHTML = Math.ceil(sugar_var17);
var sugar_var18 = parseFloat(materialData.sugar['p/u']) * (parseInt(recipeData.sugar[12])*0.001);
sugar18.innerHTML = Math.ceil(sugar_var18);

sugarRow.appendChild(sugarName);
// sugarRow.appendChild(sugarCost);
// sugarRow.appendChild(sugarKG);
// sugarRow.appendChild(sugarCost_KG);
sugarRow.appendChild(sugar6);
sugarRow.appendChild(sugar7);
sugarRow.appendChild(sugar8);
sugarRow.appendChild(sugar9);
sugarRow.appendChild(sugar10);
sugarRow.appendChild(sugar11);
sugarRow.appendChild(sugar12);
sugarRow.appendChild(sugar13);
sugarRow.appendChild(sugar14);
sugarRow.appendChild(sugar15);
sugarRow.appendChild(sugar16);
sugarRow.appendChild(sugar17);
sugarRow.appendChild(sugar18);
unicedCakesTable.appendChild(sugarRow);


// ========================= butter row ===================
let butterRow = document.createElement('tr');
butterRow.setAttribute('id', 'butter_-row');
let butterName = document.createElement('td');
let butterCost = document.createElement('td');
let butterKG = document.createElement('td');
let butterCost_KG = document.createElement('td');
let butter6 = document.createElement('td');
let butter7 = document.createElement('td');
let butter8 = document.createElement('td');
let butter9 = document.createElement('td');
let butter10 = document.createElement('td');
let butter11 = document.createElement('td');
let butter12 = document.createElement('td');
let butter13 = document.createElement('td');
let butter14 = document.createElement('td');
let butter15 = document.createElement('td');
let butter16 = document.createElement('td');
let butter17 = document.createElement('td');
let butter18 = document.createElement('td');

butterName.innerHTML = 'Butter';
butterCost.innerHTML = parseInt(materialData.butter.price);
butterKG.innerHTML = parseInt(materialData.butter.unit);
butterCost_KG.innerHTML = parseFloat(materialData.butter['p/u']);
var butter_var6 = parseFloat(materialData.butter['p/u']) * (parseInt(recipeData.butter[0])*0.001);
butter6.innerHTML = Math.ceil(butter_var6);
var butter_var7 = parseFloat(materialData.butter['p/u']) * (parseInt(recipeData.butter[1])*0.001);
butter7.innerHTML = Math.ceil(butter_var7);
var butter_var8 = parseFloat(materialData.butter['p/u']) * (parseInt(recipeData.butter[2])*0.001);
butter8.innerHTML = Math.ceil(butter_var8);
var butter_var9 = parseFloat(materialData.butter['p/u']) * (parseInt(recipeData.butter[3])*0.001);
butter9.innerHTML = Math.ceil(butter_var9);
var butter_var10 = parseFloat(materialData.butter['p/u']) * (parseInt(recipeData.butter[4])*0.001);
butter10.innerHTML = Math.ceil(butter_var10);
var butter_var11 = parseFloat(materialData.butter['p/u']) * (parseInt(recipeData.butter[5])*0.001);
butter11.innerHTML = Math.ceil(butter_var11);
var butter_var12 = parseFloat(materialData.butter['p/u']) * (parseInt(recipeData.butter[6])*0.001);
butter12.innerHTML = Math.ceil(butter_var12);
var butter_var13 = parseFloat(materialData.butter['p/u']) * (parseInt(recipeData.butter[7])*0.001);
butter13.innerHTML = Math.ceil(butter_var13);
var butter_var14 = parseFloat(materialData.butter['p/u']) * (parseInt(recipeData.butter[8])*0.001);
butter14.innerHTML = Math.ceil(butter_var14);
var butter_var15 = parseFloat(materialData.butter['p/u']) * (parseInt(recipeData.butter[9])*0.001);
butter15.innerHTML = Math.ceil(butter_var15);
var butter_var16 = parseFloat(materialData.butter['p/u']) * (parseInt(recipeData.butter[10])*0.001);
butter16.innerHTML = Math.ceil(butter_var16);
var butter_var17 = parseFloat(materialData.butter['p/u']) * (parseInt(recipeData.butter[11])*0.001);
butter17.innerHTML = Math.ceil(butter_var17);
var butter_var18 = parseFloat(materialData.butter['p/u']) * (parseInt(recipeData.butter[12])*0.001)
butter18.innerHTML = Math.ceil(butter_var18);

butterRow.appendChild(butterName);
// butterRow.appendChild(butterCost);
// butterRow.appendChild(butterKG);
// butterRow.appendChild(butterCost_KG);
butterRow.appendChild(butter6);
butterRow.appendChild(butter7);
butterRow.appendChild(butter8);
butterRow.appendChild(butter9);
butterRow.appendChild(butter10);
butterRow.appendChild(butter11);
butterRow.appendChild(butter12);
butterRow.appendChild(butter13);
butterRow.appendChild(butter14);
butterRow.appendChild(butter15);
butterRow.appendChild(butter16);
butterRow.appendChild(butter17);
butterRow.appendChild(butter18);
unicedCakesTable.appendChild(butterRow);


// ========================= Flour row ===================
let flourRow = document.createElement('tr');
flourRow.setAttribute('id', 'flour-row');
let flourName = document.createElement('td');
let flourCost = document.createElement('td');
let flourKG = document.createElement('td');
let flourCost_KG = document.createElement('td');
let flour6 = document.createElement('td');
let flour7 = document.createElement('td');
let flour8 = document.createElement('td');
let flour9 = document.createElement('td');
let flour10 = document.createElement('td');
let flour11 = document.createElement('td');
let flour12 = document.createElement('td');
let flour13 = document.createElement('td');
let flour14 = document.createElement('td');
let flour15 = document.createElement('td');
let flour16 = document.createElement('td');
let flour17 = document.createElement('td');
let flour18 = document.createElement('td');

flourName.innerHTML = 'Flour';
flourCost.innerHTML = parseInt(materialData.flour.price);
flourKG.innerHTML = parseInt(materialData.flour.unit);
flourCost_KG.innerHTML = parseFloat(materialData.flour['p/u']);
var flour_var6 = parseFloat(materialData.flour['p/u']) * (parseInt(recipeData.flour[0])*0.001);
flour6.innerHTML = Math.ceil(flour_var6);
var flour_var7 = parseFloat(materialData.flour['p/u']) * (parseInt(recipeData.flour[1])*0.001);
flour7.innerHTML = Math.ceil(flour_var7);
var flour_var8 = parseFloat(materialData.flour['p/u']) * (parseInt(recipeData.flour[2])*0.001);
flour8.innerHTML = Math.ceil(flour_var8);
var flour_var9 = parseFloat(materialData.flour['p/u']) * (parseInt(recipeData.flour[3])*0.001);
flour9.innerHTML = Math.ceil(flour_var9);
var flour_var10 = parseFloat(materialData.flour['p/u']) * (parseInt(recipeData.flour[4])*0.001);
flour10.innerHTML = Math.ceil(flour_var10);
var flour_var11 = parseFloat(materialData.flour['p/u']) * (parseInt(recipeData.flour[5])*0.001);
flour11.innerHTML = Math.ceil(flour_var11);
var flour_var12 = parseFloat(materialData.flour['p/u']) * (parseInt(recipeData.flour[6])*0.001);
flour12.innerHTML = Math.ceil(flour_var12);
var flour_var13 = parseFloat(materialData.flour['p/u']) * (parseInt(recipeData.flour[7])*0.001);
flour13.innerHTML = Math.ceil(flour_var13);
var flour_var14 = parseFloat(materialData.flour['p/u']) * (parseInt(recipeData.flour[8])*0.001);
flour14.innerHTML = Math.ceil(flour_var14);
var flour_var15 = parseFloat(materialData.flour['p/u']) * (parseInt(recipeData.flour[9])*0.001);
butter15.innerHTML = Math.ceil(flour_var15);
var flour_var16 = parseFloat(materialData.flour['p/u']) * (parseInt(recipeData.flour[10])*0.001);
flour16.innerHTML = Math.ceil(flour_var16);
var flour_var17 = parseFloat(materialData.flour['p/u']) * (parseInt(recipeData.flour[11])*0.001);
flour17.innerHTML = Math.ceil(flour_var17);
var flour_var18 = parseFloat(materialData.flour['p/u']) * (parseInt(recipeData.flour[12])*0.001)
flour18.innerHTML = Math.ceil(flour_var18);

flourRow.appendChild(flourName);
// flourRow.appendChild(flourCost);
// flourRow.appendChild(flourKG);
// flourRow.appendChild(flourCost_KG);
flourRow.appendChild(flour6);
flourRow.appendChild(flour7);
flourRow.appendChild(flour8);
flourRow.appendChild(flour9);
flourRow.appendChild(flour10);
flourRow.appendChild(flour11);
flourRow.appendChild(flour12);
flourRow.appendChild(flour13);
flourRow.appendChild(flour14);
flourRow.appendChild(flour15);
flourRow.appendChild(flour16);
flourRow.appendChild(flour17);
flourRow.appendChild(flour18);
unicedCakesTable.appendChild(flourRow);

// ========================= egg row ===================
let eggRow = document.createElement('tr');
eggRow.setAttribute('id', 'egg-row');
let eggName = document.createElement('td');
let eggCost = document.createElement('td');
let eggKG = document.createElement('td');
let eggCost_KG = document.createElement('td');
let egg6 = document.createElement('td');
let egg7 = document.createElement('td');
let egg8 = document.createElement('td');
let egg9 = document.createElement('td');
let egg10 = document.createElement('td');
let egg11 = document.createElement('td');
let egg12 = document.createElement('td');
let egg13 = document.createElement('td');
let egg14 = document.createElement('td');
let egg15 = document.createElement('td');
let egg16 = document.createElement('td');
let egg17 = document.createElement('td');
let egg18 = document.createElement('td');

eggName.innerHTML = 'Eggs';
eggCost.innerHTML = parseInt(materialData.egg.price);
eggKG.innerHTML = parseInt(materialData.egg.unit);
eggCost_KG.innerHTML = parseFloat(materialData.egg['p/u']);
var egg_var6 = parseFloat(materialData.egg['p/u']) * (parseInt(recipeData.egg[0])*0.001);
egg6.innerHTML = Math.ceil(egg_var6);
var egg_var7 = parseFloat(materialData.egg['p/u']) * (parseInt(recipeData.egg[1])*0.001);
egg7.innerHTML = Math.ceil(egg_var7);
var egg_var8 = parseFloat(materialData.egg['p/u']) * (parseInt(recipeData.egg[2])*0.001);
egg8.innerHTML = Math.ceil(egg_var8);
var egg_var9 = parseFloat(materialData.egg['p/u']) * (parseInt(recipeData.egg[3])*0.001);
egg9.innerHTML = Math.ceil(egg_var9);
var egg_var10 = parseFloat(materialData.egg['p/u']) * (parseInt(recipeData.egg[4])*0.001);
egg10.innerHTML = Math.ceil(egg_var10);
var egg_var11 = parseFloat(materialData.egg['p/u']) * (parseInt(recipeData.egg[5])*0.001);
egg11.innerHTML = Math.ceil(egg_var11);
var egg_var12 = parseFloat(materialData.egg['p/u']) * (parseInt(recipeData.egg[6])*0.001);
egg12.innerHTML = Math.ceil(egg_var12);
var egg_var13 = parseFloat(materialData.egg['p/u']) * (parseInt(recipeData.egg[7])*0.001);
egg13.innerHTML = Math.ceil(egg_var13);
var egg_var14 = parseFloat(materialData.egg['p/u']) * (parseInt(recipeData.egg[8])*0.001);
egg14.innerHTML = Math.ceil(egg_var14);
var egg_var15 = parseFloat(materialData.egg['p/u']) * (parseInt(recipeData.egg[9])*0.001);
egg15.innerHTML = Math.ceil(egg_var15);
var egg_var16 = parseFloat(materialData.egg['p/u']) * (parseInt(recipeData.egg[10])*0.001);
egg16.innerHTML = Math.ceil(egg_var16);
var egg_var17 = parseFloat(materialData.egg['p/u']) * (parseInt(recipeData.egg[11])*0.001);
egg17.innerHTML = Math.ceil(egg_var17);
var egg_var18 = parseFloat(materialData.egg['p/u']) * (parseInt(recipeData.egg[12])*0.001)
egg18.innerHTML = Math.ceil(egg_var18);

eggRow.appendChild(eggName);
// eggRow.appendChild(eggCost);
// eggRow.appendChild(eggKG);
// eggRow.appendChild(eggCost_KG);
eggRow.appendChild(egg6);
eggRow.appendChild(egg7);
eggRow.appendChild(egg8);
eggRow.appendChild(egg9);
eggRow.appendChild(egg10);
eggRow.appendChild(egg11);
eggRow.appendChild(egg12);
eggRow.appendChild(egg13);
eggRow.appendChild(egg14);
eggRow.appendChild(egg15);
eggRow.appendChild(egg16);
eggRow.appendChild(egg17);
eggRow.appendChild(egg18);
unicedCakesTable.appendChild(eggRow);


// ========================= Other baking ingredient row ===================
let OBI_Row = document.createElement('tr');
OBI_Row.setAttribute('id', 'OBI_-row');
let OBI_Name = document.createElement('td');
let OBI_Cost = document.createElement('td');
let OBI_KG = document.createElement('td');
let OBI_Cost_KG = document.createElement('td');
let OBI_6 = document.createElement('td');
let OBI_7 = document.createElement('td');
let OBI_8 = document.createElement('td');
let OBI_9 = document.createElement('td');
let OBI_10 = document.createElement('td');
let OBI_11 = document.createElement('td');
let OBI_12 = document.createElement('td');
let OBI_13 = document.createElement('td');
let OBI_14 = document.createElement('td');
let OBI_15 = document.createElement('td');
let OBI_16 = document.createElement('td');
let OBI_17 = document.createElement('td');
let OBI_18 = document.createElement('td');

OBI_Name.innerHTML = 'Others';
OBI_Cost.innerHTML = parseInt(materialData['baking-other-ingredient-total']);
OBI_KG.innerHTML = parseInt('1');
OBI_Cost_KG.innerHTML = parseFloat(materialData['baking-other-ingredient-total']);
var OBI_var6 = parseFloat(1 * (parseInt(recipeData.others[0])*0.001));
OBI_6.innerHTML = Math.ceil(OBI_var6);
var OBI_var7 = parseFloat(1 * (parseInt(recipeData.others[1])*0.001));
OBI_7.innerHTML = Math.ceil(OBI_var7);
var OBI_var8 = parseFloat(1 * (parseInt(recipeData.others[2])*0.001));
OBI_8.innerHTML = Math.ceil(OBI_var8);
var OBI_var9 = parseFloat(1 * (parseInt(recipeData.others[3])*0.001));
OBI_9.innerHTML = Math.ceil(OBI_var9);
var OBI_var10 = parseFloat(1 * (parseInt(recipeData.others[4])*0.001));
OBI_10.innerHTML = Math.ceil(OBI_var10);
var OBI_var11 = parseFloat(1 * (parseInt(recipeData.others[5])*0.001));
OBI_11.innerHTML = Math.ceil(OBI_var11);
var OBI_var12 = parseFloat(1 * (parseInt(recipeData.others[6])*0.001));
OBI_12.innerHTML = Math.ceil(OBI_var12);
var OBI_var13 = parseFloat(1 * (parseInt(recipeData.others[7])*0.001));
OBI_13.innerHTML = Math.ceil(OBI_var13);
var OBI_var14 = parseFloat(1 * (parseInt(recipeData.others[8])*0.001));
OBI_14.innerHTML = Math.ceil(OBI_var14);
var OBI_var15 = parseFloat(1 * (parseInt(recipeData.others[9])*0.001));
OBI_15.innerHTML = Math.ceil(OBI_var15);
var OBI_var16 = parseFloat(1 * (parseInt(recipeData.others[10])*0.001));
OBI_16.innerHTML = Math.ceil(OBI_var16);
var OBI_var17 = parseFloat(1 * (parseInt(recipeData.others[11])*0.001));
OBI_17.innerHTML = Math.ceil(OBI_var17);
var OBI_var18 = parseFloat(1 * (parseInt(recipeData.others[12])*0.001));
OBI_18.innerHTML = Math.ceil(OBI_var18);


OBI_Row.appendChild(OBI_Name);
// OBI_Row.appendChild(OBI_Cost);
// OBI_Row.appendChild(OBI_KG);
// OBI_Row.appendChild(OBI_Cost_KG);
OBI_Row.appendChild(OBI_6);
OBI_Row.appendChild(OBI_7);
OBI_Row.appendChild(OBI_8);
OBI_Row.appendChild(OBI_9);
OBI_Row.appendChild(OBI_10);
OBI_Row.appendChild(OBI_11);
OBI_Row.appendChild(OBI_12);
OBI_Row.appendChild(OBI_13);
OBI_Row.appendChild(OBI_14);
OBI_Row.appendChild(OBI_15);
OBI_Row.appendChild(OBI_16);
OBI_Row.appendChild(OBI_17);
OBI_Row.appendChild(OBI_18);
unicedCakesTable.appendChild(OBI_Row);



// ========================= Monthly Overhead row ===================
let overheads_Row = document.createElement('tr');
overheads_Row.setAttribute('id', 'overheads_row');
let overheads_Name = document.createElement('td');
let overheads_Cost = document.createElement('td');
let overheads_KG = document.createElement('td');
let overheads_Cost_KG = document.createElement('td');
let overheads_6 = document.createElement('td');
let overheads_7 = document.createElement('td');
let overheads_8 = document.createElement('td');
let overheads_9 = document.createElement('td');
let overheads_10 = document.createElement('td');
let overheads_11 = document.createElement('td');
let overheads_12 = document.createElement('td');
let overheads_13 = document.createElement('td');
let overheads_14 = document.createElement('td');
let overheads_15 = document.createElement('td');
let overheads_16 = document.createElement('td');
let overheads_17 = document.createElement('td');
let overheads_18 = document.createElement('td');

overheads_Name.innerHTML = 'Overheads';
overheads_Cost.innerHTML = parseInt(materialData['overhead']);
overheads_KG.innerHTML = parseInt('1');
overheads_Cost_KG.innerHTML = parseFloat(materialData['overhead']);
var overhead_var6 = parseFloat(1 * (parseInt(recipeData.overhead[0])*0.001));
overheads_6.innerHTML = Math.ceil(overhead_var6);
var overhead_var7 = parseFloat(1 * (parseInt(recipeData.overhead[1])*0.001));
overheads_7.innerHTML = Math.ceil(overhead_var7);
var overhead_var8 = parseFloat(1 * (parseInt(recipeData.overhead[2])*0.001));
overheads_8.innerHTML = Math.ceil(overhead_var8);
var overhead_var9 = parseFloat(1 * (parseInt(recipeData.overhead[3])*0.001));
overheads_9.innerHTML = Math.ceil(overhead_var9);
var overhead_var10 = parseFloat(1 * (parseInt(recipeData.overhead[4])*0.001));
overheads_10.innerHTML = Math.ceil(overhead_var10);
var overhead_var11 = parseFloat(1 * (parseInt(recipeData.overhead[5])*0.001));
overheads_11.innerHTML = Math.ceil(overhead_var11);
var overhead_var12 = parseFloat(1 * (parseInt(recipeData.overhead[6])*0.001));
overheads_12.innerHTML = Math.ceil(overhead_var12);
var overhead_var13 = parseFloat(1 * (parseInt(recipeData.overhead[7])*0.001));
overheads_13.innerHTML = Math.ceil(overhead_var13);
var overhead_var14 = parseFloat(1 * (parseInt(recipeData.overhead[8])*0.001));
overheads_14.innerHTML = Math.ceil(overhead_var14);
var overhead_var15 = parseFloat(1 * (parseInt(recipeData.overhead[9])*0.001));
overheads_15.innerHTML = Math.ceil(overhead_var15);
var overhead_var16 = parseFloat(1 * (parseInt(recipeData.overhead[10])*0.001));
overheads_16.innerHTML = Math.ceil(overhead_var16);
var overhead_var17 = parseFloat(1 * (parseInt(recipeData.overhead[11])*0.001));
overheads_17.innerHTML = Math.ceil(overhead_var17);
var overhead_var18 = parseFloat(1 * (parseInt(recipeData.overhead[12])*0.001));
overheads_18.innerHTML = Math.ceil(overhead_var18);

overheads_Row.appendChild(overheads_Name);
// overheads_Row.appendChild(overheads_Cost);
// overheads_Row.appendChild(overheads_KG);
// overheads_Row.appendChild(overheads_Cost_KG);
overheads_Row.appendChild(overheads_6);
overheads_Row.appendChild(overheads_7);
overheads_Row.appendChild(overheads_8);
overheads_Row.appendChild(overheads_9);
overheads_Row.appendChild(overheads_10);
overheads_Row.appendChild(overheads_11);
overheads_Row.appendChild(overheads_12);
overheads_Row.appendChild(overheads_13);
overheads_Row.appendChild(overheads_14);
overheads_Row.appendChild(overheads_15);
overheads_Row.appendChild(overheads_16);
overheads_Row.appendChild(overheads_17);
overheads_Row.appendChild(overheads_18);
unicedCakesTable.appendChild(overheads_Row);


// =============== cost of uniced cake without packaging ==========
let coucwp_Row = document.createElement('tr');
coucwp_Row.setAttribute('id', 'coucwp_row');
let coucwp_Name = document.createElement('td');
let coucwp_Cost = document.createElement('td');
let coucwp_KG = document.createElement('td');
let coucwp_Cost_KG = document.createElement('td');
let coucwp_6 = document.createElement('td');
let coucwp_7 = document.createElement('td');
let coucwp_8 = document.createElement('td');
let coucwp_9 = document.createElement('td');
let coucwp_10 = document.createElement('td');
let coucwp_11 = document.createElement('td');
let coucwp_12 = document.createElement('td');
let coucwp_13 = document.createElement('td');
let coucwp_14 = document.createElement('td');
let coucwp_15 = document.createElement('td');
let coucwp_16 = document.createElement('td');
let coucwp_17 = document.createElement('td');
let coucwp_18 = document.createElement('td');

coucwp_Name.innerHTML = 'Cost Of Uniced Cake Without Packaging';
coucwp_Cost.innerHTML = ' ';
coucwp_KG.innerHTML = ' ';
coucwp_Cost_KG.innerHTML = ' ';
coucwp_6.innerHTML = Math.ceil(overhead_var6 + sugar_var6 + butter_var6 + flour_var6 + egg_var6 + OBI_var6);
coucwp_7.innerHTML = Math.ceil(overhead_var7 + sugar_var7 + butter_var7 + flour_var7 + egg_var7 + OBI_var7);
coucwp_8.innerHTML = Math.ceil(overhead_var8 + sugar_var8 + butter_var8 + flour_var8 + egg_var8 + OBI_var8);
coucwp_9.innerHTML = Math.ceil(overhead_var9 + sugar_var9 + butter_var9 + flour_var9 + egg_var9 + OBI_var9);
coucwp_10.innerHTML = Math.ceil(overhead_var10 + sugar_var10 + butter_var10 + flour_var10 + egg_var10 + OBI_var10);
coucwp_11.innerHTML = Math.ceil(overhead_var11 + sugar_var11 + butter_var11 + flour_var11 + egg_var11 + OBI_var11);
coucwp_12.innerHTML = Math.ceil(overhead_var12 + sugar_var12 + butter_var12 + flour_var12 + egg_var12 + OBI_var12);
coucwp_13.innerHTML = Math.ceil(overhead_var13 + sugar_var13 + butter_var13 + flour_var13 + egg_var13 + OBI_var13);
coucwp_14.innerHTML = Math.ceil(overhead_var14 + sugar_var14 + butter_var14 + flour_var14 + egg_var14 + OBI_var14);
coucwp_15.innerHTML = Math.ceil(overhead_var15 + sugar_var15 + butter_var15 + flour_var15 + egg_var15 + OBI_var15);
coucwp_16.innerHTML = Math.ceil(overhead_var16 + sugar_var16 + butter_var16 + flour_var16 + egg_var16 + OBI_var16);
coucwp_17.innerHTML = Math.ceil(overhead_var17 + sugar_var17 + butter_var17 + flour_var17 + egg_var17 + OBI_var17);
coucwp_18.innerHTML = Math.ceil(overhead_var18 + sugar_var18 + butter_var18 + flour_var18 + egg_var18 + OBI_var18);

coucwp_Row.appendChild(coucwp_Name);
// coucwp_Row.appendChild(coucwp_Cost);
// coucwp_Row.appendChild(coucwp_KG);
// coucwp_Row.appendChild(coucwp_Cost_KG);
coucwp_Row.appendChild(coucwp_6);
coucwp_Row.appendChild(coucwp_7);
coucwp_Row.appendChild(coucwp_8);
coucwp_Row.appendChild(coucwp_9);
coucwp_Row.appendChild(coucwp_10);
coucwp_Row.appendChild(coucwp_11);
coucwp_Row.appendChild(coucwp_12);
coucwp_Row.appendChild(coucwp_13);
coucwp_Row.appendChild(coucwp_14);
coucwp_Row.appendChild(coucwp_15);
coucwp_Row.appendChild(coucwp_16);
coucwp_Row.appendChild(coucwp_17);
coucwp_Row.appendChild(coucwp_18);
unicedCakesTable.appendChild(coucwp_Row);


// ========================= Labels and Strickers row ===================
let label_Row = document.createElement('tr');
label_Row.setAttribute('id', 'label_row');
let label_Name = document.createElement('td');
let label_Cost = document.createElement('td');
let label_KG = document.createElement('td');
let label_Cost_KG = document.createElement('td');
let label_6 = document.createElement('td');
let label_7 = document.createElement('td');
let label_8 = document.createElement('td');
let label_9 = document.createElement('td');
let label_10 = document.createElement('td');
let label_11 = document.createElement('td');
let label_12 = document.createElement('td');
let label_13 = document.createElement('td');
let label_14 = document.createElement('td');
let label_15 = document.createElement('td');
let label_16 = document.createElement('td');
let label_17 = document.createElement('td');
let label_18 = document.createElement('td');

label_Name.innerHTML = 'Labels & Stickers';
label_Cost.innerHTML = '';
label_KG.innerHTML = '';
label_Cost_KG.innerHTML = '';
label_6.innerHTML = parseInt(recipeData.label[0]);
label_7.innerHTML = parseInt(recipeData.label[1]);
label_8.innerHTML = parseInt(recipeData.label[2]);
label_9.innerHTML = parseInt(recipeData.label[3]);
label_10.innerHTML = parseInt(recipeData.label[4]);
label_11.innerHTML = parseInt(recipeData.label[5]);
label_12.innerHTML = parseInt(recipeData.label[6]);
label_13.innerHTML = parseInt(recipeData.label[7]);
label_14.innerHTML = parseInt(recipeData.label[8]);
label_15.innerHTML = parseInt(recipeData.label[9]);
label_16.innerHTML = parseInt(recipeData.label[10]);
label_17.innerHTML = parseInt(recipeData.label[11]);
label_18.innerHTML = parseInt(recipeData.label[12]);

label_Row.appendChild(label_Name);
// label_Row.appendChild(label_Cost);
// label_Row.appendChild(label_KG);
// label_Row.appendChild(label_Cost_KG);
label_Row.appendChild(label_6);
label_Row.appendChild(label_7);
label_Row.appendChild(label_8);
label_Row.appendChild(label_9);
label_Row.appendChild(label_10);
label_Row.appendChild(label_11);
label_Row.appendChild(label_12);
label_Row.appendChild(label_13);
label_Row.appendChild(label_14);
label_Row.appendChild(label_15);
label_Row.appendChild(label_16);
label_Row.appendChild(label_17);
label_Row.appendChild(label_18);
unicedCakesTable.appendChild(label_Row);


// ========================= Wrappers row ===================
let wrapper_Row = document.createElement('tr');
wrapper_Row.setAttribute('id', 'wrapper_row');
let wrapper_Name = document.createElement('td');
let wrapper_Cost = document.createElement('td');
let wrapper_KG = document.createElement('td');
let wrapper_Cost_KG = document.createElement('td');
let wrapper_6 = document.createElement('td');
let wrapper_7 = document.createElement('td');
let wrapper_8 = document.createElement('td');
let wrapper_9 = document.createElement('td');
let wrapper_10 = document.createElement('td');
let wrapper_11 = document.createElement('td');
let wrapper_12 = document.createElement('td');
let wrapper_13 = document.createElement('td');
let wrapper_14 = document.createElement('td');
let wrapper_15 = document.createElement('td');
let wrapper_16 = document.createElement('td');
let wrapper_17 = document.createElement('td');
let wrapper_18 = document.createElement('td');

wrapper_Name.innerHTML = 'Wrappers & Packaging';
wrapper_Cost.innerHTML = '';
wrapper_KG.innerHTML = '';
wrapper_Cost_KG.innerHTML = '';
wrapper_6.innerHTML = parseInt(recipeData.wrapper[0]);
wrapper_7.innerHTML = parseInt(recipeData.wrapper[1]);
wrapper_8.innerHTML = parseInt(recipeData.wrapper[2]);
wrapper_9.innerHTML = parseInt(recipeData.wrapper[3]);
wrapper_10.innerHTML = parseInt(recipeData.wrapper[4]);
wrapper_11.innerHTML = parseInt(recipeData.wrapper[5]);
wrapper_12.innerHTML = parseInt(recipeData.wrapper[6]);
wrapper_13.innerHTML = parseInt(recipeData.wrapper[7]);
wrapper_14.innerHTML = parseInt(recipeData.wrapper[8]);
wrapper_15.innerHTML = parseInt(recipeData.wrapper[9]);
wrapper_16.innerHTML = parseInt(recipeData.wrapper[10]);
wrapper_17.innerHTML = parseInt(recipeData.wrapper[11]);
wrapper_18.innerHTML = parseInt(recipeData.wrapper[12]);

wrapper_Row.appendChild(wrapper_Name);
// wrapper_Row.appendChild(wrapper_Cost);
// wrapper_Row.appendChild(wrapper_KG);
// wrapper_Row.appendChild(wrapper_Cost_KG);
wrapper_Row.appendChild(wrapper_6);
wrapper_Row.appendChild(wrapper_7);
wrapper_Row.appendChild(wrapper_8);
wrapper_Row.appendChild(wrapper_9);
wrapper_Row.appendChild(wrapper_10);
wrapper_Row.appendChild(wrapper_11);
wrapper_Row.appendChild(wrapper_12);
wrapper_Row.appendChild(wrapper_13);
wrapper_Row.appendChild(wrapper_14);
wrapper_Row.appendChild(wrapper_15);
wrapper_Row.appendChild(wrapper_16);
wrapper_Row.appendChild(wrapper_17);
wrapper_Row.appendChild(wrapper_18);
unicedCakesTable.appendChild(wrapper_Row);


// ========================= total cost of uniced cake row ===================
let tcouc_Row = document.createElement('tr');
tcouc_Row.setAttribute('id', 'tcouc_row');
let tcouc_Name = document.createElement('td');
let tcouc_Cost = document.createElement('td');
let tcouc_KG = document.createElement('td');
let tcouc_Cost_KG = document.createElement('td');
let tcouc_6 = document.createElement('td');
let tcouc_7 = document.createElement('td');
let tcouc_8 = document.createElement('td');
let tcouc_9 = document.createElement('td');
let tcouc_10 = document.createElement('td');
let tcouc_11 = document.createElement('td');
let tcouc_12 = document.createElement('td');
let tcouc_13 = document.createElement('td');
let tcouc_14 = document.createElement('td');
let tcouc_15 = document.createElement('td');
let tcouc_16 = document.createElement('td');
let tcouc_17 = document.createElement('td');
let tcouc_18 = document.createElement('td');

tcouc_Name.innerHTML = 'TOTAL COST OF UNICED CAKES';
tcouc_Cost.innerHTML = ' ';
tcouc_KG.innerHTML = ' ';
tcouc_Cost_KG.innerHTML = ' ';
tcouc_6.innerHTML = Math.ceil(overhead_var6 + sugar_var6 + butter_var6 + flour_var6 + egg_var6 + OBI_var6) + parseInt(recipeData.label[0]) + parseInt(recipeData.wrapper[0])+ parseInt(recipeData.others[0]);
tcouc_7.innerHTML = Math.ceil(overhead_var7 + sugar_var7 + butter_var7 + flour_var7 + egg_var7 + OBI_var7) + parseInt(recipeData.others[1]) + parseInt(recipeData.label[1]) + parseInt(recipeData.wrapper[1]);
tcouc_8.innerHTML = Math.ceil(overhead_var8 + sugar_var8 + butter_var8 + flour_var8 + egg_var8 + OBI_var8) + parseInt(recipeData.label[2]) + parseInt(recipeData.wrapper[2])+ parseInt(recipeData.others[2]);
tcouc_9.innerHTML = Math.ceil(overhead_var9 + sugar_var9 + butter_var9 + flour_var9 + egg_var9 + OBI_var9) + parseInt(recipeData.label[3]) + parseInt(recipeData.wrapper[3])+ parseInt(recipeData.others[3]);
tcouc_10.innerHTML = Math.ceil(overhead_var10 + sugar_var10 + butter_var10 + flour_var10 + egg_var10 + OBI_var10) + parseInt(recipeData.label[4]) + parseInt(recipeData.wrapper[4])+ parseInt(recipeData.others[4]);
tcouc_11.innerHTML = Math.ceil(overhead_var11 + sugar_var11 + butter_var11 + flour_var11 + egg_var11 + OBI_var11) + parseInt(recipeData.label[5]) + parseInt(recipeData.wrapper[5])+ parseInt(recipeData.others[5]);
tcouc_12.innerHTML = Math.ceil(overhead_var12 + sugar_var12 + butter_var12 + flour_var12 + egg_var12 + OBI_var12) + parseInt(recipeData.label[6]) + parseInt(recipeData.wrapper[6])+ parseInt(recipeData.others[6]);
tcouc_13.innerHTML = Math.ceil(overhead_var13 + sugar_var13 + butter_var13 + flour_var13 + egg_var13 + OBI_var13) + parseInt(recipeData.label[7]) + parseInt(recipeData.wrapper[7])+ parseInt(recipeData.others[7]);
tcouc_14.innerHTML = Math.ceil(overhead_var14 + sugar_var14 + butter_var14 + flour_var14 + egg_var14 + OBI_var14) + parseInt(recipeData.label[8]) + parseInt(recipeData.wrapper[8])+ parseInt(recipeData.others[8]);
tcouc_15.innerHTML = Math.ceil(overhead_var15 + sugar_var15 + butter_var15 + flour_var15 + egg_var15 + OBI_var15) + parseInt(recipeData.label[9]) + parseInt(recipeData.wrapper[9])+ parseInt(recipeData.others[9]);
tcouc_16.innerHTML = Math.ceil(overhead_var16 + sugar_var16 + butter_var16 + flour_var16 + egg_var16 + OBI_var16) + parseInt(recipeData.label[10]) + parseInt(recipeData.wrapper[10])+ parseInt(recipeData.others[10]);
tcouc_17.innerHTML = Math.ceil(overhead_var17 + sugar_var17 + butter_var17 + flour_var17 + egg_var17 + OBI_var17) + parseInt(recipeData.label[11]) + parseInt(recipeData.wrapper[11])+ parseInt(recipeData.others[11]);
tcouc_18.innerHTML = Math.ceil(overhead_var18 + sugar_var18 + butter_var18 + flour_var18 + egg_var18 + OBI_var18) + parseInt(recipeData.label[12]) + parseInt(recipeData.wrapper[12])+ parseInt(recipeData.others[12]);

tcouc_Row.appendChild(tcouc_Name);
// tcouc_Row.appendChild(tcouc_Cost);
// tcouc_Row.appendChild(tcouc_KG);
// tcouc_Row.appendChild(tcouc_Cost_KG);
tcouc_Row.appendChild(tcouc_6);
tcouc_Row.appendChild(tcouc_7);
tcouc_Row.appendChild(tcouc_8);
tcouc_Row.appendChild(tcouc_9);
tcouc_Row.appendChild(tcouc_10);
tcouc_Row.appendChild(tcouc_11);
tcouc_Row.appendChild(tcouc_12);
tcouc_Row.appendChild(tcouc_13);
tcouc_Row.appendChild(tcouc_14);
tcouc_Row.appendChild(tcouc_15);
tcouc_Row.appendChild(tcouc_16);
tcouc_Row.appendChild(tcouc_17);
tcouc_Row.appendChild(tcouc_18);
unicedCakesTable.appendChild(tcouc_Row);



// ======================= icing sugar for butter cream ===============

let isfbc_Row = document.createElement('tr');
isfbc_Row.setAttribute('id', 'isfbc-row');
let isfbc_Name = document.createElement('td');
let isfbc_Cost = document.createElement('td');
let isfbc_KG = document.createElement('td');
let isfbc_Cost_KG = document.createElement('td');
let isfbc_6 = document.createElement('td');
let isfbc_7 = document.createElement('td');
let isfbc_8 = document.createElement('td');
let isfbc_9 = document.createElement('td');
let isfbc_10 = document.createElement('td');
let isfbc_11 = document.createElement('td');
let isfbc_12 = document.createElement('td');
let isfbc_13 = document.createElement('td');
let isfbc_14 = document.createElement('td');
let isfbc_15 = document.createElement('td');
let isfbc_16 = document.createElement('td');
let isfbc_17 = document.createElement('td');
let isfbc_18 = document.createElement('td');

isfbc_Name.innerHTML = 'Icing Sugar For Butter Cream';
isfbc_Cost.innerHTML = parseInt(materialData['icing-for-butter-cream']['price']);
isfbc_KG.innerHTML = parseInt(materialData['icing-for-butter-cream']['unit']);
isfbc_Cost_KG.innerHTML = parseInt(materialData['icing-for-butter-cream']['p/u']);
var isfbc_var6 = Math.ceil((2* parseInt(recipeData['butterCream'][0])) * parseInt(materialData['icing-for-butter-cream']['p/u']) * 0.001);
isfbc_6.innerHTML = isfbc_var6;
var isfbc_var7 = Math.ceil((2* parseInt(recipeData['butterCream'][1])) * parseInt(materialData['icing-for-butter-cream']['p/u']) * 0.001);
isfbc_7.innerHTML = isfbc_var7;
var isfbc_var8 = Math.ceil((2* parseInt(recipeData['butterCream'][2])) * parseInt(materialData['icing-for-butter-cream']['p/u']) * 0.001);
isfbc_8.innerHTML = isfbc_var8;
var isfbc_var9 = Math.ceil((2* parseInt(recipeData['butterCream'][3])) * parseInt(materialData['icing-for-butter-cream']['p/u']) * 0.001);
isfbc_9.innerHTML = isfbc_var9;
var isfbc_var10 = Math.ceil((2* parseInt(recipeData['butterCream'][4])) * parseInt(materialData['icing-for-butter-cream']['p/u']) * 0.001);
isfbc_10.innerHTML = isfbc_var10;
var isfbc_var11 = Math.ceil((2* parseInt(recipeData['butterCream'][5])) * parseInt(materialData['icing-for-butter-cream']['p/u']) * 0.001);
isfbc_11.innerHTML = isfbc_var11;
var isfbc_var12 = Math.ceil((2* parseInt(recipeData['butterCream'][6])) * parseInt(materialData['icing-for-butter-cream']['p/u']) * 0.001);
isfbc_12.innerHTML = isfbc_var12;
var isfbc_var13 = Math.ceil((2* parseInt(recipeData['butterCream'][7])) * parseInt(materialData['icing-for-butter-cream']['p/u']) * 0.001);
isfbc_13.innerHTML = isfbc_var13;
var isfbc_var14 = Math.ceil((2* parseInt(recipeData['butterCream'][8])) * parseInt(materialData['icing-for-butter-cream']['p/u']) * 0.001);
isfbc_14.innerHTML = isfbc_var14;
var isfbc_var15 = Math.ceil((2* parseInt(recipeData['butterCream'][9])) * parseInt(materialData['icing-for-butter-cream']['p/u']) * 0.001);
isfbc_15.innerHTML = isfbc_var15;
var isfbc_var16 = Math.ceil((2* parseInt(recipeData['butterCream'][10])) * parseInt(materialData['icing-for-butter-cream']['p/u']) * 0.001);
isfbc_16.innerHTML = isfbc_var16;
var isfbc_var17 = Math.ceil((2* parseInt(recipeData['butterCream'][11])) * parseInt(materialData['icing-for-butter-cream']['p/u']) * 0.001);
isfbc_17.innerHTML = isfbc_var17;
var isfbc_var18 = Math.ceil((2* parseInt(recipeData['butterCream'][12])) * parseInt(materialData['icing-for-butter-cream']['p/u']) * 0.001);
isfbc_18.innerHTML = isfbc_var18;

isfbc_Row.appendChild(isfbc_Name);
// isfbc_Row.appendChild(isfbc_Cost);
// isfbc_Row.appendChild(isfbc_KG);
// isfbc_Row.appendChild(isfbc_Cost_KG);
isfbc_Row.appendChild(isfbc_6);
isfbc_Row.appendChild(isfbc_7);
isfbc_Row.appendChild(isfbc_8);
isfbc_Row.appendChild(isfbc_9);
isfbc_Row.appendChild(isfbc_10);
isfbc_Row.appendChild(isfbc_11);
isfbc_Row.appendChild(isfbc_12);
isfbc_Row.appendChild(isfbc_13);
isfbc_Row.appendChild(isfbc_14);
isfbc_Row.appendChild(isfbc_15);
isfbc_Row.appendChild(isfbc_16);
isfbc_Row.appendChild(isfbc_17);
isfbc_Row.appendChild(isfbc_18);
butterCakesTable.appendChild(isfbc_Row);


// ======================= butter for butter cream ===============

let bfbc_Row = document.createElement('tr');
bfbc_Row.setAttribute('id', 'bfbc-row');
let bfbc_Name = document.createElement('td');
let bfbc_Cost = document.createElement('td');
let bfbc_KG = document.createElement('td');
let bfbc_Cost_KG = document.createElement('td');
let bfbc_6 = document.createElement('td');
let bfbc_7 = document.createElement('td');
let bfbc_8 = document.createElement('td');
let bfbc_9 = document.createElement('td');
let bfbc_10 = document.createElement('td');
let bfbc_11 = document.createElement('td');
let bfbc_12 = document.createElement('td');
let bfbc_13 = document.createElement('td');
let bfbc_14 = document.createElement('td');
let bfbc_15 = document.createElement('td');
let bfbc_16 = document.createElement('td');
let bfbc_17 = document.createElement('td');
let bfbc_18 = document.createElement('td');

bfbc_Name.innerHTML = 'Butter For Butter Cream';
bfbc_Cost.innerHTML = parseInt(materialData['butter-for-butter-cream']['price']);
bfbc_KG.innerHTML = parseInt(materialData['butter-for-butter-cream']['unit']);
bfbc_Cost_KG.innerHTML = parseInt(materialData['butter-for-butter-cream']['p/u']);
var bfbc_var6 = Math.ceil(parseInt(recipeData['butterCream'][0]) * parseInt(materialData['icing-for-butter-cream']['p/u']) * 0.001);
bfbc_6.innerHTML = bfbc_var6;
var bfbc_var7 = Math.ceil(parseInt(recipeData['butterCream'][1]) * parseInt(materialData['icing-for-butter-cream']['p/u']) * 0.001);
bfbc_7.innerHTML = bfbc_var7;
var bfbc_var8 = Math.ceil(parseInt(recipeData['butterCream'][2]) * parseInt(materialData['icing-for-butter-cream']['p/u']) * 0.001);
bfbc_8.innerHTML = bfbc_var8;
var bfbc_var9 = Math.ceil(parseInt(recipeData['butterCream'][3]) * parseInt(materialData['icing-for-butter-cream']['p/u']) * 0.001);
bfbc_9.innerHTML = bfbc_var9;
var bfbc_var10 = Math.ceil(parseInt(recipeData['butterCream'][4]) * parseInt(materialData['icing-for-butter-cream']['p/u']) * 0.001);
bfbc_10.innerHTML = bfbc_var10;
var bfbc_var11 = Math.ceil(parseInt(recipeData['butterCream'][5]) * parseInt(materialData['icing-for-butter-cream']['p/u']) * 0.001);
bfbc_11.innerHTML = bfbc_var11;
var bfbc_var12 = Math.ceil(parseInt(recipeData['butterCream'][6]) * parseInt(materialData['icing-for-butter-cream']['p/u']) * 0.001);
bfbc_12.innerHTML = bfbc_var12;
var bfbc_var13 = Math.ceil(parseInt(recipeData['butterCream'][7]) * parseInt(materialData['icing-for-butter-cream']['p/u']) * 0.001);
bfbc_13.innerHTML = bfbc_var13;
var bfbc_var14 = Math.ceil(parseInt(recipeData['butterCream'][8]) * parseInt(materialData['icing-for-butter-cream']['p/u']) * 0.001);
bfbc_14.innerHTML = bfbc_var14;
var bfbc_var15 = Math.ceil(parseInt(recipeData['butterCream'][9]) * parseInt(materialData['icing-for-butter-cream']['p/u']) * 0.001);
bfbc_15.innerHTML = bfbc_var15;
var bfbc_var16 = Math.ceil(parseInt(recipeData['butterCream'][10]) * parseInt(materialData['icing-for-butter-cream']['p/u']) * 0.001);
bfbc_16.innerHTML = bfbc_var16;
var bfbc_var17 = Math.ceil(parseInt(recipeData['butterCream'][11]) * parseInt(materialData['icing-for-butter-cream']['p/u']) * 0.001);
bfbc_17.innerHTML = bfbc_var17;
var bfbc_var18 = Math.ceil(parseInt(recipeData['butterCream'][12]) * parseInt(materialData['icing-for-butter-cream']['p/u']) * 0.001);
bfbc_18.innerHTML = bfbc_var18;

bfbc_Row.appendChild(bfbc_Name);
// bfbc_Row.appendChild(bfbc_Cost);
// bfbc_Row.appendChild(bfbc_KG);
// bfbc_Row.appendChild(bfbc_Cost_KG);
bfbc_Row.appendChild(bfbc_6);
bfbc_Row.appendChild(bfbc_7);
bfbc_Row.appendChild(bfbc_8);
bfbc_Row.appendChild(bfbc_9);
bfbc_Row.appendChild(bfbc_10);
bfbc_Row.appendChild(bfbc_11);
bfbc_Row.appendChild(bfbc_12);
bfbc_Row.appendChild(bfbc_13);
bfbc_Row.appendChild(bfbc_14);
bfbc_Row.appendChild(bfbc_15);
bfbc_Row.appendChild(bfbc_16);
bfbc_Row.appendChild(bfbc_17);
bfbc_Row.appendChild(bfbc_18);
butterCakesTable.appendChild(bfbc_Row);


// ======================= other Baking cream ingredient ===============

let oifbc_Row = document.createElement('tr');
oifbc_Row.setAttribute('id', 'oifbc-row');
let oifbc_Name = document.createElement('td');
let oifbc_Cost = document.createElement('td');
let oifbc_KG = document.createElement('td');
let oifbc_Cost_KG = document.createElement('td');
let oifbc_6 = document.createElement('td');
let oifbc_7 = document.createElement('td');
let oifbc_8 = document.createElement('td');
let oifbc_9 = document.createElement('td');
let oifbc_10 = document.createElement('td');
let oifbc_11 = document.createElement('td');
let oifbc_12 = document.createElement('td');
let oifbc_13 = document.createElement('td');
let oifbc_14 = document.createElement('td');
let oifbc_15 = document.createElement('td');
let oifbc_16 = document.createElement('td');
let oifbc_17 = document.createElement('td');
let oifbc_18 = document.createElement('td');

oifbc_Name.innerHTML = 'Others';
oifbc_Cost.innerHTML = parseInt(materialData['other-ingredient-for-baking-cream-total']);
oifbc_KG.innerHTML = parseInt('1');
oifbc_Cost_KG.innerHTML = parseInt(materialData['other-ingredient-for-baking-cream-total']);
var oifbc_var6 = Math.ceil(parseFloat(parseInt(recipeData['butterCreamOthers'][0]) * parseInt(materialData['other-ingredient-for-baking-cream-total']) * 0.001));
oifbc_6.innerHTML = oifbc_var6;
var oifbc_var7 = Math.ceil(parseFloat(parseInt(recipeData['butterCreamOthers'][1]) * parseInt(materialData['other-ingredient-for-baking-cream-total']) * 0.001));
oifbc_7.innerHTML = oifbc_var7;
var oifbc_var8 = Math.ceil(parseFloat(parseInt(recipeData['butterCreamOthers'][2]) * parseInt(materialData['other-ingredient-for-baking-cream-total']) * 0.001));
oifbc_8.innerHTML = oifbc_var8;
var oifbc_var9 = Math.ceil(parseFloat(parseInt(recipeData['butterCreamOthers'][3]) * parseInt(materialData['other-ingredient-for-baking-cream-total']) * 0.001));
oifbc_9.innerHTML = oifbc_var9;
var oifbc_var10 = Math.ceil(parseFloat(parseInt(recipeData['butterCreamOthers'][4]) * parseInt(materialData['other-ingredient-for-baking-cream-total']) * 0.001));
oifbc_10.innerHTML = oifbc_var10;
var oifbc_var11 = Math.ceil(parseFloat(parseInt(recipeData['butterCreamOthers'][5]) * parseInt(materialData['other-ingredient-for-baking-cream-total']) * 0.001));
oifbc_11.innerHTML = oifbc_var11;
var oifbc_var12 = Math.ceil(parseFloat(parseInt(recipeData['butterCreamOthers'][6]) * parseInt(materialData['other-ingredient-for-baking-cream-total']) * 0.001));
oifbc_12.innerHTML = oifbc_var12;
var oifbc_var13 = Math.ceil(parseFloat(parseInt(recipeData['butterCreamOthers'][7]) * parseInt(materialData['other-ingredient-for-baking-cream-total']) * 0.001));
oifbc_13.innerHTML = oifbc_var13;
var oifbc_var14 = Math.ceil(parseFloat(parseInt(recipeData['butterCreamOthers'][8]) * parseInt(materialData['other-ingredient-for-baking-cream-total']) * 0.001));
oifbc_14.innerHTML = oifbc_var14;
var oifbc_var15 = Math.ceil(parseFloat(parseInt(recipeData['butterCreamOthers'][9]) * parseInt(materialData['other-ingredient-for-baking-cream-total']) * 0.001));
oifbc_15.innerHTML = oifbc_var15;
var oifbc_var16 = Math.ceil(parseFloat(parseInt(recipeData['butterCreamOthers'][10]) * parseInt(materialData['other-ingredient-for-baking-cream-total']) * 0.001));
oifbc_16.innerHTML = oifbc_var16;
var oifbc_var17 = Math.ceil(parseFloat(parseInt(recipeData['butterCreamOthers'][11]) * parseInt(materialData['other-ingredient-for-baking-cream-total']) * 0.001));
oifbc_17.innerHTML = oifbc_var17;
var oifbc_var18 = Math.ceil(parseFloat(parseInt(recipeData['butterCreamOthers'][12]) * parseInt(materialData['other-ingredient-for-baking-cream-total']) * 0.001));
oifbc_18.innerHTML = oifbc_var18;

oifbc_Row.appendChild(oifbc_Name);
// oifbc_Row.appendChild(oifbc_Cost);
// oifbc_Row.appendChild(oifbc_KG);
// oifbc_Row.appendChild(oifbc_Cost_KG);
oifbc_Row.appendChild(oifbc_6);
oifbc_Row.appendChild(oifbc_7);
oifbc_Row.appendChild(oifbc_8);
oifbc_Row.appendChild(oifbc_9);
oifbc_Row.appendChild(oifbc_10);
oifbc_Row.appendChild(oifbc_11);
oifbc_Row.appendChild(oifbc_12);
oifbc_Row.appendChild(oifbc_13);
oifbc_Row.appendChild(oifbc_14);
oifbc_Row.appendChild(oifbc_15);
oifbc_Row.appendChild(oifbc_16);
oifbc_Row.appendChild(oifbc_17);
oifbc_Row.appendChild(oifbc_18);
butterCakesTable.appendChild(oifbc_Row);


// ========================= BOX ROW ===================
let box_Row = document.createElement('tr');
box_Row.setAttribute('id', 'box_row');
let box_Name = document.createElement('td');
let box_Cost = document.createElement('td');
let box_KG = document.createElement('td');
let box_Cost_KG = document.createElement('td');
let box_6 = document.createElement('td');
let box_7 = document.createElement('td');
let box_8 = document.createElement('td');
let box_9 = document.createElement('td');
let box_10 = document.createElement('td');
let box_11 = document.createElement('td');
let box_12 = document.createElement('td');
let box_13 = document.createElement('td');
let box_14 = document.createElement('td');
let box_15 = document.createElement('td');
let box_16 = document.createElement('td');
let box_17 = document.createElement('td');
let box_18 = document.createElement('td');

box_Name.innerHTML = 'Cake Box';
box_Cost.innerHTML = '';
box_KG.innerHTML = '';
box_Cost_KG.innerHTML = '';
box_6.innerHTML = parseInt(recipeData.box[0]);
box_7.innerHTML = parseInt(recipeData.box[1]);
box_8.innerHTML = parseInt(recipeData.box[2]);
box_9.innerHTML = parseInt(recipeData.box[3]);
box_10.innerHTML = parseInt(recipeData.box[4]);
box_11.innerHTML = parseInt(recipeData.box[5]);
box_12.innerHTML = parseInt(recipeData.box[6]);
box_13.innerHTML = parseInt(recipeData.box[7]);
box_14.innerHTML = parseInt(recipeData.box[8]);
box_15.innerHTML = parseInt(recipeData.box[9]);
box_16.innerHTML = parseInt(recipeData.box[10]);
box_17.innerHTML = parseInt(recipeData.box[11]);
box_18.innerHTML = parseInt(recipeData.box[12]);

box_Row.appendChild(box_Name);
// box_Row.appendChild(box_Cost);
// box_Row.appendChild(box_KG);
// box_Row.appendChild(box_Cost_KG);
box_Row.appendChild(box_6);
box_Row.appendChild(box_7);
box_Row.appendChild(box_8);
box_Row.appendChild(box_9);
box_Row.appendChild(box_10);
box_Row.appendChild(box_11);
box_Row.appendChild(box_12);
box_Row.appendChild(box_13);
box_Row.appendChild(box_14);
box_Row.appendChild(box_15);
box_Row.appendChild(box_16);
box_Row.appendChild(box_17);
box_Row.appendChild(box_18);
butterCakesTable.appendChild(box_Row);



// ========================= Board ROW ===================
let board_Row = document.createElement('tr');
board_Row.setAttribute('id', 'board_row');
let board_Name = document.createElement('td');
let board_Cost = document.createElement('td');
let board_KG = document.createElement('td');
let board_Cost_KG = document.createElement('td');
let board_6 = document.createElement('td');
let board_7 = document.createElement('td');
let board_8 = document.createElement('td');
let board_9 = document.createElement('td');
let board_10 = document.createElement('td');
let board_11 = document.createElement('td');
let board_12 = document.createElement('td');
let board_13 = document.createElement('td');
let board_14 = document.createElement('td');
let board_15 = document.createElement('td');
let board_16 = document.createElement('td');
let board_17 = document.createElement('td');
let board_18 = document.createElement('td');

board_Name.innerHTML = 'Cake Board';
board_Cost.innerHTML = '';
board_KG.innerHTML = '';
board_Cost_KG.innerHTML = '';
board_6.innerHTML = parseInt(recipeData.board[0]);
board_7.innerHTML = parseInt(recipeData.board[1]);
board_8.innerHTML = parseInt(recipeData.board[2]);
board_9.innerHTML = parseInt(recipeData.board[3]);
board_10.innerHTML = parseInt(recipeData.board[4]);
board_11.innerHTML = parseInt(recipeData.board[5]);
board_12.innerHTML = parseInt(recipeData.board[6]);
board_13.innerHTML = parseInt(recipeData.board[7]);
board_14.innerHTML = parseInt(recipeData.board[8]);
board_15.innerHTML = parseInt(recipeData.board[9]);
board_16.innerHTML = parseInt(recipeData.board[10]);
board_17.innerHTML = parseInt(recipeData.board[11]);
board_18.innerHTML = parseInt(recipeData.board[12]);

board_Row.appendChild(board_Name);
// board_Row.appendChild(board_Cost);
// board_Row.appendChild(board_KG);
// board_Row.appendChild(board_Cost_KG);
board_Row.appendChild(board_6);
board_Row.appendChild(board_7);
board_Row.appendChild(board_8);
board_Row.appendChild(board_9);
board_Row.appendChild(board_10);
board_Row.appendChild(board_11);
board_Row.appendChild(board_12);
board_Row.appendChild(board_13);
board_Row.appendChild(board_14);
board_Row.appendChild(board_15);
board_Row.appendChild(board_16);
board_Row.appendChild(board_17);
board_Row.appendChild(board_18);
butterCakesTable.appendChild(board_Row);



// ========================= Cost Of Butter Cream Row ===================
let cobc_Row = document.createElement('tr');
cobc_Row.setAttribute('id', 'cobc_row');
let cobc_Name = document.createElement('td');
let cobc_Cost = document.createElement('td');
let cobc_KG = document.createElement('td');
let cobc_Cost_KG = document.createElement('td');
let cobc_6 = document.createElement('td');
let cobc_7 = document.createElement('td');
let cobc_8 = document.createElement('td');
let cobc_9 = document.createElement('td');
let cobc_10 = document.createElement('td');
let cobc_11 = document.createElement('td');
let cobc_12 = document.createElement('td');
let cobc_13 = document.createElement('td');
let cobc_14 = document.createElement('td');
let cobc_15 = document.createElement('td');
let cobc_16 = document.createElement('td');
let cobc_17 = document.createElement('td');
let cobc_18 = document.createElement('td');

cobc_Name.innerHTML = 'Cost Of Butter Cream';
cobc_Cost.innerHTML = '';
cobc_KG.innerHTML = '';
cobc_Cost_KG.innerHTML = '';
var cobc_var6 = isfbc_var6 + bfbc_var6 + oifbc_var6 + parseInt(recipeData.box[0]) + parseInt(recipeData.board[0]);
cobc_6.innerHTML = cobc_var6;
var cobc_var7 = isfbc_var7 + bfbc_var7 + oifbc_var7 + parseInt(recipeData.box[1]) + parseInt(recipeData.board[1]);
cobc_7.innerHTML = cobc_var7;
var cobc_var8 = isfbc_var8 + bfbc_var8 + oifbc_var8 + parseInt(recipeData.box[2]) + parseInt(recipeData.board[2]);
cobc_8.innerHTML = cobc_var8;
var cobc_var9 = isfbc_var9 + bfbc_var9 + oifbc_var9 + parseInt(recipeData.box[3]) + parseInt(recipeData.board[3]);
cobc_9.innerHTML = cobc_var9;
var cobc_var10 = isfbc_var10 + bfbc_var10 + oifbc_var10 + parseInt(recipeData.box[4]) + parseInt(recipeData.board[4]);
cobc_10.innerHTML = cobc_var10;
var cobc_var11 = isfbc_var11 + bfbc_var11 + oifbc_var11 + parseInt(recipeData.box[5]) + parseInt(recipeData.board[5]);
cobc_11.innerHTML = cobc_var11;
var cobc_var12 = isfbc_var12 + bfbc_var12 + oifbc_var12 + parseInt(recipeData.box[6]) + parseInt(recipeData.board[6]);
cobc_12.innerHTML = cobc_var12;
var cobc_var13 = isfbc_var13 + bfbc_var13 + oifbc_var13 + parseInt(recipeData.box[7]) + parseInt(recipeData.board[7]);
cobc_13.innerHTML = cobc_var13;
var cobc_var14 = isfbc_var14 + bfbc_var14 + oifbc_var14 + parseInt(recipeData.box[8]) + parseInt(recipeData.board[8]);
cobc_14.innerHTML = cobc_var14;
var cobc_var15 = isfbc_var15 + bfbc_var15 + oifbc_var15 + parseInt(recipeData.box[9]) + parseInt(recipeData.board[9]);
cobc_15.innerHTML = cobc_var15;
var cobc_var16 = isfbc_var16 + bfbc_var16 + oifbc_var16 + parseInt(recipeData.box[10]) + parseInt(recipeData.board[10]);
cobc_16.innerHTML = cobc_var16;
var cobc_var17 = isfbc_var17 + bfbc_var17 + oifbc_var17 + parseInt(recipeData.box[11]) + parseInt(recipeData.board[11]);
cobc_17.innerHTML = cobc_var17;
var cobc_var18 = isfbc_var18 + bfbc_var18 + oifbc_var18 + parseInt(recipeData.box[12]) + parseInt(recipeData.board[12]);
cobc_18.innerHTML = cobc_var18;

cobc_Row.appendChild(cobc_Name);
// cobc_Row.appendChild(cobc_Cost);
// cobc_Row.appendChild(cobc_KG);
// cobc_Row.appendChild(cobc_Cost_KG);
cobc_Row.appendChild(cobc_6);
cobc_Row.appendChild(cobc_7);
cobc_Row.appendChild(cobc_8);
cobc_Row.appendChild(cobc_9);
cobc_Row.appendChild(cobc_10);
cobc_Row.appendChild(cobc_11);
cobc_Row.appendChild(cobc_12);
cobc_Row.appendChild(cobc_13);
cobc_Row.appendChild(cobc_14);
cobc_Row.appendChild(cobc_15);
cobc_Row.appendChild(cobc_16);
cobc_Row.appendChild(cobc_17);
cobc_Row.appendChild(cobc_18);
butterCakesTable.appendChild(cobc_Row);


// ========================= total cost of uniced cake row ===================
let tcouc_Row_ = document.createElement('tr');
tcouc_Row_.setAttribute('id', 'tcouc-fbbc_row');
let tcouc_Name_ = document.createElement('td');
let tcouc_Cost_ = document.createElement('td');
let tcouc_KG_ = document.createElement('td');
let tcouc_Cost_KG_ = document.createElement('td');
let tcouc_6_ = document.createElement('td');
let tcouc_7_ = document.createElement('td');
let tcouc_8_ = document.createElement('td');
let tcouc_9_ = document.createElement('td');
let tcouc_10_ = document.createElement('td');
let tcouc_11_ = document.createElement('td');
let tcouc_12_ = document.createElement('td');
let tcouc_13_ = document.createElement('td');
let tcouc_14_ = document.createElement('td');
let tcouc_15_ = document.createElement('td');
let tcouc_16_ = document.createElement('td');
let tcouc_17_ = document.createElement('td');
let tcouc_18_ = document.createElement('td');

tcouc_Name_.innerHTML = 'TOTAL COST OF UNICED CAKES';
tcouc_Cost_.innerHTML = ' ';
tcouc_KG_.innerHTML = ' ';
tcouc_Cost_KG_.innerHTML = ' ';
var tcouc_var6 = Math.ceil(overhead_var6 + sugar_var6 + butter_var6 + flour_var6 + egg_var6 + OBI_var6) + parseInt(recipeData.label[0]) + parseInt(recipeData.wrapper[0])+ parseInt(recipeData.others[0]);
tcouc_6_.innerHTML = tcouc_var6;
var tcouc_var7 = Math.ceil(overhead_var7 + sugar_var7 + butter_var7 + flour_var7 + egg_var7 + OBI_var7) + parseInt(recipeData.others[1]) + parseInt(recipeData.label[1]) + parseInt(recipeData.wrapper[1]);
tcouc_7_.innerHTML = tcouc_var7;
var tcouc_var8 = Math.ceil(overhead_var8 + sugar_var8 + butter_var8 + flour_var8 + egg_var8 + OBI_var8) + parseInt(recipeData.label[2]) + parseInt(recipeData.wrapper[2])+ parseInt(recipeData.others[2]);
tcouc_8_.innerHTML = tcouc_var8;
var tcouc_var9 = Math.ceil(overhead_var9 + sugar_var9 + butter_var9 + flour_var9 + egg_var9 + OBI_var9) + parseInt(recipeData.label[3]) + parseInt(recipeData.wrapper[3])+ parseInt(recipeData.others[3]);
tcouc_9_.innerHTML = tcouc_var9;
var tcouc_var10 = Math.ceil(overhead_var10 + sugar_var10 + butter_var10 + flour_var10 + egg_var10 + OBI_var10) + parseInt(recipeData.label[4]) + parseInt(recipeData.wrapper[4])+ parseInt(recipeData.others[4]);
tcouc_10_.innerHTML = tcouc_var10;
var tcouc_var11 = Math.ceil(overhead_var11 + sugar_var11 + butter_var11 + flour_var11 + egg_var11 + OBI_var11) + parseInt(recipeData.label[5]) + parseInt(recipeData.wrapper[5])+ parseInt(recipeData.others[5]);
tcouc_11_.innerHTML = tcouc_var11;
var tcouc_var12 = Math.ceil(overhead_var12 + sugar_var12 + butter_var12 + flour_var12 + egg_var12 + OBI_var12) + parseInt(recipeData.label[6]) + parseInt(recipeData.wrapper[6])+ parseInt(recipeData.others[6]);
tcouc_12_.innerHTML = tcouc_var12;
var tcouc_var13 = Math.ceil(overhead_var13 + sugar_var13 + butter_var13 + flour_var13 + egg_var13 + OBI_var13) + parseInt(recipeData.label[7]) + parseInt(recipeData.wrapper[7])+ parseInt(recipeData.others[7]);
tcouc_13_.innerHTML = tcouc_var13;
var tcouc_var14 = Math.ceil(overhead_var14 + sugar_var14 + butter_var14 + flour_var14 + egg_var14 + OBI_var14) + parseInt(recipeData.label[8]) + parseInt(recipeData.wrapper[8])+ parseInt(recipeData.others[8]);
tcouc_14_.innerHTML = tcouc_var14;
var tcouc_var15 = Math.ceil(overhead_var15 + sugar_var15 + butter_var15 + flour_var15 + egg_var15 + OBI_var15) + parseInt(recipeData.label[9]) + parseInt(recipeData.wrapper[9])+ parseInt(recipeData.others[9]);
tcouc_15_.innerHTML = tcouc_var15;
var tcouc_var16 = Math.ceil(overhead_var16 + sugar_var16 + butter_var16 + flour_var16 + egg_var16 + OBI_var16) + parseInt(recipeData.label[10]) + parseInt(recipeData.wrapper[10])+ parseInt(recipeData.others[10]);
tcouc_16_.innerHTML = tcouc_var16;
var tcouc_var17 = Math.ceil(overhead_var17 + sugar_var17 + butter_var17 + flour_var17 + egg_var17 + OBI_var17) + parseInt(recipeData.label[11]) + parseInt(recipeData.wrapper[11]) + parseInt(recipeData.others[11]);
tcouc_17_.innerHTML = tcouc_var17;
var tcouc_var18 = Math.ceil(overhead_var18 + sugar_var18 + butter_var18 + flour_var18 + egg_var18 + OBI_var18) + parseInt(recipeData.label[12]) + parseInt(recipeData.wrapper[12]) + parseInt(recipeData.others[12]);
tcouc_18_.innerHTML = tcouc_var18;

tcouc_Row_.appendChild(tcouc_Name_);
// tcouc_Row_.appendChild(tcouc_Cost_);
// tcouc_Row_.appendChild(tcouc_KG_);
// tcouc_Row_.appendChild(tcouc_Cost_KG_);
tcouc_Row_.appendChild(tcouc_6_);
tcouc_Row_.appendChild(tcouc_7_);
tcouc_Row_.appendChild(tcouc_8_);
tcouc_Row_.appendChild(tcouc_9_);
tcouc_Row_.appendChild(tcouc_10_);
tcouc_Row_.appendChild(tcouc_11_);
tcouc_Row_.appendChild(tcouc_12_);
tcouc_Row_.appendChild(tcouc_13_);
tcouc_Row_.appendChild(tcouc_14_);
tcouc_Row_.appendChild(tcouc_15_);
tcouc_Row_.appendChild(tcouc_16_);
tcouc_Row_.appendChild(tcouc_17_);
tcouc_Row_.appendChild(tcouc_18_);
butterCakesTable.appendChild(tcouc_Row_);




// ======= TOTL COST OF BUTTER CREAM CAKES =======

let tcobcc_Row_ = document.createElement('tr');
tcobcc_Row_.setAttribute('id', 'tcobcc_row');
let tcobcc_Name_ = document.createElement('td');
let tcobcc_Cost_ = document.createElement('td');
let tcobcc_KG_ = document.createElement('td');
let tcobcc_Cost_KG_ = document.createElement('td');
let tcobcc_6_ = document.createElement('td');
let tcobcc_7_ = document.createElement('td');
let tcobcc_8_ = document.createElement('td');
let tcobcc_9_ = document.createElement('td');
let tcobcc_10_ = document.createElement('td');
let tcobcc_11_ = document.createElement('td');
let tcobcc_12_ = document.createElement('td');
let tcobcc_13_ = document.createElement('td');
let tcobcc_14_ = document.createElement('td');
let tcobcc_15_ = document.createElement('td');
let tcobcc_16_ = document.createElement('td');
let tcobcc_17_ = document.createElement('td');
let tcobcc_18_ = document.createElement('td');

tcobcc_Name_.innerHTML = 'TOTAL COST OF BUTTER CREAM CAKES';
tcobcc_Cost_.innerHTML = ' ';
tcobcc_KG_.innerHTML = ' ';
tcobcc_Cost_KG_.innerHTML = ' ';
var tcobcc_var6 = Math.ceil(tcouc_var6 + cobc_var6);
tcobcc_6_.innerHTML = tcobcc_var6;
var tcobcc_var7 = Math.ceil(tcouc_var7 + cobc_var7);
tcobcc_7_.innerHTML = tcobcc_var7;
var tcobcc_var8 = Math.ceil(tcouc_var8 + cobc_var8);
tcobcc_8_.innerHTML = tcobcc_var8;
var tcobcc_var9 = Math.ceil(tcouc_var9 + cobc_var9);
tcobcc_9_.innerHTML = tcobcc_var9;
var tcobcc_var10 = Math.ceil(tcouc_var10 + cobc_var10);
tcobcc_10_.innerHTML = tcobcc_var10;
var tcobcc_var11 = Math.ceil(tcouc_var11 + cobc_var11);
tcobcc_11_.innerHTML = tcobcc_var11;
var tcobcc_var12 = Math.ceil(tcouc_var12 + cobc_var12);
tcobcc_12_.innerHTML = tcobcc_var12;
var tcobcc_var13 = Math.ceil(tcouc_var13 + cobc_var13);
tcobcc_13_.innerHTML = tcobcc_var13;
var tcobcc_var14 = Math.ceil(tcouc_var14 + cobc_var14);
tcobcc_14_.innerHTML = tcobcc_var14;
var tcobcc_var15 = Math.ceil(tcouc_var15 + cobc_var15);
tcobcc_15_.innerHTML = tcobcc_var15;
var tcobcc_var16 = Math.ceil(tcouc_var16 + cobc_var16);
tcobcc_16_.innerHTML = tcobcc_var16;
var tcobcc_var17 = Math.ceil(tcouc_var17 + cobc_var17);
tcobcc_17_.innerHTML = tcobcc_var17;
var tcobcc_var18 = Math.ceil(tcouc_var18 + cobc_var18);
tcobcc_18_.innerHTML = tcobcc_var18;

tcobcc_Row_.appendChild(tcobcc_Name_);
// tcobcc_Row_.appendChild(tcobcc_Cost_);
// tcobcc_Row_.appendChild(tcobcc_KG_);
// tcobcc_Row_.appendChild(tcobcc_Cost_KG_);
tcobcc_Row_.appendChild(tcobcc_6_);
tcobcc_Row_.appendChild(tcobcc_7_);
tcobcc_Row_.appendChild(tcobcc_8_);
tcobcc_Row_.appendChild(tcobcc_9_);
tcobcc_Row_.appendChild(tcobcc_10_);
tcobcc_Row_.appendChild(tcobcc_11_);
tcobcc_Row_.appendChild(tcobcc_12_);
tcobcc_Row_.appendChild(tcobcc_13_);
tcobcc_Row_.appendChild(tcobcc_14_);
tcobcc_Row_.appendChild(tcobcc_15_);
tcobcc_Row_.appendChild(tcobcc_16_);
tcobcc_Row_.appendChild(tcobcc_17_);
tcobcc_Row_.appendChild(tcobcc_18_);
butterCakesTable.appendChild(tcobcc_Row_);



// ========================= icing sugar fondant row ===================
let isffRow = document.createElement('tr');
isffRow.setAttribute('id', 'isff-row');
let isffName = document.createElement('td');
let isffCost = document.createElement('td');
let isffKG = document.createElement('td');
let isffCost_KG = document.createElement('td');
let isff6 = document.createElement('td');
let isff7 = document.createElement('td');
let isff8 = document.createElement('td');
let isff9 = document.createElement('td');
let isff10 = document.createElement('td');
let isff11 = document.createElement('td');
let isff12 = document.createElement('td');
let isff13 = document.createElement('td');
let isff14 = document.createElement('td');
let isff15 = document.createElement('td');
let isff16 = document.createElement('td');
let isff17 = document.createElement('td');
let isff18 = document.createElement('td');

isffName.innerHTML = 'Icing Sugar Fondant';
isffCost.innerHTML = parseInt(materialData['icing-sugar-fondant'].price);
isffKG.innerHTML = parseInt(materialData['icing-sugar-fondant'].unit);
isffCost_KG.innerHTML = parseFloat(materialData['icing-sugar-fondant']['p/u']);
var isff_var6 = parseFloat(materialData['icing-sugar-fondant']['p/u']) * (parseInt(recipeData.fondant[0])*0.001);
isff6.innerHTML = Math.ceil(isff_var6);
var isff_var7 = parseFloat(materialData['icing-sugar-fondant']['p/u']) * (parseInt(recipeData.fondant[1])*0.001);
isff7.innerHTML = Math.ceil(isff_var7);
var isff_var8 = parseFloat(materialData['icing-sugar-fondant']['p/u']) * (parseInt(recipeData.fondant[2])*0.001);
isff8.innerHTML = Math.ceil(isff_var8);
var isff_var9 = parseFloat(materialData['icing-sugar-fondant']['p/u']) * (parseInt(recipeData.fondant[3])*0.001);
isff9.innerHTML = Math.ceil(isff_var9);
var isff_var10 = parseFloat(materialData['icing-sugar-fondant']['p/u']) * (parseInt(recipeData.fondant[4])*0.001);
isff10.innerHTML = Math.ceil(isff_var10);
var isff_var11 = parseFloat(materialData['icing-sugar-fondant']['p/u']) * (parseInt(recipeData.fondant[5])*0.001);
isff11.innerHTML = Math.ceil(isff_var11);
var isff_var12 = parseFloat(materialData['icing-sugar-fondant']['p/u']) * (parseInt(recipeData.fondant[6])*0.001);
isff12.innerHTML = Math.ceil(isff_var12);
var isff_var13 = parseFloat(materialData['icing-sugar-fondant']['p/u']) * (parseInt(recipeData.fondant[7])*0.001);
isff13.innerHTML = Math.ceil(isff_var13);
var isff_var14 = parseFloat(materialData['icing-sugar-fondant']['p/u']) * (parseInt(recipeData.fondant[8])*0.001);
isff14.innerHTML = Math.ceil(isff_var14);
var isff_var15 = parseFloat(materialData['icing-sugar-fondant']['p/u']) * (parseInt(recipeData.fondant[9])*0.001);
isff15.innerHTML = Math.ceil(isff_var15);
var isff_var16 = parseFloat(materialData['icing-sugar-fondant']['p/u']) * (parseInt(recipeData.fondant[10])*0.001);
isff16.innerHTML = Math.ceil(isff_var16);
var isff_var17 = parseFloat(materialData['icing-sugar-fondant']['p/u']) * (parseInt(recipeData.fondant[11])*0.001);
isff17.innerHTML = Math.ceil(isff_var17);
var isff_var18 = parseFloat(materialData['icing-sugar-fondant']['p/u']) * (parseInt(recipeData.fondant[12])*0.001);
isff18.innerHTML = Math.ceil(isff_var18);


isffRow.appendChild(isffName);
// isffRow.appendChild(isffCost);
// isffRow.appendChild(isffKG);
// isffRow.appendChild(isffCost_KG);
isffRow.appendChild(isff6);
isffRow.appendChild(isff7);
isffRow.appendChild(isff8);
isffRow.appendChild(isff9);
isffRow.appendChild(isff10);
isffRow.appendChild(isff11);
isffRow.appendChild(isff12);
isffRow.appendChild(isff13);
isffRow.appendChild(isff14);
isffRow.appendChild(isff15);
isffRow.appendChild(isff16);
isffRow.appendChild(isff17);
isffRow.appendChild(isff18);
fondantCakesTable.appendChild(isffRow);


// ========================= colours and disco row ===================
let cdffRow = document.createElement('tr');
cdffRow.setAttribute('id', 'cdff-row');
let cdffName = document.createElement('td');
let cdffCost = document.createElement('td');
let cdffKG = document.createElement('td');
let cdffCost_KG = document.createElement('td');
let cdff6 = document.createElement('td');
let cdff7 = document.createElement('td');
let cdff8 = document.createElement('td');
let cdff9 = document.createElement('td');
let cdff10 = document.createElement('td');
let cdff11 = document.createElement('td');
let cdff12 = document.createElement('td');
let cdff13 = document.createElement('td');
let cdff14 = document.createElement('td');
let cdff15 = document.createElement('td');
let cdff16 = document.createElement('td');
let cdff17 = document.createElement('td');
let cdff18 = document.createElement('td');

cdffName.innerHTML = 'Colour Disco Fondant';
cdffCost.innerHTML = parseInt(materialData['colour-disco-fondant'].price);
cdffKG.innerHTML = parseInt(materialData['colour-disco-fondant'].unit);
cdffCost_KG.innerHTML = parseFloat(materialData['colour-disco-fondant']['p/u']);
var cdff_var6 = parseFloat(materialData['colour-disco-fondant']['p/u']) * (parseInt(recipeData.fondant[0])*0.001);
cdff6.innerHTML = Math.ceil(cdff_var6);
var cdff_var7 = parseFloat(materialData['colour-disco-fondant']['p/u']) * (parseInt(recipeData.fondant[1])*0.001);
cdff7.innerHTML = Math.ceil(cdff_var7);
var cdff_var8 = parseFloat(materialData['colour-disco-fondant']['p/u']) * (parseInt(recipeData.fondant[2])*0.001);
cdff8.innerHTML = Math.ceil(cdff_var8);
var cdff_var9 = parseFloat(materialData['colour-disco-fondant']['p/u']) * (parseInt(recipeData.fondant[3])*0.001);
cdff9.innerHTML = Math.ceil(cdff_var9);
var cdff_var10 = parseFloat(materialData['colour-disco-fondant']['p/u']) * (parseInt(recipeData.fondant[4])*0.001);
cdff10.innerHTML = Math.ceil(cdff_var10);
var cdff_var11 = parseFloat(materialData['colour-disco-fondant']['p/u']) * (parseInt(recipeData.fondant[5])*0.001);
cdff11.innerHTML = Math.ceil(cdff_var11);
var cdff_var12 = parseFloat(materialData['colour-disco-fondant']['p/u']) * (parseInt(recipeData.fondant[6])*0.001);
cdff12.innerHTML = Math.ceil(cdff_var12);
var cdff_var13 = parseFloat(materialData['colour-disco-fondant']['p/u']) * (parseInt(recipeData.fondant[7])*0.001);
cdff13.innerHTML = Math.ceil(cdff_var13);
var cdff_var14 = parseFloat(materialData['colour-disco-fondant']['p/u']) * (parseInt(recipeData.fondant[8])*0.001);
cdff14.innerHTML = Math.ceil(cdff_var14);
var cdff_var15 = parseFloat(materialData['colour-disco-fondant']['p/u']) * (parseInt(recipeData.fondant[9])*0.001);
cdff15.innerHTML = Math.ceil(cdff_var15);
var cdff_var16 = parseFloat(materialData['colour-disco-fondant']['p/u']) * (parseInt(recipeData.fondant[10])*0.001);
cdff16.innerHTML = Math.ceil(cdff_var16);
var cdff_var17 = parseFloat(materialData['colour-disco-fondant']['p/u']) * (parseInt(recipeData.fondant[11])*0.001);
cdff17.innerHTML = Math.ceil(cdff_var17);
var cdff_var18 = parseFloat(materialData['colour-disco-fondant']['p/u']) * (parseInt(recipeData.fondant[12])*0.001);
cdff18.innerHTML = Math.ceil(cdff_var18);


cdffRow.appendChild(cdffName);
// cdffRow.appendChild(cdffCost);
// cdffRow.appendChild(cdffKG);
// cdffRow.appendChild(cdffCost_KG);
cdffRow.appendChild(cdff6);
cdffRow.appendChild(cdff7);
cdffRow.appendChild(cdff8);
cdffRow.appendChild(cdff9);
cdffRow.appendChild(cdff10);
cdffRow.appendChild(cdff11);
cdffRow.appendChild(cdff12);
cdffRow.appendChild(cdff13);
cdffRow.appendChild(cdff14);
cdffRow.appendChild(cdff15);
cdffRow.appendChild(cdff16);
cdffRow.appendChild(cdff17);
cdffRow.appendChild(cdff18);
fondantCakesTable.appendChild(cdffRow);


// ======================= other fondant ingredient ===============

let oiff_Row = document.createElement('tr');
oiff_Row.setAttribute('id', 'oiff-row');
let oiff_Name = document.createElement('td');
let oiff_Cost = document.createElement('td');
let oiff_KG = document.createElement('td');
let oiff_Cost_KG = document.createElement('td');
let oiff_6 = document.createElement('td');
let oiff_7 = document.createElement('td');
let oiff_8 = document.createElement('td');
let oiff_9 = document.createElement('td');
let oiff_10 = document.createElement('td');
let oiff_11 = document.createElement('td');
let oiff_12 = document.createElement('td');
let oiff_13 = document.createElement('td');
let oiff_14 = document.createElement('td');
let oiff_15 = document.createElement('td');
let oiff_16 = document.createElement('td');
let oiff_17 = document.createElement('td');
let oiff_18 = document.createElement('td');

oiff_Name.innerHTML = 'Others';
oiff_Cost.innerHTML = parseInt(materialData['other-ingredient-for-fondant']);
oiff_KG.innerHTML = parseInt('1');
oiff_Cost_KG.innerHTML = parseInt(materialData['other-ingredient-for-fondant']);
var oiff_var6 = Math.ceil(parseFloat(parseInt(recipeData.fondant[0]) * parseInt(materialData['other-ingredient-for-fondant']) * 0.001));
oiff_6.innerHTML = oiff_var6;
var oiff_var7 = Math.ceil(parseFloat(parseInt(recipeData.fondant[1]) * parseInt(materialData['other-ingredient-for-fondant']) * 0.001));
oiff_7.innerHTML = oiff_var7;
var oiff_var8 = Math.ceil(parseFloat(parseInt(recipeData.fondant[2]) * parseInt(materialData['other-ingredient-for-fondant']) * 0.001));
oiff_8.innerHTML = oiff_var8;
var oiff_var9 = Math.ceil(parseFloat(parseInt(recipeData.fondant[3]) * parseInt(materialData['other-ingredient-for-fondant']) * 0.001));
oiff_9.innerHTML = oiff_var9;
var oiff_var10 = Math.ceil(parseFloat(parseInt(recipeData.fondant[4]) * parseInt(materialData['other-ingredient-for-fondant']) * 0.001));
oiff_10.innerHTML = oiff_var10;
var oiff_var11 = Math.ceil(parseFloat(parseInt(recipeData.fondant[5]) * parseInt(materialData['other-ingredient-for-fondant']) * 0.001));
oiff_11.innerHTML = oiff_var11;
var oiff_var12 = Math.ceil(parseFloat(parseInt(recipeData.fondant[6]) * parseInt(materialData['other-ingredient-for-fondant']) * 0.001));
oiff_12.innerHTML = oiff_var12;
var oiff_var13 = Math.ceil(parseFloat(parseInt(recipeData.fondant[7]) * parseInt(materialData['other-ingredient-for-fondant']) * 0.001));
oiff_13.innerHTML = oiff_var13;
var oiff_var14 = Math.ceil(parseFloat(parseInt(recipeData.fondant[8]) * parseInt(materialData['other-ingredient-for-fondant']) * 0.001));
oiff_14.innerHTML = oiff_var14;
var oiff_var15 = Math.ceil(parseFloat(parseInt(recipeData.fondant[9]) * parseInt(materialData['other-ingredient-for-fondant']) * 0.001));
oiff_15.innerHTML = oiff_var15;
var oiff_var16 = Math.ceil(parseFloat(parseInt(recipeData.fondant[10]) * parseInt(materialData['other-ingredient-for-fondant']) * 0.001));
oiff_16.innerHTML = oiff_var16;
var oiff_var17 = Math.ceil(parseFloat(parseInt(recipeData.fondant[11]) * parseInt(materialData['other-ingredient-for-fondant']) * 0.001));
oiff_17.innerHTML = oiff_var17;
var oiff_var18 = Math.ceil(parseFloat(parseInt(recipeData.fondant[12]) * parseInt(materialData['other-ingredient-for-fondant']) * 0.001));
oiff_18.innerHTML = oiff_var18;

oiff_Row.appendChild(oiff_Name);
// oiff_Row.appendChild(oiff_Cost);
// oiff_Row.appendChild(oiff_KG);
// oiff_Row.appendChild(oiff_Cost_KG);
oiff_Row.appendChild(oiff_6);
oiff_Row.appendChild(oiff_7);
oiff_Row.appendChild(oiff_8);
oiff_Row.appendChild(oiff_9);
oiff_Row.appendChild(oiff_10);
oiff_Row.appendChild(oiff_11);
oiff_Row.appendChild(oiff_12);
oiff_Row.appendChild(oiff_13);
oiff_Row.appendChild(oiff_14);
oiff_Row.appendChild(oiff_15);
oiff_Row.appendChild(oiff_16);
oiff_Row.appendChild(oiff_17);
oiff_Row.appendChild(oiff_18);
fondantCakesTable.appendChild(oiff_Row);


// ========================= BOX ROW ===================
let fondant_box_Row = document.createElement('tr');
fondant_box_Row.setAttribute('id', 'fondant_box_row');
let fondant_box_Name = document.createElement('td');
let fondant_box_Cost = document.createElement('td');
let fondant_box_KG = document.createElement('td');
let fondant_box_Cost_KG = document.createElement('td');
let fondant_box_6 = document.createElement('td');
let fondant_box_7 = document.createElement('td');
let fondant_box_8 = document.createElement('td');
let fondant_box_9 = document.createElement('td');
let fondant_box_10 = document.createElement('td');
let fondant_box_11 = document.createElement('td');
let fondant_box_12 = document.createElement('td');
let fondant_box_13 = document.createElement('td');
let fondant_box_14 = document.createElement('td');
let fondant_box_15 = document.createElement('td');
let fondant_box_16 = document.createElement('td');
let fondant_box_17 = document.createElement('td');
let fondant_box_18 = document.createElement('td');

fondant_box_Name.innerHTML = 'Cake Box';
fondant_box_Cost.innerHTML = '';
fondant_box_KG.innerHTML = '';
fondant_box_Cost_KG.innerHTML = '';
fondant_box_6.innerHTML = parseInt(recipeData.box[0]);
fondant_box_7.innerHTML = parseInt(recipeData.box[1]);
fondant_box_8.innerHTML = parseInt(recipeData.box[2]);
fondant_box_9.innerHTML = parseInt(recipeData.box[3]);
fondant_box_10.innerHTML = parseInt(recipeData.box[4]);
fondant_box_11.innerHTML = parseInt(recipeData.box[5]);
fondant_box_12.innerHTML = parseInt(recipeData.box[6]);
fondant_box_13.innerHTML = parseInt(recipeData.box[7]);
fondant_box_14.innerHTML = parseInt(recipeData.box[8]);
fondant_box_15.innerHTML = parseInt(recipeData.box[9]);
fondant_box_16.innerHTML = parseInt(recipeData.box[10]);
fondant_box_17.innerHTML = parseInt(recipeData.box[11]);
fondant_box_18.innerHTML = parseInt(recipeData.box[12]);

fondant_box_Row.appendChild(fondant_box_Name);
// fondant_box_Row.appendChild(fondant_box_Cost);
// fondant_box_Row.appendChild(fondant_box_KG);
// fondant_box_Row.appendChild(fondant_box_Cost_KG);
fondant_box_Row.appendChild(fondant_box_6);
fondant_box_Row.appendChild(fondant_box_7);
fondant_box_Row.appendChild(fondant_box_8);
fondant_box_Row.appendChild(fondant_box_9);
fondant_box_Row.appendChild(fondant_box_10);
fondant_box_Row.appendChild(fondant_box_11);
fondant_box_Row.appendChild(fondant_box_12);
fondant_box_Row.appendChild(fondant_box_13);
fondant_box_Row.appendChild(fondant_box_14);
fondant_box_Row.appendChild(fondant_box_15);
fondant_box_Row.appendChild(fondant_box_16);
fondant_box_Row.appendChild(fondant_box_17);
fondant_box_Row.appendChild(fondant_box_18);
fondantCakesTable.appendChild(fondant_box_Row);



// ========================= Board ROW ===================
let fondant_board_Row = document.createElement('tr');
fondant_board_Row.setAttribute('id', 'fondant_board_row');
let fondant_board_Name = document.createElement('td');
let fondant_board_Cost = document.createElement('td');
let fondant_board_KG = document.createElement('td');
let fondant_board_Cost_KG = document.createElement('td');
let fondant_board_6 = document.createElement('td');
let fondant_board_7 = document.createElement('td');
let fondant_board_8 = document.createElement('td');
let fondant_board_9 = document.createElement('td');
let fondant_board_10 = document.createElement('td');
let fondant_board_11 = document.createElement('td');
let fondant_board_12 = document.createElement('td');
let fondant_board_13 = document.createElement('td');
let fondant_board_14 = document.createElement('td');
let fondant_board_15 = document.createElement('td');
let fondant_board_16 = document.createElement('td');
let fondant_board_17 = document.createElement('td');
let fondant_board_18 = document.createElement('td');

fondant_board_Name.innerHTML = 'Cake Board';
fondant_board_Cost.innerHTML = '';
fondant_board_KG.innerHTML = '';
fondant_board_Cost_KG.innerHTML = '';
fondant_board_6.innerHTML = parseInt(recipeData.board[0]);
fondant_board_7.innerHTML = parseInt(recipeData.board[1]);
fondant_board_8.innerHTML = parseInt(recipeData.board[2]);
fondant_board_9.innerHTML = parseInt(recipeData.board[3]);
fondant_board_10.innerHTML = parseInt(recipeData.board[4]);
fondant_board_11.innerHTML = parseInt(recipeData.board[5]);
fondant_board_12.innerHTML = parseInt(recipeData.board[6]);
fondant_board_13.innerHTML = parseInt(recipeData.board[7]);
fondant_board_14.innerHTML = parseInt(recipeData.board[8]);
fondant_board_15.innerHTML = parseInt(recipeData.board[9]);
fondant_board_16.innerHTML = parseInt(recipeData.board[10]);
fondant_board_17.innerHTML = parseInt(recipeData.board[11]);
fondant_board_18.innerHTML = parseInt(recipeData.board[12]);

fondant_board_Row.appendChild(fondant_board_Name);
// fondant_board_Row.appendChild(fondant_board_Cost);
// fondant_board_Row.appendChild(fondant_board_KG);
// fondant_board_Row.appendChild(fondant_board_Cost_KG);
fondant_board_Row.appendChild(fondant_board_6);
fondant_board_Row.appendChild(fondant_board_7);
fondant_board_Row.appendChild(fondant_board_8);
fondant_board_Row.appendChild(fondant_board_9);
fondant_board_Row.appendChild(fondant_board_10);
fondant_board_Row.appendChild(fondant_board_11);
fondant_board_Row.appendChild(fondant_board_12);
fondant_board_Row.appendChild(fondant_board_13);
fondant_board_Row.appendChild(fondant_board_14);
fondant_board_Row.appendChild(fondant_board_15);
fondant_board_Row.appendChild(fondant_board_16);
fondant_board_Row.appendChild(fondant_board_17);
fondant_board_Row.appendChild(fondant_board_18);
fondantCakesTable.appendChild(fondant_board_Row);



// ========================= Cost Of Fondant Icing Row ===================
let cofi_Row = document.createElement('tr');
cofi_Row.setAttribute('id', 'cofi_row');
let cofi_Name = document.createElement('td');
let cofi_Cost = document.createElement('td');
let cofi_KG = document.createElement('td');
let cofi_Cost_KG = document.createElement('td');
let cofi_6 = document.createElement('td');
let cofi_7 = document.createElement('td');
let cofi_8 = document.createElement('td');
let cofi_9 = document.createElement('td');
let cofi_10 = document.createElement('td');
let cofi_11 = document.createElement('td');
let cofi_12 = document.createElement('td');
let cofi_13 = document.createElement('td');
let cofi_14 = document.createElement('td');
let cofi_15 = document.createElement('td');
let cofi_16 = document.createElement('td');
let cofi_17 = document.createElement('td');
let cofi_18 = document.createElement('td');

cofi_Name.innerHTML = 'Cost Of Fondant Icing';
cofi_Cost.innerHTML = '';
cofi_KG.innerHTML = '';
cofi_Cost_KG.innerHTML = '';
var cofi_var6 = Math.ceil(isff_var6 + cdff_var6 + oiff_var6 + parseInt(recipeData.box[0]) + parseInt(recipeData.board[0]));
cofi_6.innerHTML = cofi_var6;
var cofi_var7 = Math.ceil(isff_var7+ cdff_var7 + oiff_var7 + parseInt(recipeData.box[1]) + parseInt(recipeData.board[1]))
cofi_7.innerHTML = cofi_var7;
var cofi_var8 = Math.ceil(isff_var8 + cdff_var8 + oiff_var8 + parseInt(recipeData.box[2]) + parseInt(recipeData.board[2]));
cofi_8.innerHTML = cofi_var8;
var cofi_var9 = Math.ceil(isff_var9 + cdff_var9 + oiff_var9 + parseInt(recipeData.box[3]) + parseInt(recipeData.board[3]));
cofi_9.innerHTML = cofi_var9;
var cofi_var10 = Math.ceil(isff_var10 + cdff_var10 + oiff_var10 + parseInt(recipeData.box[4]) + parseInt(recipeData.board[4]));
cofi_10.innerHTML = cofi_var10;
var cofi_var11 = Math.ceil(isff_var11 + cdff_var11 + oiff_var11 + parseInt(recipeData.box[5]) + parseInt(recipeData.board[5]));
cofi_11.innerHTML = cofi_var11;
var cofi_var12 = Math.ceil(isff_var12 + cdff_var12 + oiff_var12 + parseInt(recipeData.box[6]) + parseInt(recipeData.board[6]));
cofi_12.innerHTML = cofi_var12;
var cofi_var13 = Math.ceil(isff_var13 + cdff_var13 + oiff_var13 + parseInt(recipeData.box[7]) + parseInt(recipeData.board[7]));
cofi_13.innerHTML = cofi_var13;
var cofi_var14 = Math.ceil(isff_var14 + cdff_var14 + oiff_var14 + parseInt(recipeData.box[8]) + parseInt(recipeData.board[8]));
cofi_14.innerHTML = cofi_var14;
var cofi_var15 = Math.ceil(isff_var15 + cdff_var15 + oiff_var15 + parseInt(recipeData.box[9]) + parseInt(recipeData.board[9]));
cofi_15.innerHTML = cofi_var15;
var cofi_var16 = Math.ceil(isff_var16 + cdff_var16 + oiff_var16 + parseInt(recipeData.box[10]) + parseInt(recipeData.board[10]));
cofi_16.innerHTML = cofi_var16;
var cofi_var17 = Math.ceil(isff_var17 + cdff_var17 + oiff_var17 + parseInt(recipeData.box[11]) + parseInt(recipeData.board[11]));
cofi_17.innerHTML = cofi_var17;
var cofi_var18 = Math.ceil(isff_var18 + cdff_var18 + oiff_var18 + parseInt(recipeData.box[12]) + parseInt(recipeData.board[12]));
cofi_18.innerHTML = cofi_var18;

cofi_Row.appendChild(cofi_Name);

cofi_Row.appendChild(cofi_6);
cofi_Row.appendChild(cofi_7);
cofi_Row.appendChild(cofi_8);
cofi_Row.appendChild(cofi_9);
cofi_Row.appendChild(cofi_10);
cofi_Row.appendChild(cofi_11);
cofi_Row.appendChild(cofi_12);
cofi_Row.appendChild(cofi_13);
cofi_Row.appendChild(cofi_14);
cofi_Row.appendChild(cofi_15);
cofi_Row.appendChild(cofi_16);
cofi_Row.appendChild(cofi_17);
cofi_Row.appendChild(cofi_18);
fondantCakesTable.appendChild(cofi_Row);



// ========================= total row ===================
let tcoucfRow = document.createElement('tr');
tcoucfRow.setAttribute('id', 'tcoucf-row');
let tcoucfName = document.createElement('td');
let tcoucfCost = document.createElement('td');
let tcoucfKG = document.createElement('td');
let tcoucfCost_KG = document.createElement('td');
let tcoucf6 = document.createElement('td');
let tcoucf7 = document.createElement('td');
let tcoucf8 = document.createElement('td');
let tcoucf9 = document.createElement('td');
let tcoucf10 = document.createElement('td');
let tcoucf11 = document.createElement('td');
let tcoucf12 = document.createElement('td');
let tcoucf13 = document.createElement('td');
let tcoucf14 = document.createElement('td');
let tcoucf15 = document.createElement('td');
let tcoucf16 = document.createElement('td');
let tcoucf17 = document.createElement('td');
let tcoucf18 = document.createElement('td');

tcoucfName.innerHTML = 'TOTAL COST OF UNICED CAKES';
tcoucfCost.innerHTML = ' ';
tcoucfKG.innerHTML = ' ';
tcoucfCost_KG.innerHTML = ' ';
tcoucf6.innerHTML = tcouc_var6;
tcoucf7.innerHTML = tcouc_var7;
tcoucf8.innerHTML = tcouc_var8;
tcoucf9.innerHTML = tcouc_var9;
tcoucf10.innerHTML = tcouc_var10;
tcoucf11.innerHTML = tcouc_var11;
tcoucf12.innerHTML = tcouc_var12;
tcoucf13.innerHTML = tcouc_var13;
tcoucf14.innerHTML = tcouc_var14;
tcoucf15.innerHTML = tcouc_var15;
tcoucf16.innerHTML = tcouc_var16;
tcoucf17.innerHTML = tcouc_var17;
tcoucf18.innerHTML = tcouc_var18;

tcoucfRow.appendChild(tcoucfName);

tcoucfRow.appendChild(tcoucf6);
tcoucfRow.appendChild(tcoucf7);
tcoucfRow.appendChild(tcoucf8);
tcoucfRow.appendChild(tcoucf9);
tcoucfRow.appendChild(tcoucf10);
tcoucfRow.appendChild(tcoucf11);
tcoucfRow.appendChild(tcoucf12);
tcoucfRow.appendChild(tcoucf13);
tcoucfRow.appendChild(tcoucf14);
tcoucfRow.appendChild(tcoucf15);
tcoucfRow.appendChild(tcoucf16);
tcoucfRow.appendChild(tcoucf17);
tcoucfRow.appendChild(tcoucf18);
fondantCakesTable.appendChild(tcoucfRow);


// ========================= total cost of fondant cake row ===================
let cofcRow = document.createElement('tr');
cofcRow.setAttribute('id', 'cofc-row');
let cofcName = document.createElement('td');
let cofcCost = document.createElement('td');
let cofcKG = document.createElement('td');
let cofcCost_KG = document.createElement('td');
let cofc6 = document.createElement('td');
let cofc7 = document.createElement('td');
let cofc8 = document.createElement('td');
let cofc9 = document.createElement('td');
let cofc10 = document.createElement('td');
let cofc11 = document.createElement('td');
let cofc12 = document.createElement('td');
let cofc13 = document.createElement('td');
let cofc14 = document.createElement('td');
let cofc15 = document.createElement('td');
let cofc16 = document.createElement('td');
let cofc17 = document.createElement('td');
let cofc18 = document.createElement('td');

cofcName.innerHTML = 'TOTAL COST OF FONDANT CAKES';
cofcCost.innerHTML = ' ';
cofcKG.innerHTML = ' ';
cofcCost_KG.innerHTML = ' ';
cofc6.innerHTML = tcouc_var6 + cofi_var6;
cofc7.innerHTML = tcouc_var7 + cofi_var7;
cofc8.innerHTML = tcouc_var8 + cofi_var8;
cofc9.innerHTML = tcouc_var9 + cofi_var9;
cofc10.innerHTML = tcouc_var10 + cofi_var10;
cofc11.innerHTML = tcouc_var11 + cofi_var11;
cofc12.innerHTML = tcouc_var12 + cofi_var12;
cofc13.innerHTML = tcouc_var13 + cofi_var13;
cofc14.innerHTML = tcouc_var14 + cofi_var14;
cofc15.innerHTML = tcouc_var15 + cofi_var15;
cofc16.innerHTML = tcouc_var16 + cofi_var16;
cofc17.innerHTML = tcouc_var17 + cofi_var17;
cofc18.innerHTML = tcouc_var18 + cofi_var18;

cofcRow.appendChild(cofcName);

cofcRow.appendChild(cofc6);
cofcRow.appendChild(cofc7);
cofcRow.appendChild(cofc8);
cofcRow.appendChild(cofc9);
cofcRow.appendChild(cofc10);
cofcRow.appendChild(cofc11);
cofcRow.appendChild(cofc12);
cofcRow.appendChild(cofc13);
cofcRow.appendChild(cofc14);
cofcRow.appendChild(cofc15);
cofcRow.appendChild(cofc16);
cofcRow.appendChild(cofc17);
cofcRow.appendChild(cofc18);
fondantCakesTable.appendChild(cofcRow);



// the proceed button
proceedBtn.onclick = function(){

    //save total cost of uniced cake to array
    let tcouc = [
        tcouc_var6,tcouc_var7,tcouc_var8,tcouc_var9,tcouc_var10,
        tcouc_var11,tcouc_var12, tcouc_var13, tcouc_var14, tcouc_var15,
        tcouc_var16, tcouc_var17, tcouc_var18
    ];

    //save total cost of butter cream cake
    let tcobcc = [
        tcobcc_var6, tcobcc_var7, tcobcc_var8, tcobcc_var9, tcobcc_var10,
        tcobcc_var11, tcobcc_var12, tcobcc_var13, tcobcc_var14,
        tcobcc_var15, tcobcc_var16, tcobcc_var17, tcobcc_var18
    ];

    //save total cost of fondant cakes
    let cofc = [
        tcouc_var6 + cofi_var6, tcouc_var7 + cofi_var7, 
        tcouc_var8 + cofi_var8, tcouc_var9 + cofi_var9,
        tcouc_var10 + cofi_var10, tcouc_var11 + cofi_var11,
        tcouc_var12 + cofi_var12, tcouc_var13 + cofi_var13,
        tcouc_var14 + cofi_var14, tcouc_var15 + cofi_var15,
        tcouc_var16 + cofi_var16, tcouc_var17 + cofi_var17,
        tcouc_var18 + cofi_var18
    ];

    //save all arrays to object
    let calculatorData = {
        'tcouc': tcouc,
        'tcobcc': tcobcc,
        'cofc':cofc
    };

    //serialise data
     let calc_serialize = JSON.stringify(calculatorData);

     //save data to local storage
     localStorage.setItem('calculatorData', calc_serialize);

     //navigate to summary screen
     location.href = 'summary.html';

}