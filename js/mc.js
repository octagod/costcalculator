var data = JSON.parse(localStorage.getItem('data'));

console.log(data);

let bakingH3 = document.querySelector('section.baking-section h3');
let bakingUl = document.querySelector('section.baking-section ul');
let butterH3 = document.querySelector('section.butter-section h3');
let butterUl = document.querySelector('section.butter-section ul');
let eggH3 = document.querySelector('section.egg-section h3');
let eggUl = document.querySelector('section.egg-section ul');
let flourH3 = document.querySelector('section.flour-section h3');
let flourUl = document.querySelector('section.flour-section ul');
let icingSugarH3 = document.querySelector('section.icing-sugar-section h3');
let icingSugarUl = document.querySelector('section.icing-sugar-section ul');
let butterFBCH3 = document.querySelector('section.butter-fbc-section h3');
let butterFBCUl = document.querySelector('section.butter-fbc-section ul');
let icingSFH3 = document.querySelector('section.icing-sugar-fondant-section h3');
let icingSFUl = document.querySelector('section.icing-sugar-fondant-section ul');
let colourDiscoH3 = document.querySelector('section.colours-disco-section h3');
let colourDiscoUl = document.querySelector('section.colours-disco-section ul');
let discoH3 = document.querySelector('section.disco-section h3');
let discoUl = document.querySelector('section.disco-section ul');
let foodColorH3 = document.querySelector('section.food-colour-section h3');
let foodColorUl = document.querySelector('section.food-colour-section ul');
let drageesH3 = document.querySelector('section.dragees-section h3');
let drageesUl = document.querySelector('section.dragees-section ul');
let otherBakingTotalH3 = document.querySelector('section.other-baking-total-section h3');
let otherBakingTotalUl = document.querySelector('section.other-baking-total-section ul');
let rentH3 = document.querySelector('section.rent-section h3');
let rentUl = document.querySelector('section.rent-section ul');
let telephoneH3 = document.querySelector('section.telephone-section h3');
let telephoneUl = document.querySelector('section.telephone-section ul');
let salaryH3 = document.querySelector('section.salary-section h3');
let salaryUl = document.querySelector('section.salary-section ul');
let electricityH3 = document.querySelector('section.electricity-section h3');
let electricityUl = document.querySelector('section.electricity-section ul');
let wasteH3 = document.querySelector('section.waste-section h3');
let wasteUl = document.querySelector('section.waste-section ul');
let securityH3 = document.querySelector('section.security-section h3');
let securityUl = document.querySelector('section.security-section ul');
let monthlyOverdueTotalH3 = document.querySelector('section.monthly-overdue-total-section h3');
let monthlyOverdueTotalUl = document.querySelector('section.monthly-overdue-total-section ul');
let noOfMonthH3 = document.querySelector('section.no-of-months-section h3');
let noOfMonthUl = document.querySelector('section.no-of-months-section ul');
let lustreH3 = document.querySelector('section.lustre-section h3');
let lustreUl = document.querySelector('section.lustre-section ul');
let BCDiscoH3 = document.querySelector('section.butter-cream-disco-section h3');
let BCDiscoUl = document.querySelector('section.butter-cream-disco-section ul');
let BCColourH3 = document.querySelector('section.butter-cream-colour-section h3');
let BCColourUl = document.querySelector('section.butter-cream-colour-section ul');
let BCFlavourH3 = document.querySelector('section.butter-cream-flavour-section h3');
let BCFlavourUl = document.querySelector('section.butter-cream-flavour-section ul');
let BCMilkH3 = document.querySelector('section.butter-cream-milk-section h3');
let BCMilkUl = document.querySelector('section.butter-cream-milk-section ul');
let BCTotalH3 = document.querySelector('section.other-butter-cream-total-section h3');
let BCTotalUl = document.querySelector('section.other-butter-cream-total-section ul');
let FLustreH3 = document.querySelector('section.fondant-lustre-section h3');
let FLustreUl = document.querySelector('section.fondant-lustre-section ul');
let FDiscoH3 = document.querySelector('section.fondant-disco-section h3');
let FDiscoUl = document.querySelector('section.fondant-disco-section ul');
let FEthanolH3 = document.querySelector('section.fondant-ethanol-section h3');
let FEthanolUl = document.querySelector('section.fondant-ethanol-section ul');
let FTotalH3 = document.querySelector('section.other-fondant-total-section h3');
let FTotalUl = document.querySelector('section.other-fondant-total-section ul');



