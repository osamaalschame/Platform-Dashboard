        // Security: Add an alert message here
document.addEventListener('contextmenu', function(e) {
          e.preventDefault();
          // Optional: Add an alert message here
          //  alert('Copying content is disabled.');
        });
  document.onkeydown = function(e) {
  // Disable F12 (Developer Tools)
  if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
    return false;
  }
  // Disable Ctrl+A / Cmd+A (Select All)
  if (e.ctrlKey && e.key === 'a') {
    return false;
  }
  // Disable Ctrl+C / Cmd+C (Copy)
  if (e.ctrlKey && e.key === 'c') {
    return false;
  }
};

(function() {
    var previousWidth = window.innerWidth;
    var previousHeight = window.innerHeight;
    var devToolsOpen = false;

    // Function to check for DevTools opening
    function checkDevTools() {
        if (window.innerWidth !== previousWidth || window.innerHeight !== previousHeight) {
            // Check if dimensions changed significantly
            if (previousWidth - window.innerWidth > 100 || previousHeight - window.innerHeight > 100) {
                if (!devToolsOpen) {
                    // DevTools likely just opened
                    devToolsOpen = true;
                    // **ACTION:** Hide content or redirect the user
                    document.body.innerHTML = '<h2>Access Denied.</h2>'; 
                    // Or: window.location.href = 'about:blank';
                }
            } else if (devToolsOpen) {
                // If dimensions returned to normal, DevTools might have closed
                devToolsOpen = false;
            }
        }
        previousWidth = window.innerWidth;
        previousHeight = window.innerHeight;
    }

    // Run the check on window resize and periodically
    window.addEventListener('resize', checkDevTools);
    setInterval(checkDevTools, 500);
})();