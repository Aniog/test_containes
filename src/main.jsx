console.log('main.jsx: Script is starting...');

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('main.jsx: DOM ready, loading React...');
  
  import('react').then(function(React) {
    return import('react-dom/client').then(function(ReactDOM) {
      console.log('main.jsx: React loaded');
      
      var rootElement = document.getElementById('root');
      console.log('main.jsx: Root element found:', !!rootElement);
      
      if (!rootElement) {
        console.error('main.jsx: Root element not found!');
        document.body.innerHTML += '<div style="padding: 20px; color: red;">Error: #root element not found!</div>';
        return;
      }
      
      // Now import App component
      return import('./App.jsx').then(function(AppModule) {
        console.log('main.jsx: App component loaded');
        
        try {
          var root = ReactDOM.createRoot(rootElement);
          root.render(
            React.createElement(React.StrictMode, null,
              React.createElement(AppModule.default, null)
            )
          );
          console.log('main.jsx: App rendered successfully!');
        } catch (error) {
          console.error('main.jsx: Error rendering:', error);
          rootElement.innerHTML = '<div style="padding: 20px; color: red;">Render Error: ' + error.message + '</div>';
        }
      });
    });
  }).catch(function(error) {
    console.error('main.jsx: Error loading modules:', error);
    document.body.innerHTML += '<div style="padding: 20px; color: red;">Module Error: ' + error.message + '</div>';
  });
});
