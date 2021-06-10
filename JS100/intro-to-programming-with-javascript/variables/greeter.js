let name = 'Victor';
let time;

for (let i = 0; i < 3; i++) {
  switch(i) {
    case 0:
      time = 'Morning';
      break;
    case 1:
      time = 'Afternoon';
      break;
    case 2:
      time = 'Evening';
      break;
    default:
      time = 'Day';
  }

  console.log(`Good ${time}, ${name}`);
}
