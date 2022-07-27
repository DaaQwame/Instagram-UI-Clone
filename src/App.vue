<template>
<div class="insta">
  <header>
    <div class="logo">
      <router-link to="#"><img src="./assets/logo.png"></router-link>
    </div>
    <div class="search-box">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="search" placeholder="search">
    </div>
    <nav>
      <ul>
        <li><i class="fa-solid fa-house" id="gram"></i></li>
        <li><i class="fa-regular fa-paper-plane" id="gram"></i></li>
        <li><i class="fa-regular fa-square-plus" id="gram"></i></li>
        <li><i class="fa-regular fa-compass" id="gram"></i></li>
        <li><i class="fa-regular fa-heart" id="gram"></i></li>
        <li><img class="profile" src="./assets/profile.webp"></li>
      </ul>
    </nav>
  </header>
  <section>
    <div class="left-side">
      <div class="story">
        <div class="stories">
          <router-link to=""><img src="./assets/profile.webp" width="60" height="60"></router-link>
          <p>Your story</p>
        </div>
        <div class="stories">
          <router-link to=""><img src="./assets/puppy.webp" width="60" height="60"></router-link>
          <p>Emmanuel Elias Acquah</p>
        </div>
        <div class="stories">
          <router-link to=""><img src="./assets/floer.jpg" width="60" height="60"></router-link>
          <p>John Sam</p>
        </div>
      </div>
      <div class="posts">
        <div class="post-title">
          <div class="post-left">
          <div class="image">
            <img src="./assets/slot.jpg" width="32" height="32">
          </div>
          <div class="details">
            <p class="name">daa_qwame</p>
          </div>
          </div>
          <div class="post-right">
            <i id="fa" class="fa-solid fa-ellipsis-h"></i>
          </div>
        </div>
        <div class="post-content">
          <img src="./assets/slot.jpg" width="600" height="600">
        </div>
        <div class="post-footer">
          <div class="like-share-comment">
             <i id="loud" class="fa-regular fa-heart"></i>
              <i id="loud" class="fa-regular fa-comment"></i>
               <i id="loud" class="fa-regular fa-paper-plane"></i>
          </div>
          <div class="save">
              <i class="fa-regular fa-bookmark"></i>
          </div>
        </div>
        <div class="post-footer-content">
          <p class="likes">20,432 views</p>
          <p class="name">daa_qwame<span>please subscribe to my youtube channel to get more knowledge
            in programming.</span></p>
          <p class="comments">view all 6,235 comments</p>
           <p class="posting-time">23 HOURS AGO</p>
        </div>
        <div class="add-comments">
          <div class="left-side">
            <i id="blade" class="fa-regular fa-smile-beam"></i>
            <input type="text" placeholder="Add a comments...">
          </div>
          <div class="right-side">
            <p class="nyc">post</p>
          </div>
        </div>
      </div>

       <div class="posts">
        <div class="post-title">
          <div class="post-left">
          <div class="image">
            <img src="./assets/slot.jpg" width="32" height="32">
          </div>
          <div class="details">
            <p class="name">Paa_qwesi</p>
          </div>
          </div>
          <div class="post-right">
            <i id="fa" class="fa-solid fa-ellipsis-h"></i>
          </div>
        </div>
        <div class="post-content">
          <img src="./assets/upp.jpeg" width="600" height="600">
        </div>
        <div class="post-footer">
          <div class="like-share-comment">
             <i id="loud" class="fa-regular fa-heart"></i>
              <i id="loud" class="fa-regular fa-comment"></i>
               <i id="loud" class="fa-regular fa-paper-plane"></i>
          </div>
          <div class="save">
              <i class="fa-regular fa-bookmark"></i>
          </div>
        </div>
        <div class="post-footer-content">
          <p class="likes">10,654 views</p>
          <p class="name">paa_qwesi<span>Hustling to change the situation,everyday tells different
            story of our life
          </span></p>
          <p class="comments">view all 2,300 comments</p>
           <p class="posting-time">16 MINUTES AGO</p>
        </div>
        <div class="add-comments">
          <div class="left-side">
            <i id="blade" class="fa-regular fa-smile-beam"></i>
            <input type="text" placeholder="Add a comments...">
          </div>
          <div class="right-side">
            <p class="nyc">post</p>
          </div>
        </div>
      </div>
    </div>


    <div class="right-side">
      <div class="profile-title">
        <div class="profile-left">
          <div class="image">
            <img src="./assets/slot.jpg" width="56" height="56">
          </div>
          <div class="details">
            <p class="name">daa_qwame</p>
            <p class="surname">Daa Qwame</p>
          </div>
        </div>
        <div class="profile-right">
          <p class="switch">switch</p>
        </div>
      </div>
      <div class="suggestions">
        <p>Suggestions For You</p>
        <p class="ddd">See All</p>
      </div>
      <div class="suggestion-title">
        <div class="suggestion-left">
          <div class="image">
            <img src="./assets/kiddies.jpg" width="32" height="32">
          </div>
          <div class="details">
            <p class="name">frank_badu</p>
            <p class="location">New to instagram</p>
          </div>
        </div>
        <div class="suggestion-right">
          <p>Follow</p>
        </div>
      </div>
       <div class="suggestion-title">
        <div class="suggestion-left">
          <div class="image">
            <img src="./assets/student.webp" width="32" height="32">
          </div>
          <div class="details">
            <p class="name">richkid546</p>
            <p class="location">New to instagram</p>
          </div>
        </div>
        <div class="suggestion-right">
          <p>Follow</p>
        </div>
      </div>
       <div class="suggestion-title">
        <div class="suggestion-left">
          <div class="image">
            <img src="./assets/graduate.jpg" width="32" height="32">
          </div>
          <div class="details">
            <p class="name">joe_andrew123</p>
            <p class="location">suggested for you</p>
          </div>
        </div>
        <div class="suggestion-right">
          <p>Follow</p>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.switch{
  color:#008AD8;
  font-size: 13px;
}
.ddd{
  color: black;
}
.suggestions{
  display: flex;
  margin-bottom: 15px;
}
.suggestions p{
  margin-right: 140px;
}
.suggestion-right p{
  color: #008AD8;
  font-size: 13px;
}
.suggestion-title{
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.suggestion-title .suggestion-left{
  display: flex;
  align-items: center;
  margin-right: 110px;
}
.suggestion-title .suggestion-left .details .name{
  color: black;
}
.suggestion-title .suggestion-left .details .location{
  font-size: 12px;
  margin-top: -10px;
  color: rgb(174, 171, 171);
  padding-right: 12px;
}
.suggestion-title .suggestion-left .image img{
  border-radius: 50%;
  margin-right: 15px;
}
.right-side{
  width: 35%;
  margin-top: 15px;
  position: fixed;
  right: 30px;
}
.right-side .profile-title{
  display: flex;
  align-items: center;
}
.right-side .profile-title .profile-left{
  display: flex;
  align-items: center;
  margin-right: 130px;
}
.right-side .profile-title .profile-left .image img{
  border-radius: 50%;
  margin-right: 15px;
}
.right-side .profile-title .profile-left .details .surname{
  margin-top: -10px;
   color: rgb(174, 171, 171);
   font-size: 14px;
}
.nyc{
  color: blue;
}
.posts{
  margin: 25px 0;
  background-color: white;
  border: 1px solid rgba(219,219,219,1);
  border-radius: 3px;
}
.posts .post-title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
}
.posts .post-footer .save{
  font-size: 22px;
}
.posts .post-footer-content{
  padding: 0 16px 16px 16px;
}
.posts .post-footer-content p{
  margin-bottom: 3px;
}
.posts .post-footer-content .likes{
  margin-bottom: 8px;
}
.posts .post-footer-content .name{
  font-weight: 600;
}
.posts .post-footer-content span{
  margin-left: 10px;
  font-weight: normal;
}
.posts .add-comments{
  padding: 16px;
  border-top: 1px solid #efefef;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.posts .add-comments .left-side{
  display: flex;
  align-items: center;
}
.posts .add-comments .left-side #blade{
   font-size: 22px;
   margin-right: 15px;
}
.posts .add-comments .left-side input{
  width: 100%;
  outline: none;
  border: none;
  font-size: 14px;
}
.posts .post-footer-content .posting-time{
  font-size: 10px;
  margin-top: 6px;
}
.posts .post-footer{
  display: flex;
  justify-content: space-between;
  padding: 16px;
}

