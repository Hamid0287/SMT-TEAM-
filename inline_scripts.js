
function downloadImage() {
  const box = document.getElementById('resultBox');
  if (!box) {
    alert('No results available to download.');
    return;
  }
  html2canvas(box, { scale: 2 }).then(canvas => {
    const link = document.createElement('a');
    link.download = 'sim-cnic-details.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }).catch(err => {
    alert('Failed to create image: ' + err.message);
  });
}
