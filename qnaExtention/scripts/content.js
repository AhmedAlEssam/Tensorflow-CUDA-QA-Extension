async function prin() {

  let excluded = ['HTML', 'HEAD', 'META', 'LINK', 'SCRIPT', 'INPUT', 'SVG', 'STYLE', 'BUTTON', 'PATH', 'DEFS',
    'STOP', 'NAV', 'SIDE-NAV','BODY'
  ]
  // let include =['title','h1','h2','h3','h4','h5','h6','br','code','p']
  let include =[ ]
  let passage = '';
  const styles = [
    'color: green',
    'background: yellow',
    'font-size: 14px',
    'padding:2px', 
    
  ].join(';');
  var all = document.getElementsByTagName("*");
  for (var i = 0, max = all.length; i < max; i++) {
    if (!excluded.includes(all[i].localName.toUpperCase()) && all[i].childElementCount < 10 && all[i].childElementCount > 3   || include.includes(all[i].localName)) {
      const wordMatchRegExp = /[^\s]+/g;
      const words = all[i].textContent.matchAll(wordMatchRegExp);
      const wordCount = [...words].length;

      if (wordCount > 100  || include.includes(all[i].localName)) {
         
          if (include.includes(all[i].localName))
          passage += '\n<br>'
          passage += ' ' + all[i].textContent
          if (include.includes(all[i].localName))
          passage += '\n<br>'
         
        // console.log(wordCount)
        // console.log(all[i].localName)
        // console.log(all[i].textContent)
        
      }else{
        // console.log(wordCount)
        // console.log('%c%s', styles,all[i].localName )
        // console.log(all[i].textContent)
      }
    }else{
      
      // console.log(all[i].localName)
    }
    // console.log(all[i].localName)
  }
  // console.log(`${passage}`.replace(/\s+/g, ' ').trim())
  // console.log(`${passage}`.replace(/\s+/g, ' ').trim())
  // console.log(document.getElementsByTagName("body")[0].textContent)
  chrome.storage.local.set({
    passage: `${passage}`.replace(/\s+/g, ' ').trim()
  });
  return `${passage}`;
}
prin()
 
    
 