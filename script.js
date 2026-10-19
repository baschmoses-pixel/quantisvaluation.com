(function(){
  var t=document.querySelector('.nav-toggle'), n=document.getElementById('nav');
  if(t&&n){
    t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o?'true':'false');t.setAttribute('aria-label',o?'Close menu':'Open menu');});
    n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('open');t.setAttribute('aria-expanded','false');}});
  }
  var y=document.getElementById('yr'); if(y) y.textContent=new Date().getFullYear();
  var f=document.getElementById('contact-form');
  if(f){
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var ok=true;
      ['f-name','f-email'].forEach(function(id){var el=document.getElementById(id);var bad=!el.value.trim()||(el.type==='email'&&!/^\S+@\S+\.\S+$/.test(el.value));el.parentNode.classList.toggle('invalid',bad);if(bad&&ok){el.focus();ok=false;}});
      if(!ok) return;
      var v=function(id){return document.getElementById(id).value.trim();};
      var subject='Website inquiry: '+v('f-type')+' - '+v('f-name');
      var body='Name: '+v('f-name')+'\nOrganization: '+v('f-org')+'\nEmail: '+v('f-email')+'\nPhone: '+v('f-phone')+'\nService: '+v('f-type')+'\n\n'+v('f-msg');
      window.location.href='mailto:info@quantisvaluation.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
    });
  }
})();
