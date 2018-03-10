function loadPage(id) {
  
  let url = '',
      fileName = '';

  switch(id) {
    case 0: {
      url = '/';
      fileName = './home.html';
      break;
    }
    case 1: {
      url = '/skills';
      fileName = './skills.html';
      break;
    }
    case 2: {
      url = '/projects';
      fileName = './projects.html';
      break;
    }
    case 3: {
      url = '/contact';
      fileName = './contact.html';
      break;
    }
  }

  // change URL
  // window.history.pushState('strObj', 'title', url);

  // load page by id
  let frame = document.getElementById('idFrameContent');
  frame.src = fileName;
}

loadPage(3);
