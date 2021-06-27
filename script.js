var weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const dates = document.getElementsByClassName('days');
const temp = document.getElementById('dates');
let index = 0;
//console.log(index);
var x = new Date();
var m = x.getMonth();

function main() {
  const dt = new Date();

  if (index !== 0) dt.setMonth(new Date().getMonth() + index - m - 1);
  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const currdays = new Date(year, month + 1, 0).getDate();
  //console.log(currdays);
  const fday = new Date(year, month, 1);
  document.getElementById('m_name').innerText =
  `${dt.toLocaleDateString('en', { month: 'long' })}, ${year}`

  const dateString = fday.toLocaleDateString('en', { weekday: 'long', });
  //console.log(dateString);
  const blankDays = weekdays.indexOf(dateString);
  //console.log(blankDays);

  temp.innerHTML = '';

  for (let i = 1; i <= blankDays + currdays; i++) {
    const square = document.createElement('div');
    if (i > blankDays) {
      square.classList.add('day');
      square.innerText = i - blankDays;
    }
    else square.classList.add('blankd');
    temp.appendChild(square);
  }


var now = new Date();
var wday = weekdays[ now.getDay() ];
var mth = months[ now.getMonth() ];
var tem=0;
for(var i=1;i<=currdays;i++){   
  var newDate = new Date(dt.getFullYear(),dt.getMonth(),i)
  if(newDate.getDay()==0){   
      tem++;
  }
  if(newDate.getDay()==6){   
      tem++;
  }
}
console.log(tem);
let res = currdays - tem;

  document.getElementById('d').innerText = day;
  document.getElementById('e2').innerText = wday;
  document.getElementById('e1').innerText = `${mth}, ${year}`;

  document.getElementById('c1').innerHTML =  `<span>${currdays}</span>`
  document.getElementById('c2').innerHTML =  `<span>${res}</span>`
  
}

function navigate() {
  document.getElementById('nav').addEventListener('click', () => {
    main();
  });
}
main();


