let itemsArray = [];
let itemIdCounter = 1;

function getTemplateHTML(templateId, replacements) {
  const template = document.getElementById(templateId).innerHTML;
  let html = template;

  for (const key in replacements) {
    const value = replacements[key];
    if (key === 'checkbox') {
      html = html.replace('{{checkbox}}', value ? '✓' : '✗');
      html = html.replace('{{checked}}', value ? 'checked' : '');
    } else {
      html = html.replace(new RegExp(`{{${key}}}`, 'g'), value);
    }
  }

  return html;
}

function addNewItem() {
  const container = document.getElementById('itemsList');

  const itemDiv = document.createElement('div');
  itemDiv.id = `item-${itemIdCounter}`;
  itemDiv.className = 'item-container';

  itemDiv.innerHTML = getTemplateHTML('newItemFormTemplate', { id: itemIdCounter });

  container.appendChild(itemDiv);
  itemIdCounter++;
}

function saveItem(id) {
  const name = document.getElementById(`name-${id}`).value;
  const number = document.getElementById(`number-${id}`).value;
  const address = document.getElementById(`address-${id}`).value;
  const checkbox = document.getElementById(`checkbox-${id}`).checked;

  const itemIndex = itemsArray.findIndex(item => item.id === id);

  const itemData = {
    id: id,
    name: name,
    number: number,
    address: address,
    checkbox: checkbox
  };

  if (itemIndex === -1) {
    itemsArray.push(itemData);
  } else {
    itemsArray[itemIndex] = itemData;
  }

  displaySavedItem(id, itemData);
}

function displaySavedItem(id, itemData) {
  const itemDiv = document.getElementById(`item-${id}`);
  itemDiv.className = 'item-container readonly';

  itemDiv.innerHTML = getTemplateHTML('savedItemTemplate', {
    id: id,
    name: itemData.name,
    number: itemData.number,
    address: itemData.address,
    checkbox: itemData.checkbox
  });
}

function editItem(id) {
  const item = itemsArray.find(item => item.id === id);
  if (!item) return;

  const itemDiv = document.getElementById(`item-${id}`);
  itemDiv.className = 'item-container';

  itemDiv.innerHTML = getTemplateHTML('editItemFormTemplate', {
    id: id,
    name: item.name,
    number: item.number,
    address: item.address,
    checkbox: item.checkbox
  });
}

function updateItem(id) {
  const name = document.getElementById(`edit-name-${id}`).value;
  const number = document.getElementById(`edit-number-${id}`).value;
  const address = document.getElementById(`edit-address-${id}`).value;
  const checkbox = document.getElementById(`edit-checkbox-${id}`).checked;

  const itemIndex = itemsArray.findIndex(item => item.id === id);
  if (itemIndex !== -1) {
    const itemData = {
      id: id,
      name: name,
      number: number,
      address: address,
      checkbox: checkbox
    };

    itemsArray[itemIndex] = itemData;
    displaySavedItem(id, itemData);
  }
}

function deleteItem(id) {
  itemsArray = itemsArray.filter(item => item.id !== id);
  const itemDiv = document.getElementById(`item-${id}`);
  if (itemDiv) {
    itemDiv.remove();
  }
}

document.getElementById('addItemBtn').addEventListener('click', addNewItem);