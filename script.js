let togglShaer = document.getElementById('toggleShare');
let boxShaer = document.querySelector('.box_share');

togglShaer.addEventListener('click', function(){
  if (boxShaer.style.display === 'block') {
    boxShaer.style.display = 'none';
  } else {
    boxShaer.style.display = 'block';
  }
});

