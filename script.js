const amazingButton = document.getElementById('amazing-button');
const amazingDialog = document.getElementById('amazing-dialog');

const acceptButton = document.getElementById('accept-button');
const cancelButton = document.getElementById('cancel-button');

amazingButton.addEventListener('click', () => {
	amazingDialog.showModal();
});

amazingDialog.addEventListener('click', (event) => {
  const dialogDimensions = amazingDialog.getBoundingClientRect();
	
  if (
    event.clientX < dialogDimensions.left ||
    event.clientX > dialogDimensions.right ||
    event.clientY < dialogDimensions.top ||
    event.clientY > dialogDimensions.bottom
  ) {
    amazingDialog.close();
  }
});


acceptButton.addEventListener('click', () => {
  // do sth, then close.
	amazingDialog.close();
});

cancelButton.addEventListener('click', () => {
  // do sth, then close.
	amazingDialog.close();
});
