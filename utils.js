// eslint-disable-next-line no-unused-vars
function addReponsiveClass() {
  var topNav = document.getElementById('topnav');
  if (topNav.className === 'topnav') {
    topNav.className += ' responsive';
  } else {
    topNav.className = 'topnav';
  }
}
