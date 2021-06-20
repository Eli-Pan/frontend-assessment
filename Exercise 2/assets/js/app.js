
const app = Vue.createApp({
  data() {
    return {
      contents: [
        {
          "title": "Section 1",
          "content": "<p>Maecenas nec semper ante, pellentesque posuere lorem. Nullam ipsum massa, consequat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellentesque elit sem, vel blandit posuere.</p>"
        },
        {
          "title": "Section 2",
          "content": "<p>Mauris a orci sodales, scelerisque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor dui. Proin non fringilla quam. Aliquam erat volutpat. Vestibulum vel arcu semper, lobortis turpis ac, ultricies nisi. Praesent id.</p>"
        },
        {
          "title": "Section 3",
          "content": "<p>Sed elementum sapien ut sapien imperdiet, eu venenatis enim rhoncus. Praesent euismod tincidunt rhoncus. Duis cras amet:</p><ul><li>List item one</li><li>List item two</li><li>List item three</li></ul>"
        },
        {
          "title": "Section 4",
          "content": "<p>Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia mauris vel est.</p><p>Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>"
        }
      ]
    }
  },
  methods: {
    openTab(index) {
      var i, tabcontents, tablinks;
      tabcontents = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      tabcontents[index].style.display = "block";
      tablinks[index].className += " active";
    },
    getTabcontentStyle(index) {
      var style = {}
      if (index === 0) {
        style.display = 'block'
      } else {
        style.display = 'none'
      }
      return style
    },
    openPanel(index) {
      var accordions = document.getElementsByClassName("accordion")
      for (var i = 0; i < accordions.length; i++) {
        let accordion = accordions[i]
        let panel = accordion.nextElementSibling;
        if (i === index) {
          accordion.classList.toggle("active")
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        } else {
          accordion.classList.remove('active')
          panel.style.maxHeight = null
        }
      }
    },
  }
})

app.mount('#app')

let panel = document.getElementsByClassName('panel')[0]
panel.style.maxHeight = panel.scrollHeight;