let allInput = document.querySelectorAll('input');



let proceedBtn = document.querySelector('button.next');
let backBtn = document.querySelector('button.back');
let firstProceedBtn = document.querySelector('button.first-next');
let firstBackBtn = document.querySelector('button.first-back');
let secondProceedBtn = document.querySelector('button.second-next');
let secondBackBtn = document.querySelector('button.second-back');
let finalProceedBtn = document.querySelector('button.final-next');
let finalBackBtn = document.querySelector('button.final-back');
let toastBody = document.querySelector('div.toast-body');
let toastText = document.querySelector('div.toast-body p.toast-text');



let sugarP = document.getElementById('sugar-price');
let sugarU = document.getElementById('sugar-unit');
let sugarPU = document.querySelector('p.sugar-price-unit');


let butterP = document.getElementById('butter-price');
let butterU = document.getElementById('butter-unit');
let butterPU = document.querySelector('p.butter-price-unit');

let flourP = document.getElementById('flour-price');
let flourU = document.getElementById('flour-unit');
let flourPU = document.querySelector('p.flour-price-unit');

let eggP = document.getElementById('egg-price');
let eggU = document.getElementById('egg-unit');
let eggPU = document.querySelector('p.egg-price-unit');

let icingSugarP = document.getElementById('icing-sugar-price');
let icingSugarU = document.getElementById('icing-sugar-unit');
let icingSugarPU = document.querySelector('p.icing-sugar-price-unit');

let butterFBC_P = document.getElementById('butter-fbc-price');
let butterFBC_U = document.getElementById('butter-fbc-unit');
let butterFBC_PU = document.querySelector('p.butter-fbc-price-unit');

let icingSF_P = document.getElementById('fondant-sugar-price');
let icingSF_U = document.getElementById('fondant-sugar-unit');
let icingSF_PU = document.querySelector('p.fondant-sugar-price-unit');

let colourDisco_P = document.getElementById('colours-disco-price');
let colourDisco_U = document.getElementById('colours-disco-unit');
let colourDisco_PU = document.querySelector('p.colours-disco-price-unit');

let OBI_disco_P = document.getElementById('disco-price');
let OBI_foodColor_P = document.getElementById('food-colour-price');
let OBI_dragees_P = document.getElementById('dragees-price');
let OBI_total = document.querySelector('p.obi-total');

let MO_rent_P = document.getElementById('rent-price');
let MO_telephone_P = document.getElementById('telephone-price');
let MO_salary_P = document.getElementById('salary-price');
let MO_electricity_P = document.getElementById('electricity-price');
let MO_waste_P = document.getElementById('waste-price');
let MO_security_P = document.getElementById('security-price');
let MO_total = document.querySelector('p.montly-overdue-total');

let numberOfMonth = document.getElementById('no-of-months');

let OIFBC_lustre_P = document.getElementById('lustre-price');
let OIFBC_disco_P = document.getElementById('butter-cream-disco-price');
let OIFBC_colour_P = document.getElementById('butter-cream-colour-price');
let OIFBC_flavour_P = document.getElementById('butter-cream-flavour-price');
let OIFBC_milk_P = document.getElementById('butter-cream-milk-price');
let OIFBC_total = document.querySelector('p.other-butter-cream-total');

let OIFF_lustre_P = document.getElementById('fondant-lustre-price');
let OIFF_disco_P = document.getElementById('fondant-disco-price');
let OIFF_ethanol_P = document.getElementById('fondant-ethanol-price');
let OIFF_total = document.querySelector('p.other-fondant-total');



// ===================== SHOW THE DROPDOWN =================

