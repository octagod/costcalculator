let materialData_serialized = localStorage.getItem('materialData');
let recipeData_serialized = localStorage.getItem('data');
let calc_serialized = localStorage.getItem('calculatorData');
let materialData = JSON.parse(materialData_serialized);
let recipeData = JSON.parse(recipeData_serialized);
let calculatorData = JSON.parse(calc_serialized);


console.log(materialData_serialized);
console.log(recipeData_serialized);
console.log(calc_serialized);

let summaryCostTable = document.querySelector('table.summary-cost');
let percentageTable = document.querySelector('table.percentage-table');
let profitTable = document.querySelector('table.profit-table');
let unicedInput = document.getElementById('percentage-uniced');
let butterInput = document.getElementById('percentage-butter');
let fondantInput = document.getElementById('percentage-fondant');
let generateBtn = document.getElementById('input-button');

let amountTable = document.querySelector('table.amount-table');
let profitTableAm = document.querySelector('table.amount-profit-table');
let unicedInputAm = document.getElementById('amount-uniced');
let butterInputAm = document.getElementById('amount-butter');
let fondantInputAm = document.getElementById('amount-fondant');
let generateBtnAmount = document.getElementById('input-button-amount');

let convertPDF = document.querySelector('button.convert-pdf');
let convertPDFContainer = document.querySelector('div.print-button-contaner');

let toastBody = document.querySelector('div.toast-body');
let toastText = document.querySelector('div.toast-body p.toast-text');


//the drop down DOM
let amountHeading = document.querySelector('h2.amount-heading');
let _perHeading = document.querySelector('h2.percent-heading');
let amountInput_container = document.querySelector('div.amount-input-containers');
let percentInput_container = document.querySelector('div.percent-input-containers');
let amountInput_holder = document.querySelector('div.input-holder-2');
let percentInput_holder = document.querySelector('div.input-holders');
let radioPr = document.getElementById('percentage_radio');
let radioAm = document.getElementById('amount_radio');


//show the percentage and amount containers
setInterval(()=>{
 //check if percentage is checked
    if(radioPr.checked){
        percentInput_holder.style.display = 'grid';
    }else{
        percentInput_holder.style.display = 'none';
    }
  // check if amount is checked
    if(radioAm.checked){
        amountInput_holder.style.display = 'grid';
    }else{
        amountInput_holder.style.display = 'none';
    }
    
}, 100);



// ====== uniced cake row ===========

let unicedRow = document.createElement('tr');
unicedRow.setAttribute('id', 'uniced-row');
let emptyU = document.createElement('td');
let unicedName = document.createElement('td');
let uniced6 = document.createElement('td');
let uniced7 = document.createElement('td');
let uniced8 = document.createElement('td');
let uniced9 = document.createElement('td');
let uniced10 = document.createElement('td');
let uniced11 = document.createElement('td');
let uniced12 = document.createElement('td');
let uniced13 = document.createElement('td');
let uniced14 = document.createElement('td');
let uniced15 = document.createElement('td');
let uniced16 = document.createElement('td');
let uniced17 = document.createElement('td');
let uniced18 = document.createElement('td');

unicedName.innerHTML = 'Uniced Cakes';
emptyU.innerHTML = ' ';
uniced6.innerHTML = parseInt(calculatorData.tcouc[0]).toLocaleString();
uniced7.innerHTML = parseInt(calculatorData.tcouc[1]).toLocaleString();
uniced8.innerHTML = parseInt(calculatorData.tcouc[2]).toLocaleString();
uniced9.innerHTML = parseInt(calculatorData.tcouc[3]).toLocaleString();
uniced10.innerHTML = parseInt(calculatorData.tcouc[4]).toLocaleString();
uniced11.innerHTML = parseInt(calculatorData.tcouc[5]).toLocaleString();
uniced12.innerHTML = parseInt(calculatorData.tcouc[6]).toLocaleString();
uniced13.innerHTML = parseInt(calculatorData.tcouc[7]).toLocaleString();
uniced14.innerHTML = parseInt(calculatorData.tcouc[8]).toLocaleString();
uniced15.innerHTML = parseInt(calculatorData.tcouc[9]).toLocaleString();
uniced16.innerHTML = parseInt(calculatorData.tcouc[10]).toLocaleString();
uniced17.innerHTML = parseInt(calculatorData.tcouc[11]).toLocaleString();
uniced18.innerHTML = parseInt(calculatorData.tcouc[12]).toLocaleString();

unicedRow.appendChild(unicedName);
unicedRow.appendChild(emptyU);
unicedRow.appendChild(uniced6);
unicedRow.appendChild(uniced7);
unicedRow.appendChild(uniced8);
unicedRow.appendChild(uniced9);
unicedRow.appendChild(uniced10);
unicedRow.appendChild(uniced11);
unicedRow.appendChild(uniced12);
unicedRow.appendChild(uniced13);
unicedRow.appendChild(uniced14);
unicedRow.appendChild(uniced15);
unicedRow.appendChild(uniced16);
unicedRow.appendChild(uniced17);
unicedRow.appendChild(uniced18);
summaryCostTable.appendChild(unicedRow);


// ====== butter Cream cake row ===========

let butterRow = document.createElement('tr');
butterRow.setAttribute('id', 'butter-row');
let butterName = document.createElement('td');
let emptyB = document.createElement('td');
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

butterName.innerHTML = 'Butter Cream Cakes';
emptyB.innerHTML = '';
butter6.innerHTML = parseInt(calculatorData.tcobcc[0]).toLocaleString();
butter7.innerHTML = parseInt(calculatorData.tcobcc[1]).toLocaleString();
butter8.innerHTML = parseInt(calculatorData.tcobcc[2]).toLocaleString();
butter9.innerHTML = parseInt(calculatorData.tcobcc[3]).toLocaleString();
butter10.innerHTML = parseInt(calculatorData.tcobcc[4]).toLocaleString();
butter11.innerHTML = parseInt(calculatorData.tcobcc[5]).toLocaleString();
butter12.innerHTML = parseInt(calculatorData.tcobcc[6]).toLocaleString();
butter13.innerHTML = parseInt(calculatorData.tcobcc[7]).toLocaleString();
butter14.innerHTML = parseInt(calculatorData.tcobcc[8]).toLocaleString();
butter15.innerHTML = parseInt(calculatorData.tcobcc[9]).toLocaleString();
butter16.innerHTML = parseInt(calculatorData.tcobcc[10]).toLocaleString();
butter17.innerHTML = parseInt(calculatorData.tcobcc[11]).toLocaleString();
butter18.innerHTML = parseInt(calculatorData.tcobcc[12]).toLocaleString();

butterRow.appendChild(butterName);
butterRow.appendChild(emptyB);
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
summaryCostTable.appendChild(butterRow);


// ====== fondant cake row ===========

let fondantRow = document.createElement('tr');
fondantRow.setAttribute('id', 'fondant-row');
let emptyF = document.createElement('td');
let fondantName = document.createElement('td');
let fondant6 = document.createElement('td');
let fondant7 = document.createElement('td');
let fondant8 = document.createElement('td');
let fondant9 = document.createElement('td');
let fondant10 = document.createElement('td');
let fondant11 = document.createElement('td');
let fondant12 = document.createElement('td');
let fondant13 = document.createElement('td');
let fondant14 = document.createElement('td');
let fondant15 = document.createElement('td');
let fondant16 = document.createElement('td');
let fondant17 = document.createElement('td');
let fondant18 = document.createElement('td');

fondantName.innerHTML = 'Fondant Cakes';
emptyF.innerHTML = ' ';
fondant6.innerHTML = parseInt(calculatorData.cofc[0]).toLocaleString();
fondant7.innerHTML = parseInt(calculatorData.cofc[1]).toLocaleString();
fondant8.innerHTML = parseInt(calculatorData.cofc[2]).toLocaleString();
fondant9.innerHTML = parseInt(calculatorData.cofc[3]).toLocaleString();
fondant10.innerHTML = parseInt(calculatorData.cofc[4]).toLocaleString();
fondant11.innerHTML = parseInt(calculatorData.cofc[5]).toLocaleString();
fondant12.innerHTML = parseInt(calculatorData.cofc[6]).toLocaleString();
fondant13.innerHTML = parseInt(calculatorData.cofc[7]).toLocaleString();
fondant14.innerHTML = parseInt(calculatorData.cofc[8]).toLocaleString();
fondant15.innerHTML = parseInt(calculatorData.cofc[9]).toLocaleString();
fondant16.innerHTML = parseInt(calculatorData.cofc[10]).toLocaleString();
fondant17.innerHTML = parseInt(calculatorData.cofc[11]).toLocaleString();
fondant18.innerHTML = parseInt(calculatorData.cofc[12]).toLocaleString();

