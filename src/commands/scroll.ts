export const initScrolling = (): void => {
  // cache the navigation links
  const navLinks = document.querySelectorAll('.command-sidebar nav a');
  // cache (in reversed order) the sections
  const navSections = document.getElementsByTagName('section');

  // map each section id to their corresponding navigation link

  // for (let i = navSections.length - 1; i >= 0; i--) {
  //   const id = navSections[i].id.replace(/-section/, '');
  //   sectionIdMap[id] = document.querySelector(`.command-sidebar nav a[href="#${id}"]`);
  // }

  const sectionIdMap = Array.from(navSections)
    .map(section => {
      const id = section.id.replace(/-section/, '');
      return { [id]: document.querySelector(`.command-sidebar nav a[href="#${id}"]`) };
    })
    .reduce((obj, next) => ({ ...obj, ...next }), {} as { [id: string]: HTMLElement | null });

  // throttle function, enforces a minimum time interval
  const throttle = (func: () => void, interval: number) => {
    let lastCall: number;
    let timeout: number;
    return function () {
      const now = new Date().getTime();
      if (lastCall && now < lastCall + interval) {
        // if we are inside the interval we wait
        clearTimeout(timeout);
        timeout = (setTimeout(() => {
          lastCall = now;
          func();
        }, interval - (now - lastCall)) as unknown) as number;
      } else {
        // otherwise, we directly call the function
        lastCall = now;
        func();
      }
    };
  };

  const getOffset = (el: HTMLElement) => {
    let parent: HTMLElement | null = el;
    let x = 0;
    let y = 0;
    while (parent && !isNaN(parent.offsetLeft) && !isNaN(parent.offsetTop)) {
      x += parent.offsetLeft - parent.scrollLeft;
      y += parent.offsetTop - parent.scrollTop;
      parent = parent.offsetParent as HTMLElement;
    }
    return { top: y, left: x };
  };

  const highlightNavigation = () => {
    // get the current vertical position of the scroll bar
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // iterate the sections
    for (let i = navSections.length - 1; i >= 0; i--) {
      const currentSection = navSections[i];
      // get the position of the section
      const sectionTop = getOffset(currentSection).top;

      // if the user has scrolled over the top of the section
      if (scrollPosition >= sectionTop - 250) {
        // get the corresponding navigation link
        const navLink = sectionIdMap[currentSection.id.replace(/-section/, '')];
        // if the link is not active
        if (navLink) {
          if (!navLink.classList.contains('active')) {
            // remove .active class from all the links
            navLinks.forEach(el => el.classList.remove('active'));

            // add .active class to the current link
            navLink.classList.add('active');

            navLink.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
          }
        } else {
          // remove .active class from all the links
          navLinks.forEach(el => el.classList.remove('active'));
        }
        // we have found our section, so we return false to exit the each loop
        return false;
      }
    }
  };

  window.addEventListener('scroll', throttle(highlightNavigation, 150));
};
