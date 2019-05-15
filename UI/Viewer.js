class View{
static clear() {
    let full = document.getElementsByClassName("all-photo");
    if(full.length!==0)
    for(let i=full.length-1; i>=0; i--)
        full[i].parentNode.removeChild(full[i]);
  }

  static showHeader() {
    let template = document.querySelector(".user");
      template.innerHTML = main.getUser();
  }

  static _createPost(post){
    let template = document.querySelector("#photo-template");
    let content = template.content.cloneNode(true);
    let all = content.querySelector(".all-photo");
    all.setAttribute("id", post.id);
    let hashtags = content.querySelector(".hide");
    let str = "#"+post.hashTags.join(" #");
    hashtags.innerHTML = str;
    let num = content.querySelector(".num");
    num.innerHTML = post.likes.length;
    let photo = content.querySelector(".building");
    photo.src = post.photoLink;
    View.showHeaderPost(post, content);
    let user = main.getUser();
    if(user!==post.author){
      content.querySelector(".bin").style.display = "none";
      content.querySelector(".setting").style.display = "none";

      for(let hash of post.likes){
        if(user===hash)
          content.querySelector(".heart").src = "heart2.png";
      }
    }
    return content;
  }

  static showHeaderPost(post, content) {
    let userPhoto = content.querySelector(".info");
    let imgUser = userPhoto.querySelector(".photouser");
    imgUser.src = "user_logo.png";
    let userName = userPhoto.querySelector(".userinfo");
    userName.innerHTML = post.author;
    let time = userPhoto.querySelector(".data");
    time.innerHTML = View._createdAtToString(post.createdAt);
  }


  static _createdAtToString(createdAt) {
    let result = '';
    if (createdAt.getHours() < 10) {
      result += '0'
    }
    result += createdAt.getHours() + ':';
    if (createdAt.getMinutes() < 10) {
      result += '0';
    }
    result += createdAt.getMinutes() + '<br>';
    if (createdAt.getDate() < 10) {
      result += '0';
    }
    result += createdAt.getDate() + ':';
    if (createdAt.getMonth() < 9) {
      result += '0';
    }
    result += (createdAt.getMonth() + 1) + ':' + createdAt.getFullYear();
    return result;
  }

  static showPost(post) {
    let template = document.querySelector("#photo-template");
    template.parentNode.appendChild(View._createPost(post));
  }

  static removePost(id){
    let template = document.getElementById(id);
    if(template!==null)
    document.querySelector(".all").removeChild(template);
  }

  static replacePost(post){
    let main = document.querySelector('.all-photo').parentNode;
    let node = document.querySelectorAll(".all-photo");
    for (let i of node) {
      if (i.id == post.id) {
        if (i !== null)
          main.replaceChild(View._createPost(post), i);
        break;
      }
    }
  }

}
