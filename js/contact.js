var idUserDataName = document.getElementById('idUserDataName'),
    idUserDataEmail = document.getElementById('idUserDataEmail'),
    idUserDataMsg = document.getElementById('idUserDataMsg'),
    idContactFormInput = document.getElementById('idContactFormInput');

var userDataObj = {
	name: '', 
	email: '',
	message: ''
}

idContactFormInput.placeholder = 'Fill with your name';

function assignUserData(input, btnId, classNameTitle, userDataObj, fieldName) {
  if (input.value.length > 0) {
    btnId.querySelector('.' + classNameTitle).innerHTML = input.value;
    userDataObj[fieldName] = input.value;
    btnId.style.opacity = 1;
    return true;
  }
  return false;
}

function fillUserDataForm__Next() {
  // assign name
  if (userDataObj.name.length === 0) {
  	if (assignUserData(idContactFormInput, idUserDataName, 'ContactForm__UserData__Name', userDataObj, 'name')) {
  		idContactFormInput.value = '';
  	  idContactFormInput.placeholder = 'Now your email address';
  	}
    return;
  }

  // assign email
  if (userDataObj.email.length === 0) {
  	if (assignUserData(idContactFormInput, idUserDataEmail, 'ContactForm__UserData__Email', userDataObj, 'email')) {
			idContactFormInput.value = '';
  	  idContactFormInput.placeholder = 'Now write your message :)';
  	}
    return;
  }

  // assign message
  if (userDataObj.message.length === 0) {
  	if (assignUserData(idContactFormInput, idUserDataMsg, 'ContactForm__UserData__Msg', userDataObj, 'message')) {
  		idContactFormInput.value = '';
  	  idContactFormInput.placeholder = '';
  	  document.querySelector('.ContactBtn__Submit').focus();
  	}
    return;
  }

}

function inputUserDataKeyPress(event) {
  if (event.keyCode === 13) {
  	fillUserDataForm__Next();
  }
}

function openSocial(id) {
	var siteUrl = '';
	
	switch(id) {
		
		case 'facebook': {
			siteUrl = 'https://www.facebook.com/yevhen.sapsai';
			break;
		}

		case 'linkedin': {
			siteUrl = 'https://www.linkedin.com/in/ievgen-sapsay-1a911a5b';
			break;
		}

		case 'github': {
			siteUrl = 'https://github.com/linkmagic';
			break;
		}

		case 'codepen': {
			siteUrl = 'https://codepen.io/linkmagic';
			break;
		}

		default: return;
	}
	
	var win = window.open(siteUrl, '_blank');
	if (win) {
    win.focus();
	} else {
	  alert('Please allow popups for this website');
	}
	
}