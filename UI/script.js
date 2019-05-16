main = (function() {
  let photoPosts = new PostList([{
      id: '1',
      desription: 'Минск',
      createdAt: new Date('2019-01-01T22:00:00'),
      author: 'Тюрюханов Даниил',
      hashTags: ["programming"],
      likes: ["Polya","Polya332","Polyafsdf"],
      photoLink: 'Minsk5.jpg'

    },
    {
      id: '2',
      desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
      createdAt: new Date('2019-01-01T22:01:02'),
      author: 'Иванов Иван',
      hashTags: ["programming"],
      likes: ["Polya","danik"],
      photoLink: 'Minsk4.jpg'

    },

    {
      id: '3',
      desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
      createdAt: new Date('2019-01-22T22:15:00'),
      author: 'Петров Петр',
      hashTags: ["programming"],
      likes: ["Polya","vwef","Polya435"],
      photoLink: 'Minsk1.jpg'

    },

    {
      id: '4',
      desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
      createdAt: new Date('2019-04-05T22:00:00'),
      author: 'Федоров Федор',
      hashTags: ["programming"],
      likes: ["Polya"],
      photoLink: 'bgu_zdanie.jpg'

    },

    {
      id: '5',
      desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
      createdAt: new Date('2019-01-09T08:00:00'),
      author: 'Александров Александр',
      hashTags: ["programming"],
      likes: ["Polya"],
      photoLink: "Minsk6.jpg"

    },

    {
      id: '6',
      desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
      createdAt: new Date('2018-01-01T22:00:00'),
      author: 'Киселев Кисель',
      hashTags: ["programming"],
      likes: ["Polya","danik"],
      photoLink: 'bgu_zdanie.jpg'

    },

    {
      id: '7',
      desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
      createdAt: new Date('2019-05-05T22:00:00'),
      author: 'Голынский Андрей',
      hashTags: ["programming","#BSU"],
      likes: ["Polya"],
      photoLink: 'Minsk1.jpg'

    },

    {
      id: '8',
      desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
      createdAt: new Date('2019-09-12T22:00:00'),
      author: 'danik',
      hashTags: ["programming", "thinking", "danik"],
      likes: ["Polya","Polyaw","danik"],
      photoLink: 'Minsk.jpg'

    },

    {
      id: '9',
      desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
      createdAt: new Date('2018-01-01T22:00:00'),
      author: 'Шаповалов Геннадий',
      hashTags: ["programming"],
      likes: ["Polya","Polya2","v3"],
      photoLink: 'Minsk2.jpg'

    },

    {
      id: '10',
      desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
      createdAt: new Date('2019-01-01T22:00:00'),
      author: 'Гусев Тимофей',
      hashTags: ["programming"],
      likes: ["Polya"],
      photoLink: "bgu_zdanie.jpg"

    },

    {
      id: '11',
      desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
      createdAt: new Date('2019-03-01T22:00:00'),
      author: 'Иванов Иван',
      hashTags: ["programming"],
      likes: ["Polya"],
      photoLink: 'Minsk8.jpg'

    },

    {
      id: '12',
      desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
      createdAt: new Date('2019-01-01T22:00:00'),
      author: 'Иванов Иван',
      hashTags: ["programming"],
      likes: ["Polya"],
      photoLink: 'Minsk1.jpg'

    },

    {
      id: '13',
      desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
      createdAt: new Date('2019-01-01T22:00:00'),
      author: 'Иванов Иван',
      hashTags: ["programming"],
      likes: ["Polya"],
      photoLink: 'bgu_zdanie.jpg'

    },

    {
      id: '14',
      desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
      createdAt: new Date('2019-01-01T22:00:00'),
      author: 'Иванов Иван',
      hashTags: ["programming"],
      likes: ["Polya"],
      photoLink: "Minsk5.jpg"

    },

    {
      id: '15',
      desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
      createdAt: new Date('2019-01-01T22:00:00'),
      author: 'Иванов Иван',
      hashTags: ["programming"],
      likes: ["Polya"],
      photoLink: 'Minsk7.jpg'

    },

    {
      id: '16',
      desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
      createdAt: new Date('2019-01-01T22:00:00'),
      author: 'Иванов Иван',
      hashTags: ["programming"],
      likes: ["Polya"],
      photoLink: 'Minsk2.jpg'

    },

    {
      id: '17',
      desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
      createdAt: new Date('2019-01-01T22:00:00'),
      author: 'Иванов Иван',
      hashTags: ["programming"],
      likes: ["Polya"],
      photoLink: 'bgu_zdanie.jpg'

    },

    {
      id: '18',
      desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
      createdAt: new Date('2019-01-01T22:00:00'),
      author: 'Иванов Иван',
      hashTags: ["programming"],
      likes: ["Polya"],
      photoLink: 'Minsk1.jpg'

    },

    {
      id: '19',
      desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
      createdAt: new Date('2019-01-01T22:00:00'),
      author: 'Иванов Иван',
      hashTags: ["programming"],
      likes: ["Polya"],
      photoLink: 'Minsk.jpg'

    },

    {
      id: '20',
      desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
      createdAt: new Date('2019-01-01T22:00:00'),
      author: 'Иванов Иван',
      hashTags: ["programming"],
      likes: ["Polya"],
      photoLink: 'bgu_zdanie.jpg'

    },
  ]);
  let photoPostsList;
  let userName = '';
  let lastFilterConfig;
  let pageNumber = 1;
  let showUserPage = function() {
    View.showUserHeader(userName);
    View.showAddButton();
    main.showPhotoPosts(lastFilterConfig);
  };
  return {
    getPhotoPost(id) {
      return photoPosts.get(id);
    },

    showPhotoPosts(filterConfig) {
      View.clear();
      pageNumber = 1;
      if(filterConfig===undefined)
      filterConfig = {};
      //let filterConfig = View.getFilterConfig();
      let photoPosts1 = photoPosts.getPage(0, 10, filterConfig);
      lastFilterConfig = filterConfig;
      photoPosts1.forEach(item => View.showPost(item));
      // if (photoPosts1.length === 10 && photoPosts.getPage(10, 1, filterConfig).length === 1) {
      //   View.showLoadMoreButton();
      // }
    },

    // loadMore() {
    //     let loadMoreButton = document.getElementsByClassName('load-more-button')[0];
    //     document.getElementsByTagName('main')[0].removeChild(loadMoreButton);
    //     let photoPosts = PostList.getPage(pageNumber * 10, 10, lastFilterConfig);
    //     photoPosts.forEach(item => View.showPost(item, userName));
    //     if (photoPosts.length === 10 && PostList.getPage(++pageNumber * 10, 1, lastFilterConfig).length === 1) {
    //         View.showLoadMoreButton();
    //     }

    // },

    addPhotoPost(post) {
      if (userName !== '') {
        post.author = userName;
        if (photoPosts.add(post)) {
          main.showPhotoPosts(lastFilterConfig);
        }
      }
    },

    removePhotoPost(id) {
      if (userName !== '') {
        if (photoPosts.remove(id+"")) {
          View.removePost(id);
          main.showPhotoPosts(lastFilterConfig);
        }
      }
    },

    editPhotoPost(id, photoPost) {
      if (userName !== '') {
        if (photoPosts.edit(id, photoPost)) {
          View.replacePost(photoPosts.get(id));
        }
      }
    },

    likePhotoPost(photoPost) {
      if (userName !== '') {
        let index = photoPost.likes.indexOf(userName);
        if (index === -1) {
          photoPost.likes.push(userName);
        } else {
          photoPost.likes.splice(index, 1);
        }
      }

    },

    logIn(login) {
      if (login !== '') {
        userName = login;
        View.showHeader();
      }
    },

    getUser() {
      return userName;
    }
  }
}());
main.logIn("danik");
main.showPhotoPosts();