// bakingH3.onclick = function(){
//     bakingUl.classList.toggle('show');
//     if(bakingUl.className === 'show'){
//         bakingH3.innerHTML = 'Tap To Close';
//     }else{
//         bakingH3.innerHTML = 'Tap To Enter Price and weights Of Sugar bought';
//     }
// }
// butterH3.onclick = function(){
//     butterUl.classList.toggle('show');
//     if(butterUl.className === 'show'){
//         butterH3.innerHTML = 'Tap To Close';
//     }else{
//         butterH3.innerHTML = 'Tap To Enter Price and weights Of Butter';
//     }
// }
// eggH3.onclick = function(){
//     eggUl.classList.toggle('show');
//     if(eggUl.className === 'show'){
//         eggH3.innerHTML = 'Tap To Close';
//     }else{
//         eggH3.innerHTML = 'Tap To Enter Price and weights Of Eggs';
//     }
// }
// flourH3.onclick = function(){
//     flourUl.classList.toggle('show');
//     if(flourUl.className === 'show'){
//         flourH3.innerHTML = 'Tap To Close';
//     }else{
//         flourH3.innerHTML = 'Tap To Enter Price and weights Of Flour';
//     }
// }
// icingSugarH3.onclick = function(){
//     icingSugarUl.classList.toggle('show');
//     if(icingSugarUl.className === 'show'){
//         icingSugarH3.innerHTML = 'Tap To Close';
//     }else{
//         icingSugarH3.innerHTML = 'Tap To Enter Price and weights Of Icing Sugar For Butter Cream';
//     }
// }
// butterFBCH3.onclick = function(){
//     butterFBCUl.classList.toggle('show');
//     if(butterFBCUl.className === 'show'){
//         butterFBCH3.innerHTML = 'Tap To Close';
//     }else{
//         butterFBCH3.innerHTML = 'Tap To Enter Price and weights Of Butter for Butter Cream';
//     }
// }
// icingSFH3.onclick = function(){
//     icingSFUl.classList.toggle('show');
//     if(icingSFUl.className === 'show'){
//         icingSFH3.innerHTML = 'Tap To Close';
//     }else{
//         icingSFH3.innerHTML = 'Tap To Enter Price and weights Of Icing Sugar For Fondant';
//     }
// }
// colourDiscoH3.onclick = function(){
//     colourDiscoUl.classList.toggle('show');
//     if(colourDiscoUl.className === 'show'){
//         colourDiscoH3.innerHTML = 'Tap To Close';
//     }else{
//         colourDiscoH3.innerHTML = 'Tap To Enter Price and weights Of Colours & Disco';
//     }
// }
// discoH3.onclick = function(){
//     discoUl.classList.toggle('show');
//     if(discoUl.className === 'show'){
//         discoH3.innerHTML = 'Tap To Close';
//     }else{
//         discoH3.innerHTML = 'Tap To Enter Price of Disco';
//     }
// }
// foodColorH3.onclick = function(){
//     foodColorUl.classList.toggle('show');
//     if(foodColorUl.className === 'show'){
//         foodColorH3.innerHTML = 'Tap To Close';
//     }else{
//         foodColorH3.innerHTML = 'Tap To Enter Price of Food Colours';
//     }
// }
// drageesH3.onclick = function(){
//     drageesUl.classList.toggle('show');
//     if(drageesUl.className === 'show'){
//         drageesH3.innerHTML = 'Tap To Close';
//     }else{
//         drageesH3.innerHTML = 'Tap To Enter Price of Dragees';
//     }
// }
// otherBakingTotalH3.onclick = function(){
//     otherBakingTotalUl.classList.toggle('show');
//     if(otherBakingTotalUl.className === 'show'){
//         otherBakingTotalH3.innerHTML = 'Tap To Close';
//     }else{
//         otherBakingTotalH3.innerHTML = 'Tap To View Total';
//     }
// }
// rentH3.onclick = function(){
//     rentUl.classList.toggle('show');
//     if(rentUl.className === 'show'){
//         rentH3.innerHTML = 'Tap To Close';
//     }else{
//         rentH3.innerHTML = 'Tap To Enter Rent';
//     }
// }
// telephoneH3.onclick = function(){
//     telephoneUl.classList.toggle('show');
//     if(telephoneUl.className === 'show'){
//         telephoneH3.innerHTML = 'Tap To Close';
//     }else{
//         telephoneH3.innerHTML = 'Tap To Enter Telephone bills';
//     }
// }
// salaryH3.onclick = function(){
//     salaryUl.classList.toggle('show');
//     if(salaryUl.className === 'show'){
//         salaryH3.innerHTML = 'Tap To Close';
//     }else{
//         salaryH3.innerHTML = 'Tap To Enter Salaries Paid For The Month';
//     }
// }
// electricityH3.onclick = function(){
//     electricityUl.classList.toggle('show');
//     if(electricityUl.className === 'show'){
//         electricityH3.innerHTML = 'Tap To Close';
//     }else{
//         electricityH3.innerHTML = 'Tap To Enter Electricity Bill';
//     }
// }
// wasteH3.onclick = function(){
//     wasteUl.classList.toggle('show');
//     if(wasteUl.className === 'show'){
//         wasteH3.innerHTML = 'Tap To Close';
//     }else{
//         wasteH3.innerHTML = 'Tap To Enter Waste Disposal Bill';
//     }
// }
// securityH3.onclick = function(){
//     securityUl.classList.toggle('show');
//     if(securityUl.className === 'show'){
//         securityH3.innerHTML = 'Tap To Close';
//     }else{
//         securityH3.innerHTML = 'Tap To Enter Security Bills';
//     }
// }
// monthlyOverdueTotalH3.onclick = function(){
//     monthlyOverdueTotalUl.classList.toggle('show');
//     if(monthlyOverdueTotalUl.className === 'show'){
//         monthlyOverdueTotalH3.innerHTML = 'Tap To Close';
//     }else{
//         monthlyOverdueTotalH3.innerHTML = 'Tap To View Total';
//     }
// }
// noOfMonthH3.onclick = function(){
//     noOfMonthUl.classList.toggle('show');
//     if(noOfMonthUl.className === 'show'){
//         noOfMonthH3.innerHTML = 'Tap To Close';
//     }else{
//         noOfMonthH3.innerHTML = 'Tap To Enter Number Of Orders Per Month';
//     }
// }
// lustreH3.onclick = function(){
//     lustreUl.classList.toggle('show');
//     if(lustreUl.className === 'show'){
//         lustreH3.innerHTML = 'Tap To Close';
//     }else{
//         lustreH3.innerHTML = 'Tap To Enter Cost of Lustre';
//     }
// }
// BCDiscoH3.onclick = function(){
//     BCDiscoUl.classList.toggle('show');
//     if(BCDiscoUl.className === 'show'){
//         BCDiscoH3.innerHTML = 'Tap To Close';
//     }else{
//         BCDiscoH3.innerHTML = 'Tap To Enter Cost of Disco';
//     }
// }
// BCColourH3.onclick = function(){
//     BCColourUl.classList.toggle('show');
//     if(BCColourUl.className === 'show'){
//         BCColourH3.innerHTML = 'Tap To Close';
//     }else{
//         BCColourH3.innerHTML = 'Tap To Enter Cost of Colour';
//     }
// }
// BCFlavourH3.onclick = function(){
//     BCFlavourUl.classList.toggle('show');
//     if(BCFlavourUl.className === 'show'){
//         BCFlavourH3.innerHTML = 'Tap To Close';
//     }else{
//         BCFlavourH3.innerHTML = 'Tap To Enter Cost of Flavour';
//     }
// }
// BCMilkH3.onclick = function(){
//     BCMilkUl.classList.toggle('show');
//     if(BCMilkUl.className === 'show'){
//         BCMilkH3.innerHTML = 'Tap To Close';
//     }else{
//         BCMilkH3.innerHTML = 'Tap To Enter Cost of Milk';
//     }
// }
// BCTotalH3.onclick = function(){
//     BCTotalUl.classList.toggle('show');
//     if(BCTotalUl.className === 'show'){
//         BCTotalH3.innerHTML = 'Tap To Close';
//     }else{
//         BCTotalH3.innerHTML = 'Tap To View Total';
//     }
// }
// FLustreH3.onclick = function(){
//     FLustreUl.classList.toggle('show');
//     if(FLustreUl.className === 'show'){
//         FLustreH3.innerHTML = 'Tap To Close';
//     }else{
//         FLustreH3.innerHTML = 'Tap To Enter Cost Of Lustre';
//     }
// }
// FDiscoH3.onclick = function(){
//     FDiscoUl.classList.toggle('show');
//     if(FDiscoUl.className === 'show'){
//         FDiscoH3.innerHTML = 'Tap To Close';
//     }else{
//         FDiscoH3.innerHTML = 'Tap To Enter Cost Of Disco';
//     }
// }
// FEthanolH3.onclick = function(){
//     FEthanolUl.classList.toggle('show');
//     if(FEthanolUl.className === 'show'){
//         FEthanolH3.innerHTML = 'Tap To Close';
//     }else{
//         FEthanolH3.innerHTML = 'Tap To Enter Cost Of Ethanol';
//     }
// }
// FTotalH3.onclick = function(){
//     FTotalUl.classList.toggle('show');
//     if(FTotalUl.className === 'show'){
//         FTotalH3.innerHTML = 'Tap To Close';
//     }else{
//         FTotalH3.innerHTML = 'Tap To View Total';
//     }
// }


