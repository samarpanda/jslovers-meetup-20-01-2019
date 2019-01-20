const btn = document.querySelector('target-button')
btn.addEventListener('click', e => {
  const lag = performance.now() - e.timeStamp
  if(lag > 100){
    // Send Beacon / Data to Analytics
  }
})