const showMenu = () => {
    document.querySelector('.mobile-nav__list').classList.toggle("show");
}

const activeLinks = document.querySelectorAll('.nav-list__item');

if(activeLinks.length) {
    activeLinks.forEach((activeLink) => {
        activeLink.addEventListener('click', (e) => {
            activeLinks.forEach((activeLink) => {
                activeLink.classList.remove('active');
            });
            e.preventDefault();
            activeLink.classList.add('active');
        });
    });
}

const words = ['Aaron Mahabir', 'Fullstack Developer']
const textArea = document.querySelector('.about-title__name')
wordsIndex = 0;
index = 0;
adding = true;

const typeAnimation = () => {
    // set the text of typeText to a substring of
    // the textToBeTyped using index.
    setTimeout(function () {
        textArea.innerHTML = words[wordsIndex].slice(0, index)
        if(adding) {
            // adding text
      if (index > words[wordsIndex].length) {
        // no more text to add
        adding = false
        //break: wait 2s before playing again
        setTimeout( function () {
          typeAnimation()
        }, 2000)
        return
      } else {
        // increment index by 1
        index++
      }
    } else {
      // removing text
      if (index === 0) {
        // no more text to remove
        //switch to next text in text array
        wordsIndex = (wordsIndex + 1) % words.length
        adding = true
      } else {
        // decrement index by 1
        index--
      }
    }
    // call itself
    typeAnimation()
  }, 120)
}
// start animation
typeAnimation()

const showResume = () => {
  document.querySelector('.resume-image__picture').classList.toggle("display");
}