// ===================== SHOW THE DROPDOWN ENDS HERE =================



//price per unit variables
let sugarPriceUnit;
let butterPriceUnit;
let flourPriceUnit;
let eggPriceUnit;
let icingSugarPriceUnit;
let butterFBCPriceUnit;
let icingSFPriceUnit;
let colourDiscoPriceUnit;
let otherBakingIngredientTotal;
let monthlyOverheadTotal;
let otherIngredientForBakingCreamTotal;
let otherIngredientForFondant;
let numberOfMonthsValue;

let anwsersHolder;
let priceHolder;
let unitHolder;

//the object that will hold all the arrays
let materialData;

// the lists fro each variable
let sugar = {};
let butter = {};
let egg = {};
let flour = {};

let IcingForbutterCream = {};
let buterForButterCream = {};
let icingSugarFondant = {};
let colourDiscoFondant = {};



//====================== Show total for group having total ===================.

setInterval(() => {
    totalGenerator();
}, 100);

let ingredientContainer = document.querySelector('section.ingredient-container');
let otherIngredientContainer = document.querySelector('section.other-ingredients-container');
let extraContainer = document.querySelector('section.extra');
let overheadContainer = document.querySelector('section.overhead');
let heading = document.querySelector('section.heading');

//the progress bar infomation
let progressContainer = document.querySelector('section.progress-container');
let progressText = document.querySelector('h1.progress');
let progressbar = document.querySelector('progress');

