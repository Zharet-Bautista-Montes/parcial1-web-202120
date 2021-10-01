const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const tableSection = document.getElementById('table-section');
const table = document.getElementById('table');
const tbody = document.getElementById('body-table');
const message = document.getElementById('message');

enterButton.addEventListener('click', (event) => {
  //Implementar lógica del button submit
  alert('Implementar lógica del button submit');
  getresults(input.value);
  event.preventDefault();
});

/**
 * Llamado al backend con queryParam
 * @param {*} heightRef
 */
async function getresults(heightRef) {
  const resp = await fetch(`api?input=${heightRef}`);
  const data = await resp.json();
  if(data.length == 0){
    alert('No matches found')
  }
  else{
    console.log('data from back', data);
    removeAllChildNodes(tbody);
    buildNewTable(tbody, data)
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function buildNewTable(parent, results){
  insideRows = ``;
  results.forEach((result) => insideRows += `<tr>
  <td>${result.id}</td>
  <td>${result.first_player}</td>
  <td>${result.second_player}</td>
  </tr>`)
  parent.innerHTML(insideRows);
}
