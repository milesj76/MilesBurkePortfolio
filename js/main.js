const aboutSection = document.querySelector('.about');
const projectsSection = document.querySelector('.projects');


const btnWindowPosition = document.querySelector('#position');
const btnAbout = document.querySelector('#header-btn1');
const btnContact = document.querySelector('#header-btn2');
const btnProjects = document.querySelector('#header-btn3');


// btnWindowPosition.addEventListener('click', changeWindowPosition);
btnAbout.addEventListener('click', changeWindowPosition);
btnContact.addEventListener('click', changeWindowPosition);
btnProjects.addEventListener('click', changeWindowPosition);

function changeWindowPosition(e) {
    const btn = document.querySelector(`#${this.id}`);
    // console.log(btn)
    let pos = '';
    switch (btn.id) {
        case 'header-btn1':
            pos = document.querySelector('.about').offsetTop;
            console.log('about section ' + pos);
            // window.scroll(0, pos)
            scrollPageTo(pos)
            break;
        case 'header-btn2':
            pos = document.querySelector('.contact').offsetTop;
            console.log('contact section ' + pos);
            // window.scroll(0, pos)
            scrollPageTo(pos)
            break;
        case 'header-btn3':
            pos = document.querySelector('.projects').offsetTop;
            console.log('projects section ' + pos);
            // window.scroll(0, pos)
            scrollPageTo(pos)
            break;
        default:
            console.log(btn.id, 'is an unknown button.');
    }

}


// SMOOTH SCROLL (link: https://gist.github.com/felipenmoura/650e7e1292c1e7638bcf6c9f9aeb9dd5)

function scrollPageTo (to, duration=900) {
    //t = current time
    //b = start value
    //c = change in value
    //d = duration
    const easeInOutQuad = function (t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
    };
  
    return new Promise((resolve, reject) => {
      const element = document.scrollingElement;
  
      if (typeof to === 'string') {
        to = document.querySelector(to) || reject();
      }
      if (typeof to !== 'number') {
        to = to.getBoundingClientRect().top + element.scrollTop;
      }
  
      let start = element.scrollTop,
          change = to - start,
          currentTime = 0,
          increment = 20;
  
      const animateScroll = function() {
          currentTime += increment;
          let val = easeInOutQuad(currentTime, start, change, duration);
          element.scrollTop = val;
          if(currentTime < duration) {
              setTimeout(animateScroll, increment);
          } else {
            resolve();
          }
      };
      animateScroll();
    });
  }