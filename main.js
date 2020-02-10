var errorz = false;
//var xzpnj = prompt('service');
switch(prompt('service')){
  case 'calculator':
    var hi=document.createElement('iframe');
    hi.src="https://www.desmos.com/scientific";
    hi.style.background='blue';
    hi.style.position='fixed';
    hi.style.width='30%';
    hi.style.height='50%';
    hi.style.top='40%';
    hi.style.left='70%';hi.id='hi';
    document.body.appendChild(hi);
  break;
  case 'graphing calculator':
    var hi=document.createElement('iframe');
    hi.src="https://www.desmos.com/calculator";
    hi.style.background='blue';
    hi.style.position='fixed';
    hi.style.width='50%';
    hi.style.height='50%';
    hi.style.top='40%';
    hi.style.left='50%';
    document.body.appendChild(hi);
  break;
  case 'remove iframes':
    var x = document.createElement('script');
    x.src = 'https://code.jquery.com/jquery-3.4.1.js';
    document.body.appendChild(x);
    $('iframe').remove();
  break;
  case 'seterra':
    var a=document.createElement('iframe');
    a.style.width='35%';
    a.style.height='35%';
    a.style.top='65%';
    a.style.left='65%';
    a.style.position='fixed';
    a.src="https://online.seterra.com/en/vgp/3035";
    document.body.appendChild(a);
  break;
  case 'drednot':
     var mywindow = window.open("", "MsgWindow", "width=1000,height=1000");
     mywindow.document.write("<body><iframe src='https://drednot.io' width='100%' height='100%'></iframe></body>");  
  break;
  case 'flexible':
    javascript:var url=prompt('insert url','https://'); 
    var mywindow = window.open(url, "MsgWindow", "width=1000,height=1000");
     mywindow.document.write("<head><style>iframe{width=100%;height=100%;border:none;}</style></head><body><iframe src='https://drednot.io'></iframe></body>");  
  break;
  case 'n-gon':
    var mywindow = window.open("https://landgreen.github.io/sidescroller/index.html", "MsgWindow", "width=1000,height=1000");
  break;

  default:
    var invalidx = confirm('you put in an invalid command\nwould you like to see the documentation?');
    if(invalidx === true){
      alert('this is the documentation\npres ok to continue');
      //insert all commands here, and write a detailed documemtation
      alert('calculator\ngraphing calculator\nremove iframes\nseterra\ndrednot\nflexible\nn-gon');
      var invalidxp2 = prompt('what would you like to learn more about?');

      if(invalidxp2 === 'calculator'){
        alert('adds a calculator to the right side of the page');
      }
      if(invalidxp2 === 'graphing calculator'){
        alert('adds a graphing calculator to the right side of the page');
      }
      if(invalidxp2 === 'remove iframes'){
        alert('removes all iframes, which will remove everything this script adds, as well as whatever the page that you are on adds as iframes');
      }
      if(invalidxp2 === 'seterra'){
        alert('adds a small seterra page to the bottom right of yours');
      }
      if(invalidxp2 === 'drednot'){
        alert('opens a new window with drednot');
      }
      if(invalidxp2 === 'flexible'){
        alert('opens a new window, depending on what you put into the input. \nREMEMBER TO ADD AN https:// OR http://');
      }
      if(invalidxp2 === 'n-gon'){
        alert('opens a new window with n-gon');
      }
    }
  break;
}
