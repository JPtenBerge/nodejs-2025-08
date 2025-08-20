import { Injectable, NotFoundException } from '@nestjs/common';
import { type Snack } from './entities/snack';

@Injectable()
export class SnackService {
  private _snacks: Snack[] = [
    {id: 4, name: 'Filet o Fish', rating: 4, photoUrl: 'https://kwokspots.com/wp-content/uploads/2022/01/filet-o-fish-resized-300x300.png' },
    {id: 8, name: 'Bamischijf', rating: 6, photoUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffavorflav.com%2Fimages%2FBamischijf1-916x458.jpg&f=1&nofb=1&ipt=2f55d243915109ef4a0d8d98ca14a4f663deb9fb1cbb287c1d87e238c88bbbd1' },
    {id: 15, name: 'Pikanto', rating: 9, photoUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kia.com%2Fcontent%2Fdam%2Fkwcms%2Fkme%2Fglobal%2Fen%2Fassets%2Fvehicles%2Fja%2Fpicanto-my25%2Fdiscover%2Fkia-picanto-my25-gtl-AdventurousGreen.png&f=1&nofb=1&ipt=ddaf3a9668a3fa6d0f5b09bb2b4c160986c74e341e6807cc8ca28f0ffe6d7f9e' },
  ];

  getAll(): Snack[] {
    return this._snacks;
  }

  get(id: number): Snack | undefined {
    return this._snacks.find(x => x.id === id);
  }

  add(snack: Snack): Snack {
    snack.id = this._snacks.length === 0 ? 1 : Math.max(...this._snacks.map(x => x.id)) + 1;
    this._snacks.push(snack);
    return snack;
  }
}
