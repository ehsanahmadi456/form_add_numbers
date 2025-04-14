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

  const newItem = {
    id: id,
    name: name,
    number: number,
    address: address,
    checkbox: checkbox
  };

  itemsArray.push(newItem);

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
        
        <div class="saved-item">
          <span>Saved</span>
        </div>
      `;

  console.log('Saved items:', itemsArray);
}

document.getElementById('addItemBtn').addEventListener('click', addNewItem);