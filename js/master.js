class Navbar {
  constructor(menu, links, sections) {
    this.menu = menu;
    this.links = links;
    this.sections = sections;
  }

  dropDown() {
    this.menu.classList.toggle('down');
  }

  activeLink() {
    const currentScroll = document.documentElement.scrollTop + 250;
    this.sections.forEach(section => {
      let currentId = section.attributes.id.value;
      let selector = `a[href = "#${currentId}"]`;
      if (currentScroll >= section.offsetTop && currentScroll < section.offsetTop + section.offsetHeight) {
        this.links.forEach(link => link.classList.remove('active'));
        document.querySelector(selector).classList.add('active');
      }
    });
  }
}

let nav = new Navbar(
  document.querySelector('#menu'),
  document.querySelectorAll('.side-nav ul a'),
  document.querySelectorAll('section')
);

document.querySelector("#button").addEventListener("click", _ => nav.dropDown());
onscroll = _ => nav.activeLink();