//======================= INPUT FIELD ===================
firstProceedBtn.onclick = function(){
    ingredientContainer.setAttribute('style', 'display:none');
    otherIngredientContainer.setAttribute('style', 'display:block');

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

        //increase the progress bar to 55%
        progressbar.value = 55;
        progressText.textContent = '55%';
}


secondProceedBtn.onclick = function(){
    otherIngredientContainer.setAttribute('style', 'display:none');
    extraContainer.setAttribute('style', 'display:block');

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    //increase the progress bar to 65%
    progressbar.value = 65;
    progressText.textContent = '65%';
}

secondBackBtn.onclick = function(){

}

finalProceedBtn.onclick = function(){
    extraContainer.setAttribute('style', 'display:none');
    heading.setAttribute('style', 'display:none');
    overheadContainer.setAttribute('style', 'display:block');

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

        //increase the progress bar to 85%
        progressbar.value = 85;
        progressText.textContent = '85%';
}
finalBackBtn.onclick = function(){

}
proceedBtn.onclick = function(){
    if(monthlyOverheadTotal === '' || isNaN(monthlyOverheadTotal)){
        showToast('Ensure To Fill All Fields In The <br> <br> <b>Monthly Overhead Section</b>')
    }else if(numberOfMonthsValue == null || isNaN(numberOfMonthsValue)){
        showToast('It is important to enter your Number of Orders per month');
    }else{
        verifyInputs();
    }
        
}
backBtn.onclick = function(){

}


