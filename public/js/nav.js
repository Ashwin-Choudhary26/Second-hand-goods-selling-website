const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a><img src="img/user.png" id="user-img" alt="">
                <div class ="login-logout-popup hide">
                <p class="account-info">Log in as, name</p>
                <button class="btn" id= "user-btn">Log out</button>
                </div>


                </a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
        <li class="link-item"><a href="/" class="link">home</a></li>
        <li class="link-item"><a href="/Search" class="link">electronics</a></li>
        <li class="link-item"><a href="/Search" class="link">transportation</a></li>
        <li class="link-item"><a href="/Search" class="link">academics</a></li>
        <li class="link-item"><a href="/Search" class="link">sports</a></li>
        </ul>
    `;
}

createNav();
const userImageButton = document.querySelector('#user-img');
const userPop = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');
userImageButton.addEventListener('click', () =>{
  userPop.classList.toggle('hide');
})

window.onload = () => {
  let user = JSON.parse(sessionStorage.user || null);
  if(user != null){
    popuptext.innerHTML = 'log in as, ${user.name}';
    actionBtn.innerHTML = 'log out';
    actionBtn.addEventListener('click', () => {
      sessionStorage.clear();
      location.reload();
    })
  }else {
    popuptext.innerHTML = 'log in as, ${user.name}';
    actionBtn.innerHTML = 'log in';

  }
}