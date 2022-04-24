

// alert('Youtube ShowTitle - Show the video title in the Search box as it changes');

// display youtube title as MV videos changes

// 20220424
lastTitle = '';
thisTitle = '';
thisId = 'search'; //'pageTitle';
// thisElement = document.getElementById(thisId);
// allowDuplicate = true;
// if ((thisElement) &&(!allowDuplicate)) {}
// else {
// var btn = document.createElement('BUTTON');
// btn.id = thisId;
// btn.classList.add('loop-button');
// btn.setAttribute('style', 'color: red;');  
// btn.innerHTML = 'pageTitle here';
// document.getElementById('logo-icon').appendChild(btn);
// document.body.appendChild(btn);

// document.body.insertBefore(btn, document.body.firstChild);
// thisElement = btn;

// }

// document.getElementById( 'search-input').innerText = '123d';
thisElement = document.getElementById('search-input');

setInterval(function () {
    // alert(x.length);

    if (thisElement) {

        thisTitle = document.getElementsByTagName('title')[0].innerText;
        if (thisTitle == lastTitle) {
        }
        else {

            thisElement.innerText = thisTitle;
            lastTitle = thisTitle;
        }
    }
    console.log('quick copy url')
}, 1000);