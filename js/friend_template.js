// Template for how I want the data to be displayed 


function FriendTemplate(data) {
  return `

  <ul class="friend-info">
    <li>${data.firstName} ${data.lastName} |${data.age}|</li>
  </ul>`;
}

export default FriendTemplate;