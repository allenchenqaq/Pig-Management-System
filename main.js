System.register(["./pigService"], function (exports_1, context_1) {
    "use strict";
    var pigService_1, categorySelect, dynamicLabel, dynamicInput, addButton, addNew, moreInfoTable, formCloseBtn, tableCloseBtn, pigController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pigService_1_1) {
                pigService_1 = pigService_1_1;
            }
        ],
        execute: function () {
            // const pigC = new PigController();
            // const newPig = new Pig("Piggy", "Breed", 100, 200, "Friendly", "Grey", 95);
            // pigC.add(newPig);
            // console.log(newPig);
            categorySelect = document.getElementById('add-category');
            dynamicLabel = document.getElementById('dynamic-label');
            dynamicInput = document.getElementById('dynamic-input');
            addButton = document.getElementById('add-button');
            addNew = document.getElementById('add-new');
            moreInfoTable = document.getElementById('moreinfo-table');
            formCloseBtn = document.getElementById('form-close');
            tableCloseBtn = document.getElementById('table-close');
            // add an event listener to the category selection to update the label
            categorySelect.addEventListener('change', function () {
                const selectedCategory = categorySelect.value;
                if (selectedCategory === 'Grey') {
                    dynamicLabel.innerHTML = '<strong>Swimming Score</strong>';
                    dynamicInput.type = 'number';
                    dynamicInput.placeholder = '0-100';
                    dynamicInput.min = '0';
                    dynamicInput.max = '100';
                }
                else if (selectedCategory === 'Chestnut') {
                    dynamicLabel.innerHTML = '<strong>Language</strong>';
                    dynamicInput.type = 'text';
                    dynamicInput.placeholder = 'E.g. English';
                    dynamicInput.pattern = "[^0-9]*";
                }
                else if (selectedCategory === 'White') {
                    dynamicLabel.innerHTML = '<strong>Running Score</strong>';
                    dynamicInput.type = 'number';
                    dynamicInput.placeholder = '0-100';
                    dynamicInput.min = '0';
                    dynamicInput.max = '100';
                }
                else if (selectedCategory === 'Black') {
                    dynamicLabel.innerHTML = '<strong>Strength Score</strong>';
                    dynamicInput.type = 'number';
                    dynamicInput.placeholder = '0-10';
                    dynamicInput.min = '0';
                    dynamicInput.max = '10';
                }
            });
            addButton.addEventListener('click', () => {
                addNew.style.display = 'block';
            });
            formCloseBtn.addEventListener('click', () => {
                addNew.style.display = 'none';
            });
            tableCloseBtn.addEventListener('click', () => {
                moreInfoTable.style.display = 'none';
            });
            pigController = new pigService_1.PigController();
            addNew.onsubmit = () => {
                const data = new FormData(addNew);
                var pig = {
                    name: String(data.get("name")),
                    breed: String(data.get("breed")),
                    height: parseInt(String(data.get("height"))),
                    weight: parseInt(String(data.get("weight"))),
                    personality: String(data.get("personality")),
                    category: String(data.get("category")),
                    ability: String(data.get("dynamic"))
                };
                pigController.add(pig);
                window.location.reload();
                document.getElementById("add-new").style.display = "none";
                return false;
            };
            window.addEventListener('load', function () {
                let allPigs = pigController.getAll(); // get all pigs from local storage
                // sort the table by category and for each category sort by name
                allPigs.sort((a, b) => {
                    if (a.category !== b.category) {
                        return a.category.localeCompare(b.category);
                    }
                    return a.name.localeCompare(b.name);
                });
                const viewTable = document.getElementById('view-table');
                for (let i = 0; i < allPigs.length; i++) {
                    // create a new row for each pig
                    const newRow = document.createElement('tr');
                    // create table cells for the pig's name and category
                    const nameCell = document.createElement('td');
                    nameCell.textContent = allPigs[i].name;
                    const categoryCell = document.createElement('td');
                    categoryCell.textContent = allPigs[i].category;
                    // create new <td> elements for the third and fourth columns
                    const moreInfoCell = document.createElement('td');
                    const deleteCell = document.createElement('td');
                    // create "More Info" and "Delete" buttons
                    const moreInfoButton = document.createElement('button');
                    moreInfoButton.textContent = 'More Info';
                    moreInfoButton.type = 'button';
                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete';
                    deleteButton.type = 'button';
                    let name = document.getElementById('name');
                    let breed = document.getElementById('breed');
                    let height = document.getElementById('height');
                    let weight = document.getElementById('weight');
                    let personality = document.getElementById('personality');
                    let ability = document.getElementById('ability');
                    let abilityName = document.getElementById('abilityName');
                    moreInfoButton.addEventListener('click', function () {
                        if (allPigs[i].category == 'Grey') {
                            abilityName.textContent = 'Swimming Score';
                        }
                        else if (allPigs[i].category == 'Chestnut') {
                            abilityName.textContent = 'Language';
                        }
                        else if (allPigs[i].category == 'White') {
                            abilityName.textContent = 'Running Score';
                        }
                        else if (allPigs[i].category == 'Black') {
                            abilityName.textContent = 'Strength Score';
                        }
                        moreInfoTable.style.display = 'block';
                        name.textContent = nameCell.textContent;
                        breed.textContent = allPigs[i].breed;
                        height.textContent = String(allPigs[i].height);
                        weight.textContent = String(allPigs[i].weight);
                        personality.textContent = allPigs[i].personality;
                        ability.textContent = String(allPigs[i].ability);
                    });
                    // write an alert
                    deleteButton.addEventListener('click', function () {
                        let deleteAlert = confirm('Are you sure you want to delete this pig?');
                        if (deleteAlert) {
                            pigController.delete(i);
                        }
                        window.location.reload();
                    });
                    moreInfoCell.appendChild(moreInfoButton);
                    deleteCell.appendChild(deleteButton);
                    // append the cells and buttons to the new row
                    newRow.appendChild(nameCell);
                    newRow.appendChild(categoryCell);
                    newRow.appendChild(moreInfoCell);
                    newRow.appendChild(deleteCell);
                    // append the new row to the "view-table"
                    viewTable.appendChild(newRow);
                }
            });
        }
    };
});