function verifyInputs(){
   anwsersHolder = [
        sugarPriceUnit, butterPriceUnit, flourPriceUnit,eggPriceUnit,
        icingSugarPriceUnit, butterFBCPriceUnit, icingSFPriceUnit,
        colourDiscoPriceUnit, otherBakingIngredientTotal, monthlyOverheadTotal,
        otherIngredientForBakingCreamTotal, otherIngredientForFondant,
        numberOfMonthsValue
    ];
    priceHolder = [
        sugarP.value, butterP.value, flourP.value, 
        eggP.value, icingSugarP.value, butterFBC_P.value,
        icingSF_P.value, colourDisco_P.value,
    ];
    unitHolder = [
        sugarU.value, butterU.value, flourU.value, 
        eggU.value, icingSugarU.value, butterFBC_U.value,
        icingSF_U.value, colourDisco_U.value,
    ];

    
        // fill the null priceUnit var with 0.
    for(let i = 0; i < anwsersHolder.length; i++){
        if(anwsersHolder[i] == null || isNaN(anwsersHolder[i])){
            anwsersHolder[i] = 0;
            
        }
    }
        // fill the null price & Unit var with 0
    for(let x = 0; x < priceHolder.length; x++){
        if(priceHolder[x] === '' || unitHolder[x] === ''){
            priceHolder[x] = 0;
            unitHolder[x] = 0;
        }
    }

        console.log('done..next');

        //save the variables in their objects
        sugar = {
            'price': sugarP.value === ''? priceHolder[0] : sugarP.value,
            'unit': sugarU.value === ''? unitHolder[0] : sugarU.value,
            'p/u': sugarPriceUnit == null? anwsersHolder[0] : sugarPriceUnit
        }
        butter = {
            'price': butterP.value === ''? priceHolder[1] : butterP.value,
            'unit': butterU.value === ''? unitHolder[1] : butterU.value,
            'p/u': butterPriceUnit == null? anwsersHolder[1] : butterPriceUnit
        }
        flour = {
            'price':flourP.value === ''? priceHolder[2] : flourP.value,
            'unit': butterU.value === ''? unitHolder[2] : flourU.value,
            'p/u': flourPriceUnit  == null? anwsersHolder[2] : flourPriceUnit
        }
        egg = {
            'price': eggP.value === ''? priceHolder[3] : eggP.value,
            'unit': eggU.value === ''? unitHolder[3] : eggU.value,
            'p/u': eggPriceUnit == null? anwsersHolder[3] : eggPriceUnit
        }
        IcingForbutterCream  = {
            'price': icingSugarP.value === ''? priceHolder[4] : icingSugarP.value,
            'unit': icingSugarU.value === ''? unitHolder[4] : icingSugarU.value,
            'p/u': icingSugarPriceUnit == null? anwsersHolder[4] : icingSugarPriceUnit
        }
        buterForButterCream = {
            'price': butterFBC_P.value === ''? priceHolder[5] : butterFBC_P.value,
            'unit': butterFBC_U.value === ''? unitHolder[5] : butterFBC_U.value,
            'p/u': butterFBCPriceUnit  == null? anwsersHolder[5] : butterFBCPriceUnit
        }
        icingSugarFondant = {
            'price': icingSF_P.value === ''? priceHolder[6] : icingSF_P.value,
            'unit': icingSF_U.value === ''? unitHolder[6] : icingSF_U.value,
            'p/u': icingSFPriceUnit == null? anwsersHolder[6] : icingSFPriceUnit
        }
        colourDiscoFondant = {
            'price': colourDisco_P.value === ''? priceHolder[7] : colourDisco_P.value,
            'unit': colourDisco_U.value === ''? unitHolder[7] : colourDisco_U.value,
            'p/u': colourDiscoPriceUnit == null? anwsersHolder[7] : colourDiscoPriceUnit
        }

        // save all objects to the material data
        materialData = {
            'sugar': sugar,
            'butter': butter,
            'egg': egg,
            'flour': flour,
            'icing-for-butter-cream': IcingForbutterCream,
            'butter-for-butter-cream': buterForButterCream,
            'icing-sugar-fondant': icingSugarFondant,
            'colour-disco-fondant': colourDiscoFondant,
            'baking-other-ingredient-total': otherBakingIngredientTotal == null ? anwsersHolder[8] : otherBakingIngredientTotal,
            'overhead': monthlyOverheadTotal/numberOfMonthsValue,
            'other-ingredient-for-baking-cream-total': isNaN(otherIngredientForBakingCreamTotal) ? anwsersHolder[10] : otherIngredientForBakingCreamTotal,
            'other-ingredient-for-fondant': isNaN(otherIngredientForFondant) ? anwsersHolder[11] : otherIngredientForFondant,
        }
        console.log(materialData);

        //convert object to JSON
        var materialData_serialized = JSON.stringify(materialData);

        //save data to local Storage
        localStorage.setItem('materialData', materialData_serialized);

        //navigate to cost calculator screen
        location.href = 'cost-calculator.html';

 


}