fondantRow.appendChild(fondantName);
fondantRow.appendChild(emptyF);
fondantRow.appendChild(fondant6);
fondantRow.appendChild(fondant7);
fondantRow.appendChild(fondant8);
fondantRow.appendChild(fondant9);
fondantRow.appendChild(fondant10);
fondantRow.appendChild(fondant11);
fondantRow.appendChild(fondant12);
fondantRow.appendChild(fondant13);
fondantRow.appendChild(fondant14);
fondantRow.appendChild(fondant15);
fondantRow.appendChild(fondant16);
fondantRow.appendChild(fondant17);
fondantRow.appendChild(fondant18);
summaryCostTable.appendChild(fondantRow);



//================== percentage table ===================

let unicedPercentageValue = 100;
let butterPercentageValue = 100;
let fondantPercentageValue = 100;

let percentageSection = document.querySelector('section.percentage-section');

generateBtn.onclick = function(){
    if(unicedInput.value === ''){
        showToast('Error! Ensure No Percentage field is empty');
    }else if(butterInput.value === ''){
        showToast('Error! Ensure No Percentage field is empty');
    }else if(fondantInput.value === ''){
        showToast('Error! Ensure No Percentage field is empty');
    }
    else{
        //make the percentage section visible
        percentageSection.setAttribute('style', 'display:block');

        //show the print button
        convertPDFContainer.style.display = 'block';

        // clear all nodes of the percentage table if it exists
        percentageTable.innerHTML = '';
        profitTable.innerHTML = '';

        //create the table header
        let percentageHeader = document.createElement('tr');
        percentageHeader.setAttribute('class', 'table-heading');
        let name = document.createElement('td');
        let p = document.createElement('td');
        let p6 = document.createElement('td');
        let p7 = document.createElement('td');
        let p8 = document.createElement('td');
        let p9 = document.createElement('td');
        let p10 = document.createElement('td');
        let p11 = document.createElement('td');
        let p12 = document.createElement('td');
        let p13 = document.createElement('td');
        let p14 = document.createElement('td');
        let p15 = document.createElement('td');
        let p16 = document.createElement('td');
        let p17 = document.createElement('td');
        let p18 = document.createElement('td');

        name.innerHTML = 'Name';
        p.innerHTML = 'Percentage';
        p6.innerHTML = '6 Inches';
        p7.innerHTML = '7 Inches';
        p8.innerHTML = '8 Inches';
        p9.innerHTML = '9 Inches';
        p10.innerHTML = '10 Inches';
        p11.innerHTML = '11 Inches';
        p12.innerHTML = '12 Inches';
        p13.innerHTML = '13 Inches';
        p14.innerHTML = '14 Inches';
        p15.innerHTML = '15 Inches';
        p16.innerHTML = '16 Inches';
        p17.innerHTML = '17 Inches';
        p18.innerHTML = '18 Inches';

        percentageHeader.appendChild(name);
        percentageHeader.appendChild(p);
        percentageHeader.appendChild(p6);
        percentageHeader.appendChild(p7);
        percentageHeader.appendChild(p8);
        percentageHeader.appendChild(p9);
        percentageHeader.appendChild(p10);
        percentageHeader.appendChild(p11);
        percentageHeader.appendChild(p12);
        percentageHeader.appendChild(p13);
        percentageHeader.appendChild(p14);
        percentageHeader.appendChild(p15);
        percentageHeader.appendChild(p16);
        percentageHeader.appendChild(p17);
        percentageHeader.appendChild(p18);
        percentageTable.appendChild(percentageHeader);





        unicedPercentageValue = parseInt(unicedInput.value);
        butterPercentageValue = parseInt(butterInput.value);
        fondantPercentageValue = parseInt(fondantInput.value);

        let unicedRow_pt = document.createElement('tr');
        unicedRow_pt.setAttribute('id', 'uniced-row');
        let unicedpercentage_pt = document.createElement('td');
        let unicedName_pt = document.createElement('td');
        let uniced6_pt = document.createElement('td');
        let uniced7_pt = document.createElement('td');
        let uniced8_pt = document.createElement('td');
        let uniced9_pt = document.createElement('td');
        let uniced10_pt = document.createElement('td');
        let uniced11_pt = document.createElement('td');
        let uniced12_pt = document.createElement('td');
        let uniced13_pt = document.createElement('td');
        let uniced14_pt = document.createElement('td');
        let uniced15_pt = document.createElement('td');
        let uniced16_pt = document.createElement('td');
        let uniced17_pt = document.createElement('td');
        let uniced18_pt = document.createElement('td');

        unicedName_pt.innerHTML = 'Uniced Cakes';
        unicedpercentage_pt.innerHTML = unicedPercentageValue;
        uniced6_pt.innerHTML = ((parseInt(calculatorData.tcouc[0]) * unicedPercentageValue)/100 + calculatorData.tcouc[0]).toLocaleString();
        uniced7_pt.innerHTML = ((parseInt(calculatorData.tcouc[1]) * unicedPercentageValue)/100 + calculatorData.tcouc[1]).toLocaleString();
        uniced8_pt.innerHTML = ((parseInt(calculatorData.tcouc[2]) * unicedPercentageValue)/100 + calculatorData.tcouc[2]).toLocaleString();
        uniced9_pt.innerHTML = ((parseInt(calculatorData.tcouc[3]) * unicedPercentageValue)/100 + calculatorData.tcouc[3]).toLocaleString();
        uniced10_pt.innerHTML = ((parseInt(calculatorData.tcouc[4]) * unicedPercentageValue)/100 + calculatorData.tcouc[4]).toLocaleString();
        uniced11_pt.innerHTML = ((parseInt(calculatorData.tcouc[5]) * unicedPercentageValue)/100 + calculatorData.tcouc[5]).toLocaleString();
        uniced12_pt.innerHTML = ((parseInt(calculatorData.tcouc[6]) * unicedPercentageValue)/100 + calculatorData.tcouc[6]).toLocaleString();
        uniced13_pt.innerHTML = ((parseInt(calculatorData.tcouc[7]) * unicedPercentageValue)/100 + calculatorData.tcouc[7]).toLocaleString();
        uniced14_pt.innerHTML = ((parseInt(calculatorData.tcouc[8]) * unicedPercentageValue)/100 + calculatorData.tcouc[8]).toLocaleString();
        uniced15_pt.innerHTML = ((parseInt(calculatorData.tcouc[9]) * unicedPercentageValue)/100 + calculatorData.tcouc[9]).toLocaleString();
        uniced16_pt.innerHTML = ((parseInt(calculatorData.tcouc[10]) * unicedPercentageValue)/100 + calculatorData.tcouc[10]).toLocaleString();
        uniced17_pt.innerHTML = ((parseInt(calculatorData.tcouc[11]) * unicedPercentageValue)/100 + calculatorData.tcouc[11]).toLocaleString();
        uniced18_pt.innerHTML = ((parseInt(calculatorData.tcouc[12]) * unicedPercentageValue)/100 + calculatorData.tcouc[12]).toLocaleString();

        unicedRow_pt.appendChild(unicedName_pt);
        unicedRow_pt.appendChild(unicedpercentage_pt);
        unicedRow_pt.appendChild(uniced6_pt);
        unicedRow_pt.appendChild(uniced7_pt);
        unicedRow_pt.appendChild(uniced8_pt);
        unicedRow_pt.appendChild(uniced9_pt);
        unicedRow_pt.appendChild(uniced10_pt);
        unicedRow_pt.appendChild(uniced11_pt);
        unicedRow_pt.appendChild(uniced12_pt);
        unicedRow_pt.appendChild(uniced13_pt);
        unicedRow_pt.appendChild(uniced14_pt);
        unicedRow_pt.appendChild(uniced15_pt);
        unicedRow_pt.appendChild(uniced16_pt);
        unicedRow_pt.appendChild(uniced17_pt);
        unicedRow_pt.appendChild(uniced18_pt);
        percentageTable.appendChild(unicedRow_pt);




        let butterRow_pt = document.createElement('tr');
        butterRow_pt.setAttribute('id', 'butter-row');
        let butterName_pt = document.createElement('td');
        let butterPercentage_pt = document.createElement('td');
        let butter6_pt = document.createElement('td');
        let butter7_pt = document.createElement('td');
        let butter8_pt = document.createElement('td');
        let butter9_pt = document.createElement('td');
        let butter10_pt = document.createElement('td');
        let butter11_pt = document.createElement('td');
        let butter12_pt = document.createElement('td');
        let butter13_pt = document.createElement('td');
        let butter14_pt = document.createElement('td');
        let butter15_pt = document.createElement('td');
        let butter16_pt = document.createElement('td');
        let butter17_pt = document.createElement('td');
        let butter18_pt = document.createElement('td');

        butterName_pt.innerHTML = 'Butter Cream Cakes';
        butterPercentage_pt.innerHTML = butterPercentageValue;
        butter6_pt.innerHTML = ((parseInt(calculatorData.tcobcc[0]) * butterPercentageValue)/100 + calculatorData.tcobcc[0]).toLocaleString();
        butter8_pt.innerHTML = ((parseInt(calculatorData.tcobcc[2]) * butterPercentageValue)/100 + calculatorData.tcobcc[2]).toLocaleString();
        butter7_pt.innerHTML = ((parseInt(calculatorData.tcobcc[1]) * butterPercentageValue)/100 + calculatorData.tcobcc[1]).toLocaleString();
        butter9_pt.innerHTML = ((parseInt(calculatorData.tcobcc[3]) * butterPercentageValue)/100 + calculatorData.tcobcc[3]).toLocaleString();
        butter10_pt.innerHTML = ((parseInt(calculatorData.tcobcc[4]) * butterPercentageValue)/100 + calculatorData.tcobcc[4]).toLocaleString();
        butter11_pt.innerHTML = ((parseInt(calculatorData.tcobcc[5]) * butterPercentageValue)/100 + calculatorData.tcobcc[5]).toLocaleString();
        butter12_pt.innerHTML = ((parseInt(calculatorData.tcobcc[6]) * butterPercentageValue)/100 + calculatorData.tcobcc[6]).toLocaleString();
        butter13_pt.innerHTML = ((parseInt(calculatorData.tcobcc[7]) * butterPercentageValue)/100 + calculatorData.tcobcc[7]).toLocaleString();
        butter14_pt.innerHTML = ((parseInt(calculatorData.tcobcc[8]) * butterPercentageValue)/100 + calculatorData.tcobcc[8]).toLocaleString();
        butter15_pt.innerHTML = ((parseInt(calculatorData.tcobcc[9]) * butterPercentageValue)/100 + calculatorData.tcobcc[9]).toLocaleString();
        butter16_pt.innerHTML = ((parseInt(calculatorData.tcobcc[10]) * butterPercentageValue)/100 + calculatorData.tcobcc[10]).toLocaleString();
        butter17_pt.innerHTML = ((parseInt(calculatorData.tcobcc[11]) * butterPercentageValue)/100 + calculatorData.tcobcc[11]).toLocaleString();
        butter18_pt.innerHTML = ((parseInt(calculatorData.tcobcc[12]) * butterPercentageValue)/100 + calculatorData.tcobcc[12]).toLocaleString();

        butterRow_pt.appendChild(butterName_pt);
        butterRow_pt.appendChild(butterPercentage_pt);
        butterRow_pt.appendChild(butter6_pt);
        butterRow_pt.appendChild(butter7_pt);
        butterRow_pt.appendChild(butter8_pt);
        butterRow_pt.appendChild(butter9_pt);
        butterRow_pt.appendChild(butter10_pt);
        butterRow_pt.appendChild(butter11_pt);
        butterRow_pt.appendChild(butter12_pt);
        butterRow_pt.appendChild(butter13_pt);
        butterRow_pt.appendChild(butter14_pt);
        butterRow_pt.appendChild(butter15_pt);
        butterRow_pt.appendChild(butter16_pt);
        butterRow_pt.appendChild(butter17_pt);
        butterRow_pt.appendChild(butter18_pt);
        percentageTable.appendChild(butterRow_pt);




        let fondantRow_pt = document.createElement('tr');
        fondantRow_pt.setAttribute('id', 'fondant-row');
        let fondantPercentageValue_pt = document.createElement('td');
        let fondantName_pt = document.createElement('td');
        let fondant6_pt = document.createElement('td');
        let fondant7_pt = document.createElement('td');
        let fondant8_pt = document.createElement('td');
        let fondant9_pt = document.createElement('td');
        let fondant10_pt = document.createElement('td');
        let fondant11_pt = document.createElement('td');
        let fondant12_pt = document.createElement('td');
        let fondant13_pt = document.createElement('td');
        let fondant14_pt = document.createElement('td');
        let fondant15_pt = document.createElement('td');
        let fondant16_pt = document.createElement('td');
        let fondant17_pt = document.createElement('td');
        let fondant18_pt = document.createElement('td');

        fondantName_pt.innerHTML = 'Fondant Cakes';
        fondantPercentageValue_pt.innerHTML = fondantPercentageValue;
        fondant6_pt.innerHTML = ((parseInt(calculatorData.cofc[0]) * fondantPercentageValue)/100 + calculatorData.cofc[0]).toLocaleString();
        fondant7_pt.innerHTML = ((parseInt(calculatorData.cofc[1]) * fondantPercentageValue)/100 + calculatorData.cofc[1]).toLocaleString();
        fondant8_pt.innerHTML = ((parseInt(calculatorData.cofc[2]) * fondantPercentageValue)/100 + calculatorData.cofc[2]).toLocaleString();
        fondant9_pt.innerHTML = ((parseInt(calculatorData.cofc[3]) * fondantPercentageValue)/100 + calculatorData.cofc[3]).toLocaleString();
        fondant10_pt.innerHTML = ((parseInt(calculatorData.cofc[4]) * fondantPercentageValue)/100 + calculatorData.cofc[4]).toLocaleString();
        fondant11_pt.innerHTML = ((parseInt(calculatorData.cofc[5]) * fondantPercentageValue)/100 + calculatorData.cofc[5]).toLocaleString();
        fondant12_pt.innerHTML = ((parseInt(calculatorData.cofc[6]) * fondantPercentageValue)/100 + calculatorData.cofc[6]).toLocaleString();
        fondant13_pt.innerHTML = ((parseInt(calculatorData.cofc[7]) * fondantPercentageValue)/100 + calculatorData.cofc[7]).toLocaleString();
        fondant14_pt.innerHTML = ((parseInt(calculatorData.cofc[8]) * fondantPercentageValue)/100 + calculatorData.cofc[8]).toLocaleString();
        fondant15_pt.innerHTML = ((parseInt(calculatorData.cofc[9]) * fondantPercentageValue)/100 + calculatorData.cofc[9]).toLocaleString();
        fondant16_pt.innerHTML = ((parseInt(calculatorData.cofc[10]) * fondantPercentageValue)/100 + calculatorData.cofc[10]).toLocaleString();
        fondant17_pt.innerHTML = ((parseInt(calculatorData.cofc[11]) * fondantPercentageValue)/100 + calculatorData.cofc[11]).toLocaleString();
        fondant18_pt.innerHTML = ((parseInt(calculatorData.cofc[12]) * fondantPercentageValue)/100 + calculatorData.cofc[12]).toLocaleString();

        fondantRow_pt.appendChild(fondantName_pt);
        fondantRow_pt.appendChild(fondantPercentageValue_pt);
        fondantRow_pt.appendChild(fondant6_pt);
        fondantRow_pt.appendChild(fondant7_pt);
        fondantRow_pt.appendChild(fondant8_pt);
        fondantRow_pt.appendChild(fondant9_pt);
        fondantRow_pt.appendChild(fondant10_pt);
        fondantRow_pt.appendChild(fondant11_pt);
        fondantRow_pt.appendChild(fondant12_pt);
        fondantRow_pt.appendChild(fondant13_pt);
        fondantRow_pt.appendChild(fondant14_pt);
        fondantRow_pt.appendChild(fondant15_pt);
        fondantRow_pt.appendChild(fondant16_pt);
        fondantRow_pt.appendChild(fondant17_pt);
        fondantRow_pt.appendChild(fondant18_pt);
        percentageTable.appendChild(fondantRow_pt); 


        //table values for profit table
        let profitHeader = document.createElement('tr');
        profitHeader.setAttribute('class', 'table-heading');
        let name_pr = document.createElement('td');
        let pr = document.createElement('td');
        let pr6 = document.createElement('td');
        let pr7 = document.createElement('td');
        let pr8 = document.createElement('td');
        let pr9 = document.createElement('td');
        let pr10 = document.createElement('td');
        let pr11 = document.createElement('td');
        let pr12 = document.createElement('td');
        let pr13 = document.createElement('td');
        let pr14 = document.createElement('td');
        let pr15 = document.createElement('td');
        let pr16 = document.createElement('td');
        let pr17 = document.createElement('td');
        let pr18 = document.createElement('td');

        name_pr.innerHTML = 'Name';
        pr.innerHTML = 'Percentage';
        pr6.innerHTML = '6 Inches';
        pr7.innerHTML = '7 Inches';
        pr8.innerHTML = '8 Inches';
        pr9.innerHTML = '9 Inches';
        pr10.innerHTML = '10 Inches';
        pr11.innerHTML = '11 Inches';
        pr12.innerHTML = '12 Inches';
        pr13.innerHTML = '13 Inches';
        pr14.innerHTML = '14 Inches';
        pr15.innerHTML = '15 Inches';
        pr16.innerHTML = '16 Inches';
        pr17.innerHTML = '17 Inches';
        pr18.innerHTML = '18 Inches';

        profitHeader.appendChild(name_pr);
        profitHeader.appendChild(pr);
        profitHeader.appendChild(pr6);
        profitHeader.appendChild(pr7);
        profitHeader.appendChild(pr8);
        profitHeader.appendChild(pr9);
        profitHeader.appendChild(pr10);
        profitHeader.appendChild(pr11);
        profitHeader.appendChild(pr12);
        profitHeader.appendChild(pr13);
        profitHeader.appendChild(pr14);
        profitHeader.appendChild(pr15);
        profitHeader.appendChild(pr16);
        profitHeader.appendChild(pr17);
        profitHeader.appendChild(pr18);
        profitTable.appendChild(profitHeader);


        let unicedRow_pr = document.createElement('tr');
        unicedRow_pr.setAttribute('id', 'uniced-profit-row');
        let unicedpercentage_pr = document.createElement('td');
        let unicedName_pr = document.createElement('td');
        let uniced6_pr = document.createElement('td');
        let uniced7_pr = document.createElement('td');
        let uniced8_pr = document.createElement('td');
        let uniced9_pr = document.createElement('td');
        let uniced10_pr = document.createElement('td');
        let uniced11_pr = document.createElement('td');
        let uniced12_pr = document.createElement('td');
        let uniced13_pr = document.createElement('td');
        let uniced14_pr = document.createElement('td');
        let uniced15_pr = document.createElement('td');
        let uniced16_pr = document.createElement('td');
        let uniced17_pr = document.createElement('td');
        let uniced18_pr = document.createElement('td');

        unicedName_pr.innerHTML = 'Uniced Cakes';
        unicedpercentage_pr.innerHTML = unicedPercentageValue;
        uniced6_pr.innerHTML = (Math.ceil(((parseInt(calculatorData.tcouc[0]) * unicedPercentageValue)/100 + calculatorData.tcouc[0]) - parseInt(calculatorData.tcouc[0]))).toLocaleString();
        uniced7_pr.innerHTML = (Math.ceil(((parseInt(calculatorData.tcouc[1]) * unicedPercentageValue)/100 + calculatorData.tcouc[1]) - parseInt(calculatorData.tcouc[1]))).toLocaleString();
        uniced8_pr.innerHTML = (Math.ceil(((parseInt(calculatorData.tcouc[2]) * unicedPercentageValue)/100 + calculatorData.tcouc[2]) - parseInt(calculatorData.tcouc[2]))).toLocaleString();
        uniced9_pr.innerHTML = (Math.ceil(((parseInt(calculatorData.tcouc[3]) * unicedPercentageValue)/100 + calculatorData.tcouc[3]) - parseInt(calculatorData.tcouc[3]))).toLocaleString();
        uniced10_pr.innerHTML = (Math.ceil(((parseInt(calculatorData.tcouc[4]) * unicedPercentageValue)/100 + calculatorData.tcouc[4]) - parseInt(calculatorData.tcouc[4]))).toLocaleString();
        uniced11_pr.innerHTML = Math.ceil(((parseInt(calculatorData.tcouc[5]) * unicedPercentageValue)/100 + calculatorData.tcouc[5]) - parseInt(calculatorData.tcouc[5])).toLocaleString();
        uniced12_pr.innerHTML = (Math.ceil(((parseInt(calculatorData.tcouc[6]) * unicedPercentageValue)/100 + calculatorData.tcouc[6]) - parseInt(calculatorData.tcouc[6]))).toLocaleString();
        uniced13_pr.innerHTML = (Math.ceil(((parseInt(calculatorData.tcouc[7]) * unicedPercentageValue)/100 + calculatorData.tcouc[7]) - parseInt(calculatorData.tcouc[7]))).toLocaleString();
        uniced14_pr.innerHTML = (Math.ceil(((parseInt(calculatorData.tcouc[8]) * unicedPercentageValue)/100 + calculatorData.tcouc[8]) - parseInt(calculatorData.tcouc[8]))).toLocaleString();
        uniced15_pr.innerHTML = (Math.ceil(((parseInt(calculatorData.tcouc[9]) * unicedPercentageValue)/100 + calculatorData.tcouc[9]) - parseInt(calculatorData.tcouc[9]))).toLocaleString();
        uniced16_pr.innerHTML = Math.ceil(((parseInt(calculatorData.tcouc[10]) * unicedPercentageValue)/100 + calculatorData.tcouc[10]) - parseInt(calculatorData.tcouc[10])).toLocaleString();
        uniced17_pr.innerHTML = Math.ceil(((parseInt(calculatorData.tcouc[11]) * unicedPercentageValue)/100 + calculatorData.tcouc[11]) - parseInt(calculatorData.tcouc[11])).toLocaleString();
        uniced18_pr.innerHTML = Math.ceil(((parseInt(calculatorData.tcouc[12]) * unicedPercentageValue)/100 + calculatorData.tcouc[12]) - parseInt(calculatorData.tcouc[12])).toLocaleString();

        unicedRow_pr.appendChild(unicedName_pr);
        unicedRow_pr.appendChild(unicedpercentage_pr);
        unicedRow_pr.appendChild(uniced6_pr);
        unicedRow_pr.appendChild(uniced7_pr);
        unicedRow_pr.appendChild(uniced8_pr);
        unicedRow_pr.appendChild(uniced9_pr);
        unicedRow_pr.appendChild(uniced10_pr);
        unicedRow_pr.appendChild(uniced11_pr);
        unicedRow_pr.appendChild(uniced12_pr);
        unicedRow_pr.appendChild(uniced13_pr);
        unicedRow_pr.appendChild(uniced14_pr);
        unicedRow_pr.appendChild(uniced15_pr);
        unicedRow_pr.appendChild(uniced16_pr);
        unicedRow_pr.appendChild(uniced17_pr);
        unicedRow_pr.appendChild(uniced18_pr);
        profitTable.appendChild(unicedRow_pr);




        let butterRow_pr = document.createElement('tr');
        butterRow_pr.setAttribute('id', 'butter-profit-row');
        let butterName_pr = document.createElement('td');
        let butterPercentage_pr = document.createElement('td');
        let butter6_pr = document.createElement('td');
        let butter7_pr = document.createElement('td');
        let butter8_pr = document.createElement('td');
        let butter9_pr = document.createElement('td');
        let butter10_pr = document.createElement('td');
        let butter11_pr = document.createElement('td');
        let butter12_pr = document.createElement('td');
        let butter13_pr = document.createElement('td');
        let butter14_pr = document.createElement('td');
        let butter15_pr = document.createElement('td');
        let butter16_pr = document.createElement('td');
        let butter17_pr = document.createElement('td');
        let butter18_pr = document.createElement('td');

        butterName_pr.innerHTML = 'Butter Cream Cakes';
        butterPercentage_pr.innerHTML = butterPercentageValue;
        butter6_pr.innerHTML = Math.ceil(((parseInt(calculatorData.tcobcc[0]) * butterPercentageValue)/100 + calculatorData.tcobcc[0]) - parseInt(calculatorData.tcobcc[0])).toLocaleString();
        butter7_pr.innerHTML = Math.ceil(((parseInt(calculatorData.tcobcc[1]) * butterPercentageValue)/100 + calculatorData.tcobcc[1]) - parseInt(calculatorData.tcobcc[1])).toLocaleString();
        butter8_pr.innerHTML = Math.ceil(((parseInt(calculatorData.tcobcc[2]) * butterPercentageValue)/100 + calculatorData.tcobcc[2]) - parseInt(calculatorData.tcobcc[2])).toLocaleString();
        butter9_pr.innerHTML = Math.ceil(((parseInt(calculatorData.tcobcc[3]) * butterPercentageValue)/100 + calculatorData.tcobcc[3]) - parseInt(calculatorData.tcobcc[3])).toLocaleString();
        butter10_pr.innerHTML = Math.ceil(((parseInt(calculatorData.tcobcc[4]) * butterPercentageValue)/100 + calculatorData.tcobcc[4]) - parseInt(calculatorData.tcobcc[4])).toLocaleString();
        butter11_pr.innerHTML = Math.ceil(((parseInt(calculatorData.tcobcc[5]) * butterPercentageValue)/100 + calculatorData.tcobcc[5]) - parseInt(calculatorData.tcobcc[5])).toLocaleString();
        butter12_pr.innerHTML = Math.ceil(((parseInt(calculatorData.tcobcc[6]) * butterPercentageValue)/100 + calculatorData.tcobcc[6]) - parseInt(calculatorData.tcobcc[6])).toLocaleString();
        butter13_pr.innerHTML = Math.ceil(((parseInt(calculatorData.tcobcc[7]) * butterPercentageValue)/100 + calculatorData.tcobcc[7]) - parseInt(calculatorData.tcobcc[7])).toLocaleString();
        butter14_pr.innerHTML = Math.ceil(((parseInt(calculatorData.tcobcc[8]) * butterPercentageValue)/100 + calculatorData.tcobcc[8]) - parseInt(calculatorData.tcobcc[8])).toLocaleString();
        butter15_pr.innerHTML = Math.ceil(((parseInt(calculatorData.tcobcc[9]) * butterPercentageValue)/100 + calculatorData.tcobcc[9]) - parseInt(calculatorData.tcobcc[9])).toLocaleString();
        butter16_pr.innerHTML = Math.ceil(((parseInt(calculatorData.tcobcc[10]) * butterPercentageValue)/100 + calculatorData.tcobcc[10]) - parseInt(calculatorData.tcobcc[10])).toLocaleString();
        butter17_pr.innerHTML = Math.ceil(((parseInt(calculatorData.tcobcc[11]) * butterPercentageValue)/100 + calculatorData.tcobcc[11]) - parseInt(calculatorData.tcobcc[11])).toLocaleString();
        butter18_pr.innerHTML = Math.ceil(((parseInt(calculatorData.tcobcc[12]) * butterPercentageValue)/100 + calculatorData.tcobcc[12]) - parseInt(calculatorData.tcobcc[12])).toLocaleString();

        butterRow_pr.appendChild(butterName_pr);
        butterRow_pr.appendChild(butterPercentage_pr);
        butterRow_pr.appendChild(butter6_pr);
        butterRow_pr.appendChild(butter7_pr);
        butterRow_pr.appendChild(butter8_pr);
        butterRow_pr.appendChild(butter9_pr);
        butterRow_pr.appendChild(butter10_pr);
        butterRow_pr.appendChild(butter11_pr);
        butterRow_pr.appendChild(butter12_pr);
        butterRow_pr.appendChild(butter13_pr);
        butterRow_pr.appendChild(butter14_pr);
        butterRow_pr.appendChild(butter15_pr);
        butterRow_pr.appendChild(butter16_pr);
        butterRow_pr.appendChild(butter17_pr);
        butterRow_pr.appendChild(butter18_pr);
        profitTable.appendChild(butterRow_pr);




        let fondantRow_pr = document.createElement('tr');
        fondantRow_pr.setAttribute('id', 'fondant-profit-row');
        let fondantPercentageValue_pr = document.createElement('td');
        let fondantName_pr = document.createElement('td');
        let fondant6_pr = document.createElement('td');
        let fondant7_pr = document.createElement('td');
        let fondant8_pr = document.createElement('td');
        let fondant9_pr = document.createElement('td');
        let fondant10_pr = document.createElement('td');
        let fondant11_pr = document.createElement('td');
        let fondant12_pr = document.createElement('td');
        let fondant13_pr = document.createElement('td');
        let fondant14_pr = document.createElement('td');
        let fondant15_pr = document.createElement('td');
        let fondant16_pr = document.createElement('td');
        let fondant17_pr = document.createElement('td');
        let fondant18_pr = document.createElement('td');

        fondantName_pr.innerHTML = 'Fondant Cakes';
        fondantPercentageValue_pr.innerHTML = fondantPercentageValue;
        fondant6_pr.innerHTML = Math.ceil(((parseInt(calculatorData.cofc[0]) * fondantPercentageValue)/100 + calculatorData.cofc[0]) - parseInt(calculatorData.cofc[0])).toLocaleString();
        fondant7_pr.innerHTML = Math.ceil(((parseInt(calculatorData.cofc[1]) * fondantPercentageValue)/100 + calculatorData.cofc[1]) - parseInt(calculatorData.cofc[1])).toLocaleString();
        fondant8_pr.innerHTML = Math.ceil(((parseInt(calculatorData.cofc[2]) * fondantPercentageValue)/100 + calculatorData.cofc[2]) - parseInt(calculatorData.cofc[2])).toLocaleString();
        fondant9_pr.innerHTML = Math.ceil(((parseInt(calculatorData.cofc[3]) * fondantPercentageValue)/100 + calculatorData.cofc[3]) - parseInt(calculatorData.cofc[3])).toLocaleString();
        fondant10_pr.innerHTML = Math.ceil(((parseInt(calculatorData.cofc[4]) * fondantPercentageValue)/100 + calculatorData.cofc[4]) - parseInt(calculatorData.cofc[4])).toLocaleString();
        fondant11_pr.innerHTML = Math.ceil(((parseInt(calculatorData.cofc[5]) * fondantPercentageValue)/100 + calculatorData.cofc[5]) - parseInt(calculatorData.cofc[5])).toLocaleString();
        fondant12_pr.innerHTML = Math.ceil(((parseInt(calculatorData.cofc[6]) * fondantPercentageValue)/100 + calculatorData.cofc[6]) - parseInt(calculatorData.cofc[6])).toLocaleString();
        fondant13_pr.innerHTML = Math.ceil(((parseInt(calculatorData.cofc[7]) * fondantPercentageValue)/100 + calculatorData.cofc[7]) - parseInt(calculatorData.cofc[7])).toLocaleString();
        fondant14_pr.innerHTML = Math.ceil(((parseInt(calculatorData.cofc[8]) * fondantPercentageValue)/100 + calculatorData.cofc[8]) - parseInt(calculatorData.cofc[8])).toLocaleString();
        fondant15_pr.innerHTML = Math.ceil(((parseInt(calculatorData.cofc[9]) * fondantPercentageValue)/100 + calculatorData.cofc[9]) - parseInt(calculatorData.cofc[9])).toLocaleString();
        fondant16_pr.innerHTML = Math.ceil(((parseInt(calculatorData.cofc[10]) * fondantPercentageValue)/100 + calculatorData.cofc[10]) - parseInt(calculatorData.cofc[10])).toLocaleString();
        fondant17_pr.innerHTML = Math.ceil(((parseInt(calculatorData.cofc[11]) * fondantPercentageValue)/100 + calculatorData.cofc[11]) - parseInt(calculatorData.cofc[11])).toLocaleString();
        fondant18_pr.innerHTML = Math.ceil(((parseInt(calculatorData.cofc[12]) * fondantPercentageValue)/100 + calculatorData.cofc[12]) - parseInt(calculatorData.cofc[12])).toLocaleString();

        fondantRow_pr.appendChild(fondantName_pr);
        fondantRow_pr.appendChild(fondantPercentageValue_pr);
        fondantRow_pr.appendChild(fondant6_pr);
        fondantRow_pr.appendChild(fondant7_pr);
        fondantRow_pr.appendChild(fondant8_pr);
        fondantRow_pr.appendChild(fondant9_pr);
        fondantRow_pr.appendChild(fondant10_pr);
        fondantRow_pr.appendChild(fondant11_pr);
        fondantRow_pr.appendChild(fondant12_pr);
        fondantRow_pr.appendChild(fondant13_pr);
        fondantRow_pr.appendChild(fondant14_pr);
        fondantRow_pr.appendChild(fondant15_pr);
        fondantRow_pr.appendChild(fondant16_pr);
        fondantRow_pr.appendChild(fondant17_pr);
        fondantRow_pr.appendChild(fondant18_pr);
        profitTable.appendChild(fondantRow_pr); 

        unicedInput.value = '';
        butterInput.value = '';
        fondantInput.value = '';

    }
}


