let arr = [
            {
            content: 'Frontend Misha',
            id: 'fe',
            relations: ['pm', 'be', 'ds']
            },
            {
            content: 'Design Pasha',
            id: 'ds',
            relations: ['pm', 'fe']
            },
            {
            content: 'Project Manager Sanya',
            id: 'pm',
            relations: ['ba', 'fe', 'be', 'ds']
            },
            {
            content: 'Backend Grisha',
            id: 'be',
            relations: ['pm', 'fe', 'ba']
            },
            {
            content: 'Business Analyst Sveta',
            id: 'ba',
            relations: ['pm']
            }
];

let contentDiv = document.createElement('div');
contentDiv.className = 'content';
contentDiv.id = 'content';
document.body.appendChild(contentDiv);


for (let i = 0; i < arr.length; i++){
  let contentItem = document.createElement('p');
  contentItem.className = 'content__item';
  contentItem.id = `${arr[i].id}`
  contentItem.innerText = `${arr[i].content}`;
  document.getElementById('content').appendChild(contentItem);
}


document.querySelector('.content__item').addEventListener('click', () => {
    console.log('сlick');
  }
);






//==========consoleRealization==========//
/*for (let i = 0; i < arr.length; i++){
  for (let k = 0; k < arr.length; k++){
    for(let j = 0; j < arr[k].relations.length; j++){
      if (arr[i].id === arr[k].relations[j]){
        console.log(`${arr[i].content} \t ${arr[k].content}`);
      }
    }
  }
}
*/

