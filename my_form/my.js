      // Remove the DOMContentLoaded event since Drupal.behaviors.attach already handles this
      const saveBtn = document.querySelectorAll("#my-form_form-save-button");
      console.log('saveBtn', saveBtn);
      
      saveBtn.forEach(item => {
        item.addEventListener('click', e => {
          e.preventDefault();
          // display my-form_form-save-button is none


          // Hide all form elements with class starting with my-form-form
          const formElements = document.querySelectorAll('[class^="my-form-form"]');
          formElements.forEach(element => {
            element.style.display = 'none';
          });
        })
      })``