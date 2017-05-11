import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let movies = [
       { Id: 1, MovieName: '夜宴', MovieDirector: '冯小刚', MovieActors: ['章子怡','葛优','吴彦祖'],MovieStyle: 'history', ShowTime: '2006-08-30', ImgUrl: 'https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/s/sa7pp0n4kz6cnb9.jpg'},
       { Id: 2, MovieName: '集结号', MovieDirector: '冯小刚', MovieActors: ['张涵予','邓超','袁文康'],MovieStyle: 'history', ShowTime: '2007-12-20', ImgUrl: 'http://b1.rimg.tw/ppgi/270ebd7b.jpg' },
       { Id: 3, MovieName: '美人鱼', MovieDirector: '周星驰', MovieActors: ['邓超','罗志祥','张雨绮'],MovieStyle: 'love', ShowTime: '2016-02-08', ImgUrl: 'https://upload.wikimedia.org/wikipedia/zh/4/47/The_Mermaid_2016_poster.jpg' },
       { Id: 4, MovieName: '北京遇上西雅图', MovieDirector: '薛晓路', MovieActors: ['汤唯','吴秀波','海清'],MovieStyle: 'love', ShowTime: '2013-03-21', ImgUrl: 'http://r1.ykimg.com/050E000051A5B80B6758397DFF04E487' },
       { Id: 5, MovieName: '微微一笑很倾城', MovieDirector: '赵天宇', MovieActors: ['杨颖','井柏然','白宇'],MovieStyle: 'love', ShowTime: '2016-08-12', ImgUrl: 'http://tc.sinaimg.cn/maxwidth.800/tc.service.weibo.com/imglife_gmw_cn/115cbe98c431fe4250ee016f1598c080.jpg'},
       { Id: 6, MovieName: '白鹿原', MovieDirector: '王全安', MovieActors: ['张丰毅','张雨绮','吴刚'], MovieStyle: 'history',ShowTime: '2012-09-15', ImgUrl: 'https://upload.wikimedia.org/wikipedia/zh/6/60/White_Deer_Plain_poster.jpg'},
       { Id: 7, MovieName: '十月围城', MovieDirector: '陈德森', MovieActors: ['甄子丹','王学圻','梁家辉'],MovieStyle: 'history', ShowTime: '2009-12-17', ImgUrl: 'http://r3.ykimg.com/050E000053AB7AB267379F1543051825' },
       { Id: 8, MovieName: '重返二十岁', MovieDirector: '陈正道', MovieActors: ['杨子姗','归亚蕾','陈柏霖'],MovieStyle: 'love', ShowTime: '2015-01-08', ImgUrl: 'http://photocdn.sohu.com/20141219/Img407110741.jpg'},
       { Id: 9, MovieName: '南京南京', MovieDirector: '陆川', MovieActors: ['刘烨','高圆圆','中泉英雄'],MovieStyle: 'history', ShowTime: '2009-04-22', ImgUrl: 'http://pic.pimg.tw/bluehero/4b406a9010524.jpg' },
       { Id: 10, MovieName: '致我们终将逝去的青春', MovieDirector: '赵薇', MovieActors: ['赵又廷','杨子姗','韩庚'],MovieStyle: 'love', ShowTime: '2013-04-26', ImgUrl: 'https://upload.wikimedia.org/wikipedia/zh/a/ad/So_Young_Poster.jpg' },
    ];
    return {movies};
  }
}
