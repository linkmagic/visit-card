var idUserDataName = document.getElementById('idUserDataName'),
    idUserDataEmail = document.getElementById('idUserDataEmail'),
    idUserDataMsg = document.getElementById('idUserDataMsg'),
    idContactFormInput = document.getElementById('idContactFormInput'),
    idContactBtnBack = document.getElementById('idContactBtnBack'),
    idContactBtnNext = document.getElementById('idContactBtnNext'),
    idContactBtnSubmit = document.getElementById('idContactBtnSubmit');

var backButtonPointer = '',
    currButtonPointer = 'name';

var userDataObj = {
  name: '', 
  email: '',
  message: ''
}

function disabledElement(idElement, flagValue, addClass, removeClass) {
  idElement.disabled = flagValue;
  
  if (typeof(addClass) !== 'undefined') {
    idElement.classList.remove(removeClass);
  }
  if (typeof(removeClass) !== 'undefined') {
    idElement.classList.add(addClass);
  }
}

function assignUserData(input, btnId, classNameTitle, userDataObj, fieldName) {
  if (input.value.length > 0) {
    btnId.querySelector('.' + classNameTitle).innerHTML = input.value;
    userDataObj[fieldName] = input.value;
    btnId.style.opacity = 1;
    return true;
  }
  return false;
}

function fillUserDataForm__openBack() {
  disabledElement(idContactFormInput, false);
  idContactFormInput.placeholder = currButtonPointer[0].toUpperCase() + currButtonPointer.slice(1);
  idContactFormInput.value = userDataObj[currButtonPointer];
}

function fillUserDataForm__setBackId(domElement) {
  var idElement = domElement.getAttribute('id');

  switch(idElement) {
    case 'idUserDataName': {
      backButtonPointer = '';
      currButtonPointer = 'name';
      disabledElement(idContactBtnBack, true, 'ContactForm__Button-disabled', 'ContactBtn__Back');
      disabledElement(idContactBtnNext, false, 'ContactBtn__Next', 'ContactForm__Button-disabled');
      break;
    }
    
    case 'idUserDataEmail': {
      backButtonPointer = 'name';
      currButtonPointer = 'email';
      disabledElement(idContactBtnBack, false, 'ContactBtn__Back', 'ContactForm__Button-disabled');
      disabledElement(idContactBtnNext, false, 'ContactBtn__Next', 'ContactForm__Button-disabled');
      break;
    }
    
    case 'idUserDataMsg': {
      backButtonPointer = 'email';
      currButtonPointer = 'message';
      disabledElement(idContactBtnBack, false, 'ContactBtn__Back', 'ContactForm__Button-disabled');
      disabledElement(idContactBtnNext, false, 'ContactBtn__Next', 'ContactForm__Button-disabled');
      break;
    }

    default: return;
  }

  fillUserDataForm__openBack();
}


function fillUserDataForm__Back() {

  if (currButtonPointer === 'submit') {
    idContactFormInput.value = userDataObj['message'];
    backButtonPointer = 'mail';
    currButtonPointer = 'message';
    disabledElement(idContactFormInput, false);
    disabledElement(idContactBtnBack, false, 'ContactBtn__Back', 'ContactForm__Button-disabled');
    disabledElement(idContactBtnNext, false, 'ContactBtn__Next', 'ContactForm__Button-disabled');
    return;
  }

  if (currButtonPointer === 'message') {
    idContactFormInput.value = userDataObj['email'];
    backButtonPointer = 'name';
    currButtonPointer = 'email';
    disabledElement(idContactBtnBack, false, 'ContactBtn__Back', 'ContactForm__Button-disabled');
    disabledElement(idContactBtnNext, false, 'ContactBtn__Next', 'ContactForm__Button-disabled');
    return;
  }

  if (currButtonPointer === 'email') {
    idContactFormInput.value = userDataObj['name'];
    backButtonPointer = '';
    currButtonPointer = 'name';
    disabledElement(idContactBtnBack, true, 'ContactForm__Button-disabled', 'ContactBtn__Back');
    disabledElement(idContactBtnNext, false, 'ContactBtn__Next', 'ContactForm__Button-disabled');
    return;
  }
}

function fillUserDataForm__Next() {
  // assign name
  if (currButtonPointer === 'name') {
    if (assignUserData(idContactFormInput, idUserDataName, 'ContactForm__UserData__Name', userDataObj, 'name')) {
      idContactFormInput.value = userDataObj['email'];
      backButtonPointer = 'name';
      currButtonPointer = 'email';
      idContactFormInput.placeholder = 'Email';
      disabledElement(idContactBtnBack, false, 'ContactBtn__Back', 'ContactForm__Button-disabled');
    }
    return;
  }

  // assign email
  if (currButtonPointer === 'email') {
    if (assignUserData(idContactFormInput, idUserDataEmail, 'ContactForm__UserData__Email', userDataObj, 'email')) {
      idContactFormInput.value = userDataObj['message'];
      backButtonPointer = 'email';
      currButtonPointer = 'message';
      idContactFormInput.placeholder = 'Message';
    }
    return;
  }

  // assign message
  if (currButtonPointer === 'message') {
    if (assignUserData(idContactFormInput, idUserDataMsg, 'ContactForm__UserData__Msg', userDataObj, 'message')) {
      idContactFormInput.value = '';
      backButtonPointer = 'message';
      currButtonPointer = 'submit';
      idContactFormInput.placeholder = 'To complete click Submit button';
      disabledElement(idContactFormInput, true);
      disabledElement(idContactBtnNext, true, 'ContactForm__Button-disabled', 'ContactBtn__Next');
      disabledElement(idContactBtnSubmit, false, 'ContactBtn__Submit', 'ContactForm__Button-disabled');
      document.querySelector('.ContactBtn__Submit').focus();
    }
    return;
  }

}

function fillUserDataForm__Submit() {

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

// set 1st placeholder
idContactFormInput.placeholder = 'Name';

// set BACK button to disabled
disabledElement(idContactBtnBack, true, 'ContactForm__Button-disabled', 'ContactBtn__Back');
disabledElement(idContactBtnSubmit, true, 'ContactForm__Button-disabled', 'ContactBtn__Submit');
