const form = document.getElementById('message-form');
const input = document.querySelector('input[id="blob"]');
const theURL = document.querySelector('input[id="webURL"]');
const inputVal = document.querySelector('input[id="itter"]');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = input.value;
  const inputValue = inputVal.value;
  const webhookURL = theURL.value;
  input.value = '';
  inputVal.value = '';
  theURL.value = '';
  theURL.value = webhookURL;
  var numberIt = inputValue;

  let i = 0;
  if(inputValue=='') {numberIt=1;}
      while (i<numberIt) {
        loop(i);
        i++
      }

      function loop(i){
        setTimeout(function(){
          const payload = {
            'content': message,
            'url': webhookURL
          };
          fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
       body: JSON.stringify(payload)
    })
  
    .then(response => {})
    .then(data => console.log(data))
    .catch(error => console.log(error));
        }, 1000 * i)
      }

  });