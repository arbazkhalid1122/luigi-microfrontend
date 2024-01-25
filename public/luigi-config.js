//you can now use ES6 goodies here
Luigi.setConfig({
  navigation: {
    contextSwitcher: false,
    nodes: () => [
      {
        pathSegment: 'home',
        label: 'Home',
        icon: 'home',
        viewUrl: '/views/home.html',
        children: [
          {
            category: "Links",
            label: "React Repo",
            viewUrl: "http://localhost:3000/sampleapp.html#/home/",
            pathSegment: "react"
          },
          {
            category: "Links",
            label: "Vue Repo",
            viewUrl: "http://localhost:8080/sampleapp.html#/home/",
            pathSegment: "vue",
          }
        ]
      }
    ]
  },
  routing: {
    /**
     * Development:
     * For path routing, set to false
     * For hash routing, set to true
     */
    useHashRouting: true
  },
  settings: {
    header: {
      title: 'Luigi JavaScript',
      logo: '/logo.png',
      favicon: '/favicon.ico'
    },
    responsiveNavigation: 'simpleMobileOnly',
    appLoadingIndicator: {
      hideAutomatically: true
    }
  }
});