.posts .post-footer .like-share-comment #loud{
  font-size: 22px;
  margin-right: 10px;
}
.posts .post-content img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.posts .post-title .details .name{
  font-weight: bold;
}
.posts .post-title .post-left .image{
  margin-right: 15px;
}
.posts .post-title .post-left{
  display: flex;
  align-items: center;
}
.posts .post-title .post-left .image img{
  border-radius: 50%;
  object-fit: cover;
}
.add-comments{
  text-align: left;
}
.post-footer-content{
  text-align: left;
}
.post-content img{
  display: flex;
}
#loud{
  float: left;
}
.image{
  display: flex;
}
.details .name{
  display: flex;
}
.post-right #fa{
  display: flex;
}
section{
  padding: 30px 18%;
  background-color: #fafafa;
  display: flex;
}
.left-side{
  width: 65%;
}
.story{
  display: flex;
  padding: 16px;
  background-color: white;
  border: 1px solid rgba(219,219,219,1);
  border-radius: 3px;

}
.story .stories{
  width: 17%;
}
.story .stories a img{
  border-radius: 50%;
  border: 2px solid #c62d8f;
  padding: 1px;
  object-fit: cover;
}
.story .stories p{
    width: 90%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #262626;

}
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 18%;
  border-bottom: 1px solid rgba(219,219,219,1);
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 10;
}
header .logo{
  height: 35px;
}
header .logo img{
  height: 100%;
  object-fit: contain;
}
header .search-box{
  width: 250px;
  background-color: rgba(219,219,219,1);
  padding: 3px 16px;
  display: flex;
  align-items: center;
  border-radius: 8px;
}
header .search-box input{
  height: 30px;
  border: none;
  outline: none;
  background-color: rgba(219,219,219,1);
  padding-left: 10px;
  font-size: 15px;
  color: #8e8e8e;
}
header nav ul{
  list-style: none;
  display: flex;
}
header nav ul li{
  margin-right: 20px;
}
header nav ul li .profile{
  width: 22px;
  height: 22px;
  border-radius: 50%;
}
header nav ul li:last-child{
  margin-right: 0;
}
header nav ul li #gram{
  font-size: 22px;
  color: rgba(38,38,38,1);
}
@media (max-width:992px){
  header{
    padding: 10px 20px;
  }
  section .left-side{
    width: 100%
  }
  section .right-side{
    display: none;
    width: 100%;
  }
}
@media (max-width: 768px){
  header .search-box{
    display: none;
  }
  section{
    padding: 30px 20px;
  }
  header nav ul li{
    margin-right: 12px;
  }
  .story .stories a img{
    justify-content: space-between;
  }
  .story .stories{
    width: 30%;
}
}
</style>
