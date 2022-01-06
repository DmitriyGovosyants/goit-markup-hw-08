const refs = {
    modal: document.querySelector('[data-modal]'),
  };

function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('backdrop--hidden');
}

$(document).keydown(function (event) { 
            
  if (event.keyCode == 27) {
      document.body.classList.remove('modal-open');
      document.getElementById('modal').classList.add('backdrop--hidden');
    }
    
  
});
