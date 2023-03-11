import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite iStock Images';
  image1 = 'https://media.istockphoto.com/id/1459931673/photo/unhappy-old-man-with-a-white-fedora-hat-blue-guayabera-shirt-showing-middle-finger-sign.jpg?s=1024x1024&w=is&k=20&c=_mT2jjIH76amBDSPDtHfL8wZSDFIHoesDoMa6Wx2x68=';
  image2 = 'https://media.istockphoto.com/id/1468488377/photo/spooky-alien-in-the-bathtub.jpg?s=1024x1024&w=is&k=20&c=HIhrKqG93AS8XrYN2HLu3R36DmLJJXcy_6jutpXg1jw=';
  image3 = 'https://media.istockphoto.com/id/1191072534/photo/angry-senior-woman-protecting-her-cat-with-a-gun.jpg?s=1024x1024&w=is&k=20&c=RoKX6gSWeyrttHy-FrG8apC2ti20sfqZ4MtlDByiLtE=';

  constructor() { }

  ngOnInit() {
  }

}