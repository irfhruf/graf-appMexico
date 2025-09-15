const greenPicker = document.getElementById('greenPicker');
const redPicker = document.getElementById('redPicker');
const greenRange = document.getElementById('greenRange');
const redRange = document.getElementById('redRange');
const greenStripe = document.querySelector('.stripe.green');
const redStripe = document.querySelector('.stripe.red');
const greenCode = document.getElementById('greenCode');
const redCode = document.getElementById('redCode');

function hexWithIntensity(hex, intensity) {
    let r = parseInt(hex.substr(1, 2), 16);
    let g = parseInt(hex.substr(3, 2), 16);
    let b = parseInt(hex.substr(5, 2), 16);

    r = Math.min(255, r + parseInt(intensity));
    g = Math.min(255, g + parseInt(intensity));
    b = Math.min(255, b + parseInt(intensity));

    const hr = r.toString(16).padStart(2, '0');
    const hg = g.toString(16).padStart(2, '0');
    const hb = b.toString(16).padStart(2, '0');
    return `#${hr}${hg}${hb}`;
}

function updateStripe(stripe, baseColor, intensity, codeEl) {
    const newColor = hexWithIntensity(baseColor, intensity);
    stripe.style.background = newColor;
    codeEl.textContent = newColor;
}

greenPicker.addEventListener('input', e => updateStripe(greenStripe, e.target.value, greenRange.value, greenCode));
greenRange.addEventListener('input', e => updateStripe(greenStripe, greenPicker.value, e.target.value, greenCode));
redPicker.addEventListener('input', e => updateStripe(redStripe, e.target.value, redRange.value, redCode));
redRange.addEventListener('input', e => updateStripe(redStripe, redPicker.value, e.target.value, redCode));

// inicializar con valores por defecto
updateStripe(greenStripe, greenPicker.value, greenRange.value, greenCode);
updateStripe(redStripe, redPicker.value, redRange.value, redCode);