// Template for how I want the data to be displayed 


function DatajTemplate(data) {
  return `

  <ul class="dataj-info">
    <li>${data.objectId} |</li>
    <li>${data.firstName} |</li>
    <li>${data.lastName} |</li>
    <li>${data.age} |</li>
  </ul>`;
}

export default DatajTemplate;