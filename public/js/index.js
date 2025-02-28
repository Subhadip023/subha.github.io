const manuElement = document.querySelector(".manu");
const container = document.querySelector(".container");
const lists = document.querySelectorAll("nav ul");
const tabs = document.querySelectorAll("nav ul li");
const loader=document.getElementById('loader');
const shortDesc=document.getElementById('shortDesc');
const navbarLinks=document.querySelectorAll('.navbarLink a')

// console.log(navbarLinks)

for (let i = 0; i < navbarLinks.length; i++) {
navbarLinks[i].addEventListener("click",()=>{
  let current = document.getElementsByClassName("active");
  current[0].className='';
  navbarLinks[i].className+='active'

}) 
}

function active(n) {
    let current = document.getElementsByClassName("active");
    current[0].className='';
    navbarLinks[n].className+='active'
  
   
}

manuElement.addEventListener("click", function() {
  lists.forEach(function(list) {
    list.style.display = list.style.display === "none" ? "block" : "none";
    if (list.style.display === "block") {
      manuElement.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" style="fill:#FFFFFF;">
          <path d="M 11.480469 5.0058594 C 10.500482 5.0058442 9.521297 5.3771405 8.7792969 6.1191406 L 6.1191406 8.7792969 C 4.6346201 10.26247 4.6351404 12.69764 6.1191406 14.181641 L 15.9375 24 L 6.1191406 33.818359 C 4.6346201 35.301533 4.6351404 37.736703 6.1191406 39.220703 L 8.7792969 41.880859 C 10.26247 43.36538 12.69764 43.36486 14.181641 41.880859 L 24 32.0625 L 33.818359 41.880859 C 35.301533 43.36538 37.736703 43.36486 39.220703 41.880859 L 41.880859 39.220703 C 43.36538 37.73753 43.36486 35.30236 41.880859 33.818359 L 32.0625 24 L 41.880859 14.181641 C 43.36538 12.698467 43.36486 10.263297 41.880859 8.7792969 L 39.220703 6.1191406 C 37.73753 4.6346201 35.30236 4.6351404 33.818359 6.1191406 L 24 15.9375 L 14.181641 6.1191406 C 13.440054 5.3768804 12.460456 5.0058746 11.480469 5.0058594 z M 11.480469 6.9921875 C 11.944232 6.9921723 12.408165 7.1734634 12.767578 7.5332031 L 23.292969 18.058594 A 1.0001 1.0001 0 0 0 24.707031 18.058594 L 35.232422 7.5332031 C 35.952422 6.8132033 37.087814 6.8137237 37.806641 7.5332031 L 40.466797 10.193359 C 41.186797 10.913359 41.186276 12.048752 40.466797 12.767578 L 29.941406 23.292969 A 1.0001 1.0001 0 0 0 29.941406 24.707031 L 40.466797 35.232422 C 41.186797 35.952422 41.186276 37.087814 40.466797 37.806641 L 37.806641 40.466797 C 37.086641 41.186797 35.951248 41.186276 35.232422 40.466797 L 24.707031 29.941406 A 1.0001 1.0001 0 0 0 23.292969 29.941406 L 12.767578 40.466797 C 12.047578 41.186797 10.912186 41.186276 10.193359 40.466797 L 7.5332031 37.806641 C 6.8132033 37.086641 6.8137237 35.951248 7.5332031 35.232422 L 18.058594 24.707031 A 1.0001 1.0001 0 0 0 18.058594 23.292969 L 7.5332031 12.767578 C 6.8132033 12.047578 6.8137237 10.912186 7.5332031 10.193359 L 10.193359 7.5332031 C 10.553359 7.1732032 11.016706 6.9922027 11.480469 6.9921875 z"></path>
        </svg>`;
    } else {
      manuElement.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256"
          style="fill:#FFFFFF;">
          <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
            <g transform="scale(3.55556,3.55556)">
              <path d="M56,48c2.209,0 4,1.791 4,4c0,2.209 -1.791,4 -4,4c-1.202,0 -38.798,0 -40,0c-2.209,0 -4,-1.791 -4,-4c0,-2.209 1.791,-4 4,-4c1.202,0 38.798,0 40,0zM56,32c2.209,0 4,1.791 4,4c0,2.209 -1.791,4 -4,4c-1.202,0 -38.798,0 -40,0c-2.209,0 -4,-1.791 -4,-4c0,-2.209 1.791,-4 4,-4c1.202,0 38.798,0 40,0zM56,16c2.209,0 4,1.791 4,4c0,2.209 -1.791,4 -4,4c-1.202,0 -38.798,0 -40,0c-2.209,0 -4,-1.791 -4,-4c0,-2.209 1.791,-4 4,-4c1.202,0 38.798,0 40,0z"></path>
            </g>
          </g>
        </svg>`;
    }
  });
});

tabs.forEach(function(tab) {
  tab.addEventListener("click", function() {
      
   if (window.innerWidth<=800){
    lists.forEach(function(list) {
      list.style.display = "none";
      manuElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256"
      style="fill:#FFFFFF;">
      <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
        <g transform="scale(3.55556,3.55556)">
          <path d="M56,48c2.209,0 4,1.791 4,4c0,2.209 -1.791,4 -4,4c-1.202,0 -38.798,0 -40,0c-2.209,0 -4,-1.791 -4,-4c0,-2.209 1.791,-4 4,-4c1.202,0 38.798,0 40,0zM56,32c2.209,0 4,1.791 4,4c0,2.209 -1.791,4 -4,4c-1.202,0 -38.798,0 -40,0c-2.209,0 -4,-1.791 -4,-4c0,-2.209 1.791,-4 4,-4c1.202,0 38.798,0 40,0zM56,16c2.209,0 4,1.791 4,4c0,2.209 -1.791,4 -4,4c-1.202,0 -38.798,0 -40,0c-2.209,0 -4,-1.791 -4,-4c0,-2.209 1.791,-4 4,-4c1.202,0 38.798,0 40,0z"></path>
        </g>
      </g>
    </svg>`;
    });   }


  });
});


function removeLoader() {
  
loader.style.display="none";
document.body.style.opacity='1'



}
function showLoader() {
  
loader.style.display="block";
// container.style.display='none'

container.style.opacity='0'

}


window.onload=()=>{
  setTimeout(()=>{
    removeLoader()
    container.style.display='block'
    container.style.opacity='1'
  },500);
  
}

const shortDescText=shortDesc.innerHTML.trim().split(' ')
// console.log(shortDescText)
shortDesc.innerHTML=''
shortDescText.forEach((text)=>{
  const span=document.createElement('span')
  span.classList.add('hover-color-chnage')
  span.innerText=text+' ';
  
  shortDesc.appendChild(span)

})

