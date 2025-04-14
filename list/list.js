let itemsArray = [];

let itemIdCounter = 1;

function addNewItem() {
  const tbody = document.getElementById('itemsList');

  const newRow = document.createElement('tr');
  newRow.id = `item-${itemIdCounter}`;
  newRow.className = 'editable';

  newRow.innerHTML = `
                <td><input type="text" id="name-${itemIdCounter}" placeholder="نام"></td>
                <td><input type="number" id="number-${itemIdCounter}" placeholder="شماره"></td>
                <td><input type="text" id="address-${itemIdCounter}" placeholder="آدرس"></td>
                <td><input type="checkbox" id="checkbox-${itemIdCounter}"></td>
                <td>
                    <button class="save-btn" onclick="saveItem(${itemIdCounter})">ذخیره</button>
                </td>
            `;

  tbody.appendChild(newRow);

  itemIdCounter++;
}

function saveItem(id) {
  const name = document.getElementById(`name-${id}`).value;
  const number = document.getElementById(`number-${id}`).value;
  const address = document.getElementById(`address-${id}`).value;
  const checkbox = document.getElementById(`checkbox-${id}`).checked;

  const newItem = {
    id: id,
    name: name,
    number: number,
    address: address,
    checkbox: checkbox
  };

  itemsArray.push(newItem);

  const row = document.getElementById(`item-${id}`);
  row.className = 'readonly';

  row.innerHTML = `
                <td>${name}</td>
                <td>${number}</td>
                <td>${address}</td>
                <td>${checkbox ? '✓' : '✗'}</td>
                <td>ذخیره شده</td>
            `;

  console.log(itemsArray);
}

document.getElementById('addItemBtn').addEventListener('click', addNewItem);

window.onload = addNewItem;