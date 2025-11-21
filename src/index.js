fetch('./data.json').then((response) => {  
  if(!response.ok) return console.log('error');
  
  return response.json();
}).then((data) => {
  console.log(data);
});

