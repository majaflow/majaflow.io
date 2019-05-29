let projects= document.getElementById('portfolio').style.visibility
let contact= document.getElementById('contact').style.visibility
let aboutMe= document.getElementById('about').style.visibility

display = (i) => {
// i === 1 ? contact='visible' :
// i === 2 ? projects='visible'  :
// aboutMe='visible'
// if (contact = 'visible') {
//     projects='hidden'
//     aboutMe='hidden'
// } else if (projects = 'visible') {
//     contact='hidden'
//     aboutMe='hidden'
// } else { aboutMe='visible'
//     contact='hidden'
//     projects='hidden'
// }
switch(i){
    case i==1 :
    this.contact='visible'
    this.aboutMe='hidden'
    this.projects='hidden'
    case i==2 :
    this.contact='hidden'
    this.aboutMe='hidden'
    this.projects='visible'
    console.log(this.aboutMe)
    default :
    this.aboutMe='visible'
    this.contact='hidden'
    this.projects='hidden'
    console.log(this.aboutMe)
}
console.log('works')
}
