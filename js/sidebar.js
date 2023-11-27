document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const barsIcon = document.querySelector('.bars');
  
    function openSidebar() {
      sidebar.style.width = '20vw';
    }
  
    function closeSidebar() {
      sidebar.style.width = '0';
    }
  
    barsIcon.addEventListener('click', function(event) {
      event.preventDefault();
      openSidebar();
      event.stopPropagation();
    });
  
    document.addEventListener('click', function(event) {
      if (sidebar.style.width === '20vw' && event.target !== barsIcon) {
        closeSidebar();
      }
    });
  });
  