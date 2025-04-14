let itemsArray = [];
let itemIdCounter = 1;

function addNewItem() {
  const container = document.getElementById('itemsList');

  const itemDiv = document.createElement('div');
  itemDiv.id = `item-${itemIdCounter}`;
  itemDiv.className = 'item-container';

  itemDiv.innerHTML = `
        <div class="form-group">
          <label for="name-${itemIdCounter}">Name:</label>
          <input type="text" id="name-${itemIdCounter}" placeholder="Enter name">
        </div>
        
        <div class="form-group">
          <label for="number-${itemIdCounter}">Number:</label>
          <input type="number" id="number-${itemIdCounter}" placeholder="Enter number">
        </div>
        
        <div class="form-group">
          <label for="address-${itemIdCounter}">Address:</label>
          <input type="text" id="address-${itemIdCounter}" placeholder="Enter address">
        </div>
        
        <div class="form-group">
          <label>
            <input type="checkbox" id="checkbox-${itemIdCounter}"> Approved
          </label>
        </div>
        
        <div class="actions">
          <button class="save-btn" onclick="saveItem(${itemIdCounter})">Save</button>
        </div>
      `;

  container.appendChild(itemDiv);
  itemIdCounter++;
}

function saveItem(id) {
  const name = document.getElementById(`name-${id}`).value;
  const number = document.getElementById(`number-${id}`).value;
  const address = document.getElementById(`address-${id}`).value;
  const checkbox = document.getElementById(`checkbox-${id}`).checked;

  const itemIndex = itemsArray.findIndex(item => item.id === id);

  if (itemIndex === -1) {
    itemsArray.push({
      id: id,
      name: name,
      number: number,
      address: address,
      checkbox: checkbox
    });
  } else {
    itemsArray[itemIndex] = {
      id: id,
      name: name,
      number: number,
      address: address,
      checkbox: checkbox
    };
  }

  displaySavedItem(id, name, number, address, checkbox);
}

function displaySavedItem(id, name, number, address, checkbox) {
  const itemDiv = document.getElementById(`item-${id}`);
  itemDiv.className = 'item-container readonly';

  itemDiv.innerHTML = `
        <div class="saved-item">
          <span class="saved-item-label">Name:</span>
          <span>${name}</span>
        </div>
        
        <div class="saved-item">
          <span class="saved-item-label">Number:</span>
          <span>${number}</span>
        </div>
        
        <div class="saved-item">
          <span class="saved-item-label">Address:</span>
          <span>${address}</span>
        </div>
        
        <div class="saved-item">
          <span class="saved-item-label">Approved:</span>
          <span>${checkbox ? '✓' : '✗'}</span>
        </div>
        
        <div class="actions">
          <button class="edit-btn" onclick="editItem(${id})">Edit</button>
          <button class="delete-btn" onclick="deleteItem(${id})">Delete</button>
        </div>
      `;
}

function editItem(id) {
  const item = itemsArray.find(item => item.id === id);
  if (!item) return;

  const itemDiv = document.getElementById(`item-${id}`);
  itemDiv.className = 'item-container';

  itemDiv.innerHTML = `
        <div class="form-group">
          <label for="edit-name-${id}">Name:</label>
          <input type="text" id="edit-name-${id}" value="${item.name}">
        </div>
        
        <div class="form-group">
          <label for="edit-number-${id}">Number:</label>
          <input type="number" id="edit-number-${id}" value="${item.number}">
        </div>
        
        <div class="form-group">
          <label for="edit-address-${id}">Address:</label>
          <input type="text" id="edit-address-${id}" value="${item.address}">
        </div>
        
        <div class="form-group">
          <label>
            <input type="checkbox" id="edit-checkbox-${id}" ${item.checkbox ? 'checked' : ''}> Approved
          </label>
        </div>
        
        <div class="actions">
          <button class="save-btn" onclick="updateItem(${id})">Update</button>
        </div>
      `;
}

function updateItem(id) {
  const name = document.getElementById(`edit-name-${id}`).value;
  const number = document.getElementById(`edit-number-${id}`).value;
  const address = document.getElementById(`edit-address-${id}`).value;
  const checkbox = document.getElementById(`edit-checkbox-${id}`).checked;

  const itemIndex = itemsArray.findIndex(item => item.id === id);
  if (itemIndex !== -1) {
    itemsArray[itemIndex] = {
      id: id,
      name: name,
      number: number,
      address: address,
      checkbox: checkbox
    };
  }

  displaySavedItem(id, name, number, address, checkbox);
}

function deleteItem(id) {
  itemsArray = itemsArray.filter(item => item.id !== id);
  const itemDiv = document.getElementById(`item-${id}`);
  if (itemDiv) {
    itemDiv.remove();
  }
}

document.getElementById('addItemBtn').addEventListener('click', addNewItem);