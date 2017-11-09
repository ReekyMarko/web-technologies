'use strict';
var notes = new Array();
loadList();

function addItem() {
    var textbox = document.getElementById('item');
    var itemText = textbox.value;
    textbox.value = '';
    textbox.focus();
    var newItem = {title: itemText, quantity: 1};
    var noteIndex = notes.findIndex(i => i.itemText == itemText);
    console.log(noteIndex);
    if (noteIndex == -1){
        notes.quantity[noteIndex]++; 
    } else {
        notes.push(newItem);
    }
    displayList();
    saveList();
}

function displayList() {
    var table = document.getElementById('list');
    table.innerHTML = '';
    for (var i = 0; i<notes.length; i++) {
        var node = undefined;
        var note = notes[i];
        node = document.createElement('tr');
        var html = '<td>'+note.title+'</td><td>'+note.quantity+'</td><td><a href="#" onClick="deleteIndex('+i+')">delete</td>';
        node.innerHTML = html;
        table.appendChild(node);
    }
}

function deleteIndex(i) {
    notes.splice(i, 1);
    displayList();
}

function saveList() {
    localStorage.notes = JSON.stringify(notes);
}

function loadList() {
    console.log('loadList');
    if (localStorage.notes) {
        notes = JSON.parse(localStorage.notes);
        displayList();
    }
}

var button = document.getElementById('add');
button.onclick = addItem;
