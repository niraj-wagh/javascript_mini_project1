let body=document.body;
let buttons=document.querySelectorAll('.box');

let palette = JSON.parse(localStorage.getItem('palette')) || [];
function updatePalette() {
  const history = document.getElementById('palette-history');
  history.innerHTML = palette.map(color => `
    <button class="palette-swatch" style="background:${color}" 
     aria-label="History color" onclick="document.body.style.backgroundColor='${color}'"></button>
  `).join('');
}
document.getElementById('custom-color').addEventListener('input', function(e) {
  let color = e.target.value;
  document.body.style.backgroundColor = color;
  palette.unshift(color);
  palette = palette.slice(0, 5);
  localStorage.setItem('palette', JSON.stringify(palette));
  updatePalette();
});
document.getElementById('reset-btn').addEventListener('click', function() {
  document.body.style.backgroundColor = '#f4f4f4';
});
window.onload = updatePalette;

buttons.forEach( (button) =>{
    button.addEventListener('click', (e)=>{
        switch (e.target.id) {
            case 'yellow':
                body.style.backgroundColor='yellow';
                break;
            case 'red':
                body.style.backgroundColor='red';
                break;
            case 'aquamarine':
                body.style.backgroundColor='aquamarine';
                break;
            case 'orange':
                body.style.backgroundColor='orange';
                break;
        
            default:alert('Invalid');
                break;
        }
    })
})