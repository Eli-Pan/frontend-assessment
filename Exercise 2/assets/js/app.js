$.getJSON("./assets/data.json", function (JSONData) {
  const app = Vue.createApp({
    data() {
      return {
        contents: JSONData
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
}).fail(function () {
  console.log("An error has occurred.");
});