//getting the total function
function totalGenerator(){
        //sugar
        if(sugarU.value === '' && sugarP.value === ''){

        }else{
            sugarPriceUnit = sugarP.value/sugarU.value;
            // sugarPU.innerHTML = sugarPriceUnit;
        }
    
        //butter
        if(butterU.value === '' && butterP.value === ''){
    
        }else{
            butterPriceUnit = butterP.value/butterU.value;
            // butterPU.innerHTML = butterPriceUnit;
        }
    
        //flour
        if(flourU.value === '' && flourP.value === ''){
    
        }else{
            flourPriceUnit = flourP.value/flourU.value;
            // flourPU.innerHTML = flourPriceUnit;
        }
    
        //egg
        if(eggU.value === '' && eggP.value === ''){
    
        }else{
            eggPriceUnit = eggP.value/eggU.value;
            // eggPU.innerHTML = eggPriceUnit;
        }
    
        //icing Sugar
        if(icingSugarU.value === '' && icingSugarP.value === ''){
    
        }else{
            icingSugarPriceUnit = icingSugarP.value/icingSugarU.value;
            // icingSugarPU.innerHTML = icingSugarPriceUnit;
        }
    
        //butter For butter cream
        if(butterFBC_U.value === '' && butterFBC_P.value === ''){
    
        }else{
            butterFBCPriceUnit = butterFBC_P.value/butterFBC_U.value;
            // butterFBC_PU.innerHTML = butterFBCPriceUnit;
        }
    
        //icing sugar fo fundant
        if(icingSF_U.value === '' && icingSF_P.value === ''){
    
        }else{
            icingSFPriceUnit = icingSF_P.value/icingSF_U.value;
            // icingSF_PU.innerHTML = icingSFPriceUnit;
        }
    
        //colour disco
        if(colourDisco_U.value === '' && colourDisco_P.value === ''){
    
        }else{
            colourDiscoPriceUnit = colourDisco_P.value/colourDisco_U.value;
            // colourDisco_PU.innerHTML = colourDiscoPriceUnit;
        }

        //other baking Ingredients
        if(OBI_disco_P.value === '' && OBI_dragees_P.value === '' && OBI_foodColor_P.value === ''){

        }else{
            otherBakingIngredientTotal = parseInt(OBI_disco_P.value) + parseInt(OBI_dragees_P.value) + parseInt(OBI_foodColor_P.value);
            OBI_total.innerHTML = otherBakingIngredientTotal;
        }

        //monthly overhead
        if(MO_rent_P.value === '' && MO_telephone_P.value === '' && MO_salary_P.value === '' && MO_electricity_P.value === '' && MO_waste_P.value === '' && MO_security_P.value === ''){

        }else{
            monthlyOverheadTotal = parseInt(MO_rent_P.value)+ parseInt(MO_telephone_P.value) + parseInt(MO_salary_P.value) + parseInt(MO_electricity_P.value) + parseInt(MO_waste_P.value) + parseInt(MO_security_P.value);
            MO_total.innerHTML = monthlyOverheadTotal;
        }

        //number of months
        if(numberOfMonth.value === ''){

        }else{
            numberOfMonthsValue = parseInt(numberOfMonth.value);
        }

        //other ingredientd for Butter cream
        otherIngredientForBakingCreamTotal = parseInt(OIFBC_lustre_P.value) + parseInt(OIFBC_disco_P.value) + parseInt(OIFBC_colour_P.value) + parseInt(OIFBC_flavour_P.value) + parseInt(OIFBC_milk_P.value);
        OIFBC_total.innerHTML = otherIngredientForBakingCreamTotal;

        //other ingredient for fondant
        otherIngredientForFondant = parseInt(OIFF_lustre_P.value) + parseInt(OIFF_disco_P.value) + parseInt(OIFF_ethanol_P.value);
        OIFF_total.innerHTML = otherIngredientForFondant;
       
}



//create toast message
function showToast(msg){
    toastBody.classList.add('show-toast');
    toastText.innerHTML = msg;
    setTimeout(function(){
        toastBody.classList.remove('show-toast');
    }, 3000);
}

