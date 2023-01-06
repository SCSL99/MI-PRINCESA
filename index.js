const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Gracias por decidir estar conmigo, sinceramente estoy dispuesto a cuidarte como no te imaginas; hemos pasado por tantas cosas juntos y ahora que sabemos como estar bien quiero que seas mi mujer por el resto de mi vida mi princesa hermosa. TE AMO MI JUANCARLO <3')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})