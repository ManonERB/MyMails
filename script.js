const newMessage = ` 
  <div class="row new-row">
    <img class="avatar" src="images/avatar-1.jpg" />
    <div class="text-container">
      <h6>Manon ERB</h6>
      <p>New message</p>
    </div>
    <span class="delete">✖</span>
  </div>
`;

document.querySelector('#msg-container').innerHTML += newMessage;

const messagesCount = document.querySelectorAll('p').length;
document.querySelector('#count').textContent = messagesCount;


for (let i=0; i<document.querySelectorAll('.delete').length; i++){ 
  document.querySelectorAll('.delete')[i].addEventListener('click', 
      function() { 
        this.parentNode.remove();

        const messagesCount = document.querySelectorAll('p').length;
          document.querySelector('#count').textContent = messagesCount;
      })}

document.querySelector('#btn-add').addEventListener('click',
      function () {
                console.log("click detected youpi!")
        let message = document.querySelector('#add-message')
           document.querySelector('#msg-container').innerHTML += `
        <div class="row new-row">
          <img class="avatar" src="images/avatar-2.jpg" />
          <div class="text-container">
            <h6>Manon ERB</h6>
            <p>${message.value}</p>
          </div>
          <span class="delete">&#x2716;</span>
        </div>
       `;
       document.querySelector('#add-message').value = ''
       //if (message dans sg container) 
      //  reset placeholder message.value
    for (let i=0; i<document.querySelectorAll('.delete').length; i++){ 
      document.querySelectorAll('.delete')[i].addEventListener('click', 
          function() { 
            this.parentNode.remove();

            const messagesCount = document.querySelectorAll('p').length;
            document.querySelector('#count').textContent = messagesCount;

          })
          const messagesCount = document.querySelectorAll('p').length;
          document.querySelector('#count').textContent = messagesCount;
          }
      }
)
document.querySelector('#btn-search').addEventListener('click', function(){
  let textToCompare = document.querySelector("#search-message").value.toLowerCase()
  let nameMessages =  document.querySelectorAll("h6")

for (const nameMessage of nameMessages) {
  if(nameMessage.textContent.toLowerCase().includes(textToCompare) === false){
    console.log(nameMessage.textContent);
    nameMessage.parentNode.parentNode.style.display= "none"
  }else{
    nameMessage.parentNode.parentNode.style.display= "flex"
  }
  

textToCompare.value = ''
}
})
let year = new Date().getUTCFullYear();
let month;
let day;

if (new Date().getMonth() < 9) {
  month = "0" + (new Date().getMonth() + 1);
} else {
  month = new Date().getMonth() + 1;
}

if (new Date().getDate() < 9) {
  day = "0" + new Date().getDate();
} else {
  day = new Date().getDate();
}

const date = year + "-" + month + "-" + day;
document.querySelector('#footer').innerHTML += `<span id="date">${date}</span>`