//================== Amount table ===================

let unicedAmountValue = 100;
let butterAmountValue = 100;
let fondantAmountValue = 100;

let amountSection = document.querySelector('section.amount-section');

generateBtnAmount.onclick = function(){
    if(unicedInputAm.value === ''){
        showToast('Error! Ensure No Amount field is empty');
    }else if(butterInputAm.value === ''){
        showToast('Error! Ensure No Amount field is empty');
    }else if(fondantInputAm.value === ''){
        showToast('Error! Ensure No Amount field is empty');
    }
    else{
        //make the amount section visible
        amountSection.setAttribute('style', 'display:block');

        // clear all nodes of the percentage table if it exists
        amountTable.innerHTML = '';
        profitTableAm.innerHTML = '';


        //show the print button
        convertPDFContainer.style.display = 'block';

        //create the table header
        let amountHeader = document.createElement('tr');
        amountHeader.setAttribute('class', 'table-heading');
        let nameam = document.createElement('td');
        let pam = document.createElement('td');
        let p6am = document.createElement('td');
        let p7am = document.createElement('td');
        let p8am = document.createElement('td');
        let p9am = document.createElement('td');
        let p10am = document.createElement('td');
        let p11am = document.createElement('td');
        let p12am = document.createElement('td');
        let p13am = document.createElement('td');
        let p14am = document.createElement('td');
        let p15am = document.createElement('td');
        let p16am = document.createElement('td');
        let p17am = document.createElement('td');
        let p18am = document.createElement('td');

        nameam.innerHTML = 'Name';
        pam.innerHTML = 'Amount';
        p6am.innerHTML = '6 Inches';
        p7am.innerHTML = '7 Inches';
        p8am.innerHTML = '8 Inches';
        p9am.innerHTML = '9 Inches';
        p10am.innerHTML = '10 Inches';
        p11am.innerHTML = '11 Inches';
        p12am.innerHTML = '12 Inches';
        p13am.innerHTML = '13 Inches';
        p14am.innerHTML = '14 Inches';
        p15am.innerHTML = '15 Inches';
        p16am.innerHTML = '16 Inches';
        p17am.innerHTML = '17 Inches';
        p18am.innerHTML = '18 Inches';

        amountHeader.appendChild(nameam);
        amountHeader.appendChild(pam);
        amountHeader.appendChild(p6am);
        amountHeader.appendChild(p7am);
        amountHeader.appendChild(p8am);
        amountHeader.appendChild(p9am);
        amountHeader.appendChild(p10am);
        amountHeader.appendChild(p11am);
        amountHeader.appendChild(p12am);
        amountHeader.appendChild(p13am);
        amountHeader.appendChild(p14am);
        amountHeader.appendChild(p15am);
        amountHeader.appendChild(p16am);
        amountHeader.appendChild(p17am);
        amountHeader.appendChild(p18am);
        amountTable.appendChild(amountHeader);





        unicedAmountValue = parseInt(unicedInputAm.value);
        butterAmountValue = parseInt(butterInputAm.value);
        fondantAmountValue = parseInt(fondantInputAm.value);

        let unicedRow_am = document.createElement('tr');
        unicedRow_am.setAttribute('id', 'uniced-row');
        let unicedpercentage_am = document.createElement('td');
        let unicedName_am = document.createElement('td');
        let uniced6_am = document.createElement('td');
        let uniced7_am = document.createElement('td');
        let uniced8_am = document.createElement('td');
        let uniced9_am = document.createElement('td');
        let uniced10_am = document.createElement('td');
        let uniced11_am = document.createElement('td');
        let uniced12_am = document.createElement('td');
        let uniced13_am = document.createElement('td');
        let uniced14_am = document.createElement('td');
        let uniced15_am = document.createElement('td');
        let uniced16_am = document.createElement('td');
        let uniced17_am = document.createElement('td');
        let uniced18_am = document.createElement('td');

        unicedName_am.innerHTML = 'Uniced Cakes';
        unicedpercentage_am.innerHTML = unicedAmountValue;
        uniced6_am.innerHTML = (unicedAmountValue + calculatorData.tcouc[0]).toLocaleString();
        uniced7_am.innerHTML = (unicedAmountValue + calculatorData.tcouc[1]).toLocaleString();
        uniced8_am.innerHTML = (unicedAmountValue + calculatorData.tcouc[2]).toLocaleString();
        uniced9_am.innerHTML = (unicedAmountValue + calculatorData.tcouc[3]).toLocaleString();
        uniced10_am.innerHTML = (unicedAmountValue+ calculatorData.tcouc[4]).toLocaleString();
        uniced11_am.innerHTML = (unicedAmountValue + calculatorData.tcouc[5]).toLocaleString();
        uniced12_am.innerHTML = (unicedAmountValue + calculatorData.tcouc[6]).toLocaleString();
        uniced13_am.innerHTML = (unicedAmountValue + calculatorData.tcouc[7]).toLocaleString();
        uniced14_am.innerHTML = (unicedAmountValue + calculatorData.tcouc[8]).toLocaleString();
        uniced15_am.innerHTML = (unicedAmountValue + calculatorData.tcouc[9]).toLocaleString();
        uniced16_am.innerHTML = (unicedAmountValue + calculatorData.tcouc[10]).toLocaleString();
        uniced17_am.innerHTML = (unicedAmountValue + calculatorData.tcouc[11]).toLocaleString();
        uniced18_am.innerHTML = (unicedAmountValue + calculatorData.tcouc[12]).toLocaleString();

        unicedRow_am.appendChild(unicedName_am);
        unicedRow_am.appendChild(unicedpercentage_am);
        unicedRow_am.appendChild(uniced6_am);
        unicedRow_am.appendChild(uniced7_am);
        unicedRow_am.appendChild(uniced8_am);
        unicedRow_am.appendChild(uniced9_am);
        unicedRow_am.appendChild(uniced10_am);
        unicedRow_am.appendChild(uniced11_am);
        unicedRow_am.appendChild(uniced12_am);
        unicedRow_am.appendChild(uniced13_am);
        unicedRow_am.appendChild(uniced14_am);
        unicedRow_am.appendChild(uniced15_am);
        unicedRow_am.appendChild(uniced16_am);
        unicedRow_am.appendChild(uniced17_am);
        unicedRow_am.appendChild(uniced18_am);
        amountTable.appendChild(unicedRow_am);




        let butterRow_am = document.createElement('tr');
        butterRow_am.setAttribute('id', 'butter-row');
        let butterName_am = document.createElement('td');
        let butterPercentage_am = document.createElement('td');
        let butter6_am = document.createElement('td');
        let butter7_am = document.createElement('td');
        let butter8_am = document.createElement('td');
        let butter9_am = document.createElement('td');
        let butter10_am = document.createElement('td');
        let butter11_am = document.createElement('td');
        let butter12_am = document.createElement('td');
        let butter13_am = document.createElement('td');
        let butter14_am = document.createElement('td');
        let butter15_am = document.createElement('td');
        let butter16_am = document.createElement('td');
        let butter17_am = document.createElement('td');
        let butter18_am = document.createElement('td');

        butterName_am.innerHTML = 'Butter Cream Cakes';
        butterPercentage_am.innerHTML = butterAmountValue;
        butter6_am.innerHTML = (butterAmountValue + calculatorData.tcobcc[0]).toLocaleString();
        butter8_am.innerHTML = (butterAmountValue + calculatorData.tcobcc[2]).toLocaleString();
        butter7_am.innerHTML = (butterAmountValue + calculatorData.tcobcc[1]).toLocaleString();
        butter9_am.innerHTML = (butterAmountValue + calculatorData.tcobcc[3]).toLocaleString();
        butter10_am.innerHTML = (butterAmountValue + calculatorData.tcobcc[4]).toLocaleString();
        butter11_am.innerHTML = (butterAmountValue + calculatorData.tcobcc[5]).toLocaleString();
        butter12_am.innerHTML = (butterAmountValue + calculatorData.tcobcc[6]).toLocaleString();
        butter13_am.innerHTML = (butterAmountValue + calculatorData.tcobcc[7]).toLocaleString();
        butter14_am.innerHTML = (butterAmountValue + calculatorData.tcobcc[8]).toLocaleString();
        butter15_am.innerHTML = (butterAmountValue + calculatorData.tcobcc[9]).toLocaleString();
        butter16_am.innerHTML = (butterAmountValue + calculatorData.tcobcc[10]).toLocaleString();
        butter17_am.innerHTML = (butterAmountValue + calculatorData.tcobcc[11]).toLocaleString();
        butter18_am.innerHTML = (butterAmountValue + calculatorData.tcobcc[12]).toLocaleString();

        butterRow_am.appendChild(butterName_am);
        butterRow_am.appendChild(butterPercentage_am);
        butterRow_am.appendChild(butter6_am);
        butterRow_am.appendChild(butter7_am);
        butterRow_am.appendChild(butter8_am);
        butterRow_am.appendChild(butter9_am);
        butterRow_am.appendChild(butter10_am);
        butterRow_am.appendChild(butter11_am);
        butterRow_am.appendChild(butter12_am);
        butterRow_am.appendChild(butter13_am);
        butterRow_am.appendChild(butter14_am);
        butterRow_am.appendChild(butter15_am);
        butterRow_am.appendChild(butter16_am);
        butterRow_am.appendChild(butter17_am);
        butterRow_am.appendChild(butter18_am);
        amountTable.appendChild(butterRow_am);




        let fondantRow_am = document.createElement('tr');
        fondantRow_am.setAttribute('id', 'fondant-row');
        let fondantPercentageValue_am = document.createElement('td');
        let fondantName_am = document.createElement('td');
        let fondant6_am = document.createElement('td');
        let fondant7_am = document.createElement('td');
        let fondant8_am = document.createElement('td');
        let fondant9_am = document.createElement('td');
        let fondant10_am = document.createElement('td');
        let fondant11_am = document.createElement('td');
        let fondant12_am = document.createElement('td');
        let fondant13_am = document.createElement('td');
        let fondant14_am = document.createElement('td');
        let fondant15_am = document.createElement('td');
        let fondant16_am = document.createElement('td');
        let fondant17_am = document.createElement('td');
        let fondant18_am = document.createElement('td');

        fondantName_am.innerHTML = 'Fondant Cakes';
        fondantPercentageValue_am.innerHTML = fondantAmountValue;
        fondant6_am.innerHTML = (fondantAmountValue + calculatorData.cofc[0]).toLocaleString();
        fondant7_am.innerHTML = (fondantAmountValue + calculatorData.cofc[1]).toLocaleString();
        fondant8_am.innerHTML = (fondantAmountValue + calculatorData.cofc[2]).toLocaleString();
        fondant9_am.innerHTML = (fondantAmountValue + calculatorData.cofc[3]).toLocaleString();
        fondant10_am.innerHTML = (fondantAmountValue + calculatorData.cofc[4]).toLocaleString();
        fondant11_am.innerHTML = (fondantAmountValue + calculatorData.cofc[5]).toLocaleString();
        fondant12_am.innerHTML = (fondantAmountValue + calculatorData.cofc[6]).toLocaleString();
        fondant13_am.innerHTML = (fondantAmountValue + calculatorData.cofc[7]).toLocaleString();
        fondant14_am.innerHTML = (fondantAmountValue + calculatorData.cofc[8]).toLocaleString();
        fondant15_am.innerHTML = (fondantAmountValue + calculatorData.cofc[9]).toLocaleString();
        fondant16_am.innerHTML = (fondantAmountValue + calculatorData.cofc[10]).toLocaleString();
        fondant17_am.innerHTML = (fondantAmountValue + calculatorData.cofc[11]).toLocaleString();
        fondant18_am.innerHTML = (fondantAmountValue + calculatorData.cofc[12]).toLocaleString();

        fondantRow_am.appendChild(fondantName_am);
        fondantRow_am.appendChild(fondantPercentageValue_am);
        fondantRow_am.appendChild(fondant6_am);
        fondantRow_am.appendChild(fondant7_am);
        fondantRow_am.appendChild(fondant8_am);
        fondantRow_am.appendChild(fondant9_am);
        fondantRow_am.appendChild(fondant10_am);
        fondantRow_am.appendChild(fondant11_am);
        fondantRow_am.appendChild(fondant12_am);
        fondantRow_am.appendChild(fondant13_am);
        fondantRow_am.appendChild(fondant14_am);
        fondantRow_am.appendChild(fondant15_am);
        fondantRow_am.appendChild(fondant16_am);
        fondantRow_am.appendChild(fondant17_am);
        fondantRow_am.appendChild(fondant18_am);
        amountTable.appendChild(fondantRow_am); 


        //table values for profit table
        let profitHeaderAm = document.createElement('tr');
        profitHeaderAm.setAttribute('class', 'table-heading');
        let name_pram = document.createElement('td');
        let pram = document.createElement('td');
        let pr6am = document.createElement('td');
        let pr7am = document.createElement('td');
        let pr8am = document.createElement('td');
        let pr9am = document.createElement('td');
        let pr10am = document.createElement('td');
        let pr11am = document.createElement('td');
        let pr12am = document.createElement('td');
        let pr13am = document.createElement('td');
        let pr14am = document.createElement('td');
        let pr15am = document.createElement('td');
        let pr16am = document.createElement('td');
        let pr17am = document.createElement('td');
        let pr18am = document.createElement('td');

        name_pram.innerHTML = 'Name';
        pram.innerHTML = 'Amount';
        pr6am.innerHTML = '6 Inches';
        pr7am.innerHTML = '7 Inches';
        pr8am.innerHTML = '8 Inches';
        pr9am.innerHTML = '9 Inches';
        pr10am.innerHTML = '10 Inches';
        pr11am.innerHTML = '11 Inches';
        pr12am.innerHTML = '12 Inches';
        pr13am.innerHTML = '13 Inches';
        pr14am.innerHTML = '14 Inches';
        pr15am.innerHTML = '15 Inches';
        pr16am.innerHTML = '16 Inches';
        pr17am.innerHTML = '17 Inches';
        pr18am.innerHTML = '18 Inches';

        profitHeaderAm.appendChild(name_pram);
        profitHeaderAm.appendChild(pram);
        profitHeaderAm.appendChild(pr6am);
        profitHeaderAm.appendChild(pr7am);
        profitHeaderAm.appendChild(pr8am);
        profitHeaderAm.appendChild(pr9am);
        profitHeaderAm.appendChild(pr10am);
        profitHeaderAm.appendChild(pr11am);
        profitHeaderAm.appendChild(pr12am);
        profitHeaderAm.appendChild(pr13am);
        profitHeaderAm.appendChild(pr14am);
        profitHeaderAm.appendChild(pr15am);
        profitHeaderAm.appendChild(pr16am);
        profitHeaderAm.appendChild(pr17am);
        profitHeaderAm.appendChild(pr18am);
        profitTableAm.appendChild(profitHeaderAm);


        let unicedRow_pram = document.createElement('tr');
        unicedRow_pram.setAttribute('id', 'uniced-profit-row');
        let unicedpercentage_pram = document.createElement('td');
        let unicedName_pram = document.createElement('td');
        let uniced6_pram = document.createElement('td');
        let uniced7_pram = document.createElement('td');
        let uniced8_pram = document.createElement('td');
        let uniced9_pram = document.createElement('td');
        let uniced10_pram = document.createElement('td');
        let uniced11_pram = document.createElement('td');
        let uniced12_pram = document.createElement('td');
        let uniced13_pram = document.createElement('td');
        let uniced14_pram = document.createElement('td');
        let uniced15_pram = document.createElement('td');
        let uniced16_pram = document.createElement('td');
        let uniced17_pram = document.createElement('td');
        let uniced18_pram = document.createElement('td');

        unicedName_pram.innerHTML = 'Uniced Cakes';
        unicedpercentage_pram.innerHTML = unicedAmountValue;
        uniced6_pram.innerHTML = (Math.ceil((unicedAmountValue + calculatorData.tcouc[0]) - parseInt(calculatorData.tcouc[0]))).toLocaleString();
        uniced7_pram.innerHTML = (Math.ceil((unicedAmountValue + calculatorData.tcouc[1]) - parseInt(calculatorData.tcouc[1]))).toLocaleString();
        uniced8_pram.innerHTML = (Math.ceil((unicedAmountValue + calculatorData.tcouc[2]) - parseInt(calculatorData.tcouc[2]))).toLocaleString();
        uniced9_pram.innerHTML = (Math.ceil((unicedAmountValue + calculatorData.tcouc[3]) - parseInt(calculatorData.tcouc[3]))).toLocaleString();
        uniced10_pram.innerHTML = (Math.ceil((unicedAmountValue + calculatorData.tcouc[4]) - parseInt(calculatorData.tcouc[4]))).toLocaleString();
        uniced11_pram.innerHTML = Math.ceil((unicedAmountValue + calculatorData.tcouc[5]) - parseInt(calculatorData.tcouc[5])).toLocaleString();
        uniced12_pram.innerHTML = (Math.ceil((unicedAmountValue + calculatorData.tcouc[6]) - parseInt(calculatorData.tcouc[6]))).toLocaleString();
        uniced13_pram.innerHTML = (Math.ceil((unicedAmountValue + calculatorData.tcouc[7]) - parseInt(calculatorData.tcouc[7]))).toLocaleString();
        uniced14_pram.innerHTML = (Math.ceil((unicedAmountValue + calculatorData.tcouc[8]) - parseInt(calculatorData.tcouc[8]))).toLocaleString();
        uniced15_pram.innerHTML = (Math.ceil((unicedAmountValue + calculatorData.tcouc[9]) - parseInt(calculatorData.tcouc[9]))).toLocaleString();
        uniced16_pram.innerHTML = Math.ceil(( unicedAmountValue + calculatorData.tcouc[10]) - parseInt(calculatorData.tcouc[10])).toLocaleString();
        uniced17_pram.innerHTML = Math.ceil(( unicedAmountValue + calculatorData.tcouc[11]) - parseInt(calculatorData.tcouc[11])).toLocaleString();
        uniced18_pram.innerHTML = Math.ceil(( unicedAmountValue + calculatorData.tcouc[12]) - parseInt(calculatorData.tcouc[12])).toLocaleString();

        unicedRow_pram.appendChild(unicedName_pram);
        unicedRow_pram.appendChild(unicedpercentage_pram);
        unicedRow_pram.appendChild(uniced6_pram);
        unicedRow_pram.appendChild(uniced7_pram);
        unicedRow_pram.appendChild(uniced8_pram);
        unicedRow_pram.appendChild(uniced9_pram);
        unicedRow_pram.appendChild(uniced10_pram);
        unicedRow_pram.appendChild(uniced11_pram);
        unicedRow_pram.appendChild(uniced12_pram);
        unicedRow_pram.appendChild(uniced13_pram);
        unicedRow_pram.appendChild(uniced14_pram);
        unicedRow_pram.appendChild(uniced15_pram);
        unicedRow_pram.appendChild(uniced16_pram);
        unicedRow_pram.appendChild(uniced17_pram);
        unicedRow_pram.appendChild(uniced18_pram);
        profitTableAm.appendChild(unicedRow_pram);




        let butterRow_pram = document.createElement('tr');
        butterRow_pram.setAttribute('id', 'butter-profit-row');
        let butterName_pram = document.createElement('td');
        let butterPercentage_pram = document.createElement('td');
        let butter6_pram = document.createElement('td');
        let butter7_pram = document.createElement('td');
        let butter8_pram = document.createElement('td');
        let butter9_pram = document.createElement('td');
        let butter10_pram = document.createElement('td');
        let butter11_pram = document.createElement('td');
        let butter12_pram = document.createElement('td');
        let butter13_pram = document.createElement('td');
        let butter14_pram = document.createElement('td');
        let butter15_pram = document.createElement('td');
        let butter16_pram = document.createElement('td');
        let butter17_pram = document.createElement('td');
        let butter18_pram = document.createElement('td');

        butterName_pram.innerHTML = 'Butter Cream Cakes';
        butterPercentage_pram.innerHTML = butterAmountValue;
        butter6_pram.innerHTML = Math.ceil((butterAmountValue + calculatorData.tcobcc[0]) - parseInt(calculatorData.tcobcc[0])).toLocaleString();
        butter7_pram.innerHTML = Math.ceil((butterAmountValue + calculatorData.tcobcc[1]) - parseInt(calculatorData.tcobcc[1])).toLocaleString();
        butter8_pram.innerHTML = Math.ceil((butterAmountValue + calculatorData.tcobcc[2]) - parseInt(calculatorData.tcobcc[2])).toLocaleString();
        butter9_pram.innerHTML = Math.ceil((butterAmountValue+ calculatorData.tcobcc[3]) - parseInt(calculatorData.tcobcc[3])).toLocaleString();
        butter10_pram.innerHTML = Math.ceil((butterAmountValue + calculatorData.tcobcc[4]) - parseInt(calculatorData.tcobcc[4])).toLocaleString();
        butter11_pram.innerHTML = Math.ceil((butterAmountValue + calculatorData.tcobcc[5]) - parseInt(calculatorData.tcobcc[5])).toLocaleString();
        butter12_pram.innerHTML = Math.ceil((butterAmountValue + calculatorData.tcobcc[6]) - parseInt(calculatorData.tcobcc[6])).toLocaleString();
        butter13_pram.innerHTML = Math.ceil((butterAmountValue + calculatorData.tcobcc[7]) - parseInt(calculatorData.tcobcc[7])).toLocaleString();
        butter14_pram.innerHTML = Math.ceil((butterAmountValue + calculatorData.tcobcc[8]) - parseInt(calculatorData.tcobcc[8])).toLocaleString();
        butter15_pram.innerHTML = Math.ceil((butterAmountValue + calculatorData.tcobcc[9]) - parseInt(calculatorData.tcobcc[9])).toLocaleString();
        butter16_pram.innerHTML = Math.ceil((butterAmountValue + calculatorData.tcobcc[10]) - parseInt(calculatorData.tcobcc[10])).toLocaleString();
        butter17_pram.innerHTML = Math.ceil((butterAmountValue + calculatorData.tcobcc[11]) - parseInt(calculatorData.tcobcc[11])).toLocaleString();
        butter18_pram.innerHTML = Math.ceil((butterAmountValue + calculatorData.tcobcc[12]) - parseInt(calculatorData.tcobcc[12])).toLocaleString();

        butterRow_pram.appendChild(butterName_pram);
        butterRow_pram.appendChild(butterPercentage_pram);
        butterRow_pram.appendChild(butter6_pram);
        butterRow_pram.appendChild(butter7_pram);
        butterRow_pram.appendChild(butter8_pram);
        butterRow_pram.appendChild(butter9_pram);
        butterRow_pram.appendChild(butter10_pram);
        butterRow_pram.appendChild(butter11_pram);
        butterRow_pram.appendChild(butter12_pram);
        butterRow_pram.appendChild(butter13_pram);
        butterRow_pram.appendChild(butter14_pram);
        butterRow_pram.appendChild(butter15_pram);
        butterRow_pram.appendChild(butter16_pram);
        butterRow_pram.appendChild(butter17_pram);
        butterRow_pram.appendChild(butter18_pram);
        profitTableAm.appendChild(butterRow_pram);




        let fondantRow_pram = document.createElement('tr');
        fondantRow_pram.setAttribute('id', 'fondant-profit-row');
        let fondantPercentageValue_pram = document.createElement('td');
        let fondantName_pram = document.createElement('td');
        let fondant6_pram = document.createElement('td');
        let fondant7_pram = document.createElement('td');
        let fondant8_pram = document.createElement('td');
        let fondant9_pram = document.createElement('td');
        let fondant10_pram = document.createElement('td');
        let fondant11_pram = document.createElement('td');
        let fondant12_pram = document.createElement('td');
        let fondant13_pram = document.createElement('td');
        let fondant14_pram = document.createElement('td');
        let fondant15_pram = document.createElement('td');
        let fondant16_pram = document.createElement('td');
        let fondant17_pram = document.createElement('td');
        let fondant18_pram = document.createElement('td');

        fondantName_pram.innerHTML = 'Fondant Cakes';
        fondantPercentageValue_pram.innerHTML = fondantAmountValue;
        fondant6_pram.innerHTML = Math.ceil((fondantAmountValue + calculatorData.cofc[0]) - parseInt(calculatorData.cofc[0])).toLocaleString();
        fondant7_pram.innerHTML = Math.ceil((fondantAmountValue + calculatorData.cofc[1]) - parseInt(calculatorData.cofc[1])).toLocaleString();
        fondant8_pram.innerHTML = Math.ceil((fondantAmountValue + calculatorData.cofc[2]) - parseInt(calculatorData.cofc[2])).toLocaleString();
        fondant9_pram.innerHTML = Math.ceil((fondantAmountValue + calculatorData.cofc[3]) - parseInt(calculatorData.cofc[3])).toLocaleString();
        fondant10_pram.innerHTML = Math.ceil((fondantAmountValue + calculatorData.cofc[4]) - parseInt(calculatorData.cofc[4])).toLocaleString();
        fondant11_pram.innerHTML = Math.ceil((fondantAmountValue + calculatorData.cofc[5]) - parseInt(calculatorData.cofc[5])).toLocaleString();
        fondant12_pram.innerHTML = Math.ceil((fondantAmountValue + calculatorData.cofc[6]) - parseInt(calculatorData.cofc[6])).toLocaleString();
        fondant13_pram.innerHTML = Math.ceil((fondantAmountValue + calculatorData.cofc[7]) - parseInt(calculatorData.cofc[7])).toLocaleString();
        fondant14_pram.innerHTML = Math.ceil((fondantAmountValue + calculatorData.cofc[8]) - parseInt(calculatorData.cofc[8])).toLocaleString();
        fondant15_pram.innerHTML = Math.ceil((fondantAmountValue + calculatorData.cofc[9]) - parseInt(calculatorData.cofc[9])).toLocaleString();
        fondant16_pram.innerHTML = Math.ceil((fondantAmountValue + calculatorData.cofc[10]) - parseInt(calculatorData.cofc[10])).toLocaleString();
        fondant17_pram.innerHTML = Math.ceil((fondantAmountValue + calculatorData.cofc[11]) - parseInt(calculatorData.cofc[11])).toLocaleString();
        fondant18_pram.innerHTML = Math.ceil((fondantAmountValue + calculatorData.cofc[12]) - parseInt(calculatorData.cofc[12])).toLocaleString();

        fondantRow_pram.appendChild(fondantName_pram);
        fondantRow_pram.appendChild(fondantPercentageValue_pram);
        fondantRow_pram.appendChild(fondant6_pram);
        fondantRow_pram.appendChild(fondant7_pram);
        fondantRow_pram.appendChild(fondant8_pram);
        fondantRow_pram.appendChild(fondant9_pram);
        fondantRow_pram.appendChild(fondant10_pram);
        fondantRow_pram.appendChild(fondant11_pram);
        fondantRow_pram.appendChild(fondant12_pram);
        fondantRow_pram.appendChild(fondant13_pram);
        fondantRow_pram.appendChild(fondant14_pram);
        fondantRow_pram.appendChild(fondant15_pram);
        fondantRow_pram.appendChild(fondant16_pram);
        fondantRow_pram.appendChild(fondant17_pram);
        fondantRow_pram.appendChild(fondant18_pram);
        profitTableAm.appendChild(fondantRow_pram); 

        unicedInputAm.value = '';
        butterInputAm.value = '';
        fondantInputAm.value = '';

    }
}


convertPDF.onclick = function(){
    window.print(percentageTable);
}






//create toast message
function showToast(msg){
    toastBody.classList.add('show-toast');
    toastText.innerHTML = msg;
    setTimeout(function(){
        toastBody.classList.remove('show-toast');
    }, 3000);
}