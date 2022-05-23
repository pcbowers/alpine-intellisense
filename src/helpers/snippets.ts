export default {
  "x-data": {
    prefix: "x-data",
    body: ['x-data="${1:expression}"'],
    description:
      "Directive for Alpine.js.\n\nDefines a chunk of HTML as an Alpine component and provides the reactive data for that component to reference."
  },
  "x-init": {
    prefix: "x-init",
    body: ['x-init="${1:expression}"'],
    description:
      "Directive for Alpine.js.\n\nAllows you to hook into the initialization phase of any element in Alpine."
  },
  "x-show": {
    prefix: "x-show",
    body: ['x-show="${1:expression}"'],
    description:
      "Directive for Alpine.js.\n\nOne of the most useful and powerful directives in Alpine. It provides an expressive way to show and hide DOM elements."
  },
  "x-bind": {
    prefix: ["x-bind:", ":"],
    body: [
      'x-bind:${1|accept,accept-charset,accesskey,action,alt,async,autocomplete,autofocus,autoplay,charset,checked,cite,class,cols,colspan,ctent,ctenteditable,ctrols,coords,data,data-*,datetime,default,defer,dir,dirname,disabled,download,draggable,enctype,for,form,formaction,headers,height,hidden,high,href,hreflang,http-equiv,id,ismap,kind,label,lang,list,loop,low,max,maxlength,media,method,min,multiple,muted,name,novalidate,abort,afterprint,beforeprint,beforeunload,blur,canplay,canplaythrough,change,click,ctextmenu,copy,cuechange,cut,dblclick,drag,dragend,dragenter,dragleave,dragover,dragstart,drop,duratichange,emptied,ended,error,focus,hashchange,input,invalid,keydown,keypress,keyup,load,loadeddata,loadedmetadata,loadstart,mousedown,mousemove,mouseout,mouseover,mouseup,mousewheel,offline,online,pageshow,paste,pause,play,playing,progress,ratechange,reset,resize,scroll,search,seeked,seeking,select,stalled,submit,suspend,timeupdate,toggle,unload,volumechange,waiting,wheel,open,optimum,pattern,placeholder,poster,preload,readly,rel,required,reversed,rows,rowspan,sandbox,scope,selected,shape,size,sizes,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,tabindex,target,title,translate,type,usemap,value,width,wrap|}="${2:expression}"'
    ],
    description:
      "Directive for Alpine.js.\n\nAllows you to set HTML attributes on elements based on the result of JavaScript expressis."
  },
  "x-on": {
    prefix: ["x-on:", "@"],
    body: [
      'x-on:${1|afterprint,beforeprint,beforeunload,error,hashchange,load,message,offline,online,pagehide,pageshow,popstate,resize,storage,unload,blur,change,ctextmenu,focus,input,invalid,reset,search,select,submit,keydown,keypress,keyup,click,dblclick,mousedown,mousemove,mouseout,mouseover,mouseup,mousewheel,wheel,drag,dragend,dragenter,dragleave,dragover,dragstart,drop,scroll,copy,cut,paste,abort,canplay,canplaythrough,cuechange,duratichange,emptied,ended,error,loadeddata,loadedmetadata,loadstart,pause,play,playing,progress,ratechange,seeked,seeking,stalled,suspend,timeupdate,volumechange,waiting,toggle|}="${2:expression}"'
    ],
    description:
      "Directive for Alpine.js.\n\nAllows you to easily run code on dispatched DOM events."
  },

  ".shift (x-key)": {
    prefix: ".shift",
    body: [".shift"],
    description: "`Shift` Key Event for Alpine.js."
  },
  ".enter (x-key)": {
    prefix: ".enter",
    body: [".enter"],
    description: "`Enter` Key Event for Alpine.js."
  },
  ".space (x-key)": {
    prefix: ".space",
    body: [".space"],
    description: "`Space` Key Event for Alpine.js."
  },
  ".ctrl (x-key)": {
    prefix: ".ctrl",
    body: [".ctrl"],
    description: "`Control` Key Event for Alpine.js."
  },
  ".cmd (x-key)": {
    prefix: ".cmd",
    body: [".cmd"],
    description: "`Meta` Key Event for Alpine.js."
  },
  ".alt (x-key)": {
    prefix: ".alt",
    body: [".alt"],
    description: "`Alt` Key Event for Alpine.js."
  },
  ".up (x-key)": {
    prefix: ".up",
    body: [".up"],
    description: "`ArrowUp` Key Event for Alpine.js."
  },
  ".down (x-key)": {
    prefix: ".down",
    body: [".down"],
    description: "`ArrowDown` Key Event for Alpine.js."
  },
  ".left (x-key)": {
    prefix: ".left",
    body: [".left"],
    description: "`ArrowLeft` Key Event for Alpine.js."
  },
  ".right (x-key)": {
    prefix: ".right",
    body: [".right"],
    description: "`ArrowRight` Key Event for Alpine.js."
  },
  ".escape (x-key)": {
    prefix: ".escape",
    body: [".escape"],
    description: "`Escape` Key Event for Alpine.js."
  },
  ".tab (x-key)": {
    prefix: ".tab",
    body: [".tab"],
    description: "`Tab` Key Event for Alpine.js."
  },
  ".caps-lock (x-key)": {
    prefix: ".caps-lock",
    body: [".caps-lock"],
    description: "`CapsLock` Key Event for Alpine.js."
  },
  ".equal (x-key)": {
    prefix: ".equal",
    body: [".equal"],
    description: "`=` Key Event for Alpine.js."
  },
  ".period (x-key)": {
    prefix: ".period",
    body: [".period"],
    description: "`.` Key Event for Alpine.js."
  },
  ".slash (x-key)": {
    prefix: ".slash",
    body: [".slash"],
    description: "`/` Key Event for Alpine.js."
  },
  ".prevent (x-modifier)": {
    prefix: ".prevent",
    body: [".prevent"],
    description:
      "Modifier for Alpine.js.\n\nThe equivalent of calling `.preventDefault()` inside a listener on the browser event object."
  },
  ".stop (x-modifier)": {
    prefix: ".stop",
    body: [".stop"],
    description:
      "Modifier for Alpine.js.\n\nA convenience helper for listening for a click outside of the element it is attached to."
  },
  ".outside (x-modifier)": {
    prefix: ".outside",
    body: [".outside"],
    description:
      "Modifier for Alpine.js.\n\nThe equivalent of calling `.stopPropagation()` inside a listener on the browser event object."
  },
  ".window (x-modifier)": {
    prefix: ".window",
    body: [".window"],
    description:
      "Modifier for Alpine.js.\n\nAlpine will register the event listener on the root `window` object on the page instead of the element itself."
  },
  ".document (x-modifier)": {
    prefix: ".document",
    body: [".document"],
    description:
      "Modifier for Alpine.js.\n\nIt works similarly to `.window` only it registers listeners on the `document` global, instead of the `window` global."
  },
  ".once (x-modifier)": {
    prefix: ".once",
    body: [".once"],
    description:
      "Modifier for Alpine.js.\n\nEnsures that the handler is only called once."
  },
  ".debounce (x-modifier)": {
    prefix: ".debounce",
    body: [".debounce"],
    description:
      'Modifier for Alpine.js.\n\nSometimes it is useful to "debounce" an event handler so that it only is called after a certain period of inactivity (250 milliseconds by default).\n\nIf you wish to lengthen or shorten the debounce time, you can do so by trailing a duration after the `.debounce` modifier like so:\n\n<input @input.debounce.500ms="fetchResults">'
  },
  ".throttle (x-modifier)": {
    prefix: ".throttle",
    body: [".throttle"],
    description:
      'Modifier for Alpine.js.\n\nSimilar to `.debounce` except it will release a handler call every 250 milliseconds instead of deferring it indefinitely.\n\nIf you wish to lengthen or shorten the debounce time, you can do so by trailing a duration after the `.throttle` modifier like so:\n\n<input @scroll.window.throttle.750ms="handleScroll">'
  },
  ".self (x-modifier)": {
    prefix: ".self",
    body: [".self"],
    description:
      "Modifier for Alpine.js.\n\nEnsures that the event originated on the element it is declared on and not from a child element."
  },
  ".camel (x-modifier)": {
    prefix: ".camel",
    body: [".camel"],
    description:
      "Modifier for Alpine.js.\n\nWhen used, Alpine will listen for `customEvent` instead of `custom-event`."
  },
  ".dot (x-modifier)": {
    prefix: ".dot",
    body: [".dot"],
    description:
      "Modifier for Alpine.js.\n\nWhen used, Alpine will listen for `custom.event` instead of `custom-event`."
  },
  ".passive (x-modifier)": {
    prefix: ".passive",
    body: [".passive"],
    description:
      "Modifier for Alpine.js.\n\nIf you are listening for touch events, it's important to add `.passive` to your listeners to not block scroll performance."
  },
  ".lazy (x-modifier)": {
    prefix: ".lazy",
    body: [".lazy"],
    description:
      "Modifier for Alpine.js.\n\nForce an `x-model` input to only update the property when user focuses away from the input element."
  },
  ".number (x-modifier)": {
    prefix: ".number",
    body: [".number"],
    description:
      "Modifier for Alpine.js.\n\nForce an `x-model` input to store the value as a JavaScript number."
  },
  ".delay (x-modifier)": {
    prefix: ".delay",
    body: [".delay.${1:500}ms"],
    description: "Modifier for Alpine.js.\n\nDelay a transition."
  },
  ".duration (x-modifier)": {
    prefix: ".duration",
    body: [".duration.${1:0}ms"],
    description: "Modifier for Alpine.js.\n\nSet the transition duration."
  },
  ".opacity (x-modifier)": {
    prefix: ".opacity",
    body: [".opacity"],
    description: "Modifier for Alpine.js.\n\nApply the opacity transition only."
  },
  ".scale (x-modifier)": {
    prefix: ".opacity",
    body: [".scale.${1:90}"],
    description: "Modifier for Alpine.js.\n\nApply the scale transition only."
  },
  "x-text": {
    prefix: "x-text",
    body: ['x-text="${1:expression}"'],
    description:
      "Directive for Alpine.js.\n\nSets the text content of an element to the result of a given expression."
  },
  "x-html": {
    prefix: "x-html",
    body: ['x-html="${1:expression}"'],
    description:
      'Directive for Alpine.js.\n\nSets the "innerHTML" property of an element to the result of a given expression.'
  },
  "x-model": {
    prefix: "x-model",
    body: ['x-model="${1:expression}"'],
    description:
      "Directive for Alpine.js.\n\nAllows you to bind the value of an input element to Alpine data."
  },
  "x-modelable": {
    prefix: "x-modelable",
    body: ['x-modelable="${1:expression}"'],
    description:
      "Directive for Alpine.js.\n\nAllows you to expose any Alpine property as the target of the x-model directive."
  },
  "x-for": {
    prefix: "x-for",
    body: ['x-for="${1:expression}"'],
    description:
      "Directive for Alpine.js.\n\nAllows you to create DOM elements by iterating through a list."
  },
  "x-transition (helper)": {
    prefix: "x-transition",
    body: [
      "x-transition${1|:,:enter,:enter-start,:enter-end,:leave,:leave-start,:leave-end|}"
    ],
    description:
      "Directive for Alpine.js.\n\nAlpine provides a robust transitions utility out of the box. With a few `x-transition` directives, you can create smooth transitions between when an element is shown or hidden."
  },
  "x-transition (classes)": {
    prefix: "x-transition",
    body: [
      'x-transition${1|:,:enter,:enter-start,:enter-end,:leave,:leave-start,:leave-end|}="${2:classes}"'
    ],
    description:
      "Directive for Alpine.js.\n\nAlpine provides a robust transitions utility out of the box. With a few `x-transition` directives, you can create smooth transitions between when an element is shown or hidden."
  },
  "x-effect": {
    prefix: "x-effect",
    body: ['x-effect="${1:expression}"'],
    description:
      "Directive for Alpine.js.\n\nA useful directive for re-evaluating an expression when one of its dependencies change. You can think of it as a watcher where you don't have to specify what property to watch, it will watch all properties used within it."
  },
  "x-ignore": {
    prefix: "x-ignore",
    body: ["x-ignore"],
    description:
      "Directive for Alpine.js.\n\nIf for some reason, you don't want Alpine to touch a specific section of your HTML, you can prevent it from doing so using `x-ignore`."
  },
  "x-ref": {
    prefix: "x-ref",
    body: ['x-ref="${1:expression}"'],
    description:
      "Directive for Alpine.js.\n\n`x-ref` in combination with `$refs` is a useful utility for easily accessing DOM elements directly. It's most useful as a replacement for APIs like `getElementById` and `querySelector`."
  },
  "x-cloak": {
    prefix: "x-cloak",
    body: ["x-cloak"],
    description:
      "Directive for Alpine.js.\n\nHides the element it's attached to until Alpine is fully loaded on the page."
  },
  "x-teleport": {
    prefix: "x-teleport",
    body: ['x-teleport="${1:expression}"'],
    description:
      "Directive for Alpine.js.\n\nAllows you to transport part of your Alpine template to another part of the DOM on the page entirely."
  },
  "x-if": {
    prefix: "x-if",
    body: ['x-if="${1:expression}"'],
    description:
      'Directive for Alpine.js.\n\nUsed for toggling elements on the page, similarly to `x-show`, however it completely adds and removes the element it\'s applied to rather than just changing its CSS display property to "none".'
  },
  "x-id": {
    prefix: "x-id",
    body: ['x-id="${1:expression}"'],
    description:
      "Directive for Alpine.js.\n\nAllows you to declare a new \"scope\" for any new IDs generated using `$id()`. It accepts an array of strings (ID names) and adds a suffix to each `$id('...')` generated within it that is unique to other IDs on the page."
  }